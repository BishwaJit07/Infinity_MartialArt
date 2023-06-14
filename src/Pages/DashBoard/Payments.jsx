
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { useLocation } from "react-router-dom";
import Titles from "../../Hooks/Titles";


import ChekOutFrom from "./ChekOutFrom";

const stripePromise = loadStripe(import.meta.env.VITE_gateway_Key);
const Payments = () => {
  
 
  const location = useLocation();
  const { price,id } = location.state || {};

  console.log(location);

  return (
    <div className="mx-auto my-20">
      <Titles priHeading={"Make payment"} secHeading={'Get ready for the class'} ></Titles>
      {price && (
        <Elements stripe={stripePromise}>
          <ChekOutFrom price={price} id={id} />
        </Elements>
      )}
    </div>
  );
};

export default Payments;
