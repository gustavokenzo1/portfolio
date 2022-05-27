import { BrowserRouter as Router } from "react-router-dom";
import DarkModeToggle from "./components/DarkModeToggle";
import { motion } from "framer-motion";

import dark from "./assets/dark.webp";
import AnimatedRoutes from "./routes/AnimatedRoutes";

function App() {
  return (
    <>
      <Router>
        <motion.div
          className="absolute -z-10 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <picture>
            <source srcSet={dark} type="image/webp" />
            <img
              src={dark}
              alt="texture"
              className="h-screen w-screen flex-none max-w-none hidden dark:block"
            />
          </picture>
        </motion.div>
        <DarkModeToggle />
        <AnimatedRoutes />
      </Router>
    </>
  );
}

export default App;
