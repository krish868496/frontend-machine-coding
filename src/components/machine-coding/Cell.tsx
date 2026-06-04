
type props = {
  b: null | string;
  index: number;
  handleClick: (index: number) => void;
};

const Cell = ({ b, index, handleClick }: props) => {
  return (
    <button
      className="w-25 h-25 border border-gray-500 bg-gray-400 cursor-pointer text-black text-3xl font-bold "
      disabled={b !== null}
      onClick={() => handleClick(index)}
    >
      {b}
    </button>
  );
};

export default Cell;
