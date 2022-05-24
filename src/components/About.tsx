import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  SiFramer,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function About() {
  const [years, setYears] = useState(0);
  const [programmingYears, setProgrammingYears] = useState(0);
  const [programmingMonths, setProgrammingMonths] = useState(0);
  const navigate = useNavigate();

  function getAge(dateString: Date) {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return { age, m };
  }

  useEffect(() => {
    setYears(getAge(new Date("2002-11-22")).age);
    setProgrammingYears(getAge(new Date("2021-04-01")).age);
    setProgrammingMonths(getAge(new Date("2021-04-01")).m);
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <motion.div
        className="w-4/5 p-4 sm:p-10 m-10 bg-slate-50 dark:bg-slate-800 rounded-lg shadow-2xl flex flex-col items-center justify-around"
        initial={{ x: -window.innerWidth, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -window.innerWidth, opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-2xl md:text-4xl my-10 font-extrabold text-center">
          Sobre
        </h1>
        <div className="flex flex-col items-center font-rubik">
          <p className="text-center text-sm xs:text-md sm:text-lg md:text-2xl w-full sm:w-3/4">
            Meu nome é Gustavo Kenzo Araki Takechi, tenho {years} anos e sou
            estudante de Engenharia de Software na Universidade de Brasília.
          </p>
          <p className="text-center text-sm xs:text-md sm:text-lg md:text-2xl w-full sm:w-3/4 mt-8">
            Comecei no mundo da programação há exatamente {programmingYears}{" "}
            anos e {programmingMonths} meses, e hoje meu foco é desenvolver
            aplicações web e mobile, mas também sou fascinado pela área de
            Inteligência Artificial, e sempre tento aprender algo sobre isso.
          </p>
        </div>
        <p className="font-rubik text-center mt-10 text-sm xs:text-md sm:text-lg md:text-2xl w-3/4">
          Principais tecnologias que utilizo:
        </p>
        <div className="flex flex-col my-10 md:flex-row items-center w-1/2 md:w-4/5 lg:w-4/5 xl:w-1/2 gap-8 justify-around">
          <motion.div
            className="flex flex-col items-center justify-center transition-colors duration-500 dark:hover:bg-slate-600 dark:bg-slate-700 bg-slate-100 hover:bg-slate-200 h-24 md:w-32  w-24 md:h-32  rounded-lg"
            initial={{ y: "100px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
          >
            <SiTypescript className="h-8 w-8 md:h-12 md:w-12 text-center" />
            <p className="text-center text-nd mt-4">Typescript</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center justify-center transition-colors duration-500 dark:hover:bg-slate-600 dark:bg-slate-700 bg-slate-100 hover:bg-slate-200 h-24 md:w-32  w-24 md:h-32  rounded-lg"
            initial={{ y: "100px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.25, duration: 1, ease: "easeInOut" }}
          >
            <SiReact className="h-8 w-8 md:h-12 md:w-12 text-center" />
            <p className="text-center text-nd mt-4">React</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center justify-center transition-colors duration-500 dark:hover:bg-slate-600 dark:bg-slate-700 bg-slate-100 hover:bg-slate-200 h-24 md:w-32  w-24 md:h-32  rounded-lg"
            initial={{ y: "100px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 1, ease: "easeInOut" }}
          >
            <SiNodedotjs className="h-8 w-8 md:h-12 md:w-12 text-center" />
            <p className="text-center text-nd mt-4">NodeJS</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center justify-center transition-colors duration-500 dark:hover:bg-slate-600 dark:bg-slate-700 bg-slate-100 hover:bg-slate-200 h-24 md:w-32  w-24 md:h-32  rounded-lg"
            initial={{ y: "100px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.75, duration: 1, ease: "easeInOut" }}
          >
            <SiMongodb className="h-8 w-8 md:h-12 md:w-12 text-center" />
            <p className="text-center text-nd mt-4">MongoDB</p>
          </motion.div>
        </div>
        <p className="font-rubik text-center mt-8 text-sm xs:text-md sm:text-lg md:text-2xl w-3/4">
          Principais bibliotecas que utilizo para estilização:
        </p>
        <div className="flex flex-col my-10 md:flex-row items-center w-1/2 md:w-4/5 lg:w-4/5 xl:w-1/2 gap-8 justify-around">
          <motion.div
            className="flex flex-col items-center justify-center transition-colors duration-500 dark:hover:bg-slate-600 dark:bg-slate-700 bg-slate-100 hover:bg-slate-200 h-24 md:w-32  w-24 md:h-32  rounded-lg"
            initial={{ y: "100px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2, duration: 1, ease: "easeInOut" }}
          >
            <SiStyledcomponents className="h-8 w-8 md:h-12 md:w-12 text-center" />
            <p className="text-center text-nd mt-4">Styled Components</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center justify-center transition-colors duration-500 dark:hover:bg-slate-600 dark:bg-slate-700 bg-slate-100 hover:bg-slate-200 h-24 md:w-32  w-24 md:h-32  rounded-lg"
            initial={{ y: "100px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.25, duration: 1, ease: "easeInOut" }}
          >
            <SiTailwindcss className="h-8 w-8 md:h-12 md:w-12 text-center" />
            <p className="text-center text-nd mt-4">TailwindCSS</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center justify-center transition-colors duration-500 dark:hover:bg-slate-600 dark:bg-slate-700 bg-slate-100 hover:bg-slate-200 h-24 md:w-32  w-24 md:h-32  rounded-lg"
            initial={{ y: "100px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.5, duration: 1, ease: "easeInOut" }}
          >
            <SiFramer className="h-8 w-8 md:h-12 md:w-12 text-center" />
            <p className="text-center text-nd mt-4">Framer Motion</p>
          </motion.div>
        </div>
        <button
          className="w-4/5 sm:w-1/2 md:w-3/4 xl:w-1/2 text-center text-lg md:text-xl relative bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-white font-semibold h-12 px-6 rounded-lg dark:bg-slate-700 dark:hover:bg-slate-600 pointer-events-auto"
          onClick={() => navigate("/")}
        >
          Voltar
        </button>
      </motion.div>
    </div>
  );
}
