import React from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useRouter } from "next/router";
import Notification from "../notifications/Notification";

export default function RegisterForm() {
  const { push } = useRouter();

  const [Credentials, setCredentials] = React.useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setCredentials({
      ...Credentials,
      [event.target.name]: event.target.value,
    });
  };

  const registerUser = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        Credentials.email,
        Credentials.password
      );
      push("/auth/login");
    } catch (error) {
      console.log(error);
    }
  };

  /*  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }; */

  return (
    <Card color="transparent" shadow={true} className="p-5 shadow-xl border">
      <Typography variant="h4" color="blue-gray">
        Registrarse
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Ingresa tus datos para registrarte.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          {/* <Input
            size="lg"
            label="Nombre"
            name="name"
            onChange={handleInputChange}
          /> */}
          <Input
            size="lg"
            label="Email"
            name="email"
            onChange={handleInputChange}
          />
          <Input
            type="password"
            size="lg"
            label="Contraseña"
            name="password"
            onChange={handleInputChange}
          />
        </div>

        <Button
          className="mt-6 bg-[#8D4925]"
          fullWidth
          type="submit"
          onClick={registerUser}
        >
          Registrarse
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Ya tienes una cuenta?{" "}
          <Link
            href="/auth/login"
            className="font-medium text-[#8D4925] transition-colors hover:text-[#8D4925]"
          >
            Ingresa
          </Link>
        </Typography>
      </form>
    </Card>
  );
}
