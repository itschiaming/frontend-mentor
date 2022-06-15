import React from "react";

const DarkContext = React.createContext({
  toggleDarkMode: () => {},
  theme: "",
});

export default DarkContext;
