import React from "react";

const CardPaymentMethod = () => {
  return (
    <div className="border shadow rounded-lg flex p-4 justify-between ">
      <input type="radio" name="paymentType" />
      <span>Transferencia bancaria</span>
      <span>$000000</span>
    </div>
  );
};

export default CardPaymentMethod;
