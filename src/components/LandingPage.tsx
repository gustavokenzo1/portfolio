import DarkModeToggle from "./DarkModeToggle";

export default function LandingPage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <DarkModeToggle />
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row justify-center md:justify-around items-center w-full lg:w-3/4 h-full">
          <div className="flex items-center justify-center m-10">
            <img
              src="https://github.com/gustavokenzo1.png"
              alt="Foto do meu rosto com fundo desfocado e escuro, utilizando roupa azul e óculos"
              className="rounded-full w-3/4 sm:w-1/2 md:w-3/4"
            />
          </div>
          <div className="w-full md:w-1/2 h-1/3 p-4 flex flex-col justify-around mt-10">
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
              <button className="w-1/2 md:w-3/4 xl:w-1/2 text-center md:text-left relative bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-sm text-white font-semibold h-12 px-6 rounded-lg dark:bg-slate-700 dark:hover:bg-slate-600 pointer-events-auto">
                Sobre
              </button>
              <button className="w-1/2 md:w-3/4 xl:w-1/2 text-center md:text-left relative bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-sm text-white font-semibold h-12 px-6 rounded-lg dark:bg-slate-700 dark:hover:bg-slate-600 pointer-events-auto">
                Experiência
              </button>
              <button className="w-1/2 md:w-3/4 xl:w-1/2 text-center md:text-left relative bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-sm text-white font-semibold h-12 px-6 rounded-lg dark:bg-slate-700 dark:hover:bg-slate-600 pointer-events-auto">
                Projetos
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
