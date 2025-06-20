import { useQuery } from '@tanstack/react-query';
import { scrollToSection } from '@/lib/utils';
import { sponsorsData } from '@/data/sponsors';

interface Sponsor {
  id: number;
  name: string;
  type: string;
}

export default function SponsorsSection() {
  const { data: sponsors, isLoading } = useQuery<Sponsor[]>({
    queryKey: ['/api/sponsors'],
  });

  return (
    <section className="py-12 md:py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Our Sponsors</h2>
        <p className="text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          We're grateful to our partners who make our journey possible.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {isLoading ? (
            // Loading skeleton
            Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-32 animate-pulse">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-20 mx-auto"></div>
                </div>
              </div>
            ))
          ) : (
            sponsorsData?.map((sponsor) => (
              <div key={sponsor.id} className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-32">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-gray-500 font-bold">{sponsor.name}</span>
                  </div>
                  <p className="text-sm text-gray-500">{sponsor.type}</p>
                </div>
              </div>
            ))
          )}
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="#contact" 
            className="text-primary font-semibold hover:text-accent transition"
            onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
          >
            Interested in becoming a sponsor? Contact us
          </a>
        </div>
      </div>
    </section>
  );
}
