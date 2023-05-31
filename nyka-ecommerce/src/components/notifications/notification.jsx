import { Alert } from "@material-tailwind/react";

 function Notification({ show, message }) {
  return (
    <div className=" absolute w-10/12 bottom-0">
      <Alert
        color="red"
        open={show}
        animate={{
          mount: { y: 0 },
          unmount: { y: 100 },
        }}
      >
        {message}
      </Alert>
    </div>
  );
}
export default Notification