import React, { useState } from "react";
import { Howl, Howler } from "howler";
import { Button } from "antd";

const ButtonPlay = ({ source }) => {
  const [isPlay, setPlay] = useState(false);

  const playSound = (sound) => {
    const audio = new Howl({
      src: sound,
      html5: true,
    });
    setPlay(true);
    audio.play();
  };

  const stopSound = () => {
    setPlay(false);
    Howler.unload();
  };

  Howler.volume(1.0);

  return (
    <div className="mb-3 text-center">
      {!isPlay ? (
        <Button
          type="primary"
          className="bg-indigo-600 text-white"
          onClick={() => playSound(source)}
        >
          Play
        </Button>
      ) : (
        <Button
          type="primary"
          className="bg-indigo-600 text-white"
          onClick={() => stopSound()}
        >
          Stop
        </Button>
      )}
    </div>
  );
};

export default ButtonPlay;
