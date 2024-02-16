import logo from './logo.svg';
import './App.css';
import HeroSection from './Components/HeroSection';
import Preloader from './Components/common/Preloader';
import Topbutton from './Components/common/Topbutton';
import AboutSection from './Components/AboutSection';
import TokenomicsSection from './Components/TokenomicsSection';
import UtilityAndUseCase from './Components/UtilityAndUseCase';
import Roadmap from './Components/Roadmap';
import FAQ_Section from './Components/FAQ_Section';
import Footer_Section from './Components/Footer_Section';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      once: true, duration:1500,
    });
  }, [])
  return (
    <div className="App overflow-hidden">
      <Preloader />
      <Topbutton />
      <HeroSection />
      <AboutSection />
      <TokenomicsSection />
      <UtilityAndUseCase />
      <Roadmap />
      <FAQ_Section />
      <Footer_Section />
    </div>
  );
}

export default App;
