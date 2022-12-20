import React from "react";
import {useNavigate} from "react-router-dom";
import background from "../../assets/images/bg.jpg";

const menuList = [
  {name: "MATERI", to: "menu"},
  {name: "QUIZ", to: "game"},
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="flex min-h-screen min-w-full max-w-full overflow-x-hidden max-h-screen flex-col justify-center items-center gap-10 relative p-5"
    >
      <div className="max-w-fit text-4xl font-bold font-sans text-center bg-white rounded-md p-3 mb-[20rem]">
        Game Edukatif <br /> Mengenal Hewan dan Habitatnya
      </div>
      <div className="absolute left-[50%] top-[50%]">
        <div className="relative left-[-50%] top-[-50%] flex flex-col gap-5">
          {menuList.map((item) => (
            <button className="btn w-72 max-w-full h-16 text-3xl" onClick={() => navigate(item.to)}>
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
