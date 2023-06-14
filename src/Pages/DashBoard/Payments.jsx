
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Titles from "../../Hooks/Titles";

import useSelectedClass from "../../Hooks/useSelectedClass";
import ChekOutFrom from "./ChekOutFrom";

const stripePromise = loadStripe(import.meta.env.VITE_gateway_Key);
const Payments = () => {
  const { sClass } = useSelectedClass();
  const total = Array.isArray(sClass)
    ? sClass.reduce((sum, item) => item.Price + sum, 0)
    : 0;
  const totalPrice = parseFloat(total.toFixed(2));
  return (
    <div className="mx-auto my-20">
      <Titles priHeading={"Make payment"} secHeading={'Get ready for the class'} ></Titles>
      <Elements stripe={stripePromise}>
        <ChekOutFrom price={totalPrice} sClass={sClass}></ChekOutFrom>
      </Elements>
    </div>
  );
};

export default Payments;
