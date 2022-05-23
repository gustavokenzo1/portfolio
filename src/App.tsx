import { FeedGet } from "./FeedGet/src/FeedGet";
import { BrowserRouter as Router } from "react-router-dom";
import DarkModeToggle from "./components/DarkModeToggle";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <>
      <Router>
        <DarkModeToggle />
        <FeedGet apiKey="" />
        <AnimatedRoutes />
      </Router>
    </>
  );
}

export default App;
