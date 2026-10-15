import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";


const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">UTS</span>
              </div>
              <span className="text-2xl font-bold font-cairo">يونايتد تك</span>
            </div>
            <p className="text-background/80 font-cairo leading-relaxed mb-4">
              شريكك الموثوق في تقديم الحلول التقنية المتكاملة لمراكز الاتصال والسنترالات الداخلية وأنظمة إدارة علاقات العملاء.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              {/* <button className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-lg flex items-center justify-center transition-colors"> */}
                <Button 
                // size="lg" 
                onClick={() => window.open('https://wa.me/+201222919936', '_blank')}
                className="w-auto bg-green-600 hover:bg-green-700 font-cairo flex items-center justify-center"
              >
                <MessageCircle className=" h-5 w-5" />
              </Button>
                {/* <MessageCircle className="w-5 h-5 text-white" /> */}
              {/* </button> */}
              {/* <button className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"> */}
               <Button 
                // size="lg" 
                onClick={() => window.open('tel:+201222919936', '_blank')}
                className="w-auto bg-blue-600 hover:bg-blue-700 font-cairo flex items-center justify-center"
              >
                <Phone className="w-5 h-5 text-white" />
              </Button>
              {/* </button> */}
              {/* <button className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-lg flex items-center justify-center transition-colors"> */}
               <Button 
                // size="lg" 
                onClick={() => window.open('mailto:info@unitedtech.com.eg', '_blank')}
                className="w-auto bg-red-600 hover:bg-red-700 font-cairo flex items-center justify-center"
              >
                <Mail className="w-5 h-5 text-white" />
              </Button>
              {/* </button> */}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold font-cairo mb-4">خدماتنا</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-background/80 hover:text-primary transition-colors font-cairo">تأسيس مراكز اتصال</a></li>
              <li><a href="#services" className="text-background/80 hover:text-primary transition-colors font-cairo">سنترالات داخلية</a></li>
              <li><a href="#services" className="text-background/80 hover:text-primary transition-colors font-cairo">أنظمة CRM</a></li>
              <li><a href="#services" className="text-background/80 hover:text-primary transition-colors font-cairo">الدعم الفني</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold font-cairo mb-4">منتجاتنا</h3>
            <ul className="space-y-2">
              <li><a href="#products" className="text-background/80 hover:text-primary transition-colors font-cairo">سماعات احترافية</a></li>
              <li><a href="#products" className="text-background/80 hover:text-primary transition-colors font-cairo">أجهزة الشبكات</a></li>
              <li><a href="#products" className="text-background/80 hover:text-primary transition-colors font-cairo">خوادم التخزين</a></li>
              <li><a href="#products" className="text-background/80 hover:text-primary transition-colors font-cairo">أنظمة حماية الشباكات</a></li>
              <li><a href="#products" className="text-background/80 hover:text-primary transition-colors font-cairo">هواتف IP</a></li>
              <li><a href="#products" className="text-background/80 hover:text-primary transition-colors font-cairo">لوحات المراقبة الذكية</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold font-cairo mb-4">تواصل معنا</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="w-5 h-5 text-primary" />
                <span dir="ltr" className="text-background/80 font-cairo"><a href="tel:+201222919936">+20 1222919936</a></span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="w-5 h-5 text-primary" />
                <span dir="ltr" className="text-background/80 font-cairo"><a href="tel:+201140764800">+20 1140764800</a></span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-background/80 font-cairo"><a href="mailto:info@united-tech.org">info@united-tech.org</a></span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-background/80 font-cairo">القاهرة، مصر</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 font-cairo">
            © 2024 يونايتد تك. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
