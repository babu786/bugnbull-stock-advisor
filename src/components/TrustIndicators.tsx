import { Star, Users, DollarSign, Award } from 'lucide-react';

const TrustIndicators = () => {
  const stats = [
    {
      icon: Users,
      value: '500K+',
      label: 'Active Investors',
      description: 'Trusted by investors worldwide'
    },
    {
      icon: DollarSign,
      value: '$50B+',
      label: 'Assets Under Management',
      description: 'Growing portfolio value'
    },
    {
      icon: Star,
      value: '4.9',
      label: 'App Store Rating',
      description: 'Highest rated investment app'
    },
    {
      icon: Award,
      value: '25+',
      label: 'Industry Awards',
      description: 'Recognition for excellence'
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Awards Section */}
        <div className="text-center mb-12">
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Star className="w-5 h-5 text-primary" />
              <span className="font-semibold">Best Investment Platform 2024</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Award className="w-5 h-5 text-success" />
              <span className="font-semibold">Top Fintech Innovation</span>
            </div>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>

        {/* Reviews Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">What our investors say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "BUGnBULL has transformed my investment strategy. The AI recommendations are spot-on.",
                author: "Sarah Chen",
                role: "Portfolio Manager",
                rating: 5
              },
              {
                quote: "Finally, an investment platform that actually understands modern investors' needs.",
                author: "Michael Rodriguez",
                role: "Day Trader",
                rating: 5
              },
              {
                quote: "The automated portfolio rebalancing has saved me countless hours and improved my returns.",
                author: "Emily Davis",
                role: "Financial Advisor",
                rating: 5
              }
            ].map((review, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{review.quote}"</p>
                <div className="text-left">
                  <p className="font-semibold">{review.author}</p>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;