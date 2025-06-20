import { playersData } from '@/data/players';
import { useQuery } from '@tanstack/react-query';

interface Player {
  id: number;
  fullName: string;
  nickname: string;
  position: string;
  rating: number;
  tag: string;
  tagDescription: string;
  image: string;
}

export default function TeamSection() {
  const { data: players, isLoading } = useQuery<Player[]>({
    queryKey: ['/api/players'],
  });

  return (
    <section id="team" className="py-12 md:py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Our Team</h2>
        <p className="text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          Meet the warriors who represent Kisyanga FC on the pitch. Each player brings unique skills and passion to our brotherhood.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {isLoading ? (
            // Loading skeleton
            Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md p-4 h-96 animate-pulse">
                <div className="w-full h-64 bg-gray-300 rounded mb-4"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/4"></div>
              </div>
            ))
          ) : (
            playersData?.map((player) => (
              <div key={player.id} className="bg-white rounded-lg overflow-hidden shadow-md transition transform hover:-translate-y-1 hover:shadow-xl">
                <img 
                  src={player.image} 
                  alt={`${player.fullName} - ${player.position}`} 
                  className="w-full h-64 object-cover object-center" 
                />
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-lg">{player.fullName}</h3>
                    <span className="bg-secondary text-primary text-xs px-2 py-1 rounded-full font-bold">{player.tag}</span>
                  </div>
                  <p className="text-gray-600 mb-2">{player.position}</p>
                  <div className="flex items-center">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <i 
                          key={index}
                          className={`${
                            index < Math.floor(player.rating) 
                              ? 'fas fa-star text-accent' 
                              : index < player.rating 
                                ? 'fas fa-star-half-alt text-accent' 
                                : 'far fa-star text-accent'
                          }`}
                        ></i>
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">{player.tagDescription}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        
        <div className="text-center mt-10">
          <button className="bg-primary text-white font-bold py-3 px-8 rounded-md hover:bg-primary/90 transition">
            View All Players
          </button>
        </div>
      </div>
    </section>
  );
}
