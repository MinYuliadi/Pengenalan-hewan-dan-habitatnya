import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailHewan from "../page/detail/DetailHewan";
import Game from "../page/game";
import Level1 from "../page/game/level1";
import Level2 from "../page/game/level2";
import Level3 from "../page/game/level3";
import Level4 from "../page/game/level4";
import Level5 from "../page/game/level5";
import HewanDarat from "../page/hewan-darat/HewanDarat";
import HewanLaut from "../page/hewan-laut/HewanLaut";
import HewanUdara from "../page/hewan-udara/HewanUdara";
import Home from "../page/home/Home";
import Menu from "../page/menu/Menu";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="menu">
        <Route path="hewandarat">
          <Route path=":name" element={<DetailHewan />} />
          <Route index element={<HewanDarat />} />
        </Route>
        <Route path="hewanudara">
          <Route path=":name" element={<DetailHewan />} />
          <Route index element={<HewanUdara />} />
        </Route>
        <Route path="hewanair">
          <Route path=":name" element={<DetailHewan />} />
          <Route index element={<HewanLaut />} />
        </Route>
        <Route index element={<Menu />} />
      </Route>
      <Route path="game">
        <Route path="level1" element={<Level1 />} />
        <Route path="level2" element={<Level2 />} />
        <Route path="level3" element={<Level3 />} />
        <Route path="level4" element={<Level4 />} />
        <Route path="level5" element={<Level5 />} />
        <Route index element={<Game />} />
      </Route>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
