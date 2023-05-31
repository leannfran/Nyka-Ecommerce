import React from "react";
import LoginForm from "../../components/auth/LoginForm";
import Link from "next/link";

const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
     <Link href='/' className='absolute top-12 left-12 underline text-[#8D4925]'>
        Volver
      </Link>
        <LoginForm />
      
    </div>
  );
};

export default Login;
