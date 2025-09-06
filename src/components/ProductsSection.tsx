import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { TrendingUp, Shield, Zap, Target, BarChart, Smartphone, Download } from 'lucide-react';
import { useState } from 'react';

const ProductsSection = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const products = [
    {
      category: "INSURANCE",
      title: "Insurance Advisory",
      description: "Complete health and life insurance solutions for comprehensive protection",
      apy: "Protection",
      features: ["Health & life coverage", "Tax benefits", "Family protection"],
      icon: Shield,
      gradient: "from-success/10 to-success/5",
      color: "text-success",
      detailedInfo: {
        overview: "Our Insurance Advisory service provides comprehensive health and life insurance solutions. Get complete protection for you and your family with our expertly curated insurance plans covering both health and life risks.",
        benefits: [
          "Cashless treatment at 10,000+ network hospitals",
          "High life coverage up to ₹10 crore at affordable premiums",
          "Family floater health plans with shared sum insured",
          "Tax benefits under Section 80C and 80D up to ₹2.25 lakhs",
          "Additional riders for critical illness and disability coverage"
        ],
        process: [
          "Complete risk assessment and insurance needs analysis",
          "Health check-up and life insurance underwriting",
          "Policy comparison and customized recommendations",
          "Documentation, premium setup and ongoing support"
        ],
        minInvestment: "₹5,000 per year",
        timeHorizon: "Annual renewable to 30 years",
        expectedReturns: "Comprehensive protection coverage"
      }
    },
    {
      category: "MUTUAL FUNDS",
      title: "Mutual Fund Advisory",
      description: "Expert curated mutual fund portfolio recommendations",
      apy: "10-18%",
      features: ["Professional fund selection", "Regular portfolio review", "Risk assessment"],
      icon: TrendingUp,
      gradient: "from-primary/10 to-primary/5",
      color: "text-primary",
      detailedInfo: {
        overview: "Get access to expertly curated mutual fund portfolios tailored to your risk profile and financial goals. Our research team analyzes 1000+ mutual funds to recommend the best options.",
        benefits: [
          "Professional fund manager selection and monitoring",
          "Diversified portfolio across market capitalizations",
          "Regular portfolio health checks and rebalancing",
          "Direct mutual fund investments with zero commissions",
          "Tax-efficient fund switching and optimization"
        ],
        process: [
          "Risk profiling and investment goal mapping",
          "Portfolio construction with selected funds",
          "KYC completion and investment execution",
          "Monthly reviews and performance tracking"
        ],
        minInvestment: "₹1,000 per fund",
        timeHorizon: "3-5+ years",
        expectedReturns: "10-18% annually (market linked)"
      }
    },
    {
      category: "RESEARCH",
      title: "Market Research",
      description: "In-depth market analysis and investment research reports",
      apy: "Insights",
      features: ["Daily market updates", "Stock recommendations", "Sector analysis"],
      icon: BarChart,
      gradient: "from-warning/10 to-warning/5",
      color: "text-warning",
      detailedInfo: {
        overview: "Stay ahead of market trends with our comprehensive research reports, daily market analysis, and expert insights. Get actionable investment ideas backed by thorough fundamental and technical analysis.",
        benefits: [
          "Daily market commentary and trend analysis",
          "Detailed stock research reports with target prices",
          "Sector rotation and thematic investment ideas",
          "Macroeconomic analysis and policy impact assessment",
          "Early warning signals for portfolio risk management"
        ],
        process: [
          "Market screening and opportunity identification",
          "Fundamental and technical analysis",
          "Risk assessment and recommendation grading",
          "Regular follow-ups and target price updates"
        ],
        deliverables: "Daily reports via email/WhatsApp",
        coverage: "500+ stocks across sectors",
        accuracy: "75%+ recommendation success rate"
      }
    },
    {
      category: "ADVISORY",
      title: "Investment Advisory",
      description: "Personalized investment strategies and financial planning",
      apy: "Custom",
      features: ["One-on-one consultation", "Portfolio optimization", "Risk management"],
      icon: Shield,
      gradient: "from-destructive/10 to-destructive/5",
      color: "text-destructive",
      detailedInfo: {
        overview: "Get personalized investment advisory services with dedicated relationship managers. Our holistic approach covers portfolio construction, risk management, and comprehensive financial planning.",
        benefits: [
          "Dedicated relationship manager for personalized service",
          "Comprehensive financial planning and goal mapping",
          "Tax optimization and estate planning guidance",
          "Regular portfolio reviews and strategy adjustments",
          "Access to exclusive investment opportunities and IPOs"
        ],
        process: [
          "Detailed financial health check and goal setting",
          "Custom portfolio construction and asset allocation",
          "Implementation with ongoing monitoring",
          "Quarterly reviews and strategy refinements"
        ],
        minPortfolioSize: "₹5 lakhs",
        serviceLevel: "Premium advisory",
        meetingFrequency: "Monthly one-on-one sessions"
      }
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our <span className="gradient-text">investment services</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
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
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        className="w-full group-hover:bg-gradient-primary group-hover:text-white transition-all duration-300" 
                        variant="outline"
                      >
                        Learn More
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
                      <div className="relative">
                        {/* Header with gradient background */}
                        <div className={`bg-gradient-to-br ${product.gradient.replace('/10', '').replace('/5', '')} rounded-t-lg -m-6 mb-0 p-8 text-center`}>
                          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <DialogTitle className="text-3xl font-bold text-white mb-2">{product.title}</DialogTitle>
                          <p className="text-white/90">{product.category} SERVICE</p>
                        </div>
                        
                        {/* Content */}
                        <div className="p-6 pt-8">
                          {/* Overview */}
                          <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-3">Service Overview</h3>
                            <p className="text-muted-foreground leading-relaxed">{product.detailedInfo.overview}</p>
                          </div>
                          
                          {/* Key Benefits */}
                          <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                            <ul className="space-y-3">
                              {product.detailedInfo.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start space-x-3">
                                  <div className={`w-2 h-2 ${product.color} rounded-full mt-2 flex-shrink-0`}></div>
                                  <span className="text-sm text-muted-foreground">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {/* Process */}
                          <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-4">Our Process</h3>
                            <div className="space-y-4">
                              {product.detailedInfo.process.map((step, idx) => (
                                <div key={idx} className="flex items-start space-x-4">
                                  <div className={`w-8 h-8 ${product.color.replace('text-', 'bg-')}/20 rounded-full flex items-center justify-center flex-shrink-0`}>
                                    <span className={`text-sm font-bold ${product.color}`}>{idx + 1}</span>
                                  </div>
                                  <span className="text-sm text-muted-foreground pt-1">{step}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          {/* Service Details */}
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-muted/20 rounded-lg">
                            {product.detailedInfo.minInvestment && (
                              <div className="text-center">
                                <p className="text-xs font-medium text-muted-foreground">Min Investment</p>
                                <p className={`text-sm font-bold ${product.color}`}>{product.detailedInfo.minInvestment}</p>
                              </div>
                            )}
                            {product.detailedInfo.timeHorizon && (
                              <div className="text-center">
                                <p className="text-xs font-medium text-muted-foreground">Time Horizon</p>
                                <p className={`text-sm font-bold ${product.color}`}>{product.detailedInfo.timeHorizon}</p>
                              </div>
                            )}
                            {product.detailedInfo.expectedReturns && (
                              <div className="text-center">
                                <p className="text-xs font-medium text-muted-foreground">Expected Returns</p>
                                <p className={`text-sm font-bold ${product.color}`}>{product.detailedInfo.expectedReturns}</p>
                              </div>
                            )}
                            {product.detailedInfo.minPortfolioSize && (
                              <div className="text-center">
                                <p className="text-xs font-medium text-muted-foreground">Min Portfolio</p>
                                <p className={`text-sm font-bold ${product.color}`}>{product.detailedInfo.minPortfolioSize}</p>
                              </div>
                            )}
                            {product.detailedInfo.deliverables && (
                              <div className="text-center">
                                <p className="text-xs font-medium text-muted-foreground">Deliverables</p>
                                <p className={`text-sm font-bold ${product.color}`}>{product.detailedInfo.deliverables}</p>
                              </div>
                            )}
                            {product.detailedInfo.coverage && (
                              <div className="text-center">
                                <p className="text-xs font-medium text-muted-foreground">Coverage</p>
                                <p className={`text-sm font-bold ${product.color}`}>{product.detailedInfo.coverage}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
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
                  <DialogContent className="sm:max-w-2xl">
                    <div className="relative">
                      {/* Header with gradient background */}
                      <div className="bg-gradient-hero rounded-t-lg -m-6 mb-0 p-8 text-center">
                        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <TrendingUp className="w-8 h-8 text-white" />
                        </div>
                        <DialogTitle className="text-3xl font-bold text-white mb-2">AngelOne</DialogTitle>
                        <p className="text-white/80">India's Leading Investment Platform</p>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6 pt-8">
                        <div className="text-center mb-8">
                          <h3 className="text-xl font-semibold mb-3">Download Mobile App</h3>
                          <p className="text-muted-foreground">Trade stocks, mutual funds, and more with zero brokerage</p>
                        </div>
                        
                        {/* Features grid */}
                        <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-muted/20 rounded-lg">
                          <div className="text-center">
                            <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
                            <p className="text-xs font-medium">Secure</p>
                          </div>
                          <div className="text-center">
                            <Zap className="w-6 h-6 text-primary mx-auto mb-2" />
                            <p className="text-xs font-medium">Fast Trading</p>
                          </div>
                          <div className="text-center">
                            <BarChart className="w-6 h-6 text-primary mx-auto mb-2" />
                            <p className="text-xs font-medium">Analytics</p>
                          </div>
                        </div>
                        
                        {/* Download buttons */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <Button className="h-20 flex flex-col items-center justify-center space-y-3 bg-gradient-to-br from-primary via-primary/90 to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white border-0 rounded-xl shadow-lg">
                            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                              <Smartphone className="w-5 h-5" />
                            </div>
                            <div className="text-center">
                              <p className="text-sm font-bold">Google Play</p>
                              <p className="text-xs opacity-90">Android App</p>
                            </div>
                          </Button>
                          <Button className="h-20 flex flex-col items-center justify-center space-y-3 bg-gradient-to-br from-secondary via-secondary/90 to-secondary/80 hover:from-secondary/90 hover:to-secondary/70 text-secondary-foreground border-0 rounded-xl shadow-lg">
                            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                              <Smartphone className="w-5 h-5" />
                            </div>
                            <div className="text-center">
                              <p className="text-sm font-bold">App Store</p>
                              <p className="text-xs opacity-90">iOS App</p>
                            </div>
                          </Button>
                        </div>
                        
                        {/* Footer */}
                        <div className="text-center text-xs text-muted-foreground border-t pt-4">
                          <p className="flex items-center justify-center gap-2">
                            <Shield className="w-3 h-3" />
                            SEBI Registered • 4.5★ Rating • 1Cr+ Downloads
                          </p>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="lg" className="bg-success text-success-foreground hover:bg-success/90 border-success">
                      Assetplus
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-2xl">
                    <div className="relative">
                      {/* Header with gradient background */}
                      <div className="bg-gradient-to-br from-success via-success/90 to-success/70 rounded-t-lg -m-6 mb-0 p-8 text-center">
                        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Target className="w-8 h-8 text-white" />
                        </div>
                        <DialogTitle className="text-3xl font-bold text-white mb-2">Assetplus</DialogTitle>
                        <p className="text-white/90">Smart Investment Solutions</p>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6 pt-8">
                        <div className="text-center mb-8">
                          <h3 className="text-xl font-semibold mb-3">Download Mobile App</h3>
                          <p className="text-muted-foreground">Intelligent portfolio management with AI-powered insights</p>
                        </div>
                        
                        {/* Features grid */}
                        <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-muted/20 rounded-lg">
                          <div className="text-center">
                            <Target className="w-6 h-6 text-success mx-auto mb-2" />
                            <p className="text-xs font-medium">Goal Based</p>
                          </div>
                          <div className="text-center">
                            <BarChart className="w-6 h-6 text-success mx-auto mb-2" />
                            <p className="text-xs font-medium">Research</p>
                          </div>
                          <div className="text-center">
                            <Shield className="w-6 h-6 text-success mx-auto mb-2" />
                            <p className="text-xs font-medium">Trusted</p>
                          </div>
                        </div>
                        
                        {/* Download buttons */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <Button className="h-20 flex flex-col items-center justify-center space-y-3 bg-gradient-to-br from-success via-success/90 to-success/80 hover:from-success/90 hover:to-success/70 text-white border-0 rounded-xl shadow-lg">
                            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                              <Smartphone className="w-5 h-5" />
                            </div>
                            <div className="text-center">
                              <p className="text-sm font-bold">Google Play</p>
                              <p className="text-xs opacity-90">Android App</p>
                            </div>
                          </Button>
                          <Button className="h-20 flex flex-col items-center justify-center space-y-3 bg-gradient-to-br from-secondary via-secondary/90 to-secondary/80 hover:from-secondary/90 hover:to-secondary/70 text-secondary-foreground border-0 rounded-xl shadow-lg">
                            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                              <Smartphone className="w-5 h-5" />
                            </div>
                            <div className="text-center">
                              <p className="text-sm font-bold">App Store</p>
                              <p className="text-xs opacity-90">iOS App</p>
                            </div>
                          </Button>
                        </div>
                        
                        {/* Footer */}
                        <div className="text-center text-xs text-muted-foreground border-t pt-4">
                          <p className="flex items-center justify-center gap-2">
                            <Shield className="w-3 h-3" />
                            SEBI Registered • 4.8★ Rating • 50L+ Downloads
                          </p>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
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