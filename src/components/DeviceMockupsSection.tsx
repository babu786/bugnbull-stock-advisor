import { Button } from '@/components/ui/button';
import { TrendingUp, PieChart, Calculator, Shield, CheckCircle } from 'lucide-react';
import laptopMockup from '@/assets/laptop-mockup.png';
import mobileMockup from '@/assets/mobile-mockup.png';

const DeviceMockupsSection = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Real-Time Portfolio Tracking",
      description: "Monitor your investments 24/7 with live market data and performance insights"
    },
    {
      icon: Calculator,
      title: "SIP Calculator & Planning",
      description: "Smart SIP planning tools to help you achieve your financial goals systematically"
    },
    {
      icon: PieChart,
      title: "Advanced Analytics Dashboard",
      description: "Comprehensive analysis of your mutual fund portfolio with detailed breakdowns"
    },
    {
      icon: Shield,
      title: "Secure Investment Management",
      description: "Bank-level security with SEBI compliance for all your investment activities"
    }
  ];

  const benefits = [
    "Trusted by 16000+ Mutual Fund Distributors",
    "Onboard Clients, Manage Investments & Track Growth",
    "Real-Time Portfolio Insights & Smart Analytics",
    "Effortless Business Growth with Professional Tools"
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Power Your <span className="gradient-text">Investment Business</span>
              <br />
              Anytime, Anywhere with BUGnBULL!
            </h2>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-background rounded-lg p-4 shadow-sm">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Column - Device Mockups */}
          <div className="relative lg:pl-8">
            <div className="relative">
              {/* Laptop Mockup */}
              <div className="relative z-10">
                <img 
                  src={laptopMockup} 
                  alt="BUGnBULL Dashboard on Laptop" 
                  className="w-full max-w-2xl mx-auto rounded-lg shadow-2xl"
                />
              </div>
              
              {/* Mobile Mockup */}
              <div className="absolute -bottom-8 -right-4 z-20 w-48 lg:w-56">
                <img 
                  src={mobileMockup} 
                  alt="BUGnBULL Mobile App" 
                  className="w-full rounded-2xl shadow-2xl"
                />
              </div>
              
              {/* Background Decoration */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-primary opacity-10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -left-12 w-40 h-40 bg-success opacity-10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeviceMockupsSection;