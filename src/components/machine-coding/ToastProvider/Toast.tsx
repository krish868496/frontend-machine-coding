import { useEffect } from "react";

type ToastProps = {
  id: number;
  message: string;
  type: "success" | "error" | "warning";
  removeToast: (id: number) => void;
  position: string;
};

const ToastItem = ({
  id,
  message,
  type,
  removeToast,
  position,
}: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 3000);

    return () => clearTimeout(timer);
  });

  console.log(position, "position");

  return (
    <div
      className={`p-4 rounded-lg shadow-md text-white min-w-[250px] relative
      ${
        type === "success"
          ? "bg-green-500"
          : type === "error"
            ? "bg-red-500"
            : "bg-yellow-500"
      }`}
    >
      <p>{message}</p>

      <button
        onClick={() => removeToast(id)}
        className="absolute top-2 right-2 cursor-pointer"
      >
        ✕
      </button>
    </div>
  );
};

export default ToastItem;
