import { Moon, Sun } from "phosphor-react";
import { useEffect } from "react";
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
    <div className="absolute top-4 right-4 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2">
      {colorTheme === "light" ? (
        <button
          onClick={handleDarkModeToggle}
          className="focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 rounded-full"
        >
          <Sun size={32} />
        </button>
      ) : (
        <button
          onClick={handleDarkModeToggle}
          className="focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 rounded-full"
        >
          <Moon size={32} />
        </button>
      )}
    </div>
  );
}
