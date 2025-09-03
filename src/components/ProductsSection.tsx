import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Shield, Zap, Target, BarChart, Smartphone } from 'lucide-react';

const ProductsSection = () => {
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
                Trade anywhere with our <span className="gradient-text">mobile app</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Get real-time market data, execute trades, and manage your portfolio from anywhere in the world.
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
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
                  Download for iOS
                </Button>
                <Button variant="outline" size="lg">
                  Download for Android
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-64 h-96 bg-card border border-border rounded-3xl mx-auto p-4 shadow-2xl">
                <div className="w-full h-full bg-gradient-primary rounded-2xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <Smartphone className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-lg font-semibold">BUGnBULL</p>
                    <p className="text-sm opacity-90">Mobile Trading App</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;