import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <div className="flex items-center">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">UTS</span>
              </div>
              <span className="text-xl font-bold font-cairo bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                يونايتد تك
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-cairo font-medium">
              الرئيسية
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-cairo font-medium">
              خدماتنا
            </a>
            <a href="#products" className="text-foreground hover:text-primary transition-colors font-cairo font-medium">
              منتجاتنا
            </a>
            {/* <a href="#about" className="text-foreground hover:text-primary transition-colors font-cairo font-medium">
              من نحن
            </a> */}
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-cairo font-medium">
              تواصل معنا
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <div className="hidden sm:flex items-center space-x-2 rtl:space-x-reverse text-sm text-muted-foreground">
              
              <Button onClick={() => window.open('https://wa.me/+201222919936', '_blank')}><span dir="ltr" className="font-cairo flex items-center"><Phone className="w-4 h-4 mr-2" /> +201222919936</span></Button>
            </div>
            <Button 
              onClick={() => window.open('https://wa.me/+201222919936', '_blank')}
              className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 font-cairo"
            >
              تواصل معنا
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
