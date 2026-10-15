import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Settings, Users, ArrowLeft } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Phone,
      title: "تأسيس مراكز اتصال",
      description: "نقدم خدمات متكاملة لتأسيس وتجهيز مراكز الاتصال بأحدث التقنيات والمعدات، مع توفير الدعم الفني المستمر.",
      features: [
        "تصميم وتخطيط مراكز الاتصال",
        "تركيب أحدث معدات الاتصال",
        "تدريب الفرق التقنية",
        "دعم فني 24/7"
      ]
    },
    {
      icon: Settings,
      title: "سنترالات داخلية",
      description: "تركيب وإعداد السنترالات الداخلية المتطورة التي تناسب احتياجات مؤسستك مع خدمات الصيانة والتحديث المستمر.",
      features: [
        "سنترالات IP متطورة",
        "ربط الفروع والمكاتب",
        "تسجيل المكالمات",
        "تقارير مفصلة"
      ]
    },
    {
      icon: Users,
      title: "أنظمة CRM",
      description: "تطبيق وتخصيص أنظمة إدارة علاقات العملاء لتحسين تفاعل عملائك وزيادة كفاءة فريق المبيعات والدعم.",
      features: [
        "إدارة قاعدة بيانات العملاء",
        "متابعة المبيعات",
        "تقارير الأداء",
        "ربط مع أنظمة الاتصال"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-cairo mb-6">
            خدماتنا المتميزة
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-cairo">
            نقدم مجموعة متكاملة من الخدمات التقنية المتخصصة لمساعدة شركتك على النمو وتحسين كفاءة العمليات التشغيلية
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 animate-slide-up" style={{animationDelay: `${index * 200}ms`}}>
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-cairo mb-2">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground font-cairo leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-cairo">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  onClick={() => window.open('https://wa.me/+201222919936', '_blank')}
                  className="w-full font-cairo group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  استفسر الآن
                  <ArrowLeft className="mr-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button 
            size="lg" 
            onClick={() => window.open('https://wa.me/+201222919936', '_blank')}
            className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 font-cairo text-lg px-8 py-3"
          >
            تحدث مع مستشار تقني الآن
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;