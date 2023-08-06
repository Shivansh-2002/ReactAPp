import React from 'react';
import './style.css';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <div className="cont">
        <div className="header-text">
          <h1>Hey There!</h1>
          <h3>
            I'm Shivansh, Welcome to my Portfolio website
          </h3>
        </div>
      </div>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
