import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import Navbar from './components/Navbar';
import MobileNav from './components/MobileNav';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import AnimatedBackground from './components/AnimatedBackground';
import Home from './pages/Home';
import CaseStudies from './pages/CaseStudies';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeStudyId, setActiveStudyId] = useState<string | null>(null);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const [isNavigating, setIsNavigating] = useState(false);
  
  const scrollPositions = useRef<{ [key: string]: number }>({});
  const previousPage = useRef<string>('home');
  const currentPageRef = useRef<string>('home');

  useEffect(() => {
    currentPageRef.current = currentPage;
    setIsNavigating(true);
    const timer = setTimeout(() => setIsNavigating(false), 400);
    return () => clearTimeout(timer);
  }, [currentPage, activeStudyId]);

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setExpandedImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-surface relative overflow-x-hidden">
      <CustomCursor />
      <AnimatedBackground />
      {/* Clean Executive Top Progress Bar Indicator */}
      {isNavigating && (
        <div className="fixed top-0 left-0 right-0 h-0.5 bg-secondary z-[10000] transition-all duration-300" />
      )}
      
      <Navbar currentPage={currentPage} setCurrentPage={handlePageChange} />
      
      <main className="flex-grow pt-16 md:pt-20 pb-20 md:pb-0 relative z-10">
        {currentPage === 'home' && (
          <Home 
            setCurrentPage={handlePageChange} 
            setActiveStudyId={handleStudyChange} 
            onViewImage={setExpandedImage}
            isImageExpanded={expandedImage !== null}
          />
        )}
        {currentPage === 'cases' && (
          <CaseStudies 
            activeStudyId={activeStudyId} 
            setActiveStudyId={handleStudyChange} 
            setCurrentPage={handlePageChange} 
            previousPage={previousPage.current} 
            onViewImage={setExpandedImage}
          />
        )}
        {currentPage === 'resume' && <Resume />}
        {currentPage === 'contact' && <Contact />}
      </main>
      
      <Footer setCurrentPage={handlePageChange} />
      <MobileNav currentPage={currentPage} setCurrentPage={handlePageChange} />

      {/* Lightbox Modal (Outside main wrapper, overlays everything including Navbar) */}
      <AnimatePresence>
        {expandedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpandedImage(null)}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 cursor-zoom-out"
          >
            {/* Close Button */}
            <button 
              onClick={() => setExpandedImage(null)}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white bg-secondary/90 hover:bg-secondary p-3.5 md:p-4 rounded-full transition-all duration-300 z-[99999] flex items-center justify-center cursor-pointer shadow-2xl border border-white/10 hover:scale-110"
              aria-label="Close image"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Image Container */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-[92vw] max-h-[82vh] flex items-center justify-center"
            >
              <img 
                src={expandedImage} 
                alt="Expanded view" 
                className="max-w-full max-h-[82vh] object-contain rounded-xl shadow-2xl border border-white/10 select-none pointer-events-none"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
