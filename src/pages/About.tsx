import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
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

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

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
      <div
        className="w-4/5 p-4 sm:p-10 m-10 bg-stone-50/50 backdrop-blur-sm dark:bg-stone-800/50 rounded-lg shadow-2xl flex flex-col items-center justify-around"
        data-aos="fade-right"
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
        <div className="flex flex-col my-10 md:flex-row items-center w-1/2 md:w-4/5 lg:w-4/5 xl:w-1/2 gap-4 md:gap-8 justify-center">
          <div className="flex gap-4 md:gap-8 flex-row md:flex:col">
            <div
              className="flex flex-col items-center justify-center transition-colors duration-500 dark:hover:bg-stone-600 dark:bg-stone-700/30 backdrop-blur-sm bg-stone-200/30 hover:bg-stone-200 h-24 md:w-32  w-24 md:h-32  rounded-lg"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <SiTypescript className="h-8 w-8 md:h-12 md:w-12 text-center" />
              <p className="text-center text-nd mt-4">Typescript</p>
            </div>
            <div
              className="flex flex-col items-center justify-center transition-colors duration-500 dark:hover:bg-stone-600 dark:bg-stone-700/30 backdrop-blur-sm bg-stone-200/30 hover:bg-stone-200 h-24 md:w-32  w-24 md:h-32  rounded-lg"
              data-aos="fade-up"
              data-aos-delay="750"
            >
              <SiReact className="h-8 w-8 md:h-12 md:w-12 text-center" />
              <p className="text-center text-nd mt-4">React</p>
            </div>
          </div>
          <div className="flex gap-4 md:gap-8 flex-row md:flex:col">
            <div
              className="flex flex-col items-center justify-center transition-colors duration-500 dark:hover:bg-stone-600 dark:bg-stone-700/30 backdrop-blur-sm bg-stone-200/30 hover:bg-stone-200 h-24 md:w-32  w-24 md:h-32  rounded-lg"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              <SiNodedotjs className="h-8 w-8 md:h-12 md:w-12 text-center" />
              <p className="text-center text-nd mt-4">NodeJS</p>
            </div>
            <div
              className="flex flex-col items-center justify-center transition-colors duration-500 dark:hover:bg-stone-600 dark:bg-stone-700/30 backdrop-blur-sm bg-stone-200/30 hover:bg-stone-200 h-24 md:w-32  w-24 md:h-32  rounded-lg"
              data-aos="fade-up"
              data-aos-delay="1250"
            >
              <SiMongodb className="h-8 w-8 md:h-12 md:w-12 text-center" />
              <p className="text-center text-nd mt-4">MongoDB</p>
            </div>
          </div>
        </div>
        <p className="font-rubik text-center mt-8 text-sm xs:text-md sm:text-lg md:text-2xl w-3/4">
          Principais bibliotecas que utilizo para estilização:
        </p>
        <div className="flex flex-col my-10 md:flex-row items-center w-1/2 md:w-4/5 lg:w-4/5 xl:w-1/2 gap-4 md:gap-8 justify-center">
          <div className="flex gap-4 md:gap-8 flex-row md:flex:col">
            <div
              className="flex flex-col items-center justify-center transition-colors duration-500 dark:hover:bg-stone-600 dark:bg-stone-700/30 backdrop-blur-sm bg-stone-200/30 hover:bg-stone-200 h-24 md:w-32  w-24 md:h-32  rounded-lg"
              data-aos="fade-up"
              data-aos-delay="1500"
            >
              <SiStyledcomponents className="h-8 w-8 md:h-12 md:w-12 text-center" />
              <p className="text-center text-sm md:text-md mt-4">
                Styled Components
              </p>
            </div>
            <div
              className="flex flex-col items-center justify-center transition-colors duration-500 dark:hover:bg-stone-600 dark:bg-stone-700/30 backdrop-blur-sm bg-stone-200/30 hover:bg-stone-200 h-24 md:w-32  w-24 md:h-32  rounded-lg"
              data-aos="fade-up"
              data-aos-delay="1750"
            >
              <SiTailwindcss className="h-8 w-8 md:h-12 md:w-12 text-center" />
              <p className="text-center text-sm md:text-md mt-4">TailwindCSS</p>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-center transition-colors duration-500 dark:hover:bg-stone-600 dark:bg-stone-700/30 backdrop-blur-sm bg-stone-200/30 hover:bg-stone-200 h-24 md:w-32  w-24 md:h-32  rounded-lg"
            data-aos="fade-up"
            data-aos-delay="2000"
          >
            <SiFramer className="h-8 w-8 md:h-12 md:w-12 text-center" />
            <p className="text-center text-sm md:text-md mt-4">Framer Motion</p>
          </div>
        </div>
        <button
          className="w-4/5 sm:w-1/2 md:w-3/4 xl:w-1/2 text-center text-lg md:text-xl relative bg-stone-900 hover:bg-stone-700/30 focus:outlin/30e-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 text-white font-semibold h-12 px-6 rounded-lg dark:bg-stone-700/30 backdrop-blur-sm dark:hover:b/30g-stone-600 pointer-events-auto"
          onClick={() => navigate("/")}
        >
          Voltar
        </button>
      </div>
    </div>
  );
}
