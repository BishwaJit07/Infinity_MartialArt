import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';



const ChekOutFrom = ({price,cart}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError,setCardError]= useState('');
    const [axiosSecure]=useAxiosSecure()
    const {user} = useAuth();
    const [processing,setProcessing]= useState(false)
     const [transactionId, setTransactionId]= useState('');

    const [clientSecret,setclientSecret]= useState('');

  console.log(clientSecret);
   useEffect(
    ()=>{
      console.log(price);
      if(price > 0){
        axiosSecure.post('/create-payment-intent',{price})
      .then(res=>{
        console.log(res.data.clientSecret);
        setclientSecret(res.data.clientSecret)
      })
      }
    },[]
   )


    const handleSubmit = async(event)=>{
        event.preventDefault();
        if(!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement);
        if(card === null){
            return
        }
       const {error, paymentMethod}=await stripe.createPaymentMethod({
        type: 'card',
        card,
      })
      if(error){
        console.log(error);
        setCardError(error.message)
      }
      else{
        setCardError('');
        // console.log('pay method', paymentMethod);
      }
     setProcessing(true)
      const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              email: user?.email || 'AnnynomusUser',
              name: user?.displayName || 'annonyMous'
            },
          },
        },
      );
      if(confirmError){
        setCardError(confirmError)
        console.log(confirmError);
      }
      console.log("paymentIntent",paymentIntent)

      setProcessing(false)

      if(paymentIntent.status === 'succeeded'){
        setTransactionId(paymentMethod.id)
        //save payment data
        const payment = {
          email: user?.email, transactionId:paymentMethod.id,
          price,
          quantity:cart.length,
          cartItems: cart.map(item=>item._id),
          menuItems: cart.map(item=>item.menuItemsId),
          status: 'service pending',
          itemNAme:cart.map(item=>item.name),
         
      }
      console.log(payment);
       axiosSecure.post('/payments',payment)
       .then (res=>{
        console.log(res.data);
        if(res.data.inresult.insertedId){
        
          //display confirmation
        }
       })
      }
    }
    return (
        <div>
              <form className='w-2/3 m-8' onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button type="submit" disabled={!stripe || !clientSecret || processing} className="btn btn-sm btn-outline btn-primary m-4">
          Pay
        </button>
      </form>
      {cardError && <p className='text-red-600 m-8'>{cardError}</p>}
      {transactionId && <p className='text-green-400'>Transaction complete. TransactionID: {transactionId}</p> }
      <p>{price}</p>
        </div>
    );
};

export default ChekOutFrom;