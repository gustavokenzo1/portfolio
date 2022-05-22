import LandingPage from "./components/LandingPage";
import { FeedGet } from "./FeedGet/src/FeedGet";

function App() {
  return (
    <>
      <LandingPage />
      <FeedGet apiKey="" />
    </>
  );
}

export default App;
