import { AboutPage } from "./AboutPage";
import "./App.css";
import { Appbar } from "./Appbar";
import { MainContent } from "./MainContent";
import { Skills } from "./Skills";

function App() {
  return (
    <>
      <Appbar />
      <MainContent />
      <AboutPage />
      <Skills />
    </>
  );
}

export default App;
