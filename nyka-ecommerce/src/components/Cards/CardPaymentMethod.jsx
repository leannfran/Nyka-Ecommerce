import React from "react";

const CardPaymentMethod = ({
  color,
  content,
  price,
  description,
  register,
}) => {
  if (!register) {
    return <div
    className={`${
      color && "text-[#8D4925] hover:border-[#8D4925]"
    } font-semibold border shadow rounded-lg flex p-4 justify-between hover:shadow-lg `}
  >
    <div className="flex gap-2 ">
      <input
        type="radio"
        name="paymentType"
        id={content}
        value={content}
        
      />
      <div className="flex flex-col">
        <span>{content}</span>
        <p className="text-xs font-light text-gray-800">{description}</p>
      </div>
    </div>
    <span>${price}</span>
  </div>
  }
  return (
    <div
      className={`${
        color && "text-[#8D4925] hover:border-[#8D4925]"
      } font-semibold border shadow rounded-lg flex p-4 justify-between hover:shadow-lg `}
    >
      <div className="flex gap-2 ">
        <input
          type="radio"
          name="paymentType"
          id={content}
          value={content}
          {...register("shipping" , {required: true})}
        />
        <div className="flex flex-col">
          <span>{content}</span>
          <p className="text-xs font-light text-gray-800">{description}</p>
        </div>
      </div>
      <span>${price}</span>
    </div>
  );
};

export default CardPaymentMethod;
