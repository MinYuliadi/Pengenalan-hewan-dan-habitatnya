import React, { useEffect } from "react";
import GameEntity from "../../component/entity/gameEnity";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { resetTimes } from "../../redux/level";
import swal from "sweetalert";

const Game = () => {
  const dispatch = useDispatch();
  const { level } = useSelector((state) => state.level);

  useEffect(() => {
    dispatch(resetTimes());

    if (level > 5)
      swal({
        title: "Selamat",
        text: "Kamu sudah menyelesaikan semua level",
        icon: "success",
      });
  }, []);

  return (
    <GameEntity>
      <div className="flex flex-col space-y-5">
        <LevelButton title="Level 1" to="level1" lvl={1} />
        <LevelButton title="Level 2" to="level2" lvl={2} />
        <LevelButton title="Level 3" to="level3" lvl={3} />
        <LevelButton title="Level 4" to="level4" lvl={4} />
        <LevelButton title="Level 5" to="level5" lvl={5} />
      </div>
    </GameEntity>
  );
};

const LevelButton = ({ title, to, lvl }) => {
  const navigate = useNavigate();
  const { level } = useSelector((state) => state.level);
  return (
    <button
      className="btn btn-primary w-72 h-16 text-2xl"
      onClick={() => navigate(to)}
      disabled={level < lvl}
    >
      {title}
    </button>
  );
};

export default Game;
