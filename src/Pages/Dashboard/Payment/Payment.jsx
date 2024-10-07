import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutCard from "./CheckOutCard";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_KEY);
const Payment = () => {
    return (
        <div>
            <h2 className="text-3xl text-center">Payment</h2>
            <Elements stripe={stripePromise}>
                <CheckOutCard></CheckOutCard>
            </Elements>
        </div>
    );
};

export default Payment;