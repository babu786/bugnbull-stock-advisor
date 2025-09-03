import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { TrendingUp, Shield, Zap, Target, BarChart, Smartphone } from 'lucide-react';
import { useState } from 'react';

const ProductsSection = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const products = [
    {
      category: "SIP",
      title: "SIP Planning",
      description: "Systematic Investment Plan advisory for disciplined wealth creation",
      apy: "12-15%",
      features: ["Goal-based planning", "Auto-debit facility", "Tax saving options"],
      icon: Target,
      gradient: "from-success/10 to-success/5",
      color: "text-success"
    },
    {
      category: "MUTUAL FUNDS",
      title: "Mutual Fund Advisory",
      description: "Expert curated mutual fund portfolio recommendations",
      apy: "10-18%",
      features: ["Professional fund selection", "Regular portfolio review", "Risk assessment"],
      icon: TrendingUp,
      gradient: "from-primary/10 to-primary/5",
      color: "text-primary"
    },
    {
      category: "RESEARCH",
      title: "Market Research",
      description: "In-depth market analysis and investment research reports",
      apy: "Insights",
      features: ["Daily market updates", "Stock recommendations", "Sector analysis"],
      icon: BarChart,
      gradient: "from-warning/10 to-warning/5",
      color: "text-warning"
    },
    {
      category: "ADVISORY",
      title: "Investment Advisory",
      description: "Personalized investment strategies and financial planning",
      apy: "Custom",
      features: ["One-on-one consultation", "Portfolio optimization", "Risk management"],
      icon: Shield,
      gradient: "from-destructive/10 to-destructive/5",
      color: "text-destructive"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="gradient-text">investment services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive financial services including SIP planning, mutual fund advisory, and expert research to help you achieve your investment goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Card key={index} className="relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 group hover:shadow-lg">
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-50`}></div>
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-muted-foreground tracking-wider">
                      {product.category} SERVICE
                    </span>
                    <Icon className={`w-6 h-6 ${product.color}`} />
                  </div>
                  <CardTitle className="text-xl mb-2">{product.title}</CardTitle>
                  <div className="text-3xl font-bold mb-2">
                    <span className={product.color}>{product.apy}</span>
                    <span className="text-sm text-muted-foreground ml-1">
                      {product.apy.includes('%') ? 'expected returns*' : 'service'}
                    </span>
                  </div>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="mb-6 text-base">
                    {product.description}
                  </CardDescription>
                  
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full group-hover:bg-gradient-primary group-hover:text-white transition-all duration-300" 
                    variant="outline"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mobile App Section */}
        <div className="bg-gradient-hero rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Trade anywhere with our <span className="gradient-text">trading platform</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Get real-time market data, execute trades, and manage your portfolio from anywhere with our mobile app and web platform.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {[
                  { icon: Smartphone, title: "Mobile Trading", description: "Trade on the go with our intuitive mobile interface" },
                  { icon: Zap, title: "Real-time Data", description: "Live market data and instant order execution" },
                  { icon: Shield, title: "Secure Access", description: "Biometric authentication and bank-level encryption" },
                  { icon: BarChart, title: "Advanced Charts", description: "Professional charting tools and technical indicators" }
                ].map((feature, index) => {
                  const FeatureIcon = feature.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FeatureIcon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
                      AngelOne
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Download AngelOne App</DialogTitle>
                    </DialogHeader>
                    <div className="flex flex-col gap-4 py-4">
                      <Button className="w-full" variant="outline">
                        📱 Download for Android
                      </Button>
                      <Button className="w-full" variant="outline">
                        🍎 Download for iOS
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="lg" className="bg-success text-success-foreground hover:bg-success/90 border-success">
                      Assetplus
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Download Assetplus App</DialogTitle>
                    </DialogHeader>
                    <div className="flex flex-col gap-4 py-4">
                      <Button className="w-full" variant="outline">
                        📱 Download for Android
                      </Button>
                      <Button className="w-full" variant="outline">
                        🍎 Download for iOS
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative flex items-center justify-center">
                
                {/* Laptop Mockup - Borderless Design */}
                <div className="relative transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                  {/* Laptop Screen - Minimal Bezel */}
                  <div className="w-[500px] h-[320px] bg-gray-900 rounded-t-xl p-1 shadow-2xl">
                    <div className="w-full h-full bg-white rounded-lg overflow-hidden relative">
                      <img 
                        src="/lovable-uploads/e45508ab-e342-4d8a-84a0-219be1719def.png" 
                        alt="BUGnBULL Web Platform Dashboard" 
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                  {/* Laptop Base - Thinner */}
                  <div className="w-[520px] h-4 bg-gray-800 rounded-b-xl -mt-0.5 shadow-lg relative"
                       style={{
                         background: 'linear-gradient(145deg, #1f2937 0%, #111827 100%)'
                       }}>
                    <div className="w-16 h-0.5 bg-gray-600 rounded-full mx-auto mt-1.5"></div>
                  </div>
                  {/* Laptop Shadow */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-[480px] h-6 bg-black/30 rounded-full blur-lg"></div>
                </div>

                {/* iPhone Mockup - Positioned to overlap like in reference */}
                <div className="absolute right-0 top-12 transform translate-x-20 rotate-2 hover:rotate-0 transition-transform duration-500 z-10">
                  <div className="w-56 h-[480px] bg-black rounded-[2.5rem] p-2 shadow-2xl"
                       style={{
                         boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                         background: 'linear-gradient(145deg, #1a1a1a 0%, #0f0f0f 100%)'
                       }}>
                    
                    {/* iPhone Reflection/Shine Effect */}
                    <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
                    
                    {/* iPhone Screen */}
                    <div className="w-full h-full bg-white rounded-[2.25rem] relative overflow-hidden"
                         style={{
                           boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)'
                         }}>
                      {/* iPhone Notch */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-5 bg-black rounded-b-xl z-20"
                           style={{
                             boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                           }}></div>
                      
                      {/* Screen Content - App Screenshot */}
                      <div className="w-full h-full rounded-[2.25rem] overflow-hidden">
                        <img 
                          src="/lovable-uploads/4cf8dc96-8d6c-446d-9d31-d03761cd7a8f.png" 
                          alt="BUGnBULL Mobile App Screenshot" 
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
              
              {/* Floating Elements for 3D Effect */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full blur-sm animate-pulse"></div>
              <div className="absolute -bottom-8 -left-6 w-12 h-12 bg-blue-500/10 rounded-full blur-md"></div>
              
              {/* Ground Shadow */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[500px] h-12 bg-black/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;