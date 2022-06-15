import React, { useContext } from "react";
import classes from "./Layout.module.css";
import { ThemeContext } from "../../App";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  const ctx = useContext(ThemeContext);
  let isDarkMode = ctx.isDarkMode;

  const darkStyle = {
    backgroundColor: ctx.theme.dark.background,
    color: ctx.theme.dark.foreground,
    elementBackground: ctx.theme.dark.elementsBackground,
  };

  return (
    <div className={`${classes.layout}`} style={isDarkMode ? darkStyle : null}>
      <Header />
      <main className={classes.main}>{children}</main>
    </div>
  );
};

export default Layout;
