import { TrendingUp, Mail, Phone, MapPin } from 'lucide-react';
import ContactPopup from '@/components/ContactPopup';

const Footer = () => {
  const footerSections = [
    {
      title: "Company",
      links: [
        "About Us",
        "Careers", 
        "Press",
        "Blog",
        "Contact"
      ]
    },
    {
      title: "Support",
      links: [
        "Help Center",
        "Security",
        "Privacy Policy", 
        "Terms of Service",
        "Disclosures"
      ]
    }
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold gradient-text">BUGnBULL</span>
              </div>
              
              <p className="text-muted-foreground mb-6 max-w-md">
                Empowering investors with intelligent trading solutions, automated portfolios, 
                and cutting-edge financial technology. Start your investment journey today.
              </p>

              <div className="space-y-3">
                <ContactPopup>
                  <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    <Mail className="w-4 h-4" />
                    <span>contact@bugnbull.com</span>
                  </div>
                </ContactPopup>
                <ContactPopup>
                  <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    <Phone className="w-4 h-4" />
                    <span>+918764551955</span>
                  </div>
                </ContactPopup>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      {link === "Contact" ? (
                        <ContactPopup>
                          <a 
                            href="#" 
                            className="text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
                          >
                            {link}
                          </a>
                        </ContactPopup>
                      ) : (
                        <a 
                          href="#" 
                          className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                        >
                          {link}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 BUGnBULL. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>Securities offered through BUGnBULL Securities LLC</span>
              <span>•</span>
              <span>Member FINRA/SIPC</span>
            </div>
          </div>

          <div className="mt-6 p-4 bg-muted rounded-lg">
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Important Disclosures:</strong> Investment products and services are offered through BUGnBULL Securities LLC, 
              member FINRA/SIPC. All investing involves risk, including the potential loss of principal. 
              Past performance does not guarantee future results. The information provided is for educational purposes only 
              and should not be considered as investment advice. Please consult with a qualified financial advisor before making investment decisions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;