import { FormEvent, useState } from "react";
import {
  ArrowLeft, ArrowUpLeft, Bot, CheckCircle2, ChevronLeft, Headphones,
  Mail, Menu, MessageCircle, Network, Phone, ShieldCheck, Workflow,
  Server, Settings2, X, Zap, Building2, Headset, Clock3, Send,
} from "lucide-react";
import logo from "@/assets/Loogo.png";
import heroImage from "@/assets/hero-tech.jpg";

const EMAIL = "info@united-tech.org";
const WHATSAPP = "201222919936";
const PHONE = "+201222919936";

const services = [
  { icon: Headset, number: "01", title: "حلول مراكز الاتصال", subtitle: "Contact Center Solutions", text: "تصميم وتنفيذ حلول مراكز الاتصال، وتوجيه المكالمات، وIVR، والتقارير وتسجيل المكالمات وفق احتياجات فريقك." },
  { icon: Phone, number: "02", title: "الاتصالات الموحدة والسنترالات", subtitle: "IP Telephony & Unified Communications", text: "أنظمة CUCM وIP Telephony وSIP Trunks وVoice Gateways لربط الموظفين والفروع بكفاءة." },
  { icon: Workflow, number: "03", title: "تكامل الأنظمة وCRM", subtitle: "CRM & Systems Integration", text: "ربط أنظمة الاتصالات مع CRM وتطبيقات الأعمال لتسهيل الوصول إلى بيانات العملاء وتحسين تجربة الخدمة." },
  { icon: Bot, number: "04", title: "الذكاء الاصطناعي والأتمتة", subtitle: "AI & Automation", text: "استكشاف فرص أتمتة خدمة العملاء، ومساعدات الصوت، وتكامل قنوات التواصل حسب نطاق المشروع." },
  { icon: Network, number: "05", title: "الشبكات والبنية التحتية", subtitle: "Network & Infrastructure", text: "تصميم وتطوير الشبكات والبنية التحتية اللازمة لتشغيل أنظمة الاتصالات والتطبيقات المؤسسية." },
  { icon: ShieldCheck, number: "06", title: "الأمن والدعم الفني", subtitle: "Security & Support", text: "حلول حماية وصيانة ودعم فني، مع تحديد نطاق الخدمة وأوقات الاستجابة وفق اتفاقية SLA." },
];

const products = [
  { icon: Headphones, title: "سماعات مراكز الاتصال", text: "خيارات احترافية للاستخدام اليومي وجودة صوت مناسبة لفرق خدمة العملاء." },
  { icon: Network, title: "أجهزة الشبكات", text: "معدات شبكات للمكاتب والفروع وفق المتطلبات الفنية للمشروع." },
  { icon: Server, title: "الخوادم والتخزين", text: "خيارات بنية تحتية وتخزين حسب السعة والأداء المطلوبين." },
  { icon: Phone, title: "هواتف IP وملحقاتها", text: "أجهزة اتصالات للمكاتب ومراكز الاتصال حسب التوافق والاحتياج." },
  { icon: ShieldCheck, title: "حلول أمن الشبكات", text: "حلول حماية للشبكات والأجهزة وفق بيئة العمل ومتطلبات الأمان." },
  { icon: Settings2, title: "حلول تقنية حسب الطلب", text: "ساعدنا في تحديد المواصفات المناسبة للحصول على عرض سعر دقيق." },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", service: "حلول مراكز الاتصال", details: "" });
  const [feedback, setFeedback] = useState("");

  const update = (field: keyof typeof form, value: string) => setForm((current) => ({ ...current, [field]: value }));
  const makeMessage = () => [
    "طلب عرض سعر - United Tech",
    `الاسم: ${form.name}`,
    `الشركة: ${form.company || "غير محدد"}`,
    `الهاتف: ${form.phone}`,
    `البريد: ${form.email || "غير محدد"}`,
    `الخدمة المطلوبة: ${form.service}`,
    `تفاصيل المشروع: ${form.details || "لم تذكر تفاصيل إضافية"}`,
  ].join("\n");

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback("تم تجهيز بيانات طلبك. اختر إرسال عبر البريد أو واتساب لإكمال التواصل.");
  };
  const sendEmail = () => {
    const subject = encodeURIComponent(`طلب عرض سعر من ${form.name} - ${form.service}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${encodeURIComponent(makeMessage())}`;
  };
  const sendWhatsApp = () => window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(makeMessage())}`, "_blank", "noopener,noreferrer");

  return (
    <div className="site-shell" dir="rtl">
      <div className="topline"><div className="container top-inner"><span><CheckCircle2 size={14}/> حلول تقنية للشركات ومراكز الاتصال</span><a href={`mailto:${EMAIL}`} dir="ltr"><Mail size={14}/> {EMAIL}</a></div></div>
      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#home" className="brand" aria-label="United Tech الصفحة الرئيسية"><img src={logo} alt="United Tech"/><span>UNITED <b>TECH</b><small>INTEGRATED SOLUTIONS</small></span></a>
          <button className="mobile-menu" aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            <a href="#home" onClick={() => setMenuOpen(false)}>الرئيسية</a><a href="#services" onClick={() => setMenuOpen(false)}>الحلول والخدمات</a><a href="#products" onClick={() => setMenuOpen(false)}>المنتجات</a><a href="#about" onClick={() => setMenuOpen(false)}>لماذا United Tech؟</a><a href="#contact" onClick={() => setMenuOpen(false)}>تواصل معنا</a>
          </nav>
          <a className="button button-primary nav-cta" href="#contact">اطلب عرض سعر <ArrowLeft size={17}/></a>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-orb orb-one"/><div className="hero-orb orb-two"/>
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span/> شريكك في الحلول التقنية المؤسسية</div>
              <h1>تقنية أقوى.<br/><span>تواصل أذكى.</span><br/>أعمال تنمو بثقة.</h1>
              <p className="hero-description">نصمم وننفذ حلول الاتصالات ومراكز الاتصال والبنية التحتية التي تساعد شركتك على خدمة عملائها بكفاءة وربط أنظمتها بصورة أفضل.</p>
              <div className="hero-actions"><a className="button button-primary button-large" href="#contact">ناقش مشروعك معنا <ArrowLeft size={18}/></a><a className="button button-outline button-large" href="#services">استكشف حلولنا <ChevronLeft size={18}/></a></div>
              <div className="hero-points"><span><CheckCircle2/> حلول حسب احتياج شركتك</span><span><CheckCircle2/> دعم وتنفيذ تقني</span><span><CheckCircle2/> تكامل بين الأنظمة</span></div>
            </div>
            <div className="hero-visual">
              <div className="hero-image-frame"><img src={heroImage} alt="حلول تقنية واتصالات مؤسسية"/><div className="image-overlay"/></div>
              <div className="floating-card floating-top"><span className="floating-icon"><Network/></span><div><b>Enterprise Connectivity</b><small>ربط الأنظمة والفرق</small></div></div>
              <div className="floating-card floating-bottom"><span className="floating-icon green"><Headset/></span><div><b>Customer Experience</b><small>تجربة أفضل للعملاء</small></div></div>
              <div className="visual-caption"><span className="caption-dot"/> حلول مصممة لتناسب بيئة عملك</div>
            </div>
          </div>
        </section>

        <section className="trust-strip"><div className="container trust-grid"><div><Building2/><span><b>حلول للشركات</b><small>مؤسسات وفرق عمل</small></span></div><div><Headset/><span><b>مراكز الاتصال</b><small>تجربة خدمة مترابطة</small></span></div><div><Workflow/><span><b>تكامل الأنظمة</b><small>تدفق عمل أكثر سلاسة</small></span></div><div><ShieldCheck/><span><b>دعم تقني</b><small>حسب نطاق الخدمة</small></span></div></div></section>

        <section className="section services-section" id="services"><div className="container"><div className="section-heading"><div><div className="eyebrow eyebrow-light">حلولنا وخدماتنا</div><h2>كل ما تحتاجه لبنية تقنية<br/><span>تعمل معًا بذكاء.</span></h2></div><p>نساعدك على اختيار الحل المناسب، من الاتصالات اليومية إلى تكامل الأنظمة والبنية التحتية، بناءً على متطلبات عملك الفعلية.</p></div><div className="services-grid">{services.map((service) => { const Icon = service.icon; return <article className="service-card" key={service.number}><div className="service-card-top"><span className="service-icon"><Icon/></span><span className="service-number">{service.number}</span></div><div className="service-subtitle">{service.subtitle}</div><h3>{service.title}</h3><p>{service.text}</p><a href="#contact" onClick={() => update("service", service.title)} className="text-link">اطلب استشارة <ArrowUpLeft size={17}/></a></article>; })}</div></div></section>

        <section className="section products-section" id="products"><div className="container"><div className="section-heading products-heading"><div><div className="eyebrow eyebrow-light">المنتجات والتجهيزات</div><h2>المواصفات المناسبة،<br/><span>بسعر عرض واضح.</span></h2></div><p>نوفر خيارات من التجهيزات التقنية وفق الموديل والكمية والتوافق المطلوب. لا نعرض أسعارًا افتراضية؛ اطلب عرض سعر مخصصًا لمشروعك.</p></div><div className="products-grid">{products.map((product) => { const Icon = product.icon; return <article className="product-card" key={product.title}><div className="product-icon"><Icon/></div><h3>{product.title}</h3><p>{product.text}</p><a href="#contact" onClick={() => update("service", product.title)} className="product-link">اطلب السعر <ArrowLeft size={16}/></a></article>; })}</div></div></section>

        <section className="about-section" id="about"><div className="container about-grid"><div className="about-visual"><div className="about-panel"><div className="about-panel-mark"><Zap/></div><span className="about-kicker">UNITED TECH</span><h3>حلول تقنية تبدأ<br/>من احتياجك.</h3><p>نركز على ملاءمة الحل التقني مع أهداف التشغيل وتجربة العملاء.</p><div className="about-line"/></div><div className="about-mini-card"><Settings2/><span><b>Designed for your business</b><small>حلول حسب نطاق المشروع</small></span></div></div><div className="about-copy"><div className="eyebrow eyebrow-light">لماذا United Tech؟</div><h2>شريك تقني يفهم<br/><span>احتياجات التشغيل.</span></h2><p>اختيار التقنية الصحيحة لا يعتمد على الأجهزة وحدها؛ بل على طريقة عمل فريقك، والأنظمة الموجودة لديك، والأهداف التي تريد تحقيقها.</p><div className="benefit-list"><div><CheckCircle2/><span><b>حلول مخصصة</b><small>نحدد النطاق بناءً على متطلبات المشروع.</small></span></div><div><CheckCircle2/><span><b>تكامل عملي</b><small>نراعي التوافق بين الاتصالات والأنظمة.</small></span></div><div><CheckCircle2/><span><b>دعم واضح النطاق</b><small>تحديد مسؤوليات الدعم والاستجابة قبل التنفيذ.</small></span></div></div><a className="button button-primary" href="#contact">تحدث مع فريقنا <ArrowLeft size={17}/></a></div></div></section>

        <section className="cta-band"><div className="container cta-inner"><div><div className="eyebrow">هل لديك مشروع قادم؟</div><h2>دعنا نحدد الحل الأنسب لعملك.</h2><p>شاركنا متطلباتك وسنبدأ بمناقشة نطاق المشروع والتجهيزات المناسبة.</p></div><a href="#contact" className="button button-white">اطلب عرض سعر الآن <ArrowLeft size={18}/></a></div></section>

        <section className="section contact-section" id="contact"><div className="container"><div className="section-heading contact-heading"><div><div className="eyebrow eyebrow-light">تواصل مع فريقنا</div><h2>أخبرنا عن مشروعك،<br/><span>ونتواصل معك.</span></h2></div><p>املأ البيانات الأساسية وحدد الخدمة المطلوبة، ثم اختر إرسال التفاصيل عبر البريد الإلكتروني أو واتساب.</p></div><div className="contact-grid"><div className="contact-info"><h3>خلينا نتكلم عن احتياجك</h3><p>سواء كنت تطور مركز اتصال أو تحدّث البنية التحتية، شاركنا التفاصيل الأساسية لنبدأ من المكان الصحيح.</p><a className="contact-method" href={`mailto:${EMAIL}`}><span className="contact-method-icon"><Mail/></span><span><small>البريد الإلكتروني</small><b dir="ltr">{EMAIL}</b></span><ArrowUpLeft/></a><a className="contact-method" href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer"><span className="contact-method-icon whatsapp"><MessageCircle/></span><span><small>واتساب / الهاتف</small><b dir="ltr">+20 122 291 9936</b></span><ArrowUpLeft/></a><div className="response-note"><Clock3/><span>سنراجع تفاصيل طلبك ونتواصل معك عبر وسيلة التواصل التي تختارها.</span></div></div>
          <form className="quote-form" onSubmit={submitForm}><div className="form-heading"><div><span>REQUEST A QUOTE</span><h3>طلب عرض سعر</h3></div><Send/></div><div className="form-row"><label>الاسم الكامل *<input required value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="اكتب اسمك" autoComplete="name"/></label><label>اسم الشركة<input value={form.company} onChange={(e) => update("company", e.target.value)} placeholder="اسم الشركة" autoComplete="organization"/></label></div><div className="form-row"><label>رقم الهاتف *<input required value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+20..." type="tel" autoComplete="tel"/></label><label>البريد الإلكتروني<input value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="name@company.com" type="email" autoComplete="email"/></label></div><label>الخدمة المطلوبة *<select required value={form.service} onChange={(e) => update("service", e.target.value)}><option>حلول مراكز الاتصال</option><option>الاتصالات الموحدة والسنترالات</option><option>تكامل الأنظمة وCRM</option><option>الذكاء الاصطناعي والأتمتة</option><option>الشبكات والبنية التحتية</option><option>الأمن والدعم الفني</option><option>سماعات مراكز الاتصال</option><option>أجهزة الشبكات</option><option>الخوادم والتخزين</option><option>هواتف IP وملحقاتها</option><option>حلول تقنية حسب الطلب</option><option>أخرى</option></select></label><label>تفاصيل المشروع<textarea rows={4} value={form.details} onChange={(e) => update("details", e.target.value)} placeholder="ما الذي تحتاج إلى تنفيذه؟ اذكر الكميات أو الأنظمة الحالية إن أمكن."/></label>{feedback && <p className="form-feedback" role="status">{feedback}</p>}<div className="form-actions"><button className="button button-primary" type="button" onClick={sendEmail} disabled={!form.name.trim() || !form.phone.trim()}>إرسال عبر البريد <Mail size={17}/></button><button className="button button-whatsapp" type="button" onClick={sendWhatsApp} disabled={!form.name.trim() || !form.phone.trim()}>إرسال عبر واتساب <MessageCircle size={17}/></button></div><small className="form-privacy">عند اختيار وسيلة الإرسال، ستُفتح الخدمة المناسبة مع تفاصيل طلبك جاهزة للمراجعة والإرسال.</small></form>
        </div></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-main"><div className="footer-brand"><a href="#home" className="brand brand-footer"><img src={logo} alt="United Tech"/><span>UNITED <b>TECH</b><small>INTEGRATED SOLUTIONS</small></span></a><p>حلول اتصالات وتقنية متكاملة تساعد الشركات على ربط أنظمتها وتحسين عملياتها.</p><a href={`mailto:${EMAIL}`} className="footer-email"><Mail size={16}/>{EMAIL}</a></div><div><h4>روابط سريعة</h4><a href="#services">الحلول والخدمات</a><a href="#products">المنتجات</a><a href="#about">لماذا United Tech؟</a><a href="#contact">طلب عرض سعر</a></div><div><h4>تواصل معنا</h4><a href={`tel:${PHONE}`} dir="ltr">+20 122 291 9936</a><a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">واتساب</a><a href={`mailto:${EMAIL}`}>البريد الإلكتروني</a></div><div className="footer-cta"><h4>لديك استفسار؟</h4><p>يسعدنا مناقشة متطلبات مشروعك.</p><a className="button button-primary" href="#contact">ابدأ التواصل <ArrowLeft size={16}/></a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} United Tech. جميع الحقوق محفوظة.</span><a href="#home">العودة للأعلى ↑</a></div></footer>
      <a className="floating-whatsapp" href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" aria-label="تواصل معنا عبر واتساب"><MessageCircle/></a>
    </div>
  );
};

export default Index;
