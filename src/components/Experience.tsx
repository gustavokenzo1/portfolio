import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import unb from "../assets/unb.png";
import orc from "../assets/orc.png";

export default function Experience() {
  const navigate = useNavigate();

  return (
    <div className="w-full flex min-h-screen flex-col items-center justify-center">
      <div className="w-full flex flex-col items-center">
        <motion.div
          className="p-5 md:p-10 my-10 m-5 md:m-10 bg-slate-50 dark:bg-slate-800 rounded-lg shadow-2xl flex flex-col items-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{
            scale: 0,
            opacity: 0,
            transition: { duration: 0.5 },
          }}
          transition={{ type: "spring", stiffness: 100, duration: 2 }}
        >
          <h1 className="text-2xl md:text-4xl mb-10 font-extrabold text-center">
            Experiência
          </h1>
          <div className="flex flex-col items-center w-full justify-center font-rubik">
            <motion.div className="h-full">
              <div className="flex flex-col mb-4 p-4 sm:flex-row justify-between items-start md:items-center gap-8 bg-slate-100 dark:bg-slate-700 shadow-lg max-w-[600px]">
                <div>
                  <div className="mb-4 font-roboto">
                    <strong>Universidade de Brasília</strong>
                    <br />
                    (Julho de 2021 - Atual)
                  </div>
                  Graduação em Engenharia de Software
                </div>
                <img
                  src={unb}
                  className="h-10 md:h-20 self-center"
                  alt="Logo da Universidade de Brasília, azul e verde com o formato do plano piloto (avião)"
                />
              </div>
              <div className="flex flex-col mb-4 p-4 sm:flex-row justify-between items-start md:items-center bg-slate-100 dark:bg-slate-700 shadow-lg max-w-[600px]">
                <div>
                  <div className="mb-4 font-roboto">
                    <strong>
                      Orc'estra Gamificação
                      <br />
                    </strong>
                    (Setembro de 2021 - Atual)
                  </div>
                  Assessor de Projetos <br />
                  Gerente de Capacitação
                </div>
                <img
                  src={orc}
                  className="h-20 mt-6 md:mt-0 self-center"
                  alt="Logo da Orc'estra Gamificação, fundo verde e uma letra O utilizando um capacete de Orc"
                />
              </div>
            </motion.div>
            <button
              className="w-4/5 mt-10 sm:w-1/2 md:w-3/4 xl:w-1/2 text-center text-lg md:text-xl bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-white font-semibold h-12 px-6 rounded-lg dark:bg-slate-700 dark:hover:bg-slate-600 pointer-events-auto"
              onClick={() => navigate("/")}
            >
              Voltar
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
