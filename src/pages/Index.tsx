import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TrustIndicators from '@/components/TrustIndicators';
import ProductsSection from '@/components/ProductsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <TrustIndicators />
      <ProductsSection />
      <Footer />
    </div>
  );
};

export default Index;
