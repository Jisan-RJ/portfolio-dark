import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import What from './components/What'
import Resume from './components/Resume';
import Footer from './components/Footer';

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);
  return (
    <>
      <Header darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <Banner />
      <About/>
      <What/>
      <Resume/>
      <Footer/>
    </>
  )
}

export default App