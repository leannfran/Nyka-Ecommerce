import Link from 'next/link'
import React from 'react'

const Button = ({link,content,direction,color,onClick}) => {
  return (
    <div className='m-auto'>
    {!link ? (
       <button className= {`${color ? "bg-[#8D4925] text-white" : "bg-white border-2"} font-semibold p-2 rounded-md text-center`} onClick={onClick}>
      {content}
    </button>)
    :(
      <Link href={direction} className= {`${color ? "bg-[#8D4925] text-white" : "bg-white border-2"} font-semibold p-2 rounded-md text-center`}>
        {content}
      </Link >)}
   
    </div>
  );
};

export default Button;
