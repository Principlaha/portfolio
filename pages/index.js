import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import Navigation from "../src/components/Navigation";
import Portfolio from "../src/components/Portfolio";

const Home = () => {
  return (
    <>
      <Navigation />
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
