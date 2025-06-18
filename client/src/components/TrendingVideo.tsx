export default function TrendingVideo() {
  const videos = [
    {
      id: 1,
      title: "Match Highlights: Kisyanga FC vs. Lions United",
      thumbnail: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&h=300&fit=crop&crop=center",
      date: "May 1, 2023"
    },
    {
      id: 2,
      title: "Team Training Session",
      thumbnail: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400&h=300&fit=crop&crop=center",
      date: "April 28, 2023"
    },
    {
      id: 3,
      title: "Player Interview: Mc Jim",
      thumbnail: "https://images.unsplash.com/photo-1594736797933-d0dba2b83495?w=400&h=300&fit=crop&crop=center",
      date: "April 25, 2023"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Trending Videos</h2>
        <p className="text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          Watch the latest highlights, interviews, and behind-the-scenes footage from Kisyanga FC.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map(video => (
            <div key={video.id} className="bg-white rounded-lg overflow-hidden shadow-md transition transform hover:-translate-y-1 hover:shadow-xl">
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-48 object-cover object-center" 
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center cursor-pointer">
                    <i className="fas fa-play text-primary text-xl"></i>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <span className="text-xs text-gray-500">{video.date}</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-xs text-secondary font-semibold">Video</span>
                </div>
                <h3 className="font-bold text-lg mb-2">{video.title}</h3>
                <a href="#" className="text-primary font-semibold hover:text-accent transition flex items-center">
                  Watch Now <i className="fas fa-play-circle ml-2"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button className="bg-primary text-white font-bold py-3 px-8 rounded-md hover:bg-primary/90 transition">
            View All Videos
          </button>
        </div>
      </div>
    </section>
  );
}
