import React from "react";

const CheckoutSteeper = ({ stepsConfig }) => {
  return (
    <div>
      {stepsConfig.map((item, index) => {
        return (
          <div>
            <div>{index + 1}</div>
            <div>{step.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default CheckoutSteeper;
