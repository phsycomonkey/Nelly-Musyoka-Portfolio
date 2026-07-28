import { Home, Briefcase, FileText, AtSign } from 'lucide-react';

interface MobileNavProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function MobileNav({ currentPage, setCurrentPage }: MobileNavProps) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'cases', label: 'Cases', icon: Briefcase },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'contact', label: 'Contact', icon: AtSign }
  ];

  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_-1px_8px_rgba(0,0,0,0.04)] md:hidden pb-safe">
      <div className="flex justify-around items-center h-20 px-2">
        {navItems.map(item => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`flex flex-col items-center justify-center gap-1 min-w-[72px] transition-colors ${
                isActive ? 'text-secondary' : 'text-on-surface-variant'
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className={`font-label-md text-[10px] uppercase ${isActive ? 'font-bold' : ''}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
