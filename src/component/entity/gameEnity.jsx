import React from "react";
import backgroundImage from "../../assets/images/kebun2.png";
import { useNavigate } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import CountdownComponent from "../countdown";

const GameEntity = ({ children, countdown }) => {
  const navigate = useNavigate();
  return (
    <div
      className="h-screen flex bg-cover text-red relative"
      style={{ backgroundImage: "url(" + backgroundImage + ")" }}
    >
      <button
        onClick={() => navigate(-1)}
        className="btn btn-ghost btn-square absolute h-10 w-24 m-5"
      >
        <FiChevronLeft className="text-2xl" />
        Back
      </button>
      {countdown ? <CountdownComponent /> : null}
      <div className="m-auto">{children}</div>
    </div>
  );
};

export default GameEntity;
