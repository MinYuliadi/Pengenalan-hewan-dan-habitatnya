import React from "react";
import { useNavigate } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import backgroundImage from "../../assets/images/bgmenu6.jpg";

const menuList = [
  { name: "Hewan Darat", to: "hewandarat" },
  { name: "Hewan Udara", to: "hewanudara" },
  { name: "Hewan Air", to: "hewanair" },
];

const Menu = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex h-screen bg-cover"
      style={{ backgroundImage: "url(" + backgroundImage + ")" }}
    >
      <button
        onClick={() => navigate(-1)}
        className="btn btn-ghost btn-square absolute h-10 w-24 m-5"
      >
        <FiChevronLeft className="text-2xl" />
        Back
      </button>
      <div className="m-auto flex flex-col space-y-5">
        {menuList.map((item) => (
          <button
            className="btn btn-primary w-72 h-16 text-2xl"
            onClick={() => navigate(item.to)}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Menu;
