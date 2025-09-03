import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, TrendingUp, PieChart, BookOpen, User, Home } from 'lucide-react';
import ContactPopup from '@/components/ContactPopup';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Learn', href: '/learn', icon: BookOpen },
    { name: 'Services', href: '/services', icon: User },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="text-lg sm:text-2xl font-bold gradient-text">BUGnBULL</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <ContactPopup>
              <Button variant="ghost" className="text-muted-foreground text-sm lg:text-base">
                Contact Us
              </Button>
            </ContactPopup>
            <ContactPopup>
              <Button className="bg-gradient-primary hover:opacity-90 transition-opacity text-sm lg:text-base">
                Free Consultation
              </Button>
            </ContactPopup>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground p-2"
            >
              {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors duration-200 py-3 px-2 rounded-md hover:bg-muted/50"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </a>
                );
              })}
              <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                <ContactPopup>
                  <Button variant="ghost" className="justify-start h-12 text-base">
                    <User className="w-4 h-4 mr-2" />
                    Contact Us
                  </Button>
                </ContactPopup>
                <ContactPopup>
                  <Button className="bg-gradient-primary hover:opacity-90 transition-opacity h-12 text-base">
                    Free Consultation
                  </Button>
                </ContactPopup>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;