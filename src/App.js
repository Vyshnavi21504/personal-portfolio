import logo from './logo.svg';
import './App.css';
import {Banner} from './components/Banner';
import {Skills} from './components/Skills';
import { NavBar } from './components/NavBar';
import {Projects} from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
