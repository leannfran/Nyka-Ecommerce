import React from "react";

const BtnQuantity = ({ decrement, increment, value, register }) => {
  if (!register) {
    return;
    <div className="flex items-center border border-black rounded-lg py-2 w-fit">
      <span
        className=" text-black text-center text-lg rounded-l w-10 "
        onClick={decrement}
      >
        -
      </span>
      <input
        className="w-10 text-center bg-white border-none"
        value={value}
        type="number"
        readOnly
      />
      <span
        className=" text-black text-center text-lg w-10 "
        onClick={increment}
      >
        +
      </span>
    </div>;
  }
  return (
    <div className="flex items-center border border-black rounded-lg py-2 w-fit">
      <span
        className=" text-black text-center text-lg rounded-l w-10 "
        onClick={decrement}
      >
        -
      </span>
      <input
        className="w-10 text-center bg-white border-none"
        value={value}
        type="number"
        readOnly
        {...register("quantity", { required: true })}
      />
      <span
        className=" text-black text-center text-lg w-10 "
        onClick={increment}
      >
        +
      </span>
    </div>
  );
};

export default BtnQuantity;
