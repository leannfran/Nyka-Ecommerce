import Link from "next/link";
import React from "react";

const Button = ({ link, content, direction, color, onClick, disable }) => {
 
 
  return (
    <div className=" cursor-pointer">
      {!link ? (
        <button
          disabled={disable}
          className={`${
            disable ? "bg-[#818181] text-[#acacac]" : "bg-[#8D4925] text-white" 
          } py-3 px-32 font-semibold rounded-lg hover:shadow-xl transition-all`}
          onClick={onClick}
        >
          {content}
        </button>
      ) : (
        <Link
          href={direction}
          className={`${
            color ? "bg-[#8D4925] text-white" : "bg-white border-2"
          } font-semibold p-3 px-12 rounded-md text-center`}
        >
          {content}
        </Link>
      )}
    </div>
  );
};

export default Button;
