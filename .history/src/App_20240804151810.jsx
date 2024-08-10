import { Component, useState } from "react";

import "./App.css";

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
    name: "Customer Info",
    Component: () => <div>Provide your contact details</div>,
  },
  {
    name: "Customer Info",
    Component: () => <div>Provide your contact details</div>,
  },
];

function App() {
  return (
    <>
      <h1>Checkout</h1>
    </>
  );
}

export default App;
