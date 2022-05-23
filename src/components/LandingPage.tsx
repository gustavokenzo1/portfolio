import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

export default function LandingPage() {
  const navigate = useNavigate();
  const [exitAnimationType, setExitAnimationType] = useState({});

  function handleNavigate(path: string) {
    navigate(path);
  }

  function handleAnimationType(type: string) {
    if (type === "slideToRight") {
      setExitAnimationType({
        x: window.innerWidth,
        opacity: 0,
      });
    } else if (type === "shrink") {
      setExitAnimationType({
        scale: 0,
        opacity: 0,
      });
    }
  }

  return (
    <div className="w-full flex flex-col h-screen items-center justify-center">
      <motion.div
        className="w-full flex flex-col items-center justify-center scrollbar-hide"
        exit={exitAnimationType}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col md:flex-row justify-center md:justify-around items-center w-full lg:w-3/4 h-full">
          <motion.div
            className="flex items-center justify-center m-10"
            initial={{ y: "-30vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <img
              src="https://github.com/gustavokenzo1.png"
              alt="Foto do meu rosto com fundo desfocado e escuro, utilizando roupa azul e óculos"
              className="rounded-full w-3/4 sm:w-1/2 md:w-3/4"
            />
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 h-1/3 p-4 flex flex-col justify-around mt-10"
            initial={{ x: "30vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50 }}
          >
            <div className="mb-4">
              <h1 className="text-center md:text-left text-lg sm:text-2xl md:text-2xl lg:text-3xl text-slate-900 tracking-tight font-extrabold dark:text-white">
                Olá, meu nome é Gustavo Kenzo, e esse é o meu portfólio!
              </h1>
            </div>
            <p className="font-rubik text-center md:text-left text-sm sm:text-md md:text-md lg:text-lg">
              Aqui você poderá conhecer mais sobre mim, minhas experiências e
              meus projetos.
            </p>
            <div className="flex flex-col items-center md:items-start w-full mt-8">
              <button
                className="mb-1 w-4/5 sm:w-1/2 md:w-3/4 xl:w-1/2 text-center md:text-left relative border-slate-900 dark:border-white py-2 px-4 focus:outline-none hover:bg-slate-800 dark:hover:bg-slate-200 dark:hover:text-slate-800 hover:text-slate-100 rounded-lg transition-colors duration-300"
                onClick={() => {
                  handleAnimationType("slideToRight");
                  handleNavigate("/about");
                }}
              >
                Sobre
              </button>
              <div className="flex-grow border-t border-slate-800 dark:border-slate-400 border-[1px] w-4/5 sm:w-1/2 md:w-3/4 xl:w-1/2 mb-8" />
              <button
                className="mb-1 w-4/5 sm:w-1/2 md:w-3/4 xl:w-1/2 text-center md:text-left relative border-slate-900 dark:border-white py-2 px-4 focus:outline-none hover:bg-slate-800 dark:hover:bg-slate-200 dark:hover:text-slate-800 hover:text-slate-100 rounded-lg transition-colors duration-300"
                onClick={() => {
                  handleAnimationType("shrink");
                  handleNavigate("/experience");
                }}
              >
                Experiência
              </button>
              <div className="flex-grow border-t border-slate-800 border-[1px] dark:border-slate-400 w-4/5 sm:w-1/2 md:w-3/4 xl:w-1/2 mb-8" />
              <button
                className="mb-1 w-4/5 sm:w-1/2 md:w-3/4 xl:w-1/2 text-center md:text-left relative border-slate-900 dark:border-white py-2 px-4 focus:outline-none hover:bg-slate-800 dark:hover:bg-slate-200 dark:hover:text-slate-800 hover:text-slate-100 rounded-lg transition-colors duration-300"
                onClick={() => handleNavigate("/projects")}
              >
                Projetos
              </button>
              <div className="flex-grow border-t border-slate-800 border-[1px] dark:border-slate-400 w-4/5 sm:w-1/2 md:w-3/4 xl:w-1/2 mb-8" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
