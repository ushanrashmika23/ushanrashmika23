import './App.css';
import './mideaQ.css';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'
import Reviews from './components/Reviews';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Experience />
      <Projects />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
