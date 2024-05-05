import { AboutPage } from "./AboutPage";
import "./App.css";
import { Appbar } from "./Appbar";
import { Experience } from './Experience';
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
      <Experience/>
    </>
  );
}


export default App;
