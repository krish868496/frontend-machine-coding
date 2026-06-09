import { useEffect, useRef, useState } from "react";

const INPUT_SIZE = 5;
const OtpInput = () => {
  const [inputBox, setinputBox] = useState(
    Array((length = INPUT_SIZE)).fill(""),
  );

  const inputRef = useRef<any>([]);

  useEffect(() => {
    inputRef.current[0].focus();
  }, []);

  const handleInputChange = (value: string, index: number) => {
    if (isNaN(Number(value))) return;
    const newValue = value.trim();
    const newInputBox = [...inputBox];
    newInputBox[index] = newValue.slice(-1);
    setinputBox(newInputBox);
    newValue && inputRef.current[index + 1]?.focus();
  };
  const handleKeyDown = (e: any, index: number) => {
    console.log(e.key);
    if (!e.target.value && e.key === "Backspace") {
      inputRef.current[index - 1]?.focus();
    }
    if (e.key === "ArrowRight") {
      inputRef.current[index + 1]?.focus();
    }
    if (e.key === "ArrowLeft") {
      inputRef.current[index - 1]?.focus();
    }
  };
  return (
    <div>
      {inputBox.map((box, index) => (
        <input
          type="text"
          value={inputBox[index]}
          key={index}
          ref={(input: any) => (inputRef.current[index] = input)}
          className="w-16 h-16 text-center text-4xl"
          onChange={(e) => handleInputChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      ))}
    </div>
  );
};

export default OtpInput;
