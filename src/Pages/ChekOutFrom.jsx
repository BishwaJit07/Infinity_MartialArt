import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useSelectedClass from "../Hooks/useSelectedClass";

const ChekOutFrom = ({ price, id, }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
const navigate = useNavigate();
const {sClass}= useSelectedClass();
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price }).then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, [price, axiosSecure]);
  console.log(price);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "Unknown USer",
            name: user?.displayName || "annonyMous",
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError);
    }
    console.log(paymentIntent);

    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);

      const payment ={email: user?.email,transactionId:paymentIntent.id,
      id:id,
        
    }
      console.log(payment);
      axiosSecure.post('/payment',payment)
      .then (res=>{
       console.log(res.data);
       if(res.data.insertedId){
        
        Swal.fire(
          'Good job!',
          'Payment Done!',
          'success'
        )
        
        axiosSecure.delete(`/selected/${id}`).then((res) => {
          console.log("deleted res", res.data);
          if (res.data.deletedCount > 0) {
            
            Swal.fire("Deleted!", "Your selected class has been deleted.", "success");
          }
        });

        navigate('/dashboard/myselectedclass')
      }
      })
    }
  };
  return (
    <>
      <form className="w-96 bg-red my-10" onSubmit={handleSubmit}>
        <p className="text-xl font-medium text-center mb-4">Total:{price}</p>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn glass bg-pink-600 text-teal-50 m-2"
          type="submit"
          disabled={!stripe || !clientSecret }
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-700">{cardError}</p>}
    </>
  );
};

export default ChekOutFrom;
