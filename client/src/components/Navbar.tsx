import { useState, useEffect } from 'react';
import { scrollToSection } from '@/lib/utils';
import kisyangaLogo from '../assets/kisyanga-logo.jpg';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`bg-primary text-white shadow-md sticky top-0 z-50 ${scrolled ? 'shadow-lg' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="flex items-center space-x-2" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
            <img 
              src={kisyangaLogo} 
              alt="Kisyanga FC Logo" 
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-bold text-xl">Kisyanga FC</span>
          </a>
          <div className="hidden md:flex items-center space-x-8">
            {[
              { id: 'home', label: 'Home' },
              { id: 'team', label: 'Team' },
              { id: 'fixtures', label: 'Fixtures' },
              { id: 'news', label: 'News' },
              { id: 'history', label: 'History' },
              { id: 'gallery', label: 'Gallery' },
              { id: 'shop', label: 'Shop' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                className="hover:text-secondary transition" 
                onClick={(e) => { e.preventDefault(); handleNavClick(item.id); }}
              >
                {item.label}
              </a>
            ))}
          </div>
          <button 
            id="mobile-menu-button" 
            className="md:hidden text-white" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden py-4 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-4">
            {[
              { id: 'home', label: 'Home' },
              { id: 'team', label: 'Team' },
              { id: 'fixtures', label: 'Fixtures' },
              { id: 'news', label: 'News' },
              { id: 'history', label: 'History' },
              { id: 'gallery', label: 'Gallery' },
              { id: 'shop', label: 'Shop' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                className="hover:text-secondary transition" 
                onClick={(e) => { e.preventDefault(); handleNavClick(item.id); }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
