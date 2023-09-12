import Navbar from "./Components/Navbar/Navbar";
import Toggle from "./Components/Toggle/Toggle";
import './App.css'
import Intro from "./Components/Intro/Intro";
import  Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Toggle />
      <Intro/>
      <Services />
      <Experience/>
      <Works />
      <Portfolio />
      <Contact />
      <Footer  />
      
    </div>
  );
}

export default App;
