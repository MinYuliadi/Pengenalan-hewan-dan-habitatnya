import React from "react";
import { useTimer } from "react-timer-hook";
import { useDispatch } from "react-redux";
import { timesUp } from "../../redux/level";

const Countdown = ({ expiryTimestamp }) => {
  const dispatch = useDispatch();
  const { seconds, isRunning } = useTimer({
    expiryTimestamp,
    onExpire: () => dispatch(timesUp()),
  });

  return (
    <>
      {isRunning ? (
        <span>Durasi: {seconds} detik</span>
      ) : (
        <span>Waktu habis !!!</span>
      )}
    </>
  );
};

const CountdownComponent = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 60);

  return (
    <div className=" rounded-lg top-8 right-8 absolute py-3 px-8 bg-slate-600 text-white">
      <Countdown expiryTimestamp={time} />
    </div>
  );
};

export default CountdownComponent;
