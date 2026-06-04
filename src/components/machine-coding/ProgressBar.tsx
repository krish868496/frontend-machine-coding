import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }

        return prev + 10;
      });
    }, 700);

    return () => clearInterval(interval);
  }, []);

  const getColor = () => {
    if (progress < 30) return "bg-red-500";
    if (progress < 70) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Progress Bar
        </h1>

        {/* Progress Container */}
        <div className="w-full bg-gray-200 h-6 rounded-full overflow-hidden">
          {/* Progress Fill */}
          <div
            style={{
              width: `${progress}%`,
            }}
            className={` ${getColor()} h-full rounded-full transition-all duration-700 ease-in-out flex items-center justify-end pr-2`}
          >
            <span className="text-xs text-white font-semibold">
              {progress > 10 ? `${progress}%` : ""}
            </span>
          </div>
        </div>

        {/* Percentage Text */}
        <p className="mt-5 text-center text-lg font-medium text-gray-700">
          Loading... {progress}%
        </p>
      </div>
    </div>
  );
};

export default ProgressBar;
