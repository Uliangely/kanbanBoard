import React, { useState, useEffect } from "react";
import Button from "../components/button";

function ToDo() {
  const [cardCount, setCardCount] = useState(1);
  const [cardValues, setCardValues] = useState([]);

  const handleAddCard = () => {
    setCardCount(cardCount + 1);
    setCardValues([...cardValues, ""]);
    localStorage.setItem("toDoList", JSON.stringify(cardValues));
  };

  const handleRemoveCard = (index) => {
    setCardCount((prevCardCount) =>
      prevCardCount > 0 ? prevCardCount - 1 : prevCardCount
    );
    const updatedCardValues = [...cardValues];
    updatedCardValues.splice(index, 1);
    setCardValues(updatedCardValues);
    localStorage.setItem("toDoList", JSON.stringify(updatedCardValues));
  };

  useEffect(() => {
    const savedValues = localStorage.getItem("toDoList");
    if (savedValues) {
      setCardValues(JSON.parse(savedValues));
    }
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <div className="bg-gray-200 rounded h-auto w-96 flex flex-col">
          <div className="ml-4 pt-3">
            <h1 className="text-black font-bold text-lg">To Do</h1>
          </div>
          {Array(cardCount)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="bg-slate-50 min-h-20 w-[23rem] rounded ml-2 mt-4  position: relative flex flex-col"
              >
                {/* <input
                  value={cardValues[index] || ""}
                  onChange={(e) => {
                    const updatedCardValues = [...cardValues];
                    updatedCardValues[index] = e.target.value;
                    setCardValues(updatedCardValues);
                  }}
                  className="bg-slate-50 ml-10 mt-2 w-[18rem]"
                /> */}

                <textarea
                  value={cardValues[index] || ""}
                  onChange={(e) => {
                    const updatedCardValues = [...cardValues];
                    updatedCardValues[index] = e.target.value;
                    setCardValues(updatedCardValues);
                  }}
                  rows="1"
                  className="block ml-10 mt-2 mb-2 w-[18rem] text-sm text-gray-900 bg-slate-50 focus:border-blue-500 "
                ></textarea>

                <img
                  src="./done.svg"
                  className="h-[1rem] position: absolute top-3 left-3 cursor-pointer"
                />
                <img
                  src="./close.svg"
                  className="h-[1rem] position: absolute top-3 right-3 cursor-pointer"
                  onClick={() => handleRemoveCard(index)}
                />
                <img
                  src="./next.svg"
                  className="h-[1rem] position: absolute top-[2.5rem] right-3 cursor-pointer hover:sepia hover:opacity-75"
                />
              </div>
            ))}
          <Button onClick={handleAddCard} />
        </div>
      </div>
    </>
  );
}

export default ToDo;



