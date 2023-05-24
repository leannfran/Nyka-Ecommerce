import React from "react";

const InputPostalCode = () => {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Código postal"
        className="p-2 rounded-l-lg bg-white border w-4/6"
      />
      <button className="bg-[#8D4925] border border-[#8D4925] p-2 text-white rounded-r-lg w-2/6">
        Calcular
      </button>
    </div>
  );
};

export default InputPostalCode;
