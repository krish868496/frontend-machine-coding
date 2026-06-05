import ToastItem from "./Toast";
import { useToast } from "../../../hooks/useToast";

const ToastContainer = () => {
  const { toasts, removeToast } = useToast();

  const positionClasses = {
    "top-left": "top-4 left-4",
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-right": "bottom-4 right-4",
  };

  return (
    <div className="">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`fixed ${positionClasses[toast.position] || positionClasses["top-right"]} z-50`}
        >
          <ToastItem
            id={toast.id}
            message={toast.message}
            type={toast.type}
            removeToast={removeToast}
            position={toast.position}
          />
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;
