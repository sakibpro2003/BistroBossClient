import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";

const CheckOutCard = () => {
  const { user } = useAuth();
  const [clientSecret, setClientSecret] = useState("");
  const [stripePaymentId, setStripePaymentId] = useState();
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: totalPrice })
      .then((res) => {
        // console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
  }, [axiosSecure, totalPrice]);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    //confirm payment
    const { paymentIntent, error: payment_error } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown email",
            name: user?.displayName || "anonymus",
          },
        },
      });
    if (payment_error) {
      console.log("payment eror", payment_error);
    } else {
      console.log("payment intent", paymentIntent);
      if(paymentIntent.status === "succeeded"){
        console.log("ok payment")
        setStripePaymentId(paymentIntent.id);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
          className="btn"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckOutCard;