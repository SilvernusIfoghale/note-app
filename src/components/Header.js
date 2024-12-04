import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const Header = ({ handleToggleDarkMode, darkMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        className="save"
        onClick={() => {
          handleToggleDarkMode((prevState) => !prevState);
        }}
      >
        {darkMode ? (
          <FiSun style={{ color: "#ffffff", fontSize: "18px" }} />
        ) : (
          <FiMoon style={{ fontSize: "18px" }} />
        )}
      </button>
    </div>
  );
};

export default Header;
