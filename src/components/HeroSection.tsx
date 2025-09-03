import { Button } from '@/components/ui/button';
import { TrendingUp, Shield, Zap, Award } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="gradient-text">Your Trusted</span>
              <br />
              <span className="text-foreground">Investment Partners</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              BUGnBULL provides expert financial advisory services including SIP planning, 
              mutual fund guidance, and comprehensive market research to help you build wealth systematically.
            </p>

            {/* Key Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-semibold">Expert Advisory</p>
                  <p className="text-sm text-muted-foreground">Personalized guidance</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-success" />
                </div>
                <div className="text-left">
                  <p className="font-semibold">SEBI Registered</p>
                  <p className="text-sm text-muted-foreground">Trusted & compliant</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8">
                Get Free Consultation
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                View Our Services
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              *SEBI Registered Investment Advisor | Free consultation for new clients.
            </p>
          </div>

          {/* Right Column - Visual */}
          <div className="relative lg:pl-8">
            <div className="relative bg-card border border-border rounded-2xl shadow-lg p-6 lg:p-8">
              {/* Portfolio Performance Mock */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Portfolio Performance</h3>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-bull" />
                    <span className="text-bull font-semibold">+12.4%</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Total Value</span>
                    <span className="font-semibold">$24,567.89</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Today's Return</span>
                    <span className="text-bull font-semibold">+$245.67</span>
                  </div>
                </div>
              </div>

              {/* Asset Allocation */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-muted-foreground">Asset Allocation</h4>
                {[
                  { name: 'Tech Stocks', percentage: 45, color: 'bg-primary' },
                  { name: 'Bonds', percentage: 30, color: 'bg-success' },
                  { name: 'Real Estate', percentage: 15, color: 'bg-warning' },
                  { name: 'Cash', percentage: 10, color: 'bg-muted' },
                ].map((asset) => (
                  <div key={asset.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{asset.name}</span>
                      <span className="font-semibold">{asset.percentage}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${asset.color}`}
                        style={{ width: `${asset.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-border">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-success" />
                  <span className="text-xs text-muted-foreground">FDIC Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-xs text-muted-foreground">Award Winning</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;