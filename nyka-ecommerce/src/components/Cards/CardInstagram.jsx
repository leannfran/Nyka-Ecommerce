
import Image from 'next/image';
import React from 'react';
import item from '../../../public/Image.png';

const CardInstagram = () => {
  return (
    <div className='bg-[#f3e5dd] rounded-lg w-[252px] h-[320px] flex flex-col justify-evenly items-center text-[#8D4925] font-semibold'>
      <Image src={item} alt='item' className='w-[206px] h-[250px]'/>
      <div className='flex justify-around  w-full'>
        <div className='flex gap-2'>

      <svg width="25" height="25" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 28.025L12.825 26.045C5.1 19.04 0 14.405 0 8.75C0 4.115 3.63 0.5 8.25 0.5C10.86 0.5 13.365 1.715 15 3.62C16.635 1.715 19.14 0.5 21.75 0.5C26.37 0.5 30 4.115 30 8.75C30 14.405 24.9 19.04 17.175 26.045L15 28.025Z" fill="#8D4925"/>
</svg><span>123</span>
        </div>

        <div className='flex gap-2'>

        <svg width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 30H28.5C28.7966 30 29.0866 29.9119 29.3332 29.7471C29.5798 29.5823 29.772 29.348 29.8855 29.074C29.999 28.7999 30.0287 28.4984 29.9709 28.2075C29.913 27.9165 29.7702 27.6493 29.5605 27.4395L26.6145 24.4935C28.7701 21.8566 29.9641 18.5646 30.0001 15.1589C30.0362 11.7532 28.9122 8.43663 26.813 5.75463C24.7137 3.07262 21.7642 1.18487 18.4496 0.40183C15.135 -0.381209 11.6525 -0.0129096 8.57502 1.44616C5.4975 2.90522 3.00815 5.36818 1.51637 8.42997C0.0245895 11.4918 -0.380802 14.9701 0.366867 18.2929C1.11454 21.6157 2.97075 24.5851 5.63023 26.7128C8.28971 28.8405 11.5941 29.9998 15 30Z" fill="#8D4925"/>
</svg>
<span>123</span>
        </div>

      </div>
    </div>
  );
};

export default CardInstagram;