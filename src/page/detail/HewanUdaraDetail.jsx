import { Howl, Howler } from "howler";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
const HewanUdaraDetail = () => {
  const {
    image,
    name,
    desc,
    sound,
    backgroundImage,
    backgroundMobile
  } = useLocation().state;
  const navigate = useNavigate();

  const playSound = (source) => {
  const audio = new Howl({
  src: source,
  html5: true,
  });
  audio.play();
  };

  Howler.volume(1.0);

  return (
    <>
      <div
        className="h-screen hidden md:p-6 md:flex"
        style={{ backgroundImage: "url(" + backgroundImage + ")" }}
      >
        <button
          onClick={() => navigate(-1)}
          className="btn btn-ghost btn-square h-10 w-24"
        >
          <FiChevronLeft className="text-2xl text-white" />
          <span className="text-white">Back</span>
        </button>
        <div className="m-auto space-x-44 hidden md:flex md:flex-row">
          <div className="bg-grey-50 drop-shadow-md rounded-lg w-[30rem] h-[30rem] p-8 space-y-4">
            <h1 className="font-semibold text-4xl text-white">{name}</h1>
            <article className="text-white">{desc}</article>
            <button
              onClick={() => playSound(sound)}
              className="btn btn-primary btn-square px-8"
            >
              Play
            </button>
          </div>

          <figure>
            <img src={image} alt={name} />
          </figure>
        </div>
      </div>

      <div
        className=" md:hidden"
        style={{ backgroundImage: "url(" + backgroundMobile + ")", height: "1000px" }}
      >
        <button
          onClick={() => navigate(-1)}
          className="btn btn-ghost btn-square h-10 w-24 m-2"
        >
          <FiChevronLeft className="text-2xl text-white" />
          <span className="text-white">Back</span>
          
        </button>
        <div className="w-screen p-6">
          <div className="m-auto">
            <div className=" drop-shadow-md rounded-lg h-96 w-80 p-8 space-y-4">
              <h1 className="font-semibold text-4xl text-white">{name}</h1>
              <article className="text-white">{desc}</article>
              <button
              onClick={() => playSound(sound)}
                className="btn btn-primary btn-square px-8"
              >
                Play
              </button>
            </div>
            <figure className="w-40 absolute top-[22rem] right-0">
              <img src={image} alt={name} />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default HewanUdaraDetail;
