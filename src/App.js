import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import './style/App.css';
import Framework from './components/Framework/Framework';
import Portfolio from './components/Portfolio/Portfolio';

import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { useContext } from 'react';
import { themeContext } from './Context';
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? 'black' : '',
        color: darkMode ? 'white' : '',
      }}
    >
      <Navbar />
      <Intro />
      <Framework />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
