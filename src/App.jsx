import { AboutPage } from "./AboutPage";
import "./App.css";
import { Appbar } from "./Appbar";
import { MainContent } from "./MainContent";
import { Projects } from './Projects';
import { Skills } from "./Skills";

function App() {
  return (
    <>
      <Appbar />
      <MainContent />
      <AboutPage />
      <Skills />
      <Projects/>
    </>
  );
}


export default App;
