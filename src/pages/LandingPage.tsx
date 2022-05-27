import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import { IoMdCube } from "react-icons/io";
import profile_picture from "../assets/profile_picture.webp";

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
    } else if (type === "cubeOut") {
      setExitAnimationType({
        x: -window.innerWidth,
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
        <div className="flex p-5 mt-10 sm:mt-0 flex-col md:flex-row justify-around items-center w-full xl:w-3/4 h-full">
          <motion.div
            className="flex items-center justify-center"
            initial={
              window.innerHeight < window.innerWidth
                ? { y: "-30vh", opacity: 0 }
                : { scale: 0.75, opacity: 0 }
            }
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={
              window.innerHeight < window.innerWidth
                ? { type: "spring", stiffness: 100 }
                : { duration: 1 }
            }
          >
            <img
              src={profile_picture}
              alt="Foto do meu rosto com fundo desfocado e escuro, utilizando roupa azul e óculos"
              className="rounded-full w-1/2 md:w-3/4"
            />
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 p-4 flex flex-col justify-around mt-10"
            initial={
              window.innerHeight > window.innerWidth
                ? { opacity: 0 }
                : { x: "30vw", opacity: 0 }
            }
            animate={{ x: 0, opacity: 1 }}
            transition={
              window.innerHeight < window.innerWidth
                ? { type: "spring", stiffness: 50 }
                : { duration: 1 }
            }
          >
            <div className="mb-4">
              <h1 className="text-center md:text-left text-lg sm:text-2xl md:text-2xl lg:text-3xl text-stone-900 tracking-tight font-extrabold dark:text-white">
                Olá, meu nome é Gustavo Kenzo, e esse é o meu portfólio!
              </h1>
            </div>
            <p className="font-rubik text-center md:text-left text-sm sm:text-md md:text-md lg:text-lg">
              Gosto de trabalhar tanto no Front-end quanto no Back-end. Porém,
              atualmente estou focando mais no Front-end, e aqui você poderá
              conhecer mais sobre mim, minhas experiências e meus projetos.
            </p>
            <div className="flex flex-col items-center md:items-start w-full mt-8">
              <button
                className="mb-1 w-4/5 sm:w-1/2 md:w-3/4 xl:w-1/2 text-center md:text-left relative border-stone-900 dark:border-white py-2 px-4 focus:outline-none hover:bg-stone-800 dark:hover:bg-stone-200 dark:hover:text-stone-800 hover:text-stone-100 rounded-lg transition-colors duration-300"
                onClick={() => {
                  handleAnimationType("slideToRight");
                  handleNavigate("/about");
                }}
              >
                Sobre
              </button>
              <div className="flex-grow h-[2px] bg-stone-800 dark:bg-stone-400  w-4/5 sm:w-1/2 md:w-3/4 xl:w-1/2 mb-8" />
              <button
                className="mb-1 w-4/5 sm:w-1/2 md:w-3/4 xl:w-1/2 text-center md:text-left relative border-stone-900 dark:border-white py-2 px-4 focus:outline-none hover:bg-stone-800 dark:hover:bg-stone-200 dark:hover:text-stone-800 hover:text-stone-100 rounded-lg transition-colors duration-300"
                onClick={() => {
                  handleAnimationType("shrink");
                  handleNavigate("/experience");
                }}
              >
                Experiência
              </button>
              <div className="flex-grow h-[2px] bg-stone-800 dark:bg-stone-400  w-4/5 sm:w-1/2 md:w-3/4 xl:w-1/2 mb-8" />
              <button
                className="mb-1 w-4/5 sm:w-1/2 md:w-3/4 xl:w-1/2 text-center md:text-left relative border-stone-900 dark:border-white py-2 px-4 focus:outline-none hover:bg-stone-800 dark:hover:bg-stone-200 dark:hover:text-stone-800 hover:text-stone-100 rounded-lg transition-colors duration-300"
                onClick={() => {
                  handleAnimationType("cubeOut");
                  handleNavigate("/projects");
                }}
              >
                Projetos
              </button>
              <div className="flex-grow h-[2px] bg-stone-800 dark:bg-stone-400  w-4/5 sm:w-1/2 md:w-3/4 xl:w-1/2 mb-8" />
              <div className="flex gap-4 sm:gap-6 my-4">
                <button>
                  <a
                    href="https://github.com/gustavokenzo1
                  "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub size={32} />
                  </a>
                </button>
                <button>
                  <a
                    href="https://www.linkedin.com/in/gustavo-kenzo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillLinkedin size={32} />
                  </a>
                </button>
                <button>
                  <a
                    href="https://www.instagram.com/gustavokenzo1/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillInstagram size={32} />
                  </a>
                </button>
                <button>
                  <a
                    href="mailto:gustavokenzo314@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillMail size={32} />
                  </a>
                </button>
                <button>
                  <a
                    href="https://www.worldcubeassociation.org/persons/2015TAKE03"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoMdCube size={32} />
                  </a>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
