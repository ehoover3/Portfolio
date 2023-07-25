import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

import Navigation from "./components/navbar";
import Hero from "./components/hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Plan from "./components/About";
import AboutUs from "./components/about-us";
import ChooseCareer from "./components/choose-career";
import Footer from "./components/footer";

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Hero />
      {/* <Skills /> */}
      <Projects />
      {/* <Plan /> */}
      <AboutUs />
      {/* <Testimonial /> */}
      {/* <ChooseCareer /> */}
      <Footer />
    </div>
  );
}

export default App;
