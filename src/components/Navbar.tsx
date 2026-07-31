interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'cases', label: 'Case Studies' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-16 md:h-20 max-w-[1200px] mx-auto px-5 md:px-6 flex items-center justify-between">
        <a 
          href="#/"
          className="flex items-center gap-2 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage('home');
          }}
        >
          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-on-secondary font-display font-bold text-xs tracking-tight shadow-sm select-none shrink-0">
            NN
          </div>
          <span className="font-headline-sm text-primary tracking-tight hidden md:block">Nelly Nzula Musyoka</span>
          <span className="font-headline-sm text-on-surface md:hidden">Home</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-6 lg:gap-12 relative z-50 pointer-events-auto">
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#/${item.id === 'home' ? '' : item.id}`}
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage(item.id);
              }}
              className={`transition-colors font-label-md uppercase tracking-wider ${
                currentPage === item.id 
                   ? 'text-primary font-bold' 
                   : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
