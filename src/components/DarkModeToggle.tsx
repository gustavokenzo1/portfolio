import { Moon, Sun } from "phosphor-react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import useDarkMode from "../hooks/useDarkMode";

export default function DarkModeToggle() {
  const [colorTheme, setTheme] = useDarkMode();

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  function handleDarkModeToggle() {
    localStorage.setItem("theme", colorTheme === "dark" ? "light" : "dark");
    setTheme(colorTheme);
  }

  return (
    <div className="absolute z-20 top-4 right-4 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2">
      {colorTheme === "light" ? (
        <motion.button
          onClick={handleDarkModeToggle}
          whileHover={{ scale: 1.1, rotate: 180 }}
          className="focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 rounded-full"
        >
          <Sun size={32} />
        </motion.button>
      ) : (
        <motion.button
          onClick={handleDarkModeToggle}
          whileHover={{ scale: 1.1, rotate: 270 }}
          className="focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 rounded-full"
        >
          <Moon size={32} />
        </motion.button>
      )}
    </div>
  );
}
