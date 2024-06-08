import React, { useState, useEffect } from "react";
import Button from "../components/button";

function Done() {
  const [cardCount, setCardCount] = useState(1);
  const [cardValues, setCardValues] = useState([]);

  const handleAddCard = () => {
    setCardCount(cardCount + 1);
    setCardValues([...cardValues, ""]);
    localStorage.setItem("doneList", JSON.stringify(cardValues));
  };

  const handleRemoveCard = (index) => {
    setCardCount((prevCardCount) =>
      prevCardCount > 0 ? prevCardCount - 1 : prevCardCount
    );
    const updatedCardValues = [...cardValues];
    updatedCardValues.splice(index, 1);
    setCardValues(updatedCardValues);
    localStorage.setItem("doneList", JSON.stringify(updatedCardValues));
  };

  useEffect(() => {
    const savedValues = localStorage.getItem("doneList");
    if (savedValues) {
      setCardValues(JSON.parse(savedValues));
    }
  }, []);

  return (
    <>
    <div className="flex flex-col">
      <div className="bg-gray-200 rounded h-auto w-96 ml-2 flex flex-col">
        <div className="ml-4 pt-3">
          <h1 className="text-black font-bold text-lg">Done</h1>
        </div>
        {Array(cardCount)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className="bg-slate-50 min-h-20 w-[23rem] rounded ml-2 mt-4  position: relative flex flex-col"
            >
              {/* <input className="bg-slate-50 ml-10 mt-2 w-[18rem] "/> */}
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
                src="./doneGreen.svg"
                className="h-[1rem] position: absolute top-3 left-3 cursor-pointer"
              />
              <img
                src="./close.svg"
                className="h-[1rem] position: absolute top-3 right-3 cursor-pointer"
                onClick={() => handleRemoveCard(index)}
              />
            </div>
          ))}
        <Button onClick={handleAddCard} />
      </div>
      </div>
    </>
  );
}

export default Done;
