import React from "react";

import Switch from "./components/switch/Switch";
import { useDispatch, useSelector } from "react-redux";
import { switchTheme } from "./_actions/";

const Home = () => {
  const dispatch = useDispatch();

  const darkMode = useSelector((state) => state.app.darkMode);

  const handleSwitchTheme = (theme) => {
    dispatch(switchTheme(theme));
  };

  console.log("darkMode :>> ", darkMode);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>App</h1>
        <Switch value={darkMode} setValue={handleSwitchTheme} />
      </div>
    </>
  );
};

export default Home;
