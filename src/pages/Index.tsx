import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TrustIndicators from '@/components/TrustIndicators';
import ProductsSection from '@/components/ProductsSection';
import DeviceMockupsSection from '@/components/DeviceMockupsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <TrustIndicators />
      <ProductsSection />
      <DeviceMockupsSection />
      <Footer />
    </div>
  );
};

export default Index;
