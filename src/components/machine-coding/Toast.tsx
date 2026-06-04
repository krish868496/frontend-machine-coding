import React, { useEffect, useState } from "react";

const Toast = () => {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showToast]);
  return (
    <div>
      <button onClick={() => setShowToast(true)}>Show Toast</button>
      {showToast && (
        <div className="fixed top-4 right-4 bg-gray-400 text-black p-4 rounded-md border border-gray-300 ">
          User created Successfully
        </div>
      )}
    </div>
  );
};

export default Toast;
