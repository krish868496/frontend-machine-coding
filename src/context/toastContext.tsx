import React, { createContext, useState } from "react";

type ToastPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";

type ToastType = "success" | "error" | "warning";

type Toast = {
  id: number;
  message: string;
  type: ToastType;
  position: ToastPosition;
};

type ToastContextType = {
  addToast: (message: string, type: ToastType, position: ToastPosition) => void;

  removeToast: (id: number) => void;

  toasts: Toast[];
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (
    message: string,
    type: ToastType,
    position: ToastPosition,
  ) => {
    const newToast = {
      id: Date.now(),
      message,
      type,
      position,
    };

    setToasts((prev) => [...prev, newToast]);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider
      value={{
        addToast,
        removeToast,
        toasts,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export { ToastProvider, ToastContext };
