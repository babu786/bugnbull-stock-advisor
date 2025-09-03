import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Play, Users, Award, Clock, Star } from 'lucide-react';

const Learn = () => {
  const courses = [
    {
      title: "Stock Market Fundamentals",
      description: "Learn the basics of stock market investing, understanding market dynamics, and fundamental analysis.",
      duration: "4 weeks",
      level: "Beginner",
      students: "2,450",
      rating: 4.8,
      price: "₹2,999",
      modules: [
        "Introduction to Stock Markets",
        "Types of Securities",
        "Market Analysis Basics",
        "Risk Management"
      ]
    },
    {
      title: "Technical Analysis Mastery",
      description: "Master the art of technical analysis with charts, patterns, and indicators to make informed trading decisions.",
      duration: "6 weeks", 
      level: "Intermediate",
      students: "1,832",
      rating: 4.9,
      price: "₹4,999",
      modules: [
        "Chart Patterns & Trends",
        "Technical Indicators",
        "Support & Resistance",
        "Trading Strategies"
      ]
    },
    {
      title: "Mutual Fund Investment Strategy", 
      description: "Comprehensive guide to mutual fund selection, SIP planning, and portfolio optimization.",
      duration: "3 weeks",
      level: "Beginner",
      students: "3,124",
      rating: 4.7,
      price: "₹1,999",
      modules: [
        "Types of Mutual Funds",
        "SIP vs Lump Sum",
        "Fund Selection Criteria",
        "Portfolio Rebalancing"
      ]
    },
    {
      title: "Options & Derivatives Trading",
      description: "Advanced strategies for options trading, risk management, and derivatives market operations.",
      duration: "8 weeks",
      level: "Advanced", 
      students: "856",
      rating: 4.6,
      price: "₹7,999",
      modules: [
        "Options Basics",
        "Advanced Strategies",
        "Greeks & Risk Metrics",
        "Portfolio Hedging"
      ]
    },
    {
      title: "Financial Planning & Wealth Management",
      description: "Learn comprehensive financial planning, goal setting, and wealth creation strategies.",
      duration: "5 weeks",
      level: "Intermediate",
      students: "2,156", 
      rating: 4.8,
      price: "₹3,499",
      modules: [
        "Goal-based Planning",
        "Tax Optimization",
        "Insurance & Protection",
        "Retirement Planning"
      ]
    },
    {
      title: "Cryptocurrency & Digital Assets",
      description: "Understanding blockchain technology, crypto investing, and digital asset management.",
      duration: "4 weeks",
      level: "Intermediate",
      students: "1,423",
      rating: 4.5,
      price: "₹3,999", 
      modules: [
        "Blockchain Fundamentals",
        "Crypto Market Analysis",
        "DeFi & Web3",
        "Risk Management"
      ]
    }
  ];

  const features = [
    {
      icon: Play,
      title: "Video Lectures",
      description: "High-quality video content from market experts"
    },
    {
      icon: BookOpen,
      title: "Study Materials", 
      description: "Comprehensive PDFs, case studies, and resources"
    },
    {
      icon: Users,
      title: "Live Sessions",
      description: "Interactive webinars and Q&A with instructors"
    },
    {
      icon: Award,
      title: "Certification",
      description: "Industry-recognized certificates upon completion"
    }
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Master</span> the Stock Market
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Learn from industry experts with our comprehensive stock market courses. 
            From beginner fundamentals to advanced trading strategies.
          </p>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Courses</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our range of expertly designed courses to enhance your market knowledge
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      course.level === 'Beginner' ? 'bg-success/10 text-success' :
                      course.level === 'Intermediate' ? 'bg-warning/10 text-warning' :
                      'bg-destructive/10 text-destructive'
                    }`}>
                      {course.level}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{course.students} students</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Course Modules:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {course.modules.map((module, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            <span>{module}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex justify-between items-center pt-4">
                      <div className="text-2xl font-bold gradient-text">{course.price}</div>
                      <Button className="bg-gradient-primary hover:opacity-90">
                        Enroll Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Learn;