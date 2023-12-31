import React, { useState, useEffect } from "react";

const useThemeSwitch = () => {
  const darkQuery = "(prefer-color-scheme: dark)";
  const [mode, setMode] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia(darkQuery);
    const userLocalPref = window.localStorage.getItem("theme");

    const handleChange = () => {
      if (userLocalPref) {
        let check = userLocalPref === "dark" ? "dark" : "light";
        setMode(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        let check = mediaQuery.matches ? "dark" : "light";
        setMode(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark");
      console.log(window.localStorage.getItem("theme"));
      document.documentElement.classList.add("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitch;
