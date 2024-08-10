import React, { useState } from "react";

const CheckoutSteeper = ({ stepsConfig = [] }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);

  if (!stepsConfig.length) {
    return <></>;
  }

  return (
    <>
      <div className="stepper">
        {stepsConfig.map((step, index) => {
          return (
            <div key={step.name} className="step">
              <div className="step-number">{index + 1}</div>
              <div className="step-name">{step.name}</div>
            </div>
          );
        })}
      </div>

      <button>Next</button>
    </>
  );
};

export default CheckoutSteeper;
