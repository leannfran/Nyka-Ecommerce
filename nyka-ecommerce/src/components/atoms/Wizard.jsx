import React from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
 
export default function Wizard({step}) {
  const [activeStep, setActiveStep] = React.useState(0);
 
  
  React.useEffect(() => {
    setActiveStep(step);
  }, [step]);
  return (
    <div className="w-full z-[1]">
      <Stepper
        activeStep={activeStep}
        activeLineClassName="bg-[#622708]"
        
      >
        <Step activeClassName="bg-[#622708]" completedClassName="bg-[#622708]">1</Step>
        <Step activeClassName="bg-[#622708]" completedClassName="bg-[#622708]">2</Step>
        <Step activeClassName="bg-[#622708]" completedClassName="bg-[#622708]">3</Step>
      </Stepper>
    </div>
  );
}
