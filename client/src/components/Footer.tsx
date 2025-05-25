import { scrollToSection } from '@/lib/utils';
import { useState } from 'react';
import kisyangaLogo from '../assets/kisyanga-logo.jpg';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally connect to a newsletter subscription API
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src={kisyangaLogo} 
                alt="Kisyanga FC Logo" 
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="font-bold text-xl">Kisyanga FC</span>
            </div>
            <p className="text-gray-300 mb-4">
              Brotherhood, Grit & Glory since 2006. The Golden Bisya represents the spirit of unity and resilience.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/kisyanga_fc" className="text-gray-300 hover:text-secondary transition">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="https://twitter.com/kisyangafc" className="text-gray-300 hover:text-secondary transition">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition">
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { id: 'home', label: 'Home' },
                { id: 'team', label: 'Team' },
                { id: 'fixtures', label: 'Fixtures' },
                { id: 'news', label: 'News' },
                { id: 'history', label: 'History' }
              ].map((item) => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`} 
                    className="text-gray-300 hover:text-secondary transition"
                    onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-300 hover:text-secondary transition"
                  onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                >
                  Contact Us
                </a>
              </li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition">FAQs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition">Terms & Conditions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest updates and exclusive content.</p>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary text-gray-800" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="bg-secondary text-primary font-bold py-2 px-4 rounded-md hover:bg-accent transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2023 Kisyanga FC. All rights reserved.</p>
          <p className="text-gray-400 mt-2 md:mt-0">Designed and developed with <i className="fas fa-heart text-secondary"></i> for the Golden Bisya</p>
        </div>
      </div>
    </footer>
  );
}
