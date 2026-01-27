import { Toaster } from "react-hot-toast";

const ToastifyComp = () => {
  // Do necessary custom styling here
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default ToastifyComp;
