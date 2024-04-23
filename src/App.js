import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Sliders from "./components/Slider";
import Footer from "./components/Footer";
import CarouselWithTabs from "./components/CarouselWithTabs";
import WhyChooseUs from "./components/WhyChooseUs";
import About from "./components/About";
import FeaturedProJects from "./components/FeaturedProJects";
import TestimonialCarousel from "./components/TestimonialCarousel";
import HowWorks from "./components/HowWorks";
import Services from "./components/Services";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <div className="App">
      <Header />
      <Sliders />
      <About />
      <FeaturedProJects />
      <CarouselWithTabs />
      <HowWorks />
      <Services />
      <WhyChooseUs />
      <TestimonialCarousel />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
