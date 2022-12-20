import {Howl, Howler} from "howler";
import React, {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {FiChevronLeft} from "react-icons/fi";

const DetailHewan = () => {
  const {image, name, desc, sound, backgroundImage} = useLocation().state;
  const navigate = useNavigate();
  const [isPlay, setPlay] = useState(false);

  const playSound = (source) => {
    const audio = new Howl({
      src: source,
      html5: true,
    });
    setPlay(true);
    audio.play();
  };

  const stopSound = () => {
    Howler.unload();
    setPlay(false);
  };

  Howler.volume(1.0);

  return (
    <>
      <div
        className="h-screen flex justify-center items-center px-3 md:bg-no-repeat w-full bg-fixed md:aspect-video bg-cover"
        style={{backgroundImage: "url(" + backgroundImage + ")"}}
      >
        <button
          onClick={() => navigate(-1)}
          className="btn btn-ghost absolute top-3 left-3 btn-square h-10 w-24 rounded-md bg-white hover:bg-zinc-100"
        >
          <FiChevronLeft className="text-2xl text-black" />
          <span className="text-light">Back</span>
        </button>
        <div className="gap-5 md:gap-10 md:justify-center w-full flex md:flex-row-reverse overflow-auto py-10 max-h-full flex-col items-center">
          <img
            className="md:w-[500px] w-96"
            src={image}
            alt={name}
          />
          <div className="bg-light-50 drop-shadow-md rounded-lg max-w-[30rem] w-full p-8 bg-white opacity-90">
            <h1 className="font-bold text-4xl text-black">{name}</h1>
            <article className="font-semibold text-black h-96 w-full overflow-auto">
              {desc}
            </article>
            <div className="flex flex-row gap-3">
              <button
                onClick={() => playSound(sound)}
                className="btn btn-info btn-square px-8"
              >
                Suara
              </button>
              {isPlay && (
                <button
                  onClick={() => stopSound(sound)}
                  className="btn btn-primary btn-square px-8"
                >
                  Stop
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* <div className=" md:hidden">
        <button
          onClick={() => navigate(-1)}
          className="btn btn-ghost btn-square h-10 w-24 m-2"
        >
          <FiChevronLeft className="text-2xl" />
          Back
        </button>
        <div className="w-screen p-6">
          <div className="m-auto">
            <div className="bg-gray-50 drop-shadow-md rounded-lg h-96 w-80 p-8 space-y-4">
              <h1 className="font-semibold text-4xl">{name}</h1>
              <article>{desc}</article>
              <button
                onClick={() => playSound()}
                className="btn btn-primary btn-square px-8"
              >
                Play
              </button>
            </div>
            <img className="" src={image} alt={name} />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default DetailHewan;
