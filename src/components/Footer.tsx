interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  return (
    <footer className="w-full bg-surface-container py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-5 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          <div className="max-w-md text-center md:text-left mx-auto md:mx-0">
            <img 
              alt="Logo" 
              className="h-12 w-auto object-contain mb-6 mx-auto md:mx-0" 
              src="https://lh3.googleusercontent.com/aida/AP1WRLsC-Fda97V4UJez8Iz95Q_HBofMyZfv7nI4qKJpxjLfpce4oOQpPxRNs0A9Vz76nG4Svq8zaTdQMRAzaAqqy_OOTJNRGAFg-iTnJtLkRt3J61vUtR2RUTc3usZvdm46TIw-qPtD10G2Ctpq8oJHGU0VYCmhKreZ8D7yEXIT44PIp4qRIA-oRZ76pQqYIP-a88GUfik0h5ZSi8OY3E2Mvc1ysOcm1QpMPZCBSynY42JvV5mXNbQbZSsau1M"
            />
            <h2 className="font-headline-md text-primary mb-2 md:hidden">Nelly Nzula Musyoka</h2>
            <p className="text-on-surface-variant font-body-md leading-relaxed">
              Steady expertise and approachable warmth in strategic design and leadership. Delivering premium, relationship-first digital experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-12 w-full md:w-auto text-center md:text-left hidden md:grid">
            <div className="flex flex-col gap-4">
              <h4 className="font-label-md uppercase tracking-widest text-primary">Navigation</h4>
              <nav className="flex flex-col gap-2">
                <button onClick={() => setCurrentPage('home')} className="text-on-surface-variant hover:text-primary transition-colors text-left">Home</button>
                <button onClick={() => setCurrentPage('cases')} className="text-on-surface-variant hover:text-primary transition-colors text-left">Case Studies</button>
                <button onClick={() => setCurrentPage('resume')} className="text-on-surface-variant hover:text-primary transition-colors text-left">Resume</button>
              </nav>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-label-md uppercase tracking-widest text-primary">Connect</h4>
              <nav className="flex flex-col gap-2">
                <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">LinkedIn</a>
                <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">Email</a>
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
