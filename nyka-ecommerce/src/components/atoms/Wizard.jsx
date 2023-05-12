import React from "react";

const Wizard = ({step}) => {
  return (
      <ul className="steps ">
        <li className="step step-primary ">Detalles de compra</li>
        <li className={`step ${step === 1 && "step primary"}`}>Datos de Envío</li>
        <li className={`step ${step === 1 && "step primary"}`}>Facturación</li>
      </ul>

  );
};

export default Wizard;
