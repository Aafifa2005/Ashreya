import CinematicHero from "./components/CinematicHero";
import Resume from "./components/Resume";
import Certification from "./components/Certification";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <>
      <CinematicHero />
      <Resume />
      <Certification />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
