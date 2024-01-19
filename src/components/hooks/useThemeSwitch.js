import React, { useState, useEffect } from "react";

const useThemeSwitch = () => {
  const darkQuery = "(prefers-color-scheme: dark)";
  const [mode, setMode] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia(darkQuery);
    const userLocalPref = window.localStorage.getItem("theme");

    const handleChange = () => {
      const updatedMode =
        userLocalPref || (mediaQuery.matches ? "dark" : "light");
      setMode(updatedMode);

      if (updatedMode === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (mode === "dark" || mode === "light") {
      window.localStorage.setItem("theme", mode);
      console.log(window.localStorage.getItem("theme"));
      document.documentElement.classList.toggle("dark", mode === "dark");
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitch;
