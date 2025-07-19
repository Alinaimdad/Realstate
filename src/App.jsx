import React from 'react';
// Main component files
import Navbartemp from './components/Navbartemp';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';


// Framer Motion
import { motion } from 'framer-motion';

const App = () => {
  return (
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Header />
      <Navbartemp />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </motion.div>
  );
};

export default App;



