import React from "react";
import Card from "../../component/card/Card";
import {animalLaut} from "../../constant/animalLaut";
import {FiChevronLeft} from "react-icons/fi";
import {useNavigate} from "react-router-dom";
import background from "../../assets/images/IMG_1548.JPG";
const HewanLaut = () => {
  const navigate = useNavigate();

  return (
    <div
      className="w-full p-10 flex flex-col items-center md:items-start space-y-8"
      style={{
        backgroundImage: "url(" + background + ")",
        backgroundSize: "cover",
        height: "8%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-row items-center">
        <button
          onClick={() => navigate(-1)}
          className="btn btn-ghost btn-square h-10 w-11 "
        >
          <FiChevronLeft className="text-2xl text-white" />
        </button>
        <h1 className="font-bold text-40px md:text-4xl text-white">
          Hewan Laut
        </h1>
      </div>
      {/* <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-40 space-y-2"> */}
      <Card content={animalLaut} />
      {/* </div> */}
    </div>
  );
};

export default HewanLaut;
