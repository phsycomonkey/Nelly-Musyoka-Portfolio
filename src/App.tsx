import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import MobileNav from './components/MobileNav';
import Footer from './components/Footer';
import Home from './pages/Home';
import CaseStudies from './pages/CaseStudies';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeStudyId, setActiveStudyId] = useState<string | null>(null);
  
  const scrollPositions = useRef<{ [key: string]: number }>({});
  const previousPage = useRef<string>('home');

  // Handle page changes
  const handlePageChange = (newPage: string) => {
    // Save current scroll position before changing page
    scrollPositions.current[currentPage] = window.scrollY;
    previousPage.current = currentPage;
    setCurrentPage(newPage);
  };

  useEffect(() => {
    // Restore scroll position or scroll to top
    if (activeStudyId && currentPage === 'cases') {
      // Handled inside CaseStudies component
    } else if (scrollPositions.current[currentPage] !== undefined) {
      // If we're going back to a page we've visited, restore scroll
      window.scrollTo(0, scrollPositions.current[currentPage]);
    } else {
      window.scrollTo(0, 0);
    }
  }, [currentPage]);

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Navbar currentPage={currentPage} setCurrentPage={handlePageChange} />
      
      <main className="flex-grow pt-16 md:pt-20 pb-20 md:pb-0">
        {currentPage === 'home' && <Home setCurrentPage={handlePageChange} setActiveStudyId={setActiveStudyId} />}
        {currentPage === 'cases' && <CaseStudies activeStudyId={activeStudyId} setActiveStudyId={setActiveStudyId} setCurrentPage={handlePageChange} previousPage={previousPage.current} />}
        {currentPage === 'resume' && <Resume />}
        {currentPage === 'contact' && <Contact />}
      </main>
      
      <Footer setCurrentPage={handlePageChange} />
      <MobileNav currentPage={currentPage} setCurrentPage={handlePageChange} />
    </div>
  );
}
