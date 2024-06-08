function Button({ onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className="flex flex-row justify-content: center items-center text-sm hover:bg-gray-300 rounded ml-4 mt-3 mb-3 w-[22rem] flex-row h-[2rem]"
      >
        <img src="./add.svg" className="h-[2rem]" />
        Add a card
      </button>
    </>
  );
}
export default Button;
