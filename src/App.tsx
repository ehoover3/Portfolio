import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

import Navigation from "./components/navbar";
import Hero from "./components/hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import About from "./components/About";
import Footer from "./components/footer";

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Hero />
      <Projects />
      {/* <Skills /> */}
      <Education />
      <About />

      <Footer />
    </div>
  );
}

export default App;
