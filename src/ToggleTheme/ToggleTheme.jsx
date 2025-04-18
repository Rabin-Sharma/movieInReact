import React from "react";
import { useState } from "react";

const ToggleTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    // <div style={{background: isDarkMode ? "bg-dark": "bg-light" , color: isDarkMode?"white":"black", padding:"50px"} }>
    <div className={isDarkMode ? "bg-dark text-white" : "bg-light text-dark"}>
      <p>This Theme is :</p>
      <button onClick={() => setIsDarkMode(!isDarkMode)}> Toggle</button>
    </div>
  );
};

export default ToggleTheme;
