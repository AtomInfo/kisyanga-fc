import { newsData } from '@/data/news';
import { useQuery } from '@tanstack/react-query';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  description: string;
  image: string;
}

export default function NewsSection() {
  const { data: news, isLoading } = useQuery<NewsItem[]>({
    queryKey: ['/api/news'],
  });

  return (
    <section id="news" className="py-12 md:py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Latest News</h2>
        <p className="text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          Stay updated with the latest happenings at Kisyanga FC and the Ntare Lions League.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {isLoading ? (
            // Loading skeleton
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md p-4 animate-pulse">
                <div className="w-full h-48 bg-gray-300 rounded mb-4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
                <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-full mb-4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/4"></div>
              </div>
            ))
          ) : (
            newsData?.map((item) => (
              <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md transition transform hover:-translate-y-1 hover:shadow-xl">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-48 object-cover object-center" 
                />
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-xs text-gray-500">{item.date}</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-xs text-secondary font-semibold">{item.category}</span>
                  </div>
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>
                  <a href="#" className="text-primary font-semibold hover:text-accent transition flex items-center">
                    Read More <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
        
        <div className="text-center mt-10">
          <button className="bg-primary text-white font-bold py-3 px-8 rounded-md hover:bg-primary/90 transition">
            View All News
          </button>
        </div>
      </div>
    </section>
  );
}
