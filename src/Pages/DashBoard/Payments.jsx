
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

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
    <div>
      <Elements stripe={stripePromise}>
        <ChekOutFrom price={totalPrice} sClass={sClass}></ChekOutFrom>
      </Elements>
    </div>
  );
};

export default Payments;
