import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function LandingPage() {
  const navigate = useNavigate();

  function handleNavigate(path: string) {
    navigate(path);
  }

  return (
    <div className="w-full flex flex-col h-screen items-center justify-center">
      <motion.div
        className="w-full flex flex-col items-center justify-center scrollbar-hide"
        exit={{ x: window.innerWidth, opacity: 0 }}
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
            exit={{ x: "30vw", opacity: 0, transition: { duration: 1 } }}
            transition={{ type: "spring", stiffness: 50 }}
          >
            <div className="mb-4">
              <h1 className="text-center md:text-left text-lg sm:text-2xl md:text-2xl lg:text-3xl text-slate-900 tracking-tight font-extrabold dark:text-white">
                Olá, meu nome é Gustavo Kenzo, e esse é o meu portfólio!
              </h1>
            </div>
            <p className="text-center md:text-left text-sm sm:text-md md:text-md lg:text-lg">
              Aqui você poderá conhecer mais sobre mim, minhas experiências e
              meus projetos.
            </p>
            <div className="flex flex-col items-center md:items-start w-full mt-8 gap-4">
              <button
                className="w-4/5 sm:w-1/2 md:w-3/4 xl:w-1/2 text-center md:text-left relative bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-sm text-white font-semibold h-12 px-6 rounded-lg dark:bg-slate-700 dark:hover:bg-slate-600 pointer-events-auto"
                onClick={() => handleNavigate("/about")}
              >
                Sobre
              </button>
              <button className="w-4/5 sm:w-1/2 md:w-3/4 xl:w-1/2 text-center md:text-left relative bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-sm text-white font-semibold h-12 px-6 rounded-lg dark:bg-slate-700 dark:hover:bg-slate-600 pointer-events-auto">
                Experiência
              </button>
              <button className="w-4/5 sm:w-1/2 md:w-3/4 xl:w-1/2 text-center md:text-left relative bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-sm text-white font-semibold h-12 px-6 rounded-lg dark:bg-slate-700 dark:hover:bg-slate-600 pointer-events-auto">
                Projetos
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
