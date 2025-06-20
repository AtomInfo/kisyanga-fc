import { productsData } from '@/data/products';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

export default function ShopSection() {
  const [email, setEmail] = useState('');
  
  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ['/api/products'],
  });

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally connect to a newsletter API
    alert(`Thank you! We'll notify ${email} when our shop launches.`);
    setEmail('');
  };

  return (
    <section id="shop" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Shop</h2>
        <p className="text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          Show your support with official Kisyanga FC merchandise. Our shop will be launching soon!
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading ? (
            // Loading skeleton
            Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-md p-4 animate-pulse">
                <div className="w-full h-64 bg-gray-300 rounded mb-4"></div>
                <div className="h-5 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
                <div className="flex justify-between items-center">
                  <div className="h-6 bg-gray-300 rounded w-1/4"></div>
                  <div className="h-8 bg-gray-300 rounded w-1/3"></div>
                </div>
              </div>
            ))
          ) : (
            productsData?.map((product) => (
              <div key={product.id} className="bg-gray-100 rounded-lg overflow-hidden shadow-md transition transform hover:-translate-y-1 hover:shadow-xl relative">
                <span className="absolute top-4 right-4 bg-secondary text-primary text-xs px-3 py-1 rounded-full font-bold">Coming Soon</span>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-64 object-cover object-center" 
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                  <p className="text-gray-500 text-sm mb-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">{product.price}</span>
                    <button disabled className="bg-gray-300 text-gray-600 font-semibold py-2 px-4 rounded-md cursor-not-allowed">
                      Pre-order
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        
        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4">Our online shop is currently under development. Leave your email to be notified when we launch!</p>
          <form onSubmit={handleNotify} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="bg-primary text-white font-bold py-3 px-6 rounded-md hover:bg-primary/90 transition">
              Notify Me
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
