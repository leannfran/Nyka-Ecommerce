import { Alert } from "@material-tailwind/react";

export default function Notification({ show, message }) {
  return (
    <div className="">
      <Alert
        color="red"
        open={show}
        animate={{
          mount: { y: 0 },
          unmount: { y: 0 },
        }}
      >
        {message}
      </Alert>
    </div>
  );
}
