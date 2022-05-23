import { BsCheck2Circle } from "react-icons/bs";
import feedget from "../assets/feedget.png";
import matriculazy from "../assets/matriculazy.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-2xl md:text-4xl my-10 font-extrabold text-center">
        Projetos
      </h1>
      <h1 className="text-xl md:text-2xl font-rubik text-center">
        Aqui só serão mostrados os meus queridinhos. Ainda há diversos outros
        projetos que podem ser encontrados no meu GitHub!
      </h1>
      <div className="flex flex-col gap-4 p-10 mt-10">
        <motion.div
          className="bg-slate-200 dark:bg-slate-800 shadow-2xl w-full gap-20 p-8 flex items-center"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 200 },
            exit: {
              opacity: 0,
              x: 200,
              transition: { duration: 1 },
            },
          }}
        >
          <img
            src="https://raw.githubusercontent.com/gustavokenzo1/SpaceX/main/thumbnail.png"
            alt="SpaceX"
            className="h-96 rounded-lg"
          />
          <div>
            <h2 className="text-2xl md:text-4xl font-extrabold mb-8">
              SpaceBoard
            </h2>
            <p className="text-lg md:text-xl font-rubik">
              Um Dashboard interativo em 3D para visualizar informações sobre
              lançamentos futuros e anteriores de foguetes da SpaceX, por meio
              do consumo de uma API em GraphQL.
            </p>
            <p className="text-lg md:text-xl mt-8">
              Demonstração:{"  "}
              <a
                href="https://gustavokenzo1.github.io/SpaceX/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 dark:text-slate-300"
              >
                https://gustavokenzo1.github.io/SpaceX/
              </a>
            </p>
            <p className="text-lg md:text-xl">
              GitHub:{"  "}
              <a
                href="https://github.com/gustavokenzo1/SpaceX"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 dark:text-slate-300"
              >
                https://github.com/gustavokenzo1/SpaceX
              </a>
            </p>
            <div className="flex flex-col gap-4 mt-8">
              <div className="flex flex-row items-center">
                <BsCheck2Circle size={24} />
                <span className="ml-2 text-lg">React</span>
              </div>
              <div className="flex flex-row items-center">
                <BsCheck2Circle size={24} />
                <span className="ml-2 text-lg">React Three Fiber</span>
              </div>
              <div className="flex flex-row items-center">
                <BsCheck2Circle size={24} />
                <span className="ml-2 text-lg">TypeScript</span>
              </div>
              <div className="flex flex-row items-center">
                <BsCheck2Circle size={24} />
                <span className="ml-2 text-lg">Styled Components</span>
              </div>
              <div className="flex flex-row items-center">
                <BsCheck2Circle size={24} />
                <span className="ml-2 text-lg">GraphQL</span>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="bg-slate-200 text-right self-end dark:bg-slate-800 shadow-2xl mt-10 w-full gap-20 p-8 flex flex-row-reverse items-center"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -200 },
            exit: {
              opacity: 0,
              x: -200,
              transition: { duration: 1 },
            },
          }}
        >
          <img src={feedget} alt="FeedGet" className="h-96 rounded-lg" />
          <div>
            <h2 className="text-2xl md:text-4xl font-extrabold mb-8">
              FeedGet
            </h2>
            <p className="text-lg md:text-xl font-rubik">
              Uma evolução de um projeto feito na Next Level Week da Rocketseat.
              Consiste em um widget de feedbacks que permite que o usuário envie
              feedbacks para o dono do projeto, com painéis de acompanhamento e
              envio de e-mails. Aliás, caso não tenha notado, o FeedGet está
              sendo usado agora mesmo nesse portfólio.
            </p>
            <p className="text-lg md:text-xl mt-8">
              Demonstração:{"  "}
              <a
                href="https://nlw-return-impulse-drab.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 dark:text-slate-300"
              >
                https://nlw-return-impulse-drab.vercel.app/
              </a>
            </p>
            <p className="text-lg md:text-xl">
              GitHub:{"  "}
              <a
                href="https://github.com/gustavokenzo1/nlw-return-impulse"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 dark:text-slate-300"
              >
                https://github.com/gustavokenzo1/nlw-return-impulse
              </a>
            </p>
            <div className="flex flex-col items-end gap-4 mt-8">
              <div className="flex flex-row-reverse items-center">
                <BsCheck2Circle size={24} />
                <span className="mr-2 text-lg">React</span>
              </div>
              <div className="flex flex-row-reverse items-center">
                <BsCheck2Circle size={24} />
                <span className="mr-2 text-lg">TypeScript</span>
              </div>
              <div className="flex flex-row-reverse items-center">
                <BsCheck2Circle size={24} />
                <span className="mr-2 text-lg">TailwindCSS</span>
              </div>
              <div className="flex flex-row-reverse items-center">
                <BsCheck2Circle size={24} />
                <span className="mr-2 text-lg">NodeJS</span>
              </div>
              <div className="flex flex-row-reverse items-center">
                <BsCheck2Circle size={24} />
                <span className="mr-2 text-lg">PostgreSQL</span>
              </div>
              <div className="flex flex-row-reverse items-center">
                <BsCheck2Circle size={24} />
                <span className="mr-2 text-lg">Prisma</span>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="bg-slate-200 dark:bg-slate-800 shadow-2xl w-full mt-10 gap-20 p-8 flex items-center"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 200 },
            exit: {
              opacity: 0,
              x: 200,
              transition: { duration: 1 },
            },
          }}
        >
          <img
            src={matriculazy}
            alt="MatricuLazy"
            className="h-96 rounded-lg"
          />
          <div>
            <h2 className="text-2xl md:text-4xl font-extrabold mb-8">
              MatricuLazy
            </h2>
            <p className="text-lg md:text-xl font-rubik">
              Um gerador de grades horárias para qualquer curso de qualquer
              faculdade que utilize o sistema SIGAA, com dados coletados
              utilizando Web Scraping.
            </p>
            <p className="text-lg md:text-xl mt-8">
              Demonstração:{"  "}
              <a
                href="https://matriculazy.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 dark:text-slate-300"
              >
                https://matriculazy.vercel.app/
              </a>
            </p>
            <p className="text-lg md:text-xl">
              GitHub:{"  "}
              <a
                href="https://github.com/gustavokenzo1/matriculazy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 dark:text-slate-300"
              >
                https://github.com/gustavokenzo1/matriculazy
              </a>
            </p>
            <div className="flex flex-col gap-4 mt-8">
              <div className="flex flex-row items-center">
                <BsCheck2Circle size={24} />
                <span className="ml-2 text-lg">React</span>
              </div>
              <div className="flex flex-row items-center">
                <BsCheck2Circle size={24} />
                <span className="ml-2 text-lg">Styled Components</span>
              </div>
              <div className="flex flex-row items-center">
                <BsCheck2Circle size={24} />
                <span className="ml-2 text-lg">TypeScript</span>
              </div>
              <div className="flex flex-row items-center">
                <BsCheck2Circle size={24} />
                <span className="ml-2 text-lg">NodeJS</span>
              </div>
              <div className="flex flex-row items-center">
                <BsCheck2Circle size={24} />
                <span className="ml-2 text-lg">MongoDB</span>
              </div>
              <div className="flex flex-row items-center">
                <BsCheck2Circle size={24} />
                <span className="ml-2 text-lg">Puppeteer</span>
              </div>
              <div className="flex flex-row items-center">
                <BsCheck2Circle size={24} />
                <span className="ml-2 text-lg">Cheerio</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.button
        className="w-4/5 mb-10 sm:w-1/2 md:w-3/4 xl:w-1/2 text-center text-lg md:text-xl bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-white font-semibold h-12 px-6 rounded-lg dark:bg-slate-700 dark:hover:bg-slate-600 pointer-events-auto"
        onClick={() => navigate("/")}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
          exit: {
            opacity: 0,
            scale: 0,
            transition: { duration: 1 },
          },
        }}
      >
        Voltar
      </motion.button>
    </div>
  );
}
