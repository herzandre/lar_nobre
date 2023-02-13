import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global-styles.css';
import { Navbar } from './components/Navbar';
import { Home } from './templates/Home';
import { About } from './templates/About';
import { Services } from './templates/Services';
import { Contact } from './templates/Contact';
import { Footer } from './templates/Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <About />
    <Services />
    <Contact />
    <Footer />
  </React.StrictMode>
);
