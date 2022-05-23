import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <motion.div
        className="w-4/5 h-3/4 p-10 bg-slate-50 dark:bg-slate-800 rounded-lg shadow-2xl flex flex-col items-center justify-around"
        initial={{ x: -window.innerWidth, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -window.innerWidth, opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-2xl md:text-4xl font-extrabold text-center">Sobre</h1>
        <div className="flex flex-col items-center">
          <p className="text-center text-sm xs:text-md sm:text-lg md:text-2xl w-3/4">
            Meu nome é Gustavo Kenzo Araki Takechi, tenho {years} anos e sou
            estudante de Engenharia de Software na Universidade de Brasília.
          </p>
          <p className="text-center text-sm xs:text-md sm:text-lg md:text-2xl w-3/4 mt-8">
            Comecei no mundo da programação há exatamente {programmingYears}{" "}
            anos e {programmingMonths} meses, e hoje meu foco é desenvolver
            aplicações web e mobile. Mas também sou fascinado pela área de
            Inteligência Artificial, e sempre tento aprender algo sobre isso.
          </p>
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
