import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import { ThemeContext } from "../../App";

const Header = () => {
  const ctx = useContext(ThemeContext);
  const toggleDarkMode = ctx.toggleDarkMode;
  const isDarkMode = ctx.isDarkMode;

  const darkStyle = {
    color: ctx.theme.dark.foreground,
    backgroundColor: ctx.theme.dark.elementsBackground,
  };

  return (
    <header className={classes.header} style={isDarkMode ? darkStyle : null}>
      <h3 className={classes.title}>
        <Link to="/" style={isDarkMode ? darkStyle : null}>
          Where in the world?
        </Link>
      </h3>
      <div className={classes.darkModeContainer} onClick={toggleDarkMode}>
        <i className={`fa-regular fa-moon ${classes.darkMode}`}></i>
        <span>Dark mode</span>
      </div>
    </header>
  );
};

export default Header;
