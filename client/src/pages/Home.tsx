import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrendingVideo from '@/components/TrendingVideo';
import TeamSection from '@/components/TeamSection';
import FixturesSection from '@/components/FixturesSection';
import NewsSection from '@/components/NewsSection';
import HistorySection from '@/components/HistorySection';
import GallerySection from '@/components/GallerySection';
import ShopSection from '@/components/ShopSection';
import SponsorsSection from '@/components/SponsorsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TrendingVideo />
      <TeamSection />
      <FixturesSection />
      <NewsSection />
      <HistorySection />
      <GallerySection />
      <ShopSection />
      <SponsorsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
