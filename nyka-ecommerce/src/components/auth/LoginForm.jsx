import React from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Notification from "../notifications/notification";
import { useRouter } from "next/router";
import { auth } from "../../firebase/firebase";
import AuthContext from "../../context/authContext";


export default function LoginForm() {
  const { push } = useRouter();
  const {setIsLogged} = React.useContext(AuthContext);

  const [message, setMesssage] = React.useState("");
  const [showNotification, setShowNotification] = React.useState(false);
  const [Credentials, setCredentials] = React.useState({
    email: "",
    password: "",
  });


  const showMessage = (message) => {
    setMesssage(message);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };


  const handleInputChange = (event) => {
    event.preventDefault();
    setCredentials({
      ...Credentials,
      [event.target.name]: event.target.value,
    });
  };

  const loginUser = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        Credentials.email,
        Credentials.password
      );
      setIsLogged(true)
      push("/");
    } catch ({message}) {
      console.log(message);
      if(message === "Firebase: Error (auth/user-not-found)."){
        showMessage("Usuario no encontrado");
    }else if(message === "Firebase: Error (auth/wrong-password)."){
        showMessage("Contraseña incorrecta");
    }else if(message === "Firebase: Error (auth/invalid-email)."){
        showMessage("Email inválido");
    }else{  
        showMessage(message);
    }
  };
}

  /*   const {
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
          Ingresar
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Ingresa tus datos para iniciar sesión.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="lg"
              label="Email"
              name="email"
              onChange={handleInputChange}
            />
            <Input
              type="password"
              size="lg"
              name="password"
              label="Contraseña"
              onChange={handleInputChange}
            />
          </div>

          <Notification show={showNotification} message={message} />    
          <Button
            className="mt-6 bg-[#8D4925]"
            fullWidth
            onClick={loginUser}
          >
            Ingresar
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            No tienes una cuenta?{" "}
            <Link
              href="/auth/register"
              className="font-medium text-[#8D4925] transition-colors hover:text-[#8D4925]"
            >
              Regístrate
            </Link>
          </Typography>
        </form>
      </Card>

     
  );
}
