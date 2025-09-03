import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MessageCircle } from 'lucide-react';

interface ContactPopupProps {
  children: React.ReactNode;
}

const ContactPopup = ({ children }: ContactPopupProps) => {
  const phoneNumber = '+918764551955';
  const email = 'contact@bugnbull.com';
  const whatsappNumber = '+918764551955';

  const handlePhoneCall = () => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hello! I am interested in BUGnBULL investment advisory services.');
    window.open(`https://wa.me/918764551955?text=${message}`, '_blank');
  };

  const handleEmail = () => {
    window.open(`mailto:${email}`, '_self');
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md w-[95vw] max-w-[350px] rounded-xl sm:rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-center text-lg sm:text-xl font-bold">
            Contact <span className="gradient-text">BUGnBULL</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-3 sm:space-y-4 py-4">
          <Button 
            onClick={handlePhoneCall}
            className="w-full h-12 sm:h-14 bg-gradient-primary hover:opacity-90 text-base sm:text-lg"
            size="lg"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
            Call Now
            <span className="ml-2 text-xs sm:text-sm opacity-80">{phoneNumber}</span>
          </Button>

          <Button 
            onClick={handleWhatsApp}
            className="w-full h-12 sm:h-14 bg-success text-success-foreground hover:bg-success/90 text-base sm:text-lg"
            size="lg"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
            WhatsApp
            <span className="ml-2 text-xs sm:text-sm opacity-80">{whatsappNumber}</span>
          </Button>

          <Button 
            onClick={handleEmail}
            variant="outline"
            className="w-full h-12 sm:h-14 text-base sm:text-lg"
            size="lg"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
            Send Email
            <span className="ml-2 text-xs sm:text-sm opacity-80">{email}</span>
          </Button>
        </div>

        <div className="text-center text-xs sm:text-sm text-muted-foreground">
          Choose your preferred contact method
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactPopup;