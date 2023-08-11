import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Projects />
      <AboutPage />
      <Skills />
      <ContactPage />
    </>
  );
}

export default App;
