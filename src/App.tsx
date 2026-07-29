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
  const currentPageRef = useRef<string>('home');

  useEffect(() => {
    currentPageRef.current = currentPage;
  }, [currentPage]);

  useEffect(() => {
    const handleHashChange = () => {
      // Save scroll position for the page we are leaving
      scrollPositions.current[currentPageRef.current] = window.scrollY;
      previousPage.current = currentPageRef.current;
      
      const hash = window.location.hash.replace('#', '');
      
      // Basic routing logic
      if (hash.startsWith('/cases/')) {
        const id = hash.replace('/cases/', '');
        setActiveStudyId(id);
        setCurrentPage('cases');
      } else if (hash === '/cases') {
        setActiveStudyId(null);
        setCurrentPage('cases');
      } else if (hash === '/resume') {
        setCurrentPage('resume');
      } else if (hash === '/contact') {
        setCurrentPage('contact');
      } else {
        setCurrentPage('home');
      }
    };
    
    // Set initial state from hash
    if (window.location.hash) {
      handleHashChange();
    }
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handlePageChange = (newPage: string) => {
    scrollPositions.current[currentPage] = window.scrollY;
    previousPage.current = currentPage;
    
    // Update hash which will trigger state update
    if (newPage === 'home') {
      window.location.hash = '#/';
    } else {
      window.location.hash = `#/${newPage}`;
    }
  };

  const handleStudyChange = (id: string | null) => {
    if (id) {
      window.location.hash = `#/${currentPage}/${id}`;
    } else {
      window.location.hash = `#/${currentPage}`;
    }
  };

  useEffect(() => {
    // Restore scroll position or scroll to top
    if (activeStudyId && currentPage === 'cases') {
      // Handled inside CaseStudies component
    } else if (scrollPositions.current[currentPage] !== undefined) {
      window.scrollTo(0, scrollPositions.current[currentPage]);
    } else {
      window.scrollTo(0, 0);
    }
  }, [currentPage, activeStudyId]);

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Navbar currentPage={currentPage} setCurrentPage={handlePageChange} />
      
      <main className="flex-grow pt-16 md:pt-20 pb-20 md:pb-0 relative z-10">
        {currentPage === 'home' && <Home setCurrentPage={handlePageChange} setActiveStudyId={handleStudyChange} />}
        {currentPage === 'cases' && <CaseStudies activeStudyId={activeStudyId} setActiveStudyId={handleStudyChange} setCurrentPage={handlePageChange} previousPage={previousPage.current} />}
        {currentPage === 'resume' && <Resume />}
        {currentPage === 'contact' && <Contact />}
      </main>
      
      <Footer setCurrentPage={handlePageChange} />
      <MobileNav currentPage={currentPage} setCurrentPage={handlePageChange} />
    </div>
  );
}
