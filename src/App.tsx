import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MobileNav from './components/MobileNav';
import Footer from './components/Footer';
import Home from './pages/Home';
import CaseStudies from './pages/CaseStudies';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="flex-grow pt-16 md:pt-20 pb-20 md:pb-0">
        {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />}
        {currentPage === 'cases' && <CaseStudies />}
        {currentPage === 'resume' && <Resume />}
        {currentPage === 'contact' && <Contact />}
      </main>
      
      <Footer setCurrentPage={setCurrentPage} />
      <MobileNav currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}
