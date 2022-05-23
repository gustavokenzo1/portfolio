import { Route, Routes, useLocation } from "react-router-dom";
import About from "./About";
import LandingPage from "./LandingPage";

import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
}
