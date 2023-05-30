import React from 'react';
import RegisterForm from '../../components/auth/RegisterForm';
import Link from 'next/link';

const register = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <Link href='/' className='absolute top-12 left-12 underline text-[#8D4925]'>
        Volver
      </Link>
      <RegisterForm/>
    </div>
  );
};

export default register;