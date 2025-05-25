export default function TrendingVideo() {
  const videos = [
    {
      id: 1,
      title: "Match Highlights: Kisyanga FC vs. Lions United",
      thumbnail: "https://pixabay.com/get/g878a9a88752012412396a52754657012b7ed2f99f166748891be602271c5c2bff2798109f0bc999fee6c9f7b79b4f6db02a01105276548a4f670f074b101e3f1_1280.jpg",
      date: "May 1, 2023"
    },
    {
      id: 2,
      title: "Team Training Session",
      thumbnail: "https://pixabay.com/get/g717647c2160ea40adee64d5dbdf3ffd195e9c770500dd942d032a28a7d13ea7f6c834d94e6d7402b0694f128acac8f6f35b9f2e2e10f9d362f7d26baddcb9cff_1280.jpg",
      date: "April 28, 2023"
    },
    {
      id: 3,
      title: "Player Interview: Mc Jim",
      thumbnail: "https://pixabay.com/get/gcf4f7b5d3b6cbf55b9e6cd04ca9198bde782312e11776e5f62a7dfc7f10c89ee07ddd4a5069d94ce4c82892b81c0f4a099b69c671db0c8d8388f6cd93e697e23_1280.jpg",
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
