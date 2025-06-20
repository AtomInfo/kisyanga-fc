import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { galleryData } from '@/data/gallery';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  
  const { data: galleryImages, isLoading } = useQuery<GalleryImage[]>({
    queryKey: ['/api/gallery'],
  });

  return (
    <section id="gallery" className="py-12 md:py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Gallery</h2>
        <p className="text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          Moments captured from our matches, training sessions, and community events.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {isLoading ? (
            // Loading skeleton
            Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg animate-pulse">
                <div className="w-full h-48 md:h-64 bg-gray-300 rounded"></div>
              </div>
            ))
          ) : (
            galleryData?.map((image) => (
              <div 
                key={image.id} 
                className="relative overflow-hidden rounded-lg group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-48 md:h-64 object-cover object-center transition transform duration-300 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-primary bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <i className="fas fa-search-plus text-2xl"></i>
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
        
        <div className="text-center mt-10">
          <button className="bg-primary text-white font-bold py-3 px-8 rounded-md hover:bg-primary/90 transition">
            View Full Gallery
          </button>
        </div>
      </div>
      
      {/* Image lightbox dialog */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="sm:max-w-4xl p-0 bg-transparent border-none">
          {selectedImage && (
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="w-full h-auto max-h-[80vh] object-contain" 
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
