import { FeedGet } from "./FeedGet/src/FeedGet";
import { BrowserRouter as Router } from "react-router-dom";
import DarkModeToggle from "./components/DarkModeToggle";
import AnimatedRoutes from "./components/AnimatedRoutes";

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  return (
    <>
      <Router>
        <DarkModeToggle />
        <FeedGet apiKey={API_KEY!} />
        <AnimatedRoutes />
      </Router>
    </>
  );
}

export default App;
