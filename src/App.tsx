import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="bg-gray-900">
      <Header />
      <Hero />
      <Portfolio />
      <About />
      <Skills />
      <Testimonials />
      <Services />
      <Footer />
    </div>
  );
};

export default App;
