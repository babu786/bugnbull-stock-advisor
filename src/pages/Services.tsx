import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  PieChart, 
  BarChart3, 
  Shield, 
  Users, 
  BookOpen,
  Calculator,
  Target,
  Phone,
  Mail,
  MessageCircle,
  CheckCircle
} from 'lucide-react';
import ContactPopup from '@/components/ContactPopup';

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: "SIP Planning & Advisory",
      description: "Systematic Investment Plan advisory to help you build wealth through disciplined investing",
      features: [
        "Personalized SIP amount calculation",
        "Best fund selection based on risk profile",
        "Goal-based investment planning",
        "Regular portfolio review and rebalancing",
        "Tax-efficient investment strategies"
      ],
      pricing: "Starting from ₹999/month",
      popular: true
    },
    {
      icon: PieChart,
      title: "Mutual Fund Advisory",
      description: "Expert guidance on mutual fund selection and portfolio optimization for maximum returns",
      features: [
        "Fund research and analysis",
        "Risk assessment and profiling",
        "Diversified portfolio creation",
        "Performance monitoring",
        "Entry and exit timing guidance"
      ],
      pricing: "Starting from ₹1,499/month",
      popular: false
    },
    {
      icon: BarChart3,
      title: "Stock Research & Analysis",
      description: "In-depth stock research and market analysis to help you make informed investment decisions",
      features: [
        "Fundamental analysis reports",
        "Technical analysis and charts",
        "Sector and industry insights",
        "Buy/Sell/Hold recommendations",
        "Market trend analysis"
      ],
      pricing: "Starting from ₹2,999/month",
      popular: false
    },
    {
      icon: Target,
      title: "Financial Goal Planning",
      description: "Comprehensive financial planning to help you achieve your life goals through smart investing",
      features: [
        "Retirement planning strategies",
        "Child education fund planning",
        "Home buying investment plans",
        "Emergency fund creation",
        "Wealth preservation strategies"
      ],
      pricing: "Starting from ₹1,999/month",
      popular: false
    },
    {
      icon: Shield,
      title: "Portfolio Management",
      description: "Professional portfolio management services with continuous monitoring and optimization",
      features: [
        "Customized portfolio creation",
        "Regular rebalancing",
        "Risk management",
        "Performance reporting",
        "Tax optimization strategies"
      ],
      pricing: "Starting from ₹4,999/month",
      popular: false
    },
    {
      icon: Users,
      title: "Investment Consultation",
      description: "One-on-one consultation sessions with certified financial advisors and market experts",
      features: [
        "Personal investment strategy sessions",
        "Market outlook discussions",
        "Portfolio review meetings",
        "Investment Q&A sessions",
        "Financial health check-ups"
      ],
      pricing: "₹499 per session",
      popular: false
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "We understand your financial goals, risk tolerance, and investment preferences"
    },
    {
      step: 2,
      title: "Strategy Development", 
      description: "Our experts create a personalized investment strategy tailored to your needs"
    },
    {
      step: 3,
      title: "Implementation",
      description: "We help you implement the strategy with the right investment products"
    },
    {
      step: 4,
      title: "Monitoring & Review",
      description: "Continuous monitoring and periodic reviews to keep you on track"
    }
  ];

  const whyChooseUs = [
    {
      icon: BookOpen,
      title: "Expert Knowledge",
      description: "Certified financial advisors with 10+ years of market experience"
    },
    {
      icon: Shield,
      title: "Trusted Advisory",
      description: "SEBI registered investment advisors ensuring compliance and transparency"
    },
    {
      icon: TrendingUp,
      title: "Proven Track Record",
      description: "Consistent outperformance with 15%+ average annual returns for clients"
    },
    {
      icon: Users,
      title: "Personalized Service",
      description: "Dedicated relationship managers for each client with 24/7 support"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Comprehensive financial services designed to help you achieve your investment goals 
            with expert guidance and personalized strategies.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className={`relative hover:shadow-lg transition-shadow duration-300 ${service.popular ? 'border-primary ring-1 ring-primary' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="pt-4 border-t border-border">
                        <div className="text-lg font-bold gradient-text mb-4">{service.pricing}</div>
                        <ContactPopup>
                          <Button className="w-full bg-gradient-primary hover:opacity-90">
                            Get Started
                          </Button>
                        </ContactPopup>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to help you achieve your financial goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-xl font-bold mb-4 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose <span className="gradient-text">BUGnBULL</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by thousands of investors for reliable and expert financial guidance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-24 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Get in touch with our experts for a free consultation and personalized investment strategy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
              <Phone className="w-5 h-5 mr-2" />
              Schedule Call
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8">
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8">
              <MessageCircle className="w-5 h-5 mr-2" />
              Live Chat
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;