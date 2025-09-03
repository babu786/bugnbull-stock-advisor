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
    window.open(`https://wa.me/${whatsappNumber.replace('+', '')}`, '_blank');
  };

  const handleEmail = () => {
    window.open(`mailto:${email}`, '_self');
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            Contact <span className="gradient-text">BUGnBULL</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <Button 
            onClick={handlePhoneCall}
            className="w-full h-14 bg-gradient-primary hover:opacity-90 text-lg"
            size="lg"
          >
            <Phone className="w-5 h-5 mr-3" />
            Call Now
            <span className="ml-2 text-sm opacity-80">{phoneNumber}</span>
          </Button>

          <Button 
            onClick={handleWhatsApp}
            className="w-full h-14 bg-green-500 hover:bg-green-600 text-white text-lg"
            size="lg"
          >
            <MessageCircle className="w-5 h-5 mr-3" />
            WhatsApp
            <span className="ml-2 text-sm opacity-80">{whatsappNumber}</span>
          </Button>

          <Button 
            onClick={handleEmail}
            variant="outline"
            className="w-full h-14 text-lg"
            size="lg"
          >
            <Mail className="w-5 h-5 mr-3" />
            Send Email
            <span className="ml-2 text-sm opacity-80">{email}</span>
          </Button>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          Choose your preferred contact method
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactPopup;