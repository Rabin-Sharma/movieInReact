// import React, { useContext } from 'react'

// const ThemeToggler = () => {
//     const {theme,toggleTheme} = useContext()
//   return (
//     <div>ThemeToggler</div>
//   )
// }

// export default ThemeToggler
import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { WiDaySunny } from "react-icons/wi";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    // <div
    //   className={`${
    //     theme === "light" ? "bg-dark text-white" : "bg-light text-dark"
    //   }`}
    // >
      <button
        className={`rounded-circle p-2
          // theme === "light" ? " btn-light" : " btn-dark"
        `}
        style={{ background: "none", border: "none" }}
        onClick={toggleTheme}
      >
        {theme === "light" ? <MdDarkMode /> : <WiDaySunny />}
      </button>
    // </div>
  );
};

export default ThemeToggler;
