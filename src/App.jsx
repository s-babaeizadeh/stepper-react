import { Component, useState } from "react";

import "./App.css";
import CheckoutSteeper from "./components/CheckoutSteeper";

const CHECKOUT_STEPS = [
  {
    name: "Customer Info",
    Component: () => <div>Provide your contact details</div>,
  },
  {
    name: "Shipping Info",
    Component: () => <div>Enter you shipping address</div>,
  },
  {
    name: "Payment",
    Component: () => <div>Complete payment for your order</div>,
  },
  {
    name: "Delivered",
    Component: () => <div>Your order has been delivered</div>,
  },
];

function App() {
  return (
    <>
      <h1>Checkout</h1>
      <CheckoutSteeper stepsConfig={CHECKOUT_STEPS} />
    </>
  );
}

export default App;
