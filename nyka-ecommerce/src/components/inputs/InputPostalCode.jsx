import React from "react";

const InputPostalCode = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="Código postal"
        className="p-2 rounded-l-lg bg-white border"
      />
      <button className="bg-[#8D4925] border border-[#8D4925] p-2 text-white rounded-r-lg">
        Calcular
      </button>
    </div>
  );
};

export default InputPostalCode;
