import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MessageCircle, QrCode, X } from 'lucide-react';
import QRCode from 'qrcode';
import { useIsMobile } from '@/hooks/use-mobile';

interface ContactPopupProps {
  children: React.ReactNode;
}

const ContactPopup = ({ children }: ContactPopupProps) => {
  const phoneNumber = '+918764551955';
  const email = 'contact@bugnbull.com';
  const whatsappNumber = '+918764551955';
  const isMobile = useIsMobile();
  const [showQR, setShowQR] = useState(false);
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState('');

  useEffect(() => {
    if (showQR && !qrCodeDataUrl) {
      QRCode.toDataURL(`tel:${phoneNumber}`, {
        width: 200,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      }).then(url => {
        setQrCodeDataUrl(url);
      });
    }
  }, [showQR, phoneNumber, qrCodeDataUrl]);

  const handlePhoneCall = () => {
    if (isMobile) {
      window.open(`tel:${phoneNumber}`, '_self');
    } else {
      setShowQR(true);
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hello! I am interested in BUGnBULL investment advisory services.');
    window.open(`https://wa.me/918764551955?text=${message}`, '_blank');
  };

  const handleEmail = () => {
    // Try to open mailto link, with fallback for mobile
    try {
      const mailtoLink = `mailto:${email}`;
      window.location.href = mailtoLink;
    } catch (error) {
      // Fallback: copy email to clipboard and show alert
      navigator.clipboard.writeText(email).then(() => {
        alert(`Email address copied to clipboard: ${email}`);
      }).catch(() => {
        alert(`Please send email to: ${email}`);
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md w-[95vw] max-w-[350px] rounded-xl sm:rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-center text-lg sm:text-xl font-bold">
            {showQR ? (
              <div className="flex items-center justify-center gap-2">
                <Button
                  onClick={() => setShowQR(false)}
                  variant="ghost"
                  size="sm"
                  className="absolute left-0"
                >
                  <X className="w-4 h-4" />
                </Button>
                Scan to Call
              </div>
            ) : (
              <>Contact <span className="gradient-text">BUGnBULL</span></>
            )}
          </DialogTitle>
        </DialogHeader>
        
        {showQR ? (
          <div className="flex flex-col items-center space-y-4 py-4">
            {qrCodeDataUrl && (
              <div className="bg-white p-4 rounded-lg">
                <img src={qrCodeDataUrl} alt="QR Code to call" className="w-48 h-48" />
              </div>
            )}
            <div className="text-center space-y-2">
              <p className="text-sm font-medium">Scan with your smartphone to call</p>
              <p className="text-xs text-muted-foreground">{phoneNumber}</p>
            </div>
            <Button 
              onClick={() => setShowQR(false)}
              variant="outline"
              className="w-full"
            >
              Back to Contact Options
            </Button>
          </div>
        ) : (
          <>
            <div className="space-y-3 sm:space-y-4 py-4">
              <Button 
                onClick={handlePhoneCall}
                className="w-full h-12 sm:h-14 bg-gradient-primary hover:opacity-90 text-base sm:text-lg flex items-center justify-center gap-2"
                size="lg"
              >
                {isMobile ? (
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                ) : (
                  <QrCode className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                )}
                <div className="flex flex-col items-center min-w-0">
                  <span className="font-medium">{isMobile ? 'Call Now' : 'Show QR to Call'}</span>
                  <span className="text-xs opacity-80 truncate">{phoneNumber}</span>
                </div>
              </Button>

              <Button 
                onClick={handleWhatsApp}
                className="w-full h-12 sm:h-14 bg-success text-success-foreground hover:bg-success/90 text-base sm:text-lg flex items-center justify-center gap-2"
                size="lg"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <div className="flex flex-col items-center min-w-0">
                  <span className="font-medium">WhatsApp</span>
                  <span className="text-xs opacity-80 truncate">{whatsappNumber}</span>
                </div>
              </Button>

              <Button 
                onClick={handleEmail}
                variant="outline"
                className="w-full h-12 sm:h-14 text-base sm:text-lg flex items-center justify-center gap-2"
                size="lg"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <div className="flex flex-col items-center min-w-0">
                  <span className="font-medium">Send Email</span>
                  <span className="text-xs opacity-80 truncate">{email}</span>
                </div>
              </Button>
            </div>

            <div className="text-center text-xs sm:text-sm text-muted-foreground">
              Choose your preferred contact method
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContactPopup;