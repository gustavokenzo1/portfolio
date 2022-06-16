import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import unb from "../assets/unb.webp";
import orc from "../assets/orc.webp";

export default function Experience() {
  const navigate = useNavigate();

  return (
    <div className="w-full flex min-h-screen flex-col items-center justify-center">
      <div className="w-full flex flex-col items-center">
        <motion.div
          className="p-5 md:p-10 my-10 m-5 md:m-10 bg-stone-50/50 dark:bg-stone-800/30 backdrop-blur-sm rounded-lg shadow-2xl flex flex-col items-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{
            scale: 0,
            opacity: 0,
            transition: { duration: 0.5 },
          }}
          transition={{ type: "spring", stiffness: 100, duration: 2 }}
        >
          <h1 className="text-2xl md:text-4xl mb-10 font-roboto font-extrabold text-center">
            Experiência
          </h1>
          <div className="flex flex-col items-center w-full justify-center font-rubik">
            <div className="h-full">
              <div className="flex flex-col mb-4 p-4 sm:flex-row justify-between items-start md:items-center gap-8 bg-stone-100/30 dark:bg-stone-700/30 backdrop-blur-sm shadow-lg max-w-[600px]">
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
              <div className="flex flex-col mb-4 p-4 sm:flex-row justify-between items-start md:items-center bg-stone-100/30 dark:bg-stone-700/30 backdrop-blur-sm shadow-lg max-w-[600px]">
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
            </div>

            <h1 className="text-2xl md:text-4xl my-10 font-extrabold font-roboto text-center">
              Certificados
            </h1>
            <div className="h-full">
              <div className="flex flex-col mb-4 p-4 sm:flex-row justify-between items-start md:items-center gap-8 bg-stone-100/30 dark:bg-stone-700/30 backdrop-blur-sm shadow-lg max-w-[600px]">
                <div>
                  <div className="mb-4 font-roboto">
                    <strong>Harvard University</strong>
                    <br />
                    (Dezembro de 2021)
                  </div>
                  CS50X: Introduction to Computer Science <br />
                  <div className="mt-4 border-[1px] border-zinc-800 hover:bg-zinc-800 hover:text-zinc-100 transition-colors dark:hover:bg-zinc-100 dark:hover:text-zinc-800 dark:border-zinc-100 pl-2 py-1 rounded-xl w-[100px]">
                    <a
                      href="https://certificates.cs50.io/418577de-fb1a-4a19-be0f-08d12c624e89.pdf?size=letter"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Certificado
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mb-4 p-4 sm:flex-row justify-between items-start md:items-center gap-8 bg-stone-100/30 dark:bg-stone-700/30 backdrop-blur-sm shadow-lg max-w-[600px]">
                <div>
                  <div className="mb-4 font-roboto">
                    <strong>Harvard University</strong>
                    <br />
                    (Junho de 2022)
                  </div>
                  CS50W: Web Programming with Python and JavaScript <br />
                  <div className="mt-4 border-[1px] border-zinc-800 hover:bg-zinc-800 hover:text-zinc-100 transition-colors dark:hover:bg-zinc-100 dark:hover:text-zinc-800 dark:border-zinc-100 pl-2 py-1 rounded-xl w-[100px]">
                    <a
                      href="https://certificates.cs50.io/16d53aac-0ec9-48ca-b76c-a45a235d3e3b.pdf?size=letter"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Certificado
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mb-4 p-4 sm:flex-row justify-between items-start md:items-center bg-stone-100/30 dark:bg-stone-700/30 backdrop-blur-sm shadow-lg max-w-[600px]">
                <div>
                  <div className="mb-4 font-roboto">
                    <strong>
                      Orc'estra Gamificação
                      <br />
                    </strong>
                    (Maio de 2022)
                  </div>
                  Trilha NodeJS: Criação de APIs RESTful
                  <br />
                  com Autenticação JWT
                  <div className="mt-4 border-[1px] border-zinc-800 hover:bg-zinc-800 hover:text-zinc-100 transition-colors dark:hover:bg-zinc-100 dark:hover:text-zinc-800 dark:border-zinc-100 pl-2 py-1 rounded-xl w-[100px]">
                    <a
                      href="https://github.com/OrcestraGamificacao/Trilha-Back-end-05-22/tree/main/Kenzo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Certificado
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="w-4/5 mt-10 sm:w-1/2 md:w-3/4 xl:w-1/2 text-center text-lg md:text-xl bg-stone-900 hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 text-white font-semibold h-12 px-6 rounded-lg dark:bg-stone-700 dark:hover:bg-stone-600 pointer-events-auto"
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
