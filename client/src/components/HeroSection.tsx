import { scrollToSection } from '@/lib/utils';
import kisyangaLogo from '../assets/kisyanga-logo.jpg';

export default function HeroSection() {
  return (
    <section id="home" className="hero-section h-[85vh] flex items-center justify-center text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <img 
            src={kisyangaLogo} 
            alt="Kisyanga FC Logo" 
            className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-secondary"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">KISYANGA FC</h1>
        <p className="text-xl md:text-2xl mb-8 text-secondary font-semibold">Golden Basya | Brotherhood, Grit & Glory</p>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Founded in 2006 during Ntare School's Golden Jubilee, Kisyanga FC embodies the spirit of brotherhood, 
          resilience, and community that defines our alumni league.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#team" 
            className="bg-secondary text-primary font-bold py-3 px-6 rounded-md hover:bg-accent transition"
            onClick={(e) => { e.preventDefault(); scrollToSection('team'); }}
          >
            See Team
          </a>
          <a 
            href="#fixtures" 
            className="bg-primary border-2 border-secondary text-white font-bold py-3 px-6 rounded-md hover:bg-secondary hover:text-primary transition"
            onClick={(e) => { e.preventDefault(); scrollToSection('fixtures'); }}
          >
            View Fixtures
          </a>
          <a 
            href="#shop" 
            className="bg-white text-primary font-bold py-3 px-6 rounded-md hover:bg-gray-100 transition"
            onClick={(e) => { e.preventDefault(); scrollToSection('shop'); }}
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
}
