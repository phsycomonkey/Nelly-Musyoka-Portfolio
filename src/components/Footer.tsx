interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  return (
    <footer className="w-full bg-surface-container py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-5 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          <div className="max-w-md text-center md:text-left mx-auto md:mx-0">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-on-secondary font-display font-bold text-base tracking-tight shadow-md mb-6 mx-auto md:mx-0 select-none shrink-0">
              NN
            </div>
            <h2 className="font-headline-md text-primary mb-2 md:hidden">Nelly Nzula Musyoka</h2>
            <p className="text-on-surface-variant font-body-md leading-relaxed">
              Steady expertise and professional service in workspace operations, hospitality guest relations, and client services. Based in Dubai, UAE.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-12 w-full md:w-auto text-center md:text-left hidden md:grid">
            <div className="flex flex-col gap-4">
              <h4 className="font-label-md uppercase tracking-widest text-primary">Navigation</h4>
              <nav className="flex flex-col gap-2">
                <a href="#/" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }} className="text-on-surface-variant hover:text-primary transition-colors text-left">Home</a>
                <a href="#/cases" onClick={(e) => { e.preventDefault(); setCurrentPage('cases'); }} className="text-on-surface-variant hover:text-primary transition-colors text-left">Case Studies</a>
                <a href="#/resume" onClick={(e) => { e.preventDefault(); setCurrentPage('resume'); }} className="text-on-surface-variant hover:text-primary transition-colors text-left">Resume</a>
              </nav>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-label-md uppercase tracking-widest text-primary">Connect</h4>
              <nav className="flex flex-col gap-2">
                <a href="https://www.linkedin.com/in/nelly-nzula-7389a272/" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-colors">LinkedIn</a>
                <a href="mailto:Nmusyoka2023@gmail.com" className="text-on-surface-variant hover:text-primary transition-colors">Email</a>
              </nav>
            </div>
          </div>
          
        </div>
        
        <div className="mt-16 pt-8 border-t border-outline/10 text-on-surface-variant font-body-md text-sm text-center md:text-left">
          © {new Date().getFullYear()} Nelly Nzula Musyoka. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
