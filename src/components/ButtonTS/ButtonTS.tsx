type ButtonTSProps = {
  clickHandler: () => void;
  label: string | number;
};

const ButtonTS = ({ clickHandler, label }: ButtonTSProps) => {
  return (
    <button
      className="px-6 py-2.5 rounded-lg cursor-pointer text-white text-sm tracking-wider font-medium border-0 outline-0 outline-none bg-purple-700 hover:bg-purple-800 active:bg-purple-700"
      onClick={clickHandler}
    >
      {label}
    </button>
  );
}

export default ButtonTS
