import { Howl, Howler } from "howler";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";

const HewanLautDetail = () => {
  const {
    image,
    name,
    desc,
    sound,
    backgroundImage,
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
          className="btn btn-light btn-light h-10 w-24"
        >
          <FiChevronLeft className="text-2xl text-white" />
          <span className="text-white">Back</span>
        </button>
        <div className="m-auto space-x-44 hidden md:flex md:flex-row">
          <div className="bg-grey-50 drop-shadow-md rounded-lg w-[30rem] h-[30rem] p-8 space-y-4">
            <h1 className="font-bold text-4xl text-black">{name}</h1>
            <article className="font-semi bold text-black">{desc}</article>
            <button
              onClick={() => playSound(sound)}
              className="btn btn-primary btn-light px-8"
            >
              Suara
            </button>
          </div>

          <figure>
            <img src={image} alt={name} />
          </figure>
        </div>
      </div>

      <div className=" md:hidden">
        <button
          onClick={() => navigate(-1)}
          className="btn btn-light btn-light h-10 w-24 m-2"
        >
          <FiChevronLeft className="text-2xl" />
          Back
        </button>
        <div className="w-screen p-6">
          <div className="m-auto">
            <div className="bg-gray-50 drop-shadow-md rounded-lg h-96 w-80 p-8 space-y-4">
              <h1 className="font-bold text-4xl">{name}</h1>
              <article>{desc}</article>
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

export default HewanLautDetail;
