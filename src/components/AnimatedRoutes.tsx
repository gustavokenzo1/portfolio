import { Route, Routes, useLocation } from "react-router-dom";
import About from "./About";
import LandingPage from "./LandingPage";

import { AnimatePresence } from "framer-motion";
import Experience from "./Experience";
import Projects from "./Projects";

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
