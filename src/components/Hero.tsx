import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowLeft, CheckCircle, Clock, Users } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-primary/5 min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-right animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-cairo leading-tight mb-6">
              <span className="text-foreground">حلول تقنية </span>
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                متكاملة
              </span>
              <br />
              <span className="text-foreground">لتطوير أعمالك</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 font-cairo max-w-2xl mx-auto lg:mx-0">
              نقدم خدمات متكاملة لتأسيس مراكز الاتصال، والسنترالات الداخلية، وأنظمة إدارة علاقات العملاء 
              بأحدث التقنيات والمعايير العالمية.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg" 
                onClick={() => window.open('https://wa.me/+201222919936', '_blank')}
                className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 font-cairo text-lg px-8 py-3 group"
              >
                <MessageCircle className="ml-2 h-5 w-5" />
                تواصل معنا واتساب
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => window.open('https://wa.me/+201222919936', '_blank')}
                className="font-cairo text-lg px-8 py-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                استكشف خدماتنا
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start text-center lg:text-right">
              <div className="flex items-center justify-center lg:justify-start space-x-2 rtl:space-x-reverse">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-sm font-cairo text-muted-foreground">متاحون للمساعدة 24/7</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2 rtl:space-x-reverse">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <Users className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-sm font-cairo text-muted-foreground">أكثر من 500+ عميل سعيد</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="مركز اتصالات احترافي" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-white/20 animate-fade-in delay-300">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold font-cairo text-foreground">تقنية موثوقة</p>
                    <p className="text-xs font-cairo text-muted-foreground">بأفضل المعايير العالمية</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-white/20 animate-fade-in delay-500">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-orange-600" />
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold font-cairo text-foreground">حلول سريعة</p>
                    <p className="text-xs font-cairo text-muted-foreground">تنفيذ في وقت قياسي</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;