import './css/fonts.css';
import './App.css';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <div className={'mainContainer'}>
        <Home/>
        <AboutMe/>
        <Experience/>
        <Projects/>
        <Contact/>
      </div>
    </>
  );
}

export default App;
