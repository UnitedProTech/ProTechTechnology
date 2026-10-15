import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-cairo mb-6">
            تواصل معنا
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-cairo">
            نحن هنا لمساعدتك في تحقيق أهدافك التقنية. تواصل معنا الآن وسنقوم بالرد عليك في أسرع وقت ممكن
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold font-cairo mb-6">معلومات التواصل</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold font-cairo">الهاتف</p>
                    {/* <p dir="ltr" className="text-muted-foreground font-cairo">+20 1222919936</p> */}
                    <p dir="ltr" className="text-muted-foreground font-cairo"><a href="tel:+201222919936" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-cairo">+20 1222919936</a></p>
                    <a href="https://wa.me/+201222919936" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-cairo">تواصل عبر واتساب</a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold font-cairo">الهاتف</p>
                    <p dir="ltr" className="text-muted-foreground font-cairo"><a href="tel:+201140764800" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-cairo">+20 1140764800</a></p>
                    <a href="https://wa.me/+201140764800" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-cairo">تواصل عبر واتساب</a>
                  </div>
                </div>

          
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold font-cairo">البريد الإلكتروني</p>
                    {/* <p className="text-muted-foreground font-cairo">info@united-tech.org</p> */}
                    <a href="mailto:info@united-tech.org" className="text-primary hover:underline font-cairo">info@united-tech.org</a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold font-cairo">العنوان</p>
                    <p className="text-muted-foreground font-cairo">القاهرة، مصر</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold font-cairo">ساعات العمل</p>
                    <p className="text-muted-foreground font-cairo">24/7 - متاحون دائماً</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="space-y-4">
              <Button 
                size="lg" 
                onClick={() => window.open('https://wa.me/+201222919936', '_blank')}
                className="w-full bg-green-600 hover:bg-green-700 font-cairo"
              >
                <MessageCircle className="ml-2 h-5 w-5" />
                تواصل عبر واتساب
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => window.open('tel:+201222919936', '_blank')}
                className="w-full font-cairo border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Phone className="ml-2 h-5 w-5" />
                اتصل بنا مباشرة
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="animate-slide-up delay-300">
            <CardHeader>
              <CardTitle className="text-2xl font-cairo">أرسل لنا رسالة</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium font-cairo mb-2">الاسم الكامل</label>
                    <Input placeholder="أدخل اسمك الكامل" className="font-cairo" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium font-cairo mb-2">رقم الهاتف</label>
                    <Input placeholder="أدخل رقم هاتفك" className="font-cairo" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium font-cairo mb-2">البريد الإلكتروني</label>
                  <Input type="email" placeholder="أدخل بريدك الإلكتروني" className="font-cairo" />
                </div>

                <div>
                  <label className="block text-sm font-medium font-cairo mb-2">نوع الخدمة المطلوبة</label>
                  <select className="w-full border border-input rounded-md px-3 py-2 font-cairo bg-background">
                    <option value="">اختر نوع الخدمة</option>
                    <option value="call-center">تأسيس مراكز اتصال</option>
                    <option value="pbx">سنترالات داخلية</option>
                    <option value="crm">أنظمة CRM</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium font-cairo mb-2">تفاصيل المشروع</label>
                  <Textarea 
                    placeholder="أخبرنا عن مشروعك ومتطلباتك..."
                    rows={4}
                    className="font-cairo"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  onClick={() => window.open('https://wa.me/+201222919936', '_blank')}
                  className="w-full bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 font-cairo"
                >
                  إرسال الرسالة
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
