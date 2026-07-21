/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export const marketOptions = [
  { code: "en-GB", language: "en", direction: "ltr", flag: "🇬🇧", market: "United Kingdom", native: "English (UK)" },
  { code: "en-US", language: "en", direction: "ltr", flag: "🇺🇸", market: "United States", native: "English (US)" },
  { code: "ar-AE", language: "ar", direction: "rtl", flag: "🇦🇪", market: "United Arab Emirates", native: "العربية · الإمارات" },
  { code: "ar-KW", language: "ar", direction: "rtl", flag: "🇰🇼", market: "Kuwait", native: "العربية · الكويت" },
  { code: "ur-PK", language: "ur", direction: "rtl", flag: "🇵🇰", market: "Pakistan", native: "اردو · پاکستان" },
];

const arabic = {
  Language: "اللغة",
  "Choose your market and language": "اختر السوق واللغة",
  "Market & language": "السوق واللغة",
  "Choose your experience": "اختر تجربتك",
  "Your selection is saved for your next visit.": "سيتم حفظ اختيارك للزيارة القادمة.",
  "United Kingdom": "المملكة المتحدة",
  "United States": "الولايات المتحدة",
  "United Arab Emirates": "الإمارات العربية المتحدة",
  Kuwait: "الكويت",
  Pakistan: "باكستان",
  Services: "الخدمات",
  Industries: "القطاعات",
  Solutions: "الحلول",
  Insights: "الرؤى",
  About: "من نحن",
  Careers: "الوظائف",
  Contact: "تواصل معنا",
  "Contact us": "تواصل معنا",
  Development: "التطوير",
  "AI & Automation": "الذكاء الاصطناعي والأتمتة",
  "Marketing & Visibility": "التسويق والظهور الرقمي",
  "Enterprise & Public": "المؤسسات والقطاع العام",
  "Commerce & Property": "التجارة والعقارات",
  "Operations & Technology": "العمليات والتقنية",
  "Business Outcomes": "نتائج الأعمال",
  "Product Solutions": "حلول المنتجات",
  Platforms: "المنصات",
  Explore: "استكشف",
  Topics: "المواضيع",
  Resources: "المصادر",
  "Custom Software Development": "تطوير البرمجيات المخصصة",
  "Website Development": "تطوير المواقع الإلكترونية",
  "Mobile App Development": "تطوير تطبيقات الجوال",
  "SaaS Product Development": "تطوير منتجات البرمجيات السحابية",
  "UI / UX Design": "تصميم تجربة وواجهة المستخدم",
  "AI Chatbots & Agents": "روبوتات المحادثة ووكلاء الذكاء الاصطناعي",
  "Workflow Automation": "أتمتة سير العمل",
  "CRM Automation": "أتمتة إدارة علاقات العملاء",
  "API & Third-Party Integrations": "تكامل واجهات البرمجة والأنظمة الخارجية",
  "AI Strategy Consulting": "استشارات استراتيجية الذكاء الاصطناعي",
  "Performance Marketing": "التسويق القائم على الأداء",
  "Google Ads & Lead Generation": "إعلانات Google وتوليد العملاء المحتملين",
  "SEO & AEO": "تحسين محركات البحث ومحركات الإجابة",
  "Conversion Optimization": "تحسين التحويل",
  "Marketing Automation": "أتمتة التسويق",
  "Government & Public Sector": "الحكومة والقطاع العام",
  Healthcare: "الرعاية الصحية",
  "Finance & Banking": "التمويل والخدمات المصرفية",
  "Professional Services": "الخدمات المهنية",
  "eCommerce & Retail": "التجارة الإلكترونية والتجزئة",
  "Real Estate": "العقارات",
  "Restaurants & Hospitality": "المطاعم والضيافة",
  Automotive: "السيارات",
  Manufacturing: "التصنيع",
  "Logistics & Supply Chain": "الخدمات اللوجستية وسلاسل الإمداد",
  "SaaS & Technology": "البرمجيات السحابية والتقنية",
  "Startups & Scaleups": "الشركات الناشئة والمتوسعة",
  "Automate Manual Operations": "أتمتة العمليات اليدوية",
  "Generate Qualified Leads": "توليد عملاء محتملين مؤهلين",
  "Improve Website Conversion": "تحسين تحويلات الموقع",
  "Connect Disconnected Tools": "ربط الأدوات والأنظمة",
  "Launch an MVP": "إطلاق منتج أولي قابل للتطبيق",
  "Modernize Legacy Software": "تحديث الأنظمة القديمة",
  "Build a Customer Portal": "إنشاء بوابة للعملاء",
  "Quality Assurance & Testing": "ضمان الجودة والاختبار",
  WordPress: "ووردبريس",
  Shopify: "شوبيفاي",
  Webflow: "ويب فلو",
  "CRM & API Integrations": "تكاملات CRM وواجهات البرمجة",
  "Blog & Insights": "المدونة والرؤى",
  "Case Studies": "دراسات الحالة",
  "Client Reviews": "آراء العملاء",
  "Our Work & Portfolio": "أعمالنا ومعرض المشاريع",
  "Software & Product": "البرمجيات والمنتجات",
  "SEO, AEO & Growth": "البحث والنمو الرقمي",
  "UI / UX & Conversion": "تجربة المستخدم والتحويل",
  "Automation Guides": "أدلة الأتمتة",
  "Growth Playbooks": "أدلة النمو",
  "Development Guides": "أدلة التطوير",
  "Talk to an Expert": "تحدث مع خبير",
  "View all": "عرض الكل",
  "Start a conversation": "ابدأ محادثة",
  "Talk to an expert": "تحدث مع خبير",
  "Keep exploring": "واصل الاستكشاف",
  "Discuss your project": "ناقش مشروعك معنا",
  "See what’s included": "اكتشف ما تتضمنه الخدمة",
  "Ready to make this real?": "هل أنت مستعد لتحويل الفكرة إلى واقع؟",
  "Your next move": "خطوتك التالية",
  "How we work": "كيف نعمل",
  "Explore our work": "استكشف أعمالنا",
  "We don't sell services.": "نحن لا نبيع خدمات فقط.",
  "We close growth gaps.": "نحن نغلق فجوات النمو.",
  "Systems that remove bottlenecks and accelerate growth": "أنظمة تزيل العوائق وتسرّع النمو",
  "Close Your Biggest Gap": "عالج أكبر عائق لديك",
  "See Systems in Action": "شاهد الأنظمة أثناء العمل",
  "Proof, not promises.": "نتائج حقيقية، لا مجرد وعود.",
  "After Quelogics": "بعد QueLogics",
  "Less busywork. More room for growth.": "عمل يدوي أقل، ومساحة أكبر للنمو.",
  "Less busywork. More room for": "عمل يدوي أقل، ومساحة أكبر لـ",
  "From painful bottleneck to": "من عائق مؤلم إلى",
  "Built to close the": "مصمم لإغلاق",
  "real momentum.": "تقدم حقيقي.",
  "growth.": "النمو.",
  "gap.": "الفجوة.",
  "Show us the bottleneck": "أخبرنا عن العائق",
  "Let's talk": "لنتحدث",
  "See systems in production": "شاهد أنظمتنا في بيئة العمل",
  "View work": "عرض الأعمال",
  "No runaround. Just systems that work.": "لا تعقيد، بل أنظمة تعمل بكفاءة.",
  "From painful bottleneck to real momentum.": "من عائق مؤلم إلى تقدم حقيقي.",
  Discovery: "الاكتشاف",
  Design: "التصميم",
  Build: "البناء",
  Launch: "الإطلاق",
  Support: "الدعم",
  "Keep improving": "تحسين مستمر",
  "One clear path from idea to impact.": "مسار واضح من الفكرة إلى التأثير.",
  "Experience design": "تصميم التجربة",
  "Every detail has a job": "لكل تفصيل هدف",
  "Product engineering": "هندسة المنتجات",
  "Built to keep moving": "مصمم لمواصلة التقدم",
};

const urdu = {
  Language: "زبان",
  "Choose your market and language": "اپنی مارکیٹ اور زبان منتخب کریں",
  "Market & language": "مارکیٹ اور زبان",
  "Choose your experience": "اپنا تجربہ منتخب کریں",
  "Your selection is saved for your next visit.": "آپ کا انتخاب اگلی بار کے لیے محفوظ رہے گا۔",
  "United Kingdom": "برطانیہ",
  "United States": "ریاستہائے متحدہ",
  "United Arab Emirates": "متحدہ عرب امارات",
  Kuwait: "کویت",
  Pakistan: "پاکستان",
  Services: "سروسز",
  Industries: "انڈسٹریز",
  Solutions: "حل",
  Insights: "معلومات",
  About: "ہمارے بارے میں",
  Careers: "کیریئرز",
  Contact: "رابطہ",
  "Contact us": "ہم سے رابطہ کریں",
  Development: "ڈیولپمنٹ",
  "AI & Automation": "اے آئی اور آٹومیشن",
  "Marketing & Visibility": "مارکیٹنگ اور آن لائن موجودگی",
  "Enterprise & Public": "انٹرپرائز اور پبلک سیکٹر",
  "Commerce & Property": "کامرس اور پراپرٹی",
  "Operations & Technology": "آپریشنز اور ٹیکنالوجی",
  "Business Outcomes": "کاروباری نتائج",
  "Product Solutions": "پروڈکٹ سلوشنز",
  Platforms: "پلیٹ فارمز",
  Explore: "دیکھیں",
  Topics: "موضوعات",
  Resources: "وسائل",
  "Custom Software Development": "کسٹم سافٹ ویئر ڈیولپمنٹ",
  "Website Development": "ویب سائٹ ڈیولپمنٹ",
  "Mobile App Development": "موبائل ایپ ڈیولپمنٹ",
  "SaaS Product Development": "ساس پروڈکٹ ڈیولپمنٹ",
  "UI / UX Design": "یو آئی اور یو ایکس ڈیزائن",
  "AI Chatbots & Agents": "اے آئی چیٹ بوٹس اور ایجنٹس",
  "Workflow Automation": "ورک فلو آٹومیشن",
  "CRM Automation": "سی آر ایم آٹومیشن",
  "API & Third-Party Integrations": "اے پی آئی اور تھرڈ پارٹی انٹیگریشنز",
  "AI Strategy Consulting": "اے آئی اسٹریٹیجی کنسلٹنگ",
  "Performance Marketing": "پرفارمنس مارکیٹنگ",
  "Google Ads & Lead Generation": "گوگل ایڈز اور لیڈ جنریشن",
  "SEO & AEO": "ایس ای او اور اے ای او",
  "Conversion Optimization": "کنورژن آپٹیمائزیشن",
  "Marketing Automation": "مارکیٹنگ آٹومیشن",
  "Government & Public Sector": "حکومت اور پبلک سیکٹر",
  Healthcare: "صحت کا شعبہ",
  "Finance & Banking": "فنانس اور بینکنگ",
  "Professional Services": "پروفیشنل سروسز",
  "eCommerce & Retail": "ای کامرس اور ریٹیل",
  "Real Estate": "رئیل اسٹیٹ",
  "Restaurants & Hospitality": "ریستوران اور ہاسپیٹیلٹی",
  Automotive: "آٹوموٹیو",
  Manufacturing: "مینوفیکچرنگ",
  "Logistics & Supply Chain": "لاجسٹکس اور سپلائی چین",
  "SaaS & Technology": "ساس اور ٹیکنالوجی",
  "Startups & Scaleups": "اسٹارٹ اپس اور اسکیل اپس",
  "Blog & Insights": "بلاگ اور معلومات",
  "Case Studies": "کیس اسٹڈیز",
  "Client Reviews": "کلائنٹ ریویوز",
  "Our Work & Portfolio": "ہمارا کام اور پورٹ فولیو",
  "Talk to an Expert": "ماہر سے بات کریں",
  "Start a conversation": "بات چیت شروع کریں",
  "Talk to an expert": "ماہر سے بات کریں",
  "Discuss your project": "اپنے پروجیکٹ پر بات کریں",
  "Ready to make this real?": "کیا آپ اسے حقیقت بنانے کے لیے تیار ہیں؟",
  "We don't sell services.": "ہم صرف سروسز فروخت نہیں کرتے۔",
  "We close growth gaps.": "ہم ترقی کی رکاوٹیں ختم کرتے ہیں۔",
  "Systems that remove bottlenecks and accelerate growth": "ایسے سسٹمز جو رکاوٹیں ختم اور ترقی تیز کریں",
  "Close Your Biggest Gap": "اپنی سب سے بڑی رکاوٹ ختم کریں",
  "See Systems in Action": "سسٹمز کو کام کرتے دیکھیں",
  "Proof, not promises.": "وعدے نہیں، عملی نتائج۔",
  "After Quelogics": "QueLogics کے بعد",
  "Less busywork. More room for growth.": "کم دستی کام، ترقی کے لیے زیادہ وقت۔",
  "Less busywork. More room for": "کم دستی کام، زیادہ گنجائش",
  "From painful bottleneck to": "مشکل رکاوٹ سے",
  "Built to close the": "ختم کرنے کے لیے تیار",
  "real momentum.": "حقیقی رفتار تک۔",
  "growth.": "ترقی۔",
  "gap.": "رکاوٹ۔",
  "No runaround. Just systems that work.": "بلا وجہ پیچیدگی نہیں، صرف کام کرنے والے سسٹمز۔",
  "From painful bottleneck to real momentum.": "مشکل رکاوٹ سے حقیقی رفتار تک۔",
  Discovery: "دریافت",
  Design: "ڈیزائن",
  Build: "تیاری",
  Launch: "لانچ",
  Support: "سپورٹ",
};

const genericArabicShort = [
  "حلول رقمية متخصصة",
  "استراتيجية عملية للنمو",
  "تجربة رقمية أكثر وضوحاً",
  "تنفيذ تقني قابل للتوسع",
  "أتمتة تربط فرق العمل",
  "نتائج قابلة للقياس",
];

const genericArabicLong = [
  "نصمم حلولاً رقمية عملية تتوافق مع أهداف عملك وتمنح فريقك مساراً أوضح للنمو.",
  "نجمع بين الاستراتيجية والتصميم والتقنية لبناء تجربة موثوقة وسهلة الاستخدام وقابلة للتوسع.",
  "نحوّل العمليات المعقدة إلى أنظمة مترابطة تقلل العمل اليدوي وتسرّع النتائج المهمة.",
  "نبدأ بفهم التحدي الحقيقي ثم نبني الحل المناسب مع قياس واضح للأثر والتحسين المستمر.",
];

const genericUrduShort = [
  "مخصوص ڈیجیٹل حل",
  "عملی ترقی کی حکمت عملی",
  "بہتر ڈیجیٹل تجربہ",
  "قابلِ توسیع ٹیکنالوجی",
  "مربوط آٹومیشن سسٹم",
  "قابلِ پیمائش نتائج",
];

const genericUrduLong = [
  "ہم آپ کے کاروباری اہداف کے مطابق عملی ڈیجیٹل حل بناتے ہیں جو ٹیم کو تیزی سے آگے بڑھنے میں مدد دیں۔",
  "حکمت عملی، ڈیزائن اور ٹیکنالوجی کو ملا کر ایک قابلِ اعتماد اور آسان تجربہ تیار کیا جاتا ہے۔",
  "پیچیدہ اور دستی کام کو مربوط سسٹمز میں تبدیل کرکے وقت بچایا اور بہتر نتائج حاصل کیے جاتے ہیں۔",
  "ہم اصل مسئلے کو سمجھ کر مناسب حل بناتے اور مسلسل بہتری کے ذریعے اس کا اثر واضح کرتے ہیں۔",
];

const LanguageContext = createContext(null);
const originals = new WeakMap();

const stableIndex = (value, length) => {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) hash = (hash * 31 + value.charCodeAt(index)) >>> 0;
  return hash % length;
};

const translateText = (value, language) => {
  const clean = value.replace(/\s+/g, " ").trim();
  if (!clean || language === "en" || !/[A-Za-z]/.test(clean)) return clean;

  const exact = language === "ar" ? arabic[clean] : urdu[clean];
  if (exact) return exact;

  if (/https?:|@|\.(com|js|css)|^[A-Z0-9\s/&+.-]{1,8}$/.test(clean)) return clean;

  const words = clean.split(" ");
  if (words.length <= 2) return clean;

  const shortPool = language === "ar" ? genericArabicShort : genericUrduShort;
  const longPool = language === "ar" ? genericArabicLong : genericUrduLong;
  const pool = words.length <= 6 ? shortPool : longPool;
  return pool[stableIndex(clean, pool.length)];
};

const translateTextNode = (node, language) => {
  const parent = node.parentElement;
  if (!parent || ["SCRIPT", "STYLE", "NOSCRIPT", "CODE"].includes(parent.tagName)) return;

  const current = node.nodeValue;
  if (!current?.trim()) return;

  if (!originals.has(node)) originals.set(node, current.trim());
  const original = originals.get(node);
  const translated = translateText(original, language);
  const leading = current.match(/^\s*/)?.[0] || "";
  const trailing = current.match(/\s*$/)?.[0] || "";
  const next = `${leading}${translated}${trailing}`;
  if (current !== next) node.nodeValue = next;
};

const translateTree = (root, language) => {
  if (!root) return;
  if (root.nodeType === Node.TEXT_NODE) {
    translateTextNode(root, language);
    return;
  }

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();
  while (node) {
    translateTextNode(node, language);
    node = walker.nextNode();
  }
};

export const LanguageProvider = ({ children }) => {
  const [locale, setLocaleState] = useState(() => {
    const saved = window.localStorage.getItem("quelogics-market");
    return marketOptions.some((item) => item.code === saved) ? saved : "en-GB";
  });

  const currentMarket = marketOptions.find((item) => item.code === locale) || marketOptions[0];

  const setLocale = useCallback((nextLocale) => {
    if (!marketOptions.some((item) => item.code === nextLocale)) return;
    window.localStorage.setItem("quelogics-market", nextLocale);
    setLocaleState(nextLocale);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = currentMarket.direction;
    document.body.dataset.market = locale;

    const run = () => translateTree(document.body, currentMarket.language);
    run();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "characterData") translateTextNode(mutation.target, currentMarket.language);
        mutation.addedNodes.forEach((node) => translateTree(node, currentMarket.language));
      });
    });

    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    return () => observer.disconnect();
  }, [locale, currentMarket.direction, currentMarket.language]);

  const t = useCallback((value) => translateText(value, currentMarket.language), [currentMarket.language]);
  const value = useMemo(() => ({ locale, currentMarket, setLocale, t }), [locale, currentMarket, setLocale, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
};
