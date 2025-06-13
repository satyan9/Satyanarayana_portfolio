import Navbar from './components/Navbar/navbar';
import Intro from './components/Introo/intro';
import Skills from './components/Skills/skills';
import Project from './components/Project/project';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;