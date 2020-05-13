import React from "react";
import "./switch.css";

export default ({ value, setValue }) => {
  return (
    <>
      <label class="switch">
        <input
          type="checkbox"
          value={value}
          onChange={(e) => {
            setValue(e.target.checked);
          }}
        />
        <span class="slider round"></span>
      </label>
    </>
  );
};
