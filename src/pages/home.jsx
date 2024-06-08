import React from "react";
import ToDo from "../components/toDo";
import Progress from "../components/inProgress";
import Done from "../components/done";

function Home() {
  return (
    <>
      <div className="bg-image h-screen w-screen position: relative">
        <img
          src="./background.jpg"
          alt="Imagen de fondo"
          className="object-cover"
        />
        <div className="">
        <h1 className="W-[964px] h-[33px] position: absolute text-3xl text-white font-bold top-6 ml-8 left-[8rem] top-[6rem]">
          Project Kanban
        </h1>
        <div className=" position: absolute top-40 left-40 flex flex-row">
          <ToDo />
          <Progress />
          <Done />
        </div>
        </div>
      </div>
    </>
  );
}

export default Home;
