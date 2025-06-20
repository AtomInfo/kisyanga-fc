import { historyData } from '@/data/history';
import { useQuery } from '@tanstack/react-query';

interface HistoryEvent {
  id: number;
  year: string;
  title: string;
  description: string;
}

export default function HistorySection() {
  const { data: historyEvents, isLoading } = useQuery<HistoryEvent[]>({
    queryKey: ['/api/history'],
  });

  return (
    <section id="history" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Our History</h2>
        <p className="text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          From our foundation in 2006 to present day, explore the journey of Kisyanga FC.
        </p>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
          
          <div className="space-y-12">
            {isLoading ? (
              // Loading skeleton
              Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="relative animate-pulse">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-8 h-8 bg-gray-300 rounded-full z-10"></div>
                  <div className={`${index % 2 === 0 ? 'ml-0 md:ml-auto' : 'mr-0 md:mr-auto'} md:w-5/12 p-6 bg-gray-100 rounded-lg shadow-md relative`}>
                    <div className="h-6 bg-gray-300 rounded w-1/3 mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  </div>
                </div>
              ))
            ) : (
              historyData?.map((event, index) => (
                <div key={event.id} className="relative">
                  {/* Year marker */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-8 h-8 bg-secondary rounded-full flex items-center justify-center z-10">
                    <span className="text-primary font-bold text-sm">{event.year}</span>
                  </div>
                  
                  {/* Content box - alternating sides */}
                  <div className={`${index % 2 === 0 ? 'ml-0 md:ml-auto' : 'mr-0 md:mr-auto'} md:w-5/12 p-6 bg-gray-100 rounded-lg shadow-md relative`}>
                    <h3 className="font-bold text-xl mb-2">{event.title}</h3>
                    <p className="text-gray-600">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
