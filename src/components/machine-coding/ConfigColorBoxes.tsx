import React, { useState } from "react";

const COLORS = ["red", "green", "blue", "yellow", "purple"];
const INITIAL_BOXES = [
  { id: 1, color: "white" },
  { id: 2, color: "white" },
];

const ConfigColorBoxes = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const [boxes, setBoxes] = useState(INITIAL_BOXES);

  const colorClasses: Record<string, string> = {
    red: "bg-red-500",
    green: "bg-green-500",
    blue: "bg-blue-500",
    yellow: "bg-yellow-500",
    purple: "bg-purple-500",
    white: "bg-white",
  };

  return (
    <div className="mt-20 max-w-2xl mx-auto p-4">
      <h1>Configurable Color Boxes</h1>
      <div className="flex justify-center items-center gap-4 mt-20">
        {COLORS?.map((color) => (
          <div
            key={color}
            onClick={() => setSelectedColor(color)}
            className={`w-16 h-16 ${colorClasses[color]} rounded-full`}
          ></div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 my-16 flex-wrap">
        {boxes.map((box, index) => (
          <div
            key={box.id}
            onClick={() =>
              setBoxes((prev) =>
                prev.map((box, i) =>
                  i === index ? { ...box, color: selectedColor } : box,
                ),
              )
            }
            className={`w-16 h-16 rounded-lg ${colorClasses[box.color]} shadow-2xl border-${box.color}-200 cursor-pointer border`}
          ></div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-4 my-20">
        <button
          className=" py-2 px-4 bg-blue-500 text-white rounded-lg cursor-pointer"
          onClick={() =>
            setBoxes((prev) => [
              ...prev,
              { id: boxes.length + 1, color: "white" },
            ])
          }
        >
          Add More
        </button>
        <button
          className=" py-2 px-4 bg-red-500 text-white rounded-lg cursor-pointer"
          onClick={() => setBoxes(INITIAL_BOXES)}
        >
          Reset Boxes
        </button>
        <button
          className=" py-2 px-4 bg-red-500 text-white rounded-lg cursor-pointer"
          onClick={() =>
            setBoxes((prev) => prev.map((box) => ({ ...box, color: "white" })))
          }
        >
          Reset Color
        </button>
      </div>
    </div>
  );
};

export default ConfigColorBoxes;
