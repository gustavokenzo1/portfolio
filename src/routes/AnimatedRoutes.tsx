import { Route, Routes, useLocation } from "react-router-dom";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";

import { AnimatePresence } from "framer-motion";
import About from "../pages/About";
import LandingPage from "../pages/LandingPage";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </AnimatePresence>
  );
}
