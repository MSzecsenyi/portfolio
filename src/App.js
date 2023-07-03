import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
// import Footer from "./Components/Footer";


function App() {

  return (
    <div className="App">
      <Home />
      <About />
      <Experience />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
