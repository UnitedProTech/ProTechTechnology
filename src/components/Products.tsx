import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Headphones, Wifi, Database, Phone, Zap, BarChart3 } from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: Headphones,
      title: "سماعات الرأس الاحترافية",
      description: "سماعات عالية الجودة مصممة خصيصاً لمراكز الاتصال مع خاصية إلغاء الضوضاء.",
      price: "اطلب عرض سعر",
      features: ["إلغاء الضوضاء", "راحة طوال اليوم", "جودة صوت عالية"],
      badge: "الأكثر مبيعاً"
    },
    {
      icon: Wifi,
      title: "أجهزة الشبكات المتقدمة",
      description: "حلول شبكات متطورة لضمان اتصال مستقر وسريع لجميع أنظمة الاتصال.",
      price: "اطلب عرض سعر",
      features: ["سرعة عالية", "استقرار الشبكة", "أمان متقدم"],
      badge: "جديد"
    },
    {
      icon: Database,
      title: "خوادم التخزين",
      description: "خوادم عالية الأداء لتخزين وإدارة بيانات مراكز الاتصال بشكل آمن.",
      price: "اطلب عرض سعر",
      features: ["سعة تخزين كبيرة", "نسخ احتياطي", "حماية البيانات"],
      badge: null
    },
    {
      icon: Phone,
      title: "هواتف IP",
      description: "تليفونات حديثة ديجيتال بمميزات احترافية لسرعة الاتصالات",
      price: "اطلب عرض سعر",
      features: ["Cisco", "Grandstreem", "Fiberme", "Yalink"],
      badge: null
    },
    {
      icon: Zap,
      title: " أنظمة حماية الشباكات",
      description: "أنظمة الحماية الإلكترونية (Cybersecurity Systems) تهدف لحماية الأجهزة، الشبكات، والبيانات من الهجمات والاختراقات.",
      price: "اطلب عرض سعر",
      features: ["Anti-malware", "Antivirus", "Firewall"],
      badge: null
    },
    {
      icon: BarChart3,
      title: "لوحات المراقبة الذكية",
      description: "شاشات عرض متقدمة لمراقبة أداء مراكز الاتصال والإحصائيات في الوقت الفعلي.",
      price: "اطلب عرض سعر",
      features: ["عرض فوري", "تقارير تفاعلية", "تحليلات متقدمة"],
      badge: "مميز"
    }
  ];

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-cairo mb-6">
            منتجاتنا المتميزة
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-cairo">
            نوفر مجموعة متكاملة من المنتجات عالية الجودة والمعدات المتخصصة التي تحتاجها لبناء مركز اتصال احترافي
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 relative overflow-hidden animate-slide-up" style={{animationDelay: `${index * 150}ms`}}>
              {product.badge && (
                <Badge className="absolute top-4 right-4 z-10 bg-gradient-to-r from-primary to-primary-glow font-cairo">
                  {product.badge}
                </Badge>
              )}
              
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-cairo mb-2">{product.title}</CardTitle>
                <CardDescription className="text-muted-foreground font-cairo leading-relaxed">
                  {product.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="mb-4">
                  <span className="text-2xl font-bold font-cairo bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                    {product.price}
                  </span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-cairo">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="space-y-2">
                  <Button 
                    onClick={() => window.open('https://wa.me/+201222919936', '_blank')}
                    className="w-full bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 font-cairo"
                  >
                    اطلب الآن
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => window.open('https://wa.me/+201222919936', '_blank')}
                    className="w-full font-cairo"
                  >
                    المزيد من التفاصيل
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
