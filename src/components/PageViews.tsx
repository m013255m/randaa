import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Activity,
  ArrowLeft,
  Award,
  BookOpen,
  Calculator,
  Calendar,
  Check,
  ChevronLeft,
  Clock,
  FileText,
  Flame,
  HeartPulse,
  MapPin,
  MessageCircle,
  Phone,
  Scale,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  UserCheck,
  Utensils,
} from 'lucide-react';
import {
  FACEBOOK_URL,
  IMAGES,
  PAGES_SEO,
  PageId,
  WHATSAPP_DISPLAY,
  getWhatsAppUrl,
} from '../data/seoConfig';
import {
  NUTRITION_PROGRAMS,
  MEDICAL_CONDITIONS,
  SUCCESS_CASES,
  HEALTHY_RECIPES,
  BLOG_ARTICLES,
  FAQ_ITEMS,
} from '../data/clinicalData';
import { SafeImage } from './SafeImage';
import { BrandLogo } from './BrandLogo';

interface PageViewProps {
  onNavigate: (page: PageId) => void;
}

/* ==========================================================================
   SHARED SEO PAGE HEADER BANNER (Ensures every page has a powerhouse H1,
   semantic breadcrumb trail, and quick jump actions)
   ========================================================================== */
export const PageHeroBanner: React.FC<{
  pageId: PageId;
  onNavigate: (page: PageId) => void;
}> = ({ pageId, onNavigate }) => {
  const cfg = PAGES_SEO[pageId];
  return (
    <section className="bg-[#F2EFE9] border-b border-[#E5DFD5] py-7 sm:py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Semantic Breadcrumb */}
        <nav
          aria-label="مسار التنقل"
          className="flex flex-wrap items-center gap-2 text-xs text-[#4A5D52] mb-3"
        >
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-[#1E4D3B] transition-colors font-semibold cursor-pointer inline-flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#9A6B13]" />
            <span>الرئيسية (عيادة د. راندا)</span>
          </button>
          <ChevronLeft className="w-3.5 h-3.5 text-[#9A6B13]" />
          <span className="text-[#14281D] font-bold">{cfg.shortTitle}</span>
        </nav>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="text-xl sm:text-3xl lg:text-[2.45rem] font-bold text-[#14281D] leading-[1.3] balance-text max-w-4xl"
        >
          {cfg.h1Title}
        </motion.h1>

        <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-[#4A5D52] leading-relaxed max-w-3xl">
          {cfg.subtitle}
        </p>

        {/* Quiet unboxed clinical topics & direct WhatsApp + Facebook action */}
        <div className="mt-5 pt-4 border-t border-[#E5DFD5] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#4A5D52]">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="font-semibold text-[#14281D]">محاور التخصص:</span>
            {cfg.keywords.map((kw, i) => (
              <React.Fragment key={kw}>
                <span>{kw}</span>
                {i < cfg.keywords.length - 1 && <span aria-hidden="true">·</span>}
              </React.Fragment>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <a
              href={getWhatsAppUrl(`مرحباً د. راندا، أود الاستفسار عن (${cfg.shortTitle}) وحجز استشارة.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1E4D3B] font-bold hover:underline inline-flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>واتساب:</span>
              <span dir="ltr" className="font-mono-nums">{WHATSAPP_DISPLAY}</span>
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1877F2] font-bold hover:underline inline-flex items-center gap-1.5"
            >
              <span>صفحة فيسبوك الرسمية ←</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ==========================================================================
   PAGE 1: HOME PAGE (الرئيسية)
   ========================================================================== */
export const HomePage: React.FC<PageViewProps> = ({ onNavigate }) => {
  const [quickWeight, setQuickWeight] = useState<number>(78);
  const [quickHeight, setQuickHeight] = useState<number>(164);

  const bmiValue = +(quickWeight / Math.pow(quickHeight / 100, 2)).toFixed(1);
  const idealWeight = Math.round(21.5 * Math.pow(quickHeight / 100, 2));

  return (
    <div>
      {/* HERO SECTION: 2-Column Editorial Split (Mobile-first optimized) */}
      <section className="relative bg-[#FAF8F5] pt-6 pb-12 sm:py-16 lg:py-20 px-4 sm:px-8 border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Right Column (RTL Primary Text Anchor) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-7 flex flex-col justify-between py-1"
            >
              <div>
                <div className="inline-flex flex-wrap items-center gap-2 text-xs font-semibold text-[#1E4D3B] bg-[#F2EFE9] px-3.5 py-1.5 rounded-xl border border-[#E5DFD5] mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-[#9A6B13] shrink-0" />
                  <span>عيادة د. راندا للتغذية الإكلينيكية والحميات العلاجية</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#4A5D52]">متابعة بالعيادة وأونلاين دولياً</span>
                </div>

                <h1 className="text-2xl sm:text-4xl lg:text-[3.1rem] font-bold text-[#14281D] leading-[1.26] tracking-tight balance-text">
                  د. راندا للتغذية العلاجية: استعيدي توازن جسمكِ ووزنكِ المثالي بالعلم بدون حرمان
                </h1>

                <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-[#4A5D52] leading-relaxed max-w-2xl">
                  أهلاً بكِ في العيادة الرسمية للدكتورة راندا (Dr. Randa). نحن لا نقدم قوائم حرمان مؤقتة، بل نصمم{' '}
                  <strong className="text-[#14281D] font-semibold">
                    بروتوكولاً طبياً شخصياً
                  </strong>{' '}
                  يعالج جذور مقاومة الإنسولين، اضطراب الهرمونات، وخمول الحرق بناءً على تحاليلكِ الطبية الدقيقة ومن طعام بيتكِ الطبيعي.
                </p>

                {/* Primary Decision Block (Full-width responsive buttons on mobile) */}
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
                  <a
                    href={getWhatsAppUrl('مرحباً د. راندا، أرغب في حجز استشارة تغذية علاجية ومعرفة التفاصيل.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 sm:py-4 bg-[#1E4D3B] text-white font-semibold rounded-xl hover:bg-[#163B2D] transition-all duration-150 inline-flex items-center justify-center gap-2.5 text-sm sm:text-base shadow-sm"
                  >
                    <MessageCircle className="w-5 h-5 shrink-0 text-[#F3D067]" />
                    <span>تواصلي عبر واتساب الآن</span>
                  </a>

                  <button
                    onClick={() => onNavigate('booking')}
                    className="px-6 py-3.5 sm:py-4 bg-[#F2EFE9] text-[#14281D] font-semibold rounded-xl border border-[#D8D0C5] hover:bg-[#E7E2D8] transition-colors inline-flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
                  >
                    <Calendar className="w-5 h-5 text-[#1E4D3B] shrink-0" />
                    <span>حجز موعد بالعيادة أو أونلاين</span>
                  </button>

                  <a
                    href={FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3.5 sm:py-4 bg-[#1877F2]/10 text-[#1877F2] font-bold rounded-xl border border-[#1877F2]/25 hover:bg-[#1877F2] hover:text-white transition-colors inline-flex items-center justify-center gap-2 text-sm"
                  >
                    <span>تابعينا على فيسبوك</span>
                  </a>
                </div>
              </div>

              {/* Quick Interactive Biometric Preview Bar inside Hero */}
              <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-[#E5DFD5]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#F2EFE9] p-4 sm:p-5 rounded-2xl border border-[#E5DFD5]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#1E4D3B] text-[#F3D067] flex items-center justify-center shrink-0">
                      <Calculator className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] sm:text-xs text-[#4A5D52] font-medium">
                        تقييم فوري سريع · حاسبة د. راندا المبدئية
                      </p>
                      <h2 className="text-sm sm:text-base font-bold text-[#14281D] mt-0.5">
                        اعرفي وزنكِ المثالي ومؤشر كتلة الجسم في ثوانٍ
                      </h2>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                    <label className="flex items-center gap-1.5 text-xs text-[#4A5D52]">
                      <span>الوزن:</span>
                      <input
                        type="number"
                        min={35}
                        max={220}
                        value={quickWeight}
                        onChange={(e) => setQuickWeight(Number(e.target.value) || 70)}
                        className="w-16 px-2 py-1.5 bg-white border border-[#D8D0C5] rounded-lg text-[#14281D] font-mono-nums font-semibold text-sm focus:outline-none focus:border-[#1E4D3B]"
                      />
                    </label>
                    <label className="flex items-center gap-1.5 text-xs text-[#4A5D52]">
                      <span>الطول:</span>
                      <input
                        type="number"
                        min={130}
                        max={215}
                        value={quickHeight}
                        onChange={(e) => setQuickHeight(Number(e.target.value) || 160)}
                        className="w-16 px-2 py-1.5 bg-white border border-[#D8D0C5] rounded-lg text-[#14281D] font-mono-nums font-semibold text-sm focus:outline-none focus:border-[#1E4D3B]"
                      />
                    </label>
                    <div className="text-xs bg-white px-3 py-2 rounded-lg border border-[#E5DFD5] w-full sm:w-auto text-center">
                      <span className="text-[#4A5D52]">BMI: </span>
                      <strong className="font-mono-nums text-[#1E4D3B]">{bmiValue}</strong>
                      <span className="mx-1.5 text-[#D8D0C5]">|</span>
                      <span className="text-[#4A5D52]">الوزن المثالي: </span>
                      <strong className="font-mono-nums text-[#14281D]">{idealWeight} كجم</strong>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Left Column: High-Impact Portrait of Dr. Randa */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-[#E5DFD5] bg-[#F2EFE9] min-h-[340px] sm:min-h-[420px] flex flex-col justify-end"
            >
              <SafeImage
                src={IMAGES.drRandaPortrait}
                alt="الدكتورة راندا استشاري التغذية العلاجية والحميات الطبية في عيادتها"
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="relative z-10 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-5 sm:p-8 text-white">
                <p className="text-xs text-[#E8DFCA] tracking-wide">
                  إشراف طبي مباشر · دكتورة راندا (Dr. Randa)
                </p>
                <p className="text-base sm:text-xl font-display font-bold mt-1 leading-snug">
                  «الغذاء العلاجي المتوازن هو أقوى دواء يعيد برمجة خلايا جسمكِ نحو الشباب والرشاقة المستدامة.»
                </p>
                <div className="mt-3 pt-3 border-t border-white/20 flex items-center justify-between text-xs text-white/90">
                  <span>استشاري التغذية الإكلينيكية وعلاج السمنة</span>
                  <button
                    onClick={() => onNavigate('about')}
                    className="underline hover:text-[#F3D067] transition-colors cursor-pointer"
                  >
                    السيرة العلمية الكاملة ←
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Full-Width 4-Column Quantified Clinical Metrics Strip */}
          <div className="mt-8 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-[#E5DFD5]">
            {[
              {
                icon: <UserCheck className="w-4 h-4 text-[#1E4D3B]" />,
                metric: '+8,400',
                unit: 'حالة ناجحة',
                context: 'تحول صحي موثق بالتحاليل الطبية وقياسات InBody خلال 12 عاماً',
              },
              {
                icon: <ShieldCheck className="w-4 h-4 text-[#1E4D3B]" />,
                metric: '94.2%',
                unit: 'ثبات الوزن',
                context: 'بعد مرور عام كامل من انتهاء برنامج التثبيت الأيضي المرن',
              },
              {
                icon: <Activity className="w-4 h-4 text-[#1E4D3B]" />,
                metric: '-48%',
                unit: 'مقاومة الإنسولين',
                context: 'متوسط انخفاض مؤشر HOMA-IR خلال أول 10 أسابيع التزام',
              },
              {
                icon: <Award className="w-4 h-4 text-[#1E4D3B]" />,
                metric: '+12',
                unit: 'عاماً من الخبرة',
                context: 'في علاج السمنة الهرمونية وتغذية المرأة والرياضيين والأطفال',
              },
            ].map((item) => (
              <div
                key={item.unit}
                className="p-4 sm:p-5 rounded-2xl bg-[#F2EFE9]/70 border border-[#E5DFD5]"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex flex-wrap items-baseline gap-1.5">
                    <span className="text-xl sm:text-3xl font-bold font-mono-nums text-[#1E4D3B]">
                      {item.metric}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#14281D]">{item.unit}</span>
                  </div>
                  <div className="w-8 h-8 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5] flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                </div>
                <p className="text-[11px] sm:text-xs text-[#4A5D52] leading-relaxed">{item.context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: TOP GOOGLE-RANKING SPECIALIZED NUTRITION GUIDES (6 PAGES) */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8 bg-[#FAF8F5] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <p className="text-xs font-semibold text-[#9A6B13] mb-1.5 inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>الأدلة والمقالات الطبية الأكثر بحثاً · بقلم د. راندا</span>
              </p>
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-[#14281D] balance-text">
                أقوى البروتوكولات والأدلة العلاجية الشاملة لحرق الدهون وضبط الهرمونات
              </h2>
            </div>
            <button
              onClick={() => onNavigate('blog')}
              className="text-xs sm:text-sm font-bold text-[#1E4D3B] hover:underline inline-flex items-center gap-1.5 cursor-pointer self-start md:self-auto"
            >
              <span>تصفحي جميع مقالات الموسوعة الطبية ←</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {[
              {
                id: 'intermittent-fasting' as PageId,
                icon: <Flame className="w-5 h-5" />,
                badge: 'جدول 16/8 و 14/10',
                title: 'جدول الصيام المتقطع للمبتدئين والنساء لخسارة 10 كجم بدون ترهل',
                desc: 'المواعيد الدقيقة لساعات الصيام والإفطار، المشروبات الحارقة المسموحة، وكيفية حماية الغدة الدرقية والهرمونات.',
              },
              {
                id: 'insulin-resistance-diet' as PageId,
                icon: <Activity className="w-5 h-5" />,
                badge: 'بروتوكول علاجي متكامل',
                title: 'أقوى نظام غذائي لعلاج مقاومة الإنسولين نهائياً وجدول الوجبات',
                desc: 'قائمة المسموح والممنوع، قاعدة ترتيب عناصر الوجبة لخفض سكر الدم 73%، وقراءة تحليل HOMA-IR.',
              },
              {
                id: 'belly-fat-loss' as PageId,
                icon: <Scale className="w-5 h-5" />,
                badge: 'نحت القوام والدهون الحشوية',
                title: 'أسرع طريقة علمية لتخسيس البطن والأرداف وعلاج الكرش الهرموني',
                desc: 'التفرقة الإكلينيكية بين بطن الكورتيزول، بطن الإنسولين، وانتفاخ القولون، والنظام المخصص لكل نوع.',
              },
              {
                id: 'womens-hormones' as PageId,
                icon: <HeartPulse className="w-5 h-5" />,
                badge: 'صحة المرأة والغدة',
                title: 'علاج تكيس المبايض (PCOS) وخمول الغدة الدرقية بالتغذية العلاجية',
                desc: 'كيف نعيد تنشيط الغدة الدرقية والهاشيموتو ونضبط الهرمونات الأنثوية عبر الغذاء وتدوير البذور.',
              },
              {
                id: 'weight-plateau' as PageId,
                icon: <SlidersHorizontal className="w-5 h-5" />,
                badge: 'حلول تنشيط الحرق',
                title: '7 أسباب خفية لثبات الوزن في الدايت وخطة كسر الثبات في أسبوع',
                desc: 'لماذا يتوقف الميزان رغم قلة الأكل؟ وكيف نطبق تقنية التدوير الحراري (Calorie Cycling) لإعادة تشغيل الحرق.',
              },
              {
                id: 'supplements-labs' as PageId,
                icon: <ShieldCheck className="w-5 h-5" />,
                badge: 'التشخيص والفيتامينات',
                title: 'أهم 8 تحاليل مطلوبة قبل الدايت وأفضل فيتامينات الحرق وسد الشهية',
                desc: 'جدول النطاقات المثالية لفيتامين د، مخزون الحديد، والغدة الدرقية، وأفضل توقيت لتناول المكملات.',
              },
            ].map((guide) => (
              <div
                key={guide.id}
                onClick={() => onNavigate(guide.id)}
                className="group p-5 sm:p-6 rounded-2xl bg-[#F2EFE9] hover:bg-[#EAE5DC] border border-[#E5DFD5] transition-all duration-150 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] text-[#1E4D3B] border border-[#E5DFD5] group-hover:bg-[#1E4D3B] group-hover:text-[#F3D067] transition-colors flex items-center justify-center shrink-0">
                        {guide.icon}
                      </div>
                      <span className="text-[11px] sm:text-xs font-bold text-[#9A6B13] bg-[#FAF8F5] px-2.5 py-1 rounded-lg border border-[#E5DFD5]">
                        {guide.badge}
                      </span>
                    </div>
                    <ArrowLeft className="w-4 h-4 text-[#1E4D3B] group-hover:-translate-x-1 transition-transform shrink-0" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#14281D] group-hover:text-[#1E4D3B] transition-colors leading-snug">
                    {guide.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#4A5D52] leading-relaxed">
                    {guide.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: COMPLETE CLINIC SPECIALTIES & SERVICES DIRECTORY */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8 bg-[#FAF8F5] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <p className="text-xs font-semibold text-[#1E4D3B] mb-1.5">
                أقسام وخدمات عيادة د. راندا للتغذية الإكلينيكية
              </p>
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-[#14281D] balance-text">
                رعاية غذائية وطبية متكاملة لكل مرحلة من مراحل حياتكِ
              </h2>
            </div>
            <a
              href={getWhatsAppUrl('مرحباً د. راندا، أود الاستفسار عن البرامج الغذائية المتاحة.')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-bold text-[#1E4D3B] hover:underline inline-flex items-center gap-2 shrink-0"
            >
              <MessageCircle className="w-4 h-4" />
              <span>استشيري العيادة عبر واتساب:</span>
              <span dir="ltr" className="font-mono-nums">{WHATSAPP_DISPLAY}</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {[
              {
                id: 'programs' as PageId,
                icon: <Sparkles className="w-5 h-5" />,
                title: 'البرامج والأنظمة العلاجية المخصصة',
                desc: '4 بروتوكولات إكلينيكية مفصلة مع نماذج وجبات يومية والتحاليل المطلوبة لكل برنامج.',
              },
              {
                id: 'conditions' as PageId,
                icon: <HeartPulse className="w-5 h-5" />,
                title: 'علاج الأمراض المزمنة بالتغذية',
                desc: 'بروتوكولات علاج مقاومة الإنسولين، تكيس المبايض، الغدة الدرقية، القولون، والكبد الدهني.',
              },
              {
                id: 'calculators' as PageId,
                icon: <Calculator className="w-5 h-5" />,
                title: 'حاسبة السعرات ومؤشر كتلة الجسم والماكروز',
                desc: 'مختبر تفاعلي يحسب BMI، معدل الحرق TDEE، احتياج البروتين، والماء اليومي بدقة.',
              },
              {
                id: 'success-stories' as PageId,
                icon: <Award className="w-5 h-5" />,
                title: 'قصص النجاح والتحولات الموثقة بالتحاليل',
                desc: 'دراسات حالة حقيقية لمرضى داخل مصر وخارجها مع مقارنة الأوزان والتحاليل قبل وبعد.',
              },
              {
                id: 'recipes' as PageId,
                icon: <Utensils className="w-5 h-5" />,
                title: 'مطبخ د. راندا العلاجي (وصفات محسوبة)',
                desc: 'وصفات شهية محسوبة السعرات والماكروز والمؤشر الجلايسيمي للفطور والغداء والعشاء.',
              },
              {
                id: 'blog' as PageId,
                icon: <BookOpen className="w-5 h-5" />,
                title: 'الموسوعة الطبية ومقالات التغذية',
                desc: 'مقالات مرجعية شاملة حول الصيام المتقطع، كسر ثبات الوزن، وتغذية المرضعات والقولون.',
              },
              {
                id: 'about' as PageId,
                icon: <UserCheck className="w-5 h-5" />,
                title: 'السيرة العلمية والخبرة للدكتورة راندا',
                desc: 'المؤهلات الأكاديمية، الفلسفة العلاجية، ومنهجية التشخيص الحيوي الشامل.',
              },
              {
                id: 'faq' as PageId,
                icon: <FileText className="w-5 h-5" />,
                title: 'الأسئلة الطبية الشائعة وإجاباتها',
                desc: 'إجابات وافية حول الكشف الأونلاين، ثبات الوزن، أمان الرضاعة، وتثبيت الوزن.',
              },
              {
                id: 'booking' as PageId,
                icon: <Calendar className="w-5 h-5" />,
                title: 'حجز استشارة بالعيادة أو أونلاين',
                desc: 'نموذج حجز ذكي مع إرسال مباشر عبر واتساب وتقييم غذائي أولي.',
              },
            ].map((card) => (
              <div
                key={card.id}
                onClick={() => onNavigate(card.id)}
                className="group p-5 sm:p-6 rounded-2xl bg-[#F2EFE9]/60 hover:bg-[#F2EFE9] border border-[#E5DFD5] transition-all duration-150 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] text-[#1E4D3B] border border-[#E5DFD5] group-hover:bg-[#1E4D3B] group-hover:text-[#F3D067] transition-colors flex items-center justify-center shrink-0">
                      {card.icon}
                    </div>
                    <span className="group-hover:translate-x-[-4px] transition-transform text-xs text-[#1E4D3B] font-bold inline-flex items-center gap-1">
                      <span>تصفح القسم</span>
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#14281D] group-hover:text-[#1E4D3B] transition-colors">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#4A5D52] leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: ASYMMETRIC BENTO GRID OF FLAGSHIP PROGRAMS */}
      <section className="py-16 lg:py-20 px-4 sm:px-8 bg-[#F2EFE9] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-semibold text-[#1E4D3B] mb-2">
              منهجية علاجية مخصصة · بدون حرمان أو أدوية مجهولة
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#14281D] balance-text">
              أبرز البروتوكولات العلاجية في عيادة د. راندا
            </h2>
            <p className="mt-3 text-base text-[#4A5D52]">
              يتم تفصيل كل نظام غذائي بعد قراءة دقيقة لتحاليلكِ الطبية لضمان علاج السبب الجذري لزيادة الوزن أو الإرهاق المزمن.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {NUTRITION_PROGRAMS.map((prog, index) => {
              const isWide = index === 0 || index === 3;
              return (
                <div
                  key={prog.id}
                  className={`${
                    isWide ? 'lg:col-span-2' : 'lg:col-span-1'
                  } bg-[#FAF8F5] rounded-2xl border border-[#E5DFD5] overflow-hidden flex flex-col justify-between`}
                >
                  <div>
                    <div className="h-56 overflow-hidden relative border-b border-[#E5DFD5]">
                      <SafeImage
                        src={prog.image}
                        alt={prog.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 sm:p-8">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-[#4A5D52] mb-2">
                        <span className="font-mono-nums font-bold text-[#9A6B13]">
                          {prog.number}.
                        </span>
                        <span>المدة: {prog.duration}</span>
                      </div>
                      <h3 className="text-xl font-bold text-[#14281D]">{prog.title}</h3>
                      <p className="mt-3 text-sm text-[#4A5D52] leading-relaxed">{prog.summary}</p>
                      <p className="mt-4 text-xs text-[#1E4D3B] font-semibold">
                        النتيجة المتوقعة: {prog.expectedOutcome}
                      </p>
                    </div>
                  </div>
                  <div className="px-6 sm:px-8 pb-6 pt-4 border-t border-[#E5DFD5] flex items-center justify-between">
                    <button
                      onClick={() => onNavigate('programs')}
                      className="text-sm font-semibold text-[#1E4D3B] hover:underline inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>عرض تفاصيل البرنامج ونموذج الوجبات</span>
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: ADJACENT PROOF & CLINICAL TESTIMONIALS */}
      <section className="py-16 lg:py-20 px-4 sm:px-8 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-xs font-semibold text-[#9A6B13] mb-2">
                نتائج حقيقية موثقة بالتحاليل الطبية
              </p>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#14281D] balance-text">
                قصص تحول ملهمة من داخل عيادة د. راندا
              </h2>
            </div>
            <button
              onClick={() => onNavigate('success-stories')}
              className="text-sm font-semibold text-[#1E4D3B] hover:underline inline-flex items-center gap-1.5 cursor-pointer"
            >
              <span>شاهد جميع قصص النجاح ودراسات الحالة</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SUCCESS_CASES.slice(0, 2).map((c) => (
              <div
                key={c.id}
                className="p-6 sm:p-8 rounded-2xl bg-[#F2EFE9] border border-[#E5DFD5] flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#4A5D52] mb-4">
                    <span className="font-bold text-[#14281D]">{c.patientName}</span>
                    <span aria-hidden="true">·</span>
                    <span>{c.occupation}</span>
                    <span aria-hidden="true">·</span>
                    <span>خلال {c.timeframe}</span>
                  </div>
                  <p className="text-base text-[#14281D] leading-relaxed">«{c.quote}»</p>
                </div>

                <div className="mt-6 pt-5 border-t border-[#E5DFD5] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-2.5 sm:p-0 rounded-lg bg-[#FAF8F5] sm:bg-transparent">
                    <span className="text-[#4A5D52] block">الوزن السابق والحالي</span>
                    <strong className="font-mono-nums text-sm text-[#14281D]">
                      {c.weightBefore} ← {c.weightAfter} كجم
                    </strong>
                  </div>
                  <div className="p-2.5 sm:p-0 rounded-lg bg-[#FAF8F5] sm:bg-transparent">
                    <span className="text-[#4A5D52] block">نزول محيط الخصر</span>
                    <strong className="font-mono-nums text-sm text-[#1E4D3B]">
                      -{c.waistReductionCm} سم
                    </strong>
                  </div>
                  <div className="p-2.5 sm:p-0 rounded-lg bg-[#FAF8F5] sm:bg-transparent">
                    <span className="text-[#4A5D52] block">تحسن التحاليل</span>
                    <strong className="text-[#14281D] leading-snug block mt-0.5">{c.labImprovement}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

/* ==========================================================================
   PAGE 2: ABOUT DR. RANDA (عن د. راندا)
   ========================================================================== */
export const AboutPage: React.FC<PageViewProps> = ({ onNavigate }) => {
  return (
    <div>
      <PageHeroBanner pageId="about" onNavigate={onNavigate} />

      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-[#E5DFD5] bg-[#F2EFE9]">
              <SafeImage
                src={IMAGES.drRandaPortrait}
                alt="د. راندا استشاري التغذية الإكلينيكية"
                className="w-full h-[460px] object-cover"
              />
              <div className="p-6 bg-[#F2EFE9]">
                <h2 className="text-xl font-bold text-[#14281D]">
                  د. راندا (Dr. Randa)
                </h2>
                <p className="text-sm text-[#4A5D52] mt-1">
                  استشاري التغذية العلاجية، علاج السمنة المفرطة، والتوازن الهرموني للمرأة
                </p>
                <div className="mt-4 pt-4 border-t border-[#E5DFD5] space-y-2 text-xs text-[#4A5D52]">
                  <p>· خبرة إكلينيكية تمتد لأكثر من 12 عاماً في كبرى المراكز الطبية</p>
                  <p>· باحثة متخصصة في تغذية الغدد الصماء ومقاومة الإنسولين</p>
                  <p>· عضو الجمعية الأوروبية للتغذية الإكلينيكية والتمثيل الغذائي (ESPEN)</p>
                  <p>· مشرفة على أكثر من 8,400 خطة تحول صحي داخل العالم العربي وأوروبا</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div>
              <p className="text-xs font-semibold text-[#9A6B13] mb-2">
                01. الرسالة والفلسفة العلاجية
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#14281D]">
                لماذا تختلف منهجية د. راندا عن أنظمة الدايت التقليدية؟
              </h2>
              <p className="mt-4 text-base text-[#4A5D52] leading-relaxed">
                طوال سنوات عملي الإكلينيكي، رأيت آلاف السيدات والرجال الذين أنهكتهم دوامة «الرجيم القاسي ثم استعادة الوزن المضاعف». الحقيقة العلمية الثابتة هي أن السمنة ليست مجرد زيادة في كمية الطعام، بل هي خلل في الإشارات الهرمونية والتمثيل الغذائي الخلوي.
              </p>
              <p className="mt-3 text-base text-[#4A5D52] leading-relaxed">
                في عيادة د. راندا، نبدأ بفهم لغة جسمكِ الخاصة من خلال التحاليل الطبية، طبيعة النوم، مستوى التوتر (الكورتيزول)، وصحة الجهاز الهضمي، لنصنع لكِ نظاماً غذائياً مشبعاً يشعركِ بالطاقة والسعادة منذ الأسبوع الأول.
              </p>
            </div>

            {/* 4 Pillars of Dr. Randa's Methodology */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
              {[
                {
                  num: '01',
                  title: 'التشخيص المخبري الدقيق أولاً',
                  desc: 'قراءة متعمقة لتحاليل الغدة الدرقية، مقاومة الإنسولين، مخزون الحديد، وفيتامين D قبل كتابة أي ورقة غذائية.',
                },
                {
                  num: '02',
                  title: 'لا للورقة المطبوعة الموحدة',
                  desc: 'كل مريض يحصل على برنامج مفصل حسب مواعيد عمله، الأطعمة التي يحبها، وحالته الصحية الخاصة.',
                },
                {
                  num: '03',
                  title: 'الحفاظ على الكتلة العضلية والنضارة',
                  desc: 'نستهدف نزول الدهون الحشوية مع حماية العضلات وكولاجين البشرة وبصيلات الشعر من أي تأثر.',
                },
                {
                  num: '04',
                  title: 'التأهيل النفسي وتثبيت الوزن الذكي',
                  desc: 'نعلمكِ كيف تأكلين في العزومات، السفر، والمناسبات بذكاء دون الشعور بالذنب أو زيادة الوزن.',
                },
              ].map((pillar) => (
                <div
                  key={pillar.num}
                  className="p-5 rounded-xl bg-[#F2EFE9] border border-[#E5DFD5]"
                >
                  <span className="font-mono-nums text-xs font-bold text-[#9A6B13]">
                    الركيزة {pillar.num}
                  </span>
                  <h3 className="text-base font-bold text-[#14281D] mt-1">{pillar.title}</h3>
                  <p className="text-sm text-[#4A5D52] mt-2 leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>

            {/* Clinic Sanctuary Image Showcase */}
            <div className="rounded-2xl overflow-hidden border border-[#E5DFD5] bg-[#F2EFE9]">
              <SafeImage
                src={IMAGES.clinicSanctuaryHero}
                alt="بيئة الاستشارة الهادئة في عيادة د. راندا للتغذية العلاجية"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-[#14281D]">
                    بيئة علاجية راقية تدعم راحتكِ النفسية والصحية
                  </h3>
                  <p className="text-xs text-[#4A5D52] mt-1">
                    أحدث أجهزة قياس التركيب الحيوي للجسم (InBody) ومتابعة دقيقة خطوة بخطوة.
                  </p>
                </div>
                <button
                  onClick={() => onNavigate('booking')}
                  className="px-5 py-3 bg-[#1E4D3B] text-white text-sm font-semibold rounded-xl hover:bg-[#163B2D] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  احجزي موعدكِ مع د. راندا
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ==========================================================================
   PAGE 3: CLINICAL PROGRAMS PAGE (البرامج العلاجية)
   ========================================================================== */
export const ProgramsPage: React.FC<PageViewProps> = ({ onNavigate }) => {
  const [selectedProgramId, setSelectedProgramId] = useState<string>(NUTRITION_PROGRAMS[0].id);
  const activeProg =
    NUTRITION_PROGRAMS.find((p) => p.id === selectedProgramId) || NUTRITION_PROGRAMS[0];

  return (
    <div>
      <PageHeroBanner pageId="programs" onNavigate={onNavigate} />

      <section className="py-14 px-4 sm:px-8 max-w-7xl mx-auto">
        {/* Interactive Program Selector Tabs */}
        <div className="mb-10">
          <p className="text-xs font-semibold text-[#4A5D52] mb-3">
            اختاري البروتوكول العلاجي للاطلاع على الخطة الكاملة، التحاليل المطلوبة، ونموذج ليوم غذائي كامل:
          </p>
          <div className="flex flex-wrap gap-2 p-2 bg-[#F2EFE9] rounded-2xl border border-[#E5DFD5]">
            {NUTRITION_PROGRAMS.map((prog) => {
              const isActive = prog.id === activeProg.id;
              return (
                <button
                  key={prog.id}
                  onClick={() => setSelectedProgramId(prog.id)}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#1E4D3B] text-white shadow-sm'
                      : 'text-[#14281D] hover:bg-[#E5DFD5]/60'
                  }`}
                >
                  {prog.number}. {prog.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Selected Program View */}
        <motion.div
          key={activeProg.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="bg-[#F2EFE9] rounded-2xl border border-[#E5DFD5] overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 min-h-[320px] relative border-b lg:border-b-0 lg:border-l border-[#E5DFD5]">
              <SafeImage
                src={activeProg.image}
                alt={activeProg.title}
                className="w-full h-full object-cover absolute inset-0"
              />
            </div>

            <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#4A5D52]">
                <span className="font-mono-nums font-bold text-[#9A6B13]">
                  بروتوكول رقم {activeProg.number}
                </span>
                <span aria-hidden="true">·</span>
                <span>المدة الموصى بها: {activeProg.duration}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#14281D]">
                {activeProg.seoHeadline}
              </h2>

              <p className="text-base text-[#4A5D52] leading-relaxed">{activeProg.summary}</p>

              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5]">
                <p className="text-xs text-[#4A5D52]">الفئة المستهدفة والنتائج الإكلينيكية:</p>
                <p className="text-sm font-semibold text-[#14281D] mt-1">
                  {activeProg.targetAudience}
                </p>
                <p className="text-sm text-[#1E4D3B] font-bold mt-2">
                  ✓ النتيجة المتوقعة: {activeProg.expectedOutcome}
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#14281D] mb-3">
                  الركائز الطبية المعتمدة في هذا البرنامج:
                </h3>
                <ul className="space-y-2 text-sm text-[#4A5D52]">
                  {activeProg.clinicalPillars.map((pillar) => (
                    <li key={pillar} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#1E4D3B] shrink-0 mt-1" />
                      <span>{pillar}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#E5DFD5]">
                <p className="text-xs font-bold text-[#14281D] mb-2">
                  التحاليل الطبية التي تراجعها د. راندا في هذا البروتوكول:
                </p>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono-nums text-[#4A5D52]">
                  {activeProg.requiredLabs.map((lab, idx) => (
                    <React.Fragment key={lab}>
                      <span>{lab}</span>
                      {idx < activeProg.requiredLabs.length - 1 && (
                        <span aria-hidden="true">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sample Full Day Menu inside Program */}
          <div className="p-6 sm:p-10 bg-[#FAF8F5] border-t border-[#E5DFD5]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl font-bold text-[#14281D]">
                  نموذج تطبيقي ليوم غذائي كامل من داخل البرنامج
                </h3>
                <p className="text-xs text-[#4A5D52] mt-1">
                  يتم تعديل الكميات والبدائل بدقة حسب وزنكِ ومعدل نشاطكِ اليومي.
                </p>
              </div>
              <button
                onClick={() => onNavigate('booking')}
                className="px-6 py-3 bg-[#1E4D3B] text-white text-sm font-semibold rounded-xl hover:bg-[#163B2D] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                اشتركي في هذا البرنامج الآن
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: '01. وجبة الفطور العلاجي', text: activeProg.sampleDayMenu.breakfast },
                { label: '02. وجبة الغداء المتوازنة', text: activeProg.sampleDayMenu.lunch },
                { label: '03. سناك الضبط الأيضي', text: activeProg.sampleDayMenu.snack },
                { label: '04. وجبة العشاء الخفيف', text: activeProg.sampleDayMenu.dinner },
              ].map((meal) => (
                <div
                  key={meal.label}
                  className="p-5 rounded-xl bg-[#F2EFE9] border border-[#E5DFD5]"
                >
                  <h4 className="text-sm font-bold text-[#1E4D3B] mb-2">{meal.label}</h4>
                  <p className="text-xs sm:text-sm text-[#14281D] leading-relaxed">{meal.text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

/* ==========================================================================
   PAGE 4: MEDICAL CONDITIONS THERAPY PAGE (علاج الأمراض بالتغذية)
   ========================================================================== */
export const ConditionsPage: React.FC<PageViewProps> = ({ onNavigate }) => {
  return (
    <div>
      <PageHeroBanner pageId="conditions" onNavigate={onNavigate} />

      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto space-y-10">
        {MEDICAL_CONDITIONS.map((cond, index) => (
          <div
            key={cond.id}
            className="bg-[#F2EFE9] rounded-2xl border border-[#E5DFD5] p-6 sm:p-10"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E5DFD5]">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#4A5D52] mb-1">
                  <span className="font-mono-nums font-bold text-[#9A6B13]">
                    الدليل الإكلينيكي 0{index + 1}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono-nums">{cond.englishName}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#14281D]">{cond.title}</h2>
              </div>
              <button
                onClick={() => onNavigate('booking')}
                className="px-5 py-2.5 bg-[#1E4D3B] text-white text-xs sm:text-sm font-semibold rounded-xl hover:bg-[#163B2D] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                احجزي استشارة لعلاج هذه الحالة
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
              <div className="lg:col-span-5 space-y-5">
                <div>
                  <h3 className="text-base font-bold text-[#14281D] mb-2">
                    الأعراض والعلامات الحيوية الشائعة:
                  </h3>
                  <ul className="space-y-2 text-sm text-[#4A5D52]">
                    {cond.symptoms.map((sym) => (
                      <li key={sym} className="flex items-start gap-2">
                        <span className="text-[#9A6B13] font-bold">•</span>
                        <span>{sym}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5]">
                  <h4 className="text-xs font-bold text-[#9A6B13] mb-1">
                    السبب الفسيولوجي الجذري:
                  </h4>
                  <p className="text-sm text-[#14281D] leading-relaxed">{cond.rootCause}</p>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-base font-bold text-[#1E4D3B] mb-2">
                    البروتوكول العلاجي المعتمد في عيادة د. راندا:
                  </h3>
                  <p className="text-sm sm:text-base text-[#14281D] leading-relaxed">
                    {cond.nutritionProtocol}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5]">
                    <h4 className="text-sm font-bold text-[#1E4D3B] mb-2">
                      ✓ أطعمة علاجية نركز عليها:
                    </h4>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-[#4A5D52]">
                      {cond.foodsToEmphasize.map((f) => (
                        <li key={f}>· {f}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5]">
                    <h4 className="text-sm font-bold text-[#9A3412] mb-2">
                      ✕ أطعمة وممارسات نمنعها:
                    </h4>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-[#4A5D52]">
                      {cond.foodsToAvoid.map((f) => (
                        <li key={f}>· {f}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="text-xs sm:text-sm font-semibold text-[#1E4D3B] pt-2">
                  المعيار الإكلينيكي للتحسن: {cond.successMetric}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

/* ==========================================================================
   PAGE 5: SUCCESS STORIES & CLINICAL RESULTS (قصص النجاح)
   ========================================================================== */
export const SuccessStoriesPage: React.FC<PageViewProps> = ({ onNavigate }) => {
  return (
    <div>
      <PageHeroBanner pageId="success-stories" onNavigate={onNavigate} />

      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SUCCESS_CASES.map((item, idx) => {
            const lostKg = +(item.weightBefore - item.weightAfter).toFixed(1);
            return (
              <div
                key={item.id}
                className="bg-[#F2EFE9] rounded-2xl border border-[#E5DFD5] p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#4A5D52] pb-4 border-b border-[#E5DFD5]">
                    <span className="font-mono-nums font-bold text-[#9A6B13]">
                      دراسة حالة إكلينيكية #{idx + 1}
                    </span>
                    <span>المدة الزمنية: {item.timeframe}</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-[#14281D] mt-4">
                    {item.patientName} ({item.age} سنة) — نزول {lostKg} كجم دهون صافية
                  </h2>
                  <p className="text-xs text-[#4A5D52] mt-1">{item.occupation}</p>

                  <div className="mt-4 p-4 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5]">
                    <span className="text-xs font-bold text-[#1E4D3B] block mb-1">
                      التشخيص قبل البدء:
                    </span>
                    <p className="text-sm text-[#14281D]">{item.condition}</p>
                  </div>

                  <p className="mt-5 text-sm sm:text-base text-[#14281D] leading-relaxed">
                    «{item.quote}»
                  </p>
                </div>

                {/* Tabular Numeric Breakdown */}
                <div className="mt-6 pt-5 border-t border-[#E5DFD5]">
                  <div className="grid grid-cols-3 gap-3 bg-[#FAF8F5] p-4 rounded-xl border border-[#E5DFD5] text-center">
                    <div>
                      <span className="text-xs text-[#4A5D52] block">الوزن قبل</span>
                      <strong className="font-mono-nums text-lg text-[#14281D]">
                        {item.weightBefore} كجم
                      </strong>
                    </div>
                    <div className="border-x border-[#E5DFD5]">
                      <span className="text-xs text-[#4A5D52] block">الوزن بعد</span>
                      <strong className="font-mono-nums text-lg text-[#1E4D3B]">
                        {item.weightAfter} كجم
                      </strong>
                    </div>
                    <div>
                      <span className="text-xs text-[#4A5D52] block">فرق مقاس الخصر</span>
                      <strong className="font-mono-nums text-lg text-[#9A6B13]">
                        -{item.waistReductionCm} سم
                      </strong>
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-[#1E4D3B] font-semibold">
                    ✓ تطور التحاليل الطبية: {item.labImprovement}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

/* ==========================================================================
   PAGE 6: INTERACTIVE BIOMETRIC CALCULATORS (حاسبة الجسم والسعرات)
   ========================================================================== */
export const CalculatorsPage: React.FC<PageViewProps> = ({ onNavigate }) => {
  const [gender, setGender] = useState<'female' | 'male'>('female');
  const [age, setAge] = useState<number>(32);
  const [weight, setWeight] = useState<number>(78);
  const [height, setHeight] = useState<number>(164);
  const [waist, setWaist] = useState<number>(88);
  const [activity, setActivity] = useState<number>(1.375);
  const [goal, setGoal] = useState<'lose' | 'maintain' | 'gain'>('lose');

  // Mifflin-St Jeor Equation
  const heightM = height / 100;
  const bmi = +(weight / (heightM * heightM)).toFixed(1);
  const bmr = Math.round(
    gender === 'female'
      ? 10 * weight + 6.25 * height - 5 * age - 161
      : 10 * weight + 6.25 * height - 5 * age + 5
  );
  const tdee = Math.round(bmr * activity);
  const targetCalories =
    goal === 'lose' ? Math.max(1200, tdee - 500) : goal === 'gain' ? tdee + 350 : tdee;

  const idealMin = Math.round(19.5 * heightM * heightM);
  const idealMax = Math.round(23.5 * heightM * heightM);
  const waterLiters = +(weight * 0.035).toFixed(1);
  const waistToHeightRatio = +(waist / height).toFixed(2);

  // Macros distribution (30% Protein, 40% Complex Carbs, 30% Healthy Fats)
  const proteinGrams = Math.round((targetCalories * 0.3) / 4);
  const carbsGrams = Math.round((targetCalories * 0.4) / 4);
  const fatGrams = Math.round((targetCalories * 0.3) / 9);

  let bmiStatus = 'وزن صحي ومثالي';
  let clinicalAdvice =
    'مؤشر كتلة جسمكِ يقع في النطاق الصحي. نوصي ببرنامج تثبيت الوزن وتعزيز الكتلة العضلية.';
  if (bmi < 18.5) {
    bmiStatus = 'نحافة تحتاج لدعم غذائي وبناء عضلي';
    clinicalAdvice =
      'تحتاجين إلى زيادة كثافة السعرات الصحية والبروتين مع فحص الغدة الدرقية والأنيميا.';
  } else if (bmi >= 25 && bmi < 30) {
    bmiStatus = 'زيادة وزن (مرحلة ما قبل السمنة)';
    clinicalAdvice =
      'فرصة ممتازة للوصول للوزن المثالي خلال 6 إلى 8 أسابيع عبر ضبط مواعيد الوجبات وتقليل مقاومة الإنسولين.';
  } else if (bmi >= 30) {
    bmiStatus = 'سمنة إكلينيكية تحتاج لبروتوكول علاجي';
    clinicalAdvice =
      'ننصح بإجراء تحاليل HOMA-IR والغدة الدرقية وفيتامين D والبدء في بروتوكول إعادة برمجة الحرق مع د. راندا.';
  }

  return (
    <div>
      <PageHeroBanner pageId="calculators" onNavigate={onNavigate} />

      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Input Panel */}
          <div className="lg:col-span-5 bg-[#F2EFE9] p-6 sm:p-8 rounded-2xl border border-[#E5DFD5] space-y-5">
            <h2 className="text-xl font-bold text-[#14281D]">
              أدخلي قياساتكِ الحيوية الحالية
            </h2>

            <div>
              <span className="block text-xs font-semibold text-[#4A5D52] mb-2">النوع البيولوجي:</span>
              <div className="grid grid-cols-2 gap-2 p-1 bg-[#FAF8F5] rounded-xl border border-[#E5DFD5]">
                <button
                  type="button"
                  onClick={() => setGender('female')}
                  className={`py-2.5 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                    gender === 'female' ? 'bg-[#1E4D3B] text-white' : 'text-[#14281D]'
                  }`}
                >
                  أنثى
                </button>
                <button
                  type="button"
                  onClick={() => setGender('male')}
                  className={`py-2.5 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                    gender === 'male' ? 'bg-[#1E4D3B] text-white' : 'text-[#14281D]'
                  }`}
                >
                  ذكر
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <label className="block">
                <span className="text-xs font-semibold text-[#4A5D52]">العمر (سنة):</span>
                <input
                  type="number"
                  min={14}
                  max={90}
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value) || 30)}
                  className="mt-1.5 w-full px-3.5 py-2.5 bg-white border border-[#D8D0C5] rounded-xl font-mono-nums font-semibold text-[#14281D]"
                />
              </label>

              <label className="block">
                <span className="text-xs font-semibold text-[#4A5D52]">الطول (سم):</span>
                <input
                  type="number"
                  min={130}
                  max={220}
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value) || 164)}
                  className="mt-1.5 w-full px-3.5 py-2.5 bg-white border border-[#D8D0C5] rounded-xl font-mono-nums font-semibold text-[#14281D]"
                />
              </label>

              <label className="block">
                <span className="text-xs font-semibold text-[#4A5D52]">الوزن الحالي (كجم):</span>
                <input
                  type="number"
                  min={35}
                  max={250}
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value) || 75)}
                  className="mt-1.5 w-full px-3.5 py-2.5 bg-white border border-[#D8D0C5] rounded-xl font-mono-nums font-semibold text-[#14281D]"
                />
              </label>

              <label className="block">
                <span className="text-xs font-semibold text-[#4A5D52]">محيط الخصر (سم):</span>
                <input
                  type="number"
                  min={50}
                  max={180}
                  value={waist}
                  onChange={(e) => setWaist(Number(e.target.value) || 85)}
                  className="mt-1.5 w-full px-3.5 py-2.5 bg-white border border-[#D8D0C5] rounded-xl font-mono-nums font-semibold text-[#14281D]"
                />
              </label>
            </div>

            <label className="block">
              <span className="text-xs font-semibold text-[#4A5D52]">مستوى النشاط البدني الأسبوعي:</span>
              <select
                value={activity}
                onChange={(e) => setActivity(Number(e.target.value))}
                className="mt-1.5 w-full px-3.5 py-2.5 bg-white border border-[#D8D0C5] rounded-xl text-sm font-medium text-[#14281D]"
              >
                <option value={1.2}>نشاط مكتبي هادئ (بدون رياضة)</option>
                <option value={1.375}>نشاط خفيف (مشي أو تمرين 1-3 أيام أسبوعياً)</option>
                <option value={1.55}>نشاط متوسط (تمرين منتظم 3-5 أيام أسبوعياً)</option>
                <option value={1.725}>نشاط عالٍ (رياضة يومية مكثفة)</option>
              </select>
            </label>

            <div>
              <span className="block text-xs font-semibold text-[#4A5D52] mb-2">الهدف العلاجي:</span>
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2 p-1 bg-[#FAF8F5] rounded-xl border border-[#E5DFD5]">
                {[
                  { id: 'lose' as const, label: 'إنقاص الدهون' },
                  { id: 'maintain' as const, label: 'تثبيت الوزن' },
                  { id: 'gain' as const, label: 'علاج النحافة' },
                ].map((g) => (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => setGoal(g.id)}
                    className={`py-2 px-1 text-[11px] sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                      goal === g.id ? 'bg-[#1E4D3B] text-white' : 'text-[#14281D]'
                    }`}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Comprehensive Clinical Report Output */}
          <div className="lg:col-span-7 bg-[#F2EFE9] p-5 sm:p-10 rounded-2xl border border-[#E5DFD5] space-y-6 sm:space-y-8">
            <div className="border-b border-[#E5DFD5] pb-5">
              <p className="text-xs font-semibold text-[#9A6B13]">
                التقرير الحيوي الفوري · عيادة د. راندا للتغذية العلاجية
              </p>
              <h2 className="text-xl sm:text-3xl font-bold text-[#14281D] mt-1">
                تحليل مؤشرات جسمكِ واحتياجكِ اليومي من الطاقة
              </h2>
            </div>

            {/* 4 Key Biometric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 sm:p-5 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5]">
                <span className="text-xs text-[#4A5D52]">مؤشر كتلة الجسم (BMI)</span>
                <div className="text-2xl sm:text-3xl font-bold font-mono-nums text-[#1E4D3B] mt-1">
                  {bmi} <span className="text-xs font-sans text-[#4A5D52]">kg/m²</span>
                </div>
                <p className="text-xs font-semibold text-[#14281D] mt-1">{bmiStatus}</p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5]">
                <span className="text-xs text-[#4A5D52]">نطاق الوزن المثالي لطولكِ</span>
                <div className="text-2xl sm:text-3xl font-bold font-mono-nums text-[#14281D] mt-1">
                  {idealMin} – {idealMax}{' '}
                  <span className="text-xs font-sans text-[#4A5D52]">كجم</span>
                </div>
                <p className="text-xs text-[#4A5D52] mt-1">بحسب تكوين الكتلة العضلية</p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5]">
                <span className="text-xs text-[#4A5D52]">السعرات اليومية المقترحة لهدفكِ</span>
                <div className="text-2xl sm:text-3xl font-bold font-mono-nums text-[#9A6B13] mt-1">
                  {targetCalories}{' '}
                  <span className="text-xs font-sans text-[#4A5D52]">سعرة / يوم</span>
                </div>
                <p className="text-xs text-[#4A5D52] mt-1">
                  معدل الحرق الكلي الحالي (TDEE): <span className="font-mono-nums">{tdee}</span> سعرة
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5]">
                <span className="text-xs text-[#4A5D52]">احتياج الماء ومؤشر الخصر للطول</span>
                <div className="text-2xl sm:text-3xl font-bold font-mono-nums text-[#1E4D3B] mt-1">
                  {waterLiters} <span className="text-xs font-sans text-[#4A5D52]">لتر ماء يومياً</span>
                </div>
                <p className="text-xs text-[#4A5D52] mt-1">
                  نسبة الخصر للطول: <span className="font-mono-nums">{waistToHeightRatio}</span>{' '}
                  {waistToHeightRatio > 0.5 ? '(تحتاج لخفض دهون البطن)' : '(ممتازة صحياً)'}
                </p>
              </div>
            </div>

            {/* Daily Macronutrients Table */}
            <div className="p-4 sm:p-6 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5]">
              <h3 className="text-sm sm:text-base font-bold text-[#14281D] mb-4">
                التوزيع الإكلينيكي اليومي للمغذيات الكبرى (Macronutrients):
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-center">
                <div className="p-3 rounded-lg bg-[#F2EFE9] flex sm:block items-center justify-between">
                  <span className="text-xs text-[#4A5D52] block">البروتين الصافي (30%)</span>
                  <strong className="font-mono-nums text-base sm:text-xl text-[#1E4D3B]">
                    {proteinGrams} جرام
                  </strong>
                </div>
                <div className="p-3 rounded-lg bg-[#F2EFE9] flex sm:block items-center justify-between">
                  <span className="text-xs text-[#4A5D52] block">الكربوهيدرات المعقدة (40%)</span>
                  <strong className="font-mono-nums text-base sm:text-xl text-[#14281D]">
                    {carbsGrams} جرام
                  </strong>
                </div>
                <div className="p-3 rounded-lg bg-[#F2EFE9] flex sm:block items-center justify-between">
                  <span className="text-xs text-[#4A5D52] block">الدهون الصحية (30%)</span>
                  <strong className="font-mono-nums text-base sm:text-xl text-[#9A6B13]">{fatGrams} جرام</strong>
                </div>
              </div>
            </div>

            {/* Clinical Recommendation Box */}
            <div className="p-5 sm:p-6 rounded-xl bg-[#1E4D3B] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-bold">التوصية الطبية من د. راندا لحالتكِ:</h4>
                <p className="text-xs sm:text-sm text-white/90 mt-1 leading-relaxed">
                  {clinicalAdvice}
                </p>
              </div>
              <button
                onClick={() => onNavigate('booking')}
                className="px-5 py-3 bg-white text-[#1E4D3B] font-bold text-sm rounded-xl hover:bg-[#F2EFE9] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                احجزي خطتكِ المخصصة
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ==========================================================================
   PAGE 7: THERAPEUTIC KITCHEN & RECIPES (المطبخ العلاجي)
   ========================================================================== */
export const RecipesPage: React.FC<PageViewProps> = ({ onNavigate }) => {
  const [categoryFilter, setCategoryFilter] = useState<string>('الكل');
  const categories = ['الكل', 'فطور علاجي', 'غداء متوازن', 'عشاء خفيف'];

  const filteredRecipes =
    categoryFilter === 'الكل'
      ? HEALTHY_RECIPES
      : HEALTHY_RECIPES.filter((r) => r.category === categoryFilter);

  return (
    <div>
      <PageHeroBanner pageId="recipes" onNavigate={onNavigate} />

      <section className="py-12 sm:py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        {/* Interactive Category Filter */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-10">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 p-1.5 bg-[#F2EFE9] rounded-xl border border-[#E5DFD5] w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`flex-1 sm:flex-initial px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  categoryFilter === cat
                    ? 'bg-[#1E4D3B] text-white'
                    : 'text-[#14281D] hover:bg-[#E5DFD5]/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <span className="text-xs text-[#4A5D52]">
            جميع الوصفات محسوبة السعرات والماكروز ومناسبة لمرضى مقاومة الإنسولين
          </span>
        </div>

        <div className="space-y-8 sm:space-y-10">
          {filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-[#F2EFE9] rounded-2xl border border-[#E5DFD5] overflow-hidden grid grid-cols-1 lg:grid-cols-12"
            >
              <div className="lg:col-span-5 min-h-[240px] sm:min-h-[300px] relative">
                <SafeImage
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover absolute inset-0"
                />
              </div>
              <div className="lg:col-span-7 p-5 sm:p-10 space-y-5">
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#4A5D52]">
                  <span className="font-semibold text-[#1E4D3B]">{recipe.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>وقت التحضير: {recipe.prepTime}</span>
                  <span aria-hidden="true">·</span>
                  <span>المؤشر الجلايسيمي: {recipe.glycemicIndex}</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-[#14281D]">{recipe.title}</h2>
                <p className="text-sm text-[#1E4D3B] font-medium">{recipe.clinicalBenefit}</p>

                {/* Tabular Nutrition Bar (2 cols on mobile, 4 cols on sm+) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5] text-center">
                  <div>
                    <span className="text-xs text-[#4A5D52] block">السعرات</span>
                    <strong className="font-mono-nums text-sm sm:text-base text-[#14281D]">
                      {recipe.calories} kcal
                    </strong>
                  </div>
                  <div>
                    <span className="text-xs text-[#4A5D52] block">البروتين</span>
                    <strong className="font-mono-nums text-sm sm:text-base text-[#1E4D3B]">
                      {recipe.proteinG}g
                    </strong>
                  </div>
                  <div>
                    <span className="text-xs text-[#4A5D52] block">الكارب</span>
                    <strong className="font-mono-nums text-sm sm:text-base text-[#14281D]">
                      {recipe.carbsG}g
                    </strong>
                  </div>
                  <div>
                    <span className="text-xs text-[#4A5D52] block">الدهون الصحية</span>
                    <strong className="font-mono-nums text-sm sm:text-base text-[#9A6B13]">
                      {recipe.fatsG}g
                    </strong>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div>
                    <h3 className="text-sm font-bold text-[#14281D] mb-2">المكونات الدقيقة:</h3>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-[#4A5D52]">
                      {recipe.ingredients.map((ing) => (
                        <li key={ing}>· {ing}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#14281D] mb-2">طريقة التحضير الصحي:</h3>
                    <ol className="space-y-1.5 text-xs sm:text-sm text-[#4A5D52] list-decimal list-inside">
                      {recipe.steps.map((st) => (
                        <li key={st}>{st}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

/* ==========================================================================
   PAGE 8: MEDICAL ENCYCLOPEDIA & BLOG (الموسوعة الطبية)
   ========================================================================== */
export const BlogPage: React.FC<PageViewProps> = ({ onNavigate }) => {
  const [selectedArticleId, setSelectedArticleId] = useState<string>(BLOG_ARTICLES[0].id);
  const activeArticle =
    BLOG_ARTICLES.find((a) => a.id === selectedArticleId) || BLOG_ARTICLES[0];

  return (
    <div>
      <PageHeroBanner pageId="blog" onNavigate={onNavigate} />

      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Article List Sidebar */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="text-lg font-bold text-[#14281D] mb-3">
              فهرس الأبحاث والمقالات الطبية:
            </h2>
            {BLOG_ARTICLES.map((art) => {
              const isSelected = art.id === activeArticle.id;
              return (
                <button
                  key={art.id}
                  onClick={() => setSelectedArticleId(art.id)}
                  className={`w-full text-right p-5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#1E4D3B] text-white border-[#1E4D3B]'
                      : 'bg-[#F2EFE9] text-[#14281D] border-[#E5DFD5] hover:bg-[#E7E2D8]'
                  }`}
                >
                  <div
                    className={`text-xs font-semibold mb-1.5 inline-flex items-center gap-1.5 ${
                      isSelected ? 'text-[#F3D067]' : 'text-[#9A6B13]'
                    }`}
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{art.category}</span>
                  </div>
                  <h3 className="text-base font-bold leading-snug">{art.title}</h3>
                </button>
              );
            })}
          </div>

          {/* Full Article Reader */}
          <article className="lg:col-span-8 bg-[#F2EFE9] p-6 sm:p-10 rounded-2xl border border-[#E5DFD5] space-y-6">
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#4A5D52]">
              <span className="font-semibold text-[#1E4D3B] bg-[#FAF8F5] px-3 py-1 rounded-lg border border-[#E5DFD5]">
                {activeArticle.category}
              </span>
              <span aria-hidden="true">·</span>
              <span className="font-medium text-[#14281D]">بقلم: د. راندا (Dr. Randa)</span>
              <span aria-hidden="true">·</span>
              <span>نُشر في {activeArticle.publishDate}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#14281D] leading-snug">
              {activeArticle.title}
            </h2>

            <p className="text-base text-[#4A5D52] leading-relaxed">{activeArticle.excerpt}</p>

            {/* Key Clinical Takeaways */}
            <div className="p-6 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5]">
              <h3 className="text-sm font-bold text-[#1E4D3B] mb-3">
                الخلاصة الإكلينيكية السريعة للمقال:
              </h3>
              <ul className="space-y-2 text-sm text-[#14281D]">
                {activeArticle.keyTakeaways.map((tk) => (
                  <li key={tk} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#1E4D3B] shrink-0 mt-1" />
                    <span>{tk}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Article Sections */}
            <div className="space-y-6 pt-2">
              {activeArticle.sections.map((sec) => (
                <div key={sec.heading}>
                  <h3 className="text-xl font-bold text-[#14281D] mb-2">{sec.heading}</h3>
                  <p className="text-base text-[#4A5D52] leading-relaxed">{sec.content}</p>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-[#E5DFD5] flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-[#4A5D52]">
                هل لديكِ تحاليل طبية ترغبين في عرضها على د. راندا؟
              </span>
              <button
                onClick={() => onNavigate('booking')}
                className="px-5 py-2.5 bg-[#1E4D3B] text-white text-sm font-semibold rounded-xl hover:bg-[#163B2D] transition-colors cursor-pointer"
              >
                احجزي استشارة طبية الآن
              </button>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

/* ==========================================================================
   PAGE 9: COMPREHENSIVE FAQ PAGE (الأسئلة الشائعة)
   ========================================================================== */
export const FAQPage: React.FC<PageViewProps> = ({ onNavigate }) => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div>
      <PageHeroBanner pageId="faq" onNavigate={onNavigate} />

      <section className="py-16 px-4 sm:px-8 max-w-4xl mx-auto space-y-4">
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={item.question}
              className="bg-[#F2EFE9] rounded-2xl border border-[#E5DFD5] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                className="w-full text-right p-6 flex items-center justify-between gap-4 cursor-pointer"
              >
                <div>
                  <span className="text-xs text-[#9A6B13] font-semibold block mb-1">
                    {item.category}
                  </span>
                  <h2 className="text-base sm:text-lg font-bold text-[#14281D]">
                    {item.question}
                  </h2>
                </div>
                <span className="font-mono-nums text-xl font-bold text-[#1E4D3B] shrink-0">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              {isOpen && (
                <div className="px-6 pb-6 pt-2 border-t border-[#E5DFD5] text-sm sm:text-base text-[#4A5D52] leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}

        <div className="mt-10 p-8 rounded-2xl bg-[#1E4D3B] text-white text-center space-y-4">
          <h3 className="text-xl font-bold">هل لديكِ سؤال طبي خاص بحالتكِ الصحية؟</h3>
          <p className="text-sm text-white/85 max-w-xl mx-auto">
            فريق د. راندا الطبي جاهز للرد على كافة استفساراتكِ وتوضيح البروتوكول الأنسب لكِ سواء بالعيادة أو أونلاين.
          </p>
          <button
            onClick={() => onNavigate('booking')}
            className="px-6 py-3 bg-white text-[#1E4D3B] font-bold text-sm rounded-xl hover:bg-[#F2EFE9] transition-colors cursor-pointer"
          >
            تواصلي معنا واحجزي موعدكِ
          </button>
        </div>
      </section>
    </div>
  );
};

/* ==========================================================================
   PAGE 10: BOOKING & CONSULTATION PORTAL (حجز استشارة)
   ========================================================================== */
export const BookingPage: React.FC<PageViewProps> = ({ onNavigate }) => {
  const [consultType, setConsultType] = useState<'clinic' | 'online'>('clinic');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedProgram, setSelectedProgram] = useState(NUTRITION_PROGRAMS[0].title);
  const [preferredDate, setPreferredDate] = useState('2026-10-15');
  const [notes, setNotes] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const buildWhatsAppBookingMessage = () => {
    const typeLabel = consultType === 'clinic' ? 'كشف بالعيادة' : 'استشارة أونلاين';
    return `مرحباً د. راندا، أرغب في تأكيد حجز (${typeLabel}):
- الاسم: ${fullName || 'غير محدد'}
- رقم التواصل: ${phone || 'غير محدد'}
- البرنامج المطلوب: ${selectedProgram}
- التاريخ المفضل: ${preferredDate}
${notes ? `- ملاحظات صحية: ${notes}` : ''}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (fullName.trim().length < 3) {
      setErrorMsg('يرجى إدخال الاسم الثلاثي بشكل صحيح.');
      return;
    }
    if (phone.trim().length < 8) {
      setErrorMsg('يرجى إدخال رقم هاتف أو واتساب صحيح للتواصل.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <div>
      <PageHeroBanner pageId="booking" onNavigate={onNavigate} />

      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Booking Form */}
          <div className="lg:col-span-7 bg-[#F2EFE9] p-6 sm:p-10 rounded-2xl border border-[#E5DFD5]">
            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#FAF8F5] border border-[#1E4D3B] text-center space-y-5">
                <div className="w-12 h-12 rounded-full bg-[#1E4D3B] text-white flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-[#14281D]">
                  تم تسجيل بيانات حجزكِ بنجاح يا {fullName}
                </h2>
                <p className="text-sm text-[#4A5D52] max-w-lg mx-auto leading-relaxed">
                  تم استلام طلبكِ لـ ({consultType === 'clinic' ? 'كشف بالعيادة' : 'استشارة أونلاين'}) ضمن{' '}
                  <strong className="text-[#14281D]">{selectedProgram}</strong>. يمكنكِ الآن إرسال تفاصيل حجزكِ مباشرة عبر واتساب العيادة الرسمي لتأكيد الموعد الفوري:
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <a
                    href={getWhatsAppUrl(buildWhatsAppBookingMessage())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 bg-[#1E4D3B] text-white text-sm font-bold rounded-xl hover:bg-[#163B2D] transition-colors inline-flex items-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>تأكيد الموعد فوراً عبر واتساب</span>
                    <span dir="ltr" className="font-mono-nums">({WHATSAPP_DISPLAY})</span>
                  </a>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-3.5 bg-[#F2EFE9] text-[#14281D] text-sm font-semibold rounded-xl border border-[#D8D0C5] cursor-pointer"
                  >
                    تعديل بيانات الحجز
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="text-2xl font-bold text-[#14281D]">
                    استمارة الحجز والتقييم الغذائي الأولي
                  </h2>
                  <a
                    href={getWhatsAppUrl('مرحباً د. راندا، أود الاستفسار والحجز المباشر عبر واتساب.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-bold text-[#1E4D3B] hover:underline inline-flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>حجز سريع عبر واتساب:</span>
                    <span dir="ltr" className="font-mono-nums">{WHATSAPP_DISPLAY}</span>
                  </a>
                </div>

                <div>
                  <span className="block text-xs font-semibold text-[#4A5D52] mb-2">
                    نوع الاستشارة المفضلة:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 p-1.5 bg-[#FAF8F5] rounded-xl border border-[#E5DFD5]">
                    <button
                      type="button"
                      onClick={() => setConsultType('clinic')}
                      className={`py-3 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                        consultType === 'clinic' ? 'bg-[#1E4D3B] text-white' : 'text-[#14281D]'
                      }`}
                    >
                      كشف بالعيادة (+ فحص InBody)
                    </button>
                    <button
                      type="button"
                      onClick={() => setConsultType('online')}
                      className={`py-3 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                        consultType === 'online' ? 'bg-[#1E4D3B] text-white' : 'text-[#14281D]'
                      }`}
                    >
                      استشارة أونلاين (من أي دولة)
                    </button>
                  </div>
                </div>

                {errorMsg && (
                  <div className="p-3.5 rounded-xl bg-[#FEE2E2] text-[#991B1B] text-xs font-semibold">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-xs font-semibold text-[#4A5D52]">الاسم بالكامل *</span>
                    <input
                      type="text"
                      required
                      placeholder="مثال: سارة أحمد محمود"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="mt-1.5 w-full px-4 py-3 bg-white border border-[#D8D0C5] rounded-xl text-sm text-[#14281D]"
                    />
                  </label>

                  <label className="block">
                    <span className="text-xs font-semibold text-[#4A5D52]">
                      رقم الهاتف / الواتساب *
                    </span>
                    <input
                      type="tel"
                      required
                      placeholder="+965 555 18676"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="mt-1.5 w-full px-4 py-3 bg-white border border-[#D8D0C5] rounded-xl text-sm font-mono-nums text-[#14281D]"
                    />
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-xs font-semibold text-[#4A5D52]">
                      البريد الإلكتروني (اختياري)
                    </span>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1.5 w-full px-4 py-3 bg-white border border-[#D8D0C5] rounded-xl text-sm text-[#14281D]"
                    />
                  </label>

                  <label className="block">
                    <span className="text-xs font-semibold text-[#4A5D52]">تاريخ الموعد المفضل</span>
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="mt-1.5 w-full px-4 py-3 bg-white border border-[#D8D0C5] rounded-xl text-sm font-mono-nums text-[#14281D]"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="text-xs font-semibold text-[#4A5D52]">
                    البرنامج العلاجي المطلوب:
                  </span>
                  <select
                    value={selectedProgram}
                    onChange={(e) => setSelectedProgram(e.target.value)}
                    className="mt-1.5 w-full px-4 py-3 bg-white border border-[#D8D0C5] rounded-xl text-sm text-[#14281D]"
                  >
                    {NUTRITION_PROGRAMS.map((p) => (
                      <option key={p.id} value={p.title}>
                        {p.title}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="text-xs font-semibold text-[#4A5D52]">
                    ملاحظات صحية أو تحاليل متوفرة لديكِ:
                  </span>
                  <textarea
                    rows={3}
                    placeholder="اذكري الوزن الحالي، الطول، وأي حالة صحية كالغدة الدرقية أو مقاومة الإنسولين أو الرضاعة..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="mt-1.5 w-full px-4 py-3 bg-white border border-[#D8D0C5] rounded-xl text-sm text-[#14281D]"
                  />
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#1E4D3B] text-white font-bold rounded-xl hover:bg-[#163B2D] transition-colors cursor-pointer"
                  >
                    تسجيل الحجز بالموقع
                  </button>

                  <a
                    href={getWhatsAppUrl(buildWhatsAppBookingMessage())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-[#FAF8F5] text-[#1E4D3B] border border-[#1E4D3B] font-bold rounded-xl hover:bg-[#E7E2D8] transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>إرسال الحجز عبر واتساب</span>
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Direct WhatsApp Card & Clinic Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#1E4D3B] text-white p-6 sm:p-8 rounded-2xl space-y-4">
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-6 h-6 text-[#F3D067]" />
                <h3 className="text-xl font-bold">التواصل المباشر عبر واتساب العيادة</h3>
              </div>
              <p className="text-sm text-white/90 leading-relaxed">
                للحجز السريع، الاستفسار عن باقات المتابعة الأونلاين، أو إرسال التحاليل الطبية مباشرة لفريق د. راندا الطبي:
              </p>
              <div className="p-4 rounded-xl bg-white/10 border border-white/15 flex items-center justify-between">
                <span className="text-xs text-[#E8DFCA]">رقم واتساب الرسمي:</span>
                <span dir="ltr" className="font-mono-nums text-lg font-bold text-[#F3D067]">
                  {WHATSAPP_DISPLAY}
                </span>
              </div>
              <a
                href={getWhatsAppUrl('مرحباً د. راندا، أرغب في حجز استشارة تغذية علاجية.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-white text-[#1E4D3B] font-bold text-sm rounded-xl hover:bg-[#F2EFE9] transition-colors inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>بدء محادثة واتساب فورية</span>
              </a>
            </div>

            <div className="bg-[#F2EFE9] p-6 sm:p-8 rounded-2xl border border-[#E5DFD5] space-y-4">
              <h3 className="text-xl font-bold text-[#14281D]">
                مواعيد العمل والاستشارات
              </h3>
              <div className="space-y-3 text-sm text-[#4A5D52]">
                <p>
                  <strong className="text-[#14281D] block">الكشف بالعيادة والمتابعة الأونلاين:</strong>
                  متاح الحجز المسبق للكشف المباشر أو الاستشارات المرئية والصوتية عبر الإنترنت لجميع الدول.
                </p>
                <p>
                  <strong className="text-[#14281D] block">مواعيد العمل الرسمية:</strong>
                  السبت إلى الخميس من الساعة <span className="font-mono-nums">12:00</span> ظهراً حتى{' '}
                  <span className="font-mono-nums">09:00</span> مساءً.
                </p>
              </div>
            </div>

            <div className="bg-[#F2EFE9] p-6 sm:p-8 rounded-2xl border border-[#E5DFD5] space-y-3">
              <h3 className="text-lg font-bold text-[#14281D]">
                ماذا يشمل الكشف والاستشارة؟
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#4A5D52]">
                <li>· فحص شامل لمكونات الجسم (الدهون، العضلات، الماء، ومعدل الحرق)</li>
                <li>· قراءة متعمقة للتحاليل الطبية وتحديد المكملات العلاجية الناقصة</li>
                <li>· تصميم جدول غذائي مرن ببدائل متعددة من أكل البيت الطبيعي</li>
                <li>· متابعة أسبوعية مستمرة عبر واتساب لتعديل الخطة وكسر ثبات الوزن</li>
              </ul>
              <div className="pt-3 border-t border-[#E5DFD5]">
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-bold text-[#1877F2] hover:underline inline-flex items-center gap-1.5"
                >
                  <span>تابعوا نصائح وقصص نجاح د. راندا على فيسبوك ←</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ==========================================================================
   SPECIALIZED GOOGLE-RANKING CLINICAL GUIDE PAGES (6 DEDICATED PAGES)
   ========================================================================== */
const SPECIALIZED_GUIDE_CONTENT: Record<
  string,
  {
    badge: string;
    heroImage: string;
    metrics: { label: string; value: string; note: string }[];
    dailyScheduleTitle: string;
    dailySchedule: { time: string; title: string; detail: string }[];
    allowedTitle: string;
    allowedList: string[];
    avoidTitle: string;
    avoidList: string[];
  }
> = {
  'intermittent-fasting': {
    badge: 'بروتوكول الصيام المتقطع الإكلينيكي · 16/8 و 14/10',
    heroImage: IMAGES.holisticMealPrep,
    metrics: [
      { label: 'معدل نزول الدهون المتوقع', value: '6 - 10 كجم', note: 'خلال 8 أسابيع من الالتزام المرن' },
      { label: 'ارتفاع هرمون النمو الحارق', value: '+300%', note: 'بعد الساعة 14 من الصيام النظيف' },
      { label: 'انخفاض الإنسولين الصائم', value: '-42%', note: 'يتيح فتح مخازن دهون البطن' },
    ],
    dailyScheduleTitle: 'الجدول الزمني التطبيقي المعتمد من د. راندا للصيام المتقطع:',
    dailySchedule: [
      {
        time: '08:00 مساءً - 10:00 صباحاً',
        title: 'نافذة الصيام الليلي والصباحي (14 إلى 16 ساعة)',
        detail: 'يُسمح بالماء، القهوة السادة، الشاي الأخضر، الينسون، والنعناع بدون أي سكر أو حليب.',
      },
      {
        time: '10:00 صباحاً أو 12:00 ظهراً',
        title: 'وجبة كسر الصيام (الفطور العلاجي المشبع)',
        detail: '2 بيضة مسلوقة أو أومليت بزيت الزيتون + قطعة جبن قريش + خيار وجرجير + نصف رغيف بلدي أو شوفان.',
      },
      {
        time: '04:00 عصراً',
        title: 'وجبة الغداء المتوازنة عالية البروتين',
        detail: 'طبق سلطة خضراء كبير + 150 جرام سمك مشوي أو صدر دجاج + 5 ملاعق أرز بسمتي أو فريك.',
      },
      {
        time: '07:30 مساءً',
        title: 'وجبة العشاء الخفيف قبل إغلاق النافذة',
        detail: 'علبة زبادي يوناني + ملعقة بذور شيا ورشة قرفة + حفنة لوز نيء أو ثمرة تفاح أخضر.',
      },
    ],
    allowedTitle: 'أهم المسموحات التي تضاعف الحرق في الصيام المتقطع:',
    allowedList: [
      'الماء الفاتر بمعدل 3 لترات يومياً لتنشيط الكبد وطرد سموم الخلايا الدهنية.',
      'القهوة السوداء والشاي الأخضر والماتشا بدون سكر أو مبيضات.',
      'البروتينات الكاملة (البيض، الأسماك، الدجاج، اللحوم الحمراء الخالية من الدهن، والجبن القريش).',
      'الدهون الصحية الطبيعية (زيت الزيتون البكر، الأفوكادو، المكسرات النيئة، وبذور الشيا والكتان).',
    ],
    avoidTitle: 'أخطاء وممنوعات تفسد الصيام المتقطع وتوقف النزول:',
    avoidList: [
      'إضافة الحليب أو الكريمة أو السكر الدايت للقهوة أثناء ساعات الصيام.',
      'كسر الصيام على التمر أو العصائر أو المعجنات مما يسبب قفزة إنسولين حادة.',
      'قلة تناول البروتين في ساعات الإفطار مما يؤدي لفقدان العضلات وترهل الجلد.',
      'السهر لساعات متأخرة مما يرفع هرمون الكورتيزول ويعاكس فوائد الصيام.',
    ],
  },
  'insulin-resistance-diet': {
    badge: 'بروتوكول علاج مقاومة الإنسولين النهائي · HOMA-IR',
    heroImage: IMAGES.clinicalMetabolicNutrition,
    metrics: [
      { label: 'انخفاض قمة سكر الدم', value: '-73%', note: 'عند تطبيق قاعدة ترتيب عناصر الوجبة' },
      { label: 'تراجع محيط الخصر', value: '8 - 14 سم', note: 'في أول 10 أسابيع من ضبط الإنسولين' },
      { label: 'اختفاء شراهة الحلويات', value: 'خلال 10 أيام', note: 'من استقرار منحنى الجلوكوز' },
    ],
    dailyScheduleTitle: 'نموذج يوم غذائي علاجي كامل لمرضى مقاومة الإنسولين:',
    dailySchedule: [
      {
        time: 'وجبة الفطور (09:30 صباحاً)',
        title: 'فطور منخفض المؤشر الجلايسيمي يمنع الهبوط',
        detail: 'فول مدمس بزيت الزيتون والليمون والكمون + بيضة مسلوقة + طبق ورقيات خضراء + ربع رغيف أسمر.',
      },
      {
        time: 'قبل الغداء بـ 10 دقائق',
        title: 'خطوة الشبكة الليفية وخل التفاح',
        detail: 'كوب ماء مضاف إليه ملعقة صغيرة خل تفاح طبيعي عضوي + طبق سلطة خضراء.',
      },
      {
        time: 'وجبة الغداء (03:30 عصراً)',
        title: 'البروتين أولاً ثم النشويات المعقدة',
        detail: 'سمك سلمون أو ماكريل مشوي أو ربع دجاجة مشوية + خضار سوتيه + 4 ملاعق فريك أو كينوا.',
      },
      {
        time: 'وجبة العشاء (07:30 مساءً)',
        title: 'عشاء خالٍ من النشويات لخفض الإنسولين الليلي',
        detail: 'قطعة جبن قريش أو حلوم لايت مشوي + شرائح خيار وفلفل ألوان + ملعقة بذور كتان مطحونة.',
      },
    ],
    allowedTitle: 'الأطعمة الذهبية التي تعيد حساسية الخلايا للإنسولين:',
    allowedList: [
      'الخضروات الصليبية والورقية (البروكلي، السبانخ، الجرجير، الكرنب، والقرنبيط).',
      'التوابل والأعشاب العلاجية وعلى رأسها القرفة السيلانية، الكركم، والزنجبيل.',
      'البقوليات المنقوعة جيداً والحبوب الكاملة بطيئة الامتصاص كالفريك والبرغل والشوفان الكامل.',
      'الأسماك الدهنية الغنية بأوميغا-3 والدهون الأحادية غير المشبعة.',
    ],
    avoidTitle: 'أطعمة يجب إيقافها لمدة 30 يوماً لشفاء المستقبلات:',
    avoidList: [
      'الدقيق الأبيض، المخبوزات، الكرواسون، والمكرونة المصنعة.',
      'العصائر المعلبة والمشروبات الغازية وحتى عصائر الفاكهة الطبيعية المعصورة بدون ألياف.',
      'الزيوت النباتية المهدرجة والسمن الصناعي والمقليات.',
      'النقنقة المستمرة (Snacking) بين الوجبات ولو بكميات صغيرة.',
    ],
  },
  'belly-fat-loss': {
    badge: 'برنامج نحت البطن والأرداف · علاج الكرش الهرموني',
    heroImage: IMAGES.clinicSanctuaryHero,
    metrics: [
      { label: 'نزول محيط البطن والخصر', value: '5 - 9 سم', note: 'خلال أول شهر من خفض الكورتيزول' },
      { label: 'تراجع الدهون الحشوية', value: '-35%', note: 'على مقياس InBody الطبي' },
      { label: 'اختفاء انتفاخ البطن', value: '7 أيام', note: 'بعد تنظيف القولون من المخمرات' },
    ],
    dailyScheduleTitle: 'الروتين اليومي الرباعي لنسف دهون البطن السفلية والأرداف:',
    dailySchedule: [
      {
        time: 'صباحاً فور الاستيقاظ',
        title: 'ترطيب الخلايا دون رفع الكورتيزول',
        detail: 'كوبان من الماء الفاتر مع قطرات ليمون، وتأجيل شرب القهوة إلى ما بعد تناول وجبة الفطور.',
      },
      {
        time: 'وجبة الفطور والغداء',
        title: 'تركيز البروتين والألياف المشبعة',
        detail: 'توفير 30 جرام بروتين في كل وجبة لرفع معدل الحرق الحراري للطعام وشد العضلات.',
      },
      {
        time: 'بعد الغداء بساعتين',
        title: 'المشروب الحارق لدهون الخصر والمضاد لاحتباس الماء',
        detail: 'كوب شاي أخضر بالنعناع والزنجبيل الطازج وشريحة ليمون بدون سكر.',
      },
      {
        time: 'مساءً قبل النوم',
        title: 'إغلاق بوابة الكورتيزول المسائي',
        detail: 'الامتناع عن النشويات ليلاً + كوب بابونج دافئ والنوم المبكر في غرفة مظلمة.',
      },
    ],
    allowedTitle: 'أقوى الأطعمة التي تستهدف دهون البطن والأرداف:',
    allowedList: [
      'البروتينات الصافية التي ترفع هرمون الشبع (PYY) وتحمي الكتلة العضلية.',
      'الأطعمة الغنية بالبوتاسيوم (الأفوكادو، الورقيات، الكيوي) لطرد الصوديوم والسوائل المحتبسة في الأرداف.',
      'بذور الشيا والكتان التي تساعد الكبد في التخلص من فائض هرمون الإستروجين المسبب لسمنة الأرداف.',
      'المشروبات العشبية المهدئة للكورتيزول مثل المليسا والبابونج والشاي الأخضر.',
    ],
    avoidTitle: 'مسببات الكرش الهرموني وتراكم دهون الجزء السفلي:',
    avoidList: [
      'شرب القهوة على معدة فارغة مع التوتر الصباحي.',
      'السكر الأبيض والحلويات الشرقية والمشروبات المحلاة.',
      'المخللات والأطعمة العالية بالصوديوم التي تحبس اللترات من الماء في الفخذين والبطن.',
      'الجلوس المتواصل لساعات طويلة دون حركة تنشط الدورة الدموية والليمفاوية.',
    ],
  },
  'womens-hormones': {
    badge: 'وحدة توازن هرمونات المرأة · تكيس المبايض والغدة الدرقية',
    heroImage: IMAGES.womensHormonalWellness,
    metrics: [
      { label: 'انتظام الدورة والتبويض', value: '88%', note: 'من الحالات خلال 12 أسبوعاً' },
      { label: 'تحسن نشاط الغدة الدرقية', value: 'TSH < 2.2', note: 'مع ضبط السيلينيوم والحديد' },
      { label: 'نزول الوزن الهرموني', value: '7 - 11 كجم', note: 'دون تساقط الشعر أو إجهاد' },
    ],
    dailyScheduleTitle: 'بروتوكول التوقيت الغذائي والدوائي لمرضى الغدة وتكيس المبايض:',
    dailySchedule: [
      {
        time: '07:00 صباحاً (على الريق)',
        title: 'توقيت هرمون الغدة الدرقية (إن وجد)',
        detail: 'تناول قرص الغدة مع كوب ماء فقط، والانتظار 60 دقيقة كاملة قبل القهوة أو الطعام.',
      },
      {
        time: '09:00 صباحاً',
        title: 'فطور داعم للمبايض والغدة',
        detail: '2 بيضة بلدي + نصف أفوكادو أو زيت زيتون + خضروات ورقية + شريحة خبز الحبوب الكاملة.',
      },
      {
        time: '03:00 عصراً',
        title: 'غداء مضاد للالتهاب + فيتامين د وأوميغا-3',
        detail: 'سمك مشوي أو دجاج + سلطة غنية بالبذور + تناول كبسولة فيتامين D3 وأوميغا-3 وسط الوجبة.',
      },
      {
        time: '06:00 مساءً و 09:00 مساءً',
        title: 'شاي النعناع البري وعشاء خفيف',
        detail: 'كوب شاي النعناع (لخفض الأندروجينات في تكيس المبايض) + عشاء بروتيني خفيف.',
      },
    ],
    allowedTitle: 'العناصر الغذائية المنشطة للغدة الدرقية والمبايض:',
    allowedList: [
      'مصادر السيلينيوم والزنك الطبيعية (الأسماك، البيض، المكسرات البرازيلية، وبذور اليقطين).',
      'بروتوكول تدوير البذور (بذور الكتان واليقطين في النصف الأول من الشهر، والسمسم ودوار الشمس في النصف الثاني).',
      'الخضروات المطهوة جيداً والفواكه منخفضة السكر مثل التوت والفراولة والكيوي.',
      'البروتين الكافي في كل وجبة لمنع تساقط الشعر ودعم تصنيع الهرمونات.',
    ],
    avoidTitle: 'أطعمة تعطل الغدة الدرقية وتزيد تكيس المبايض:',
    avoidList: [
      'الإفراط في الصويا غير المخمرة والزيوت النباتية المكررة.',
      'تناول الكرنب والقرنبيط النيء بكميات كبيرة لمرضى خمول الغدة (يُفضل طهيها بالبخار).',
      'منتجات الألبان المحلاة والسكريات التي ترفع هرمون الذكورة وتزيد حب الشباب.',
      'شرب الشاي أو القهوة أو تناول الكالسيوم والحديد بالتزامن مع دواء الغدة.',
    ],
  },
  'weight-plateau': {
    badge: 'بروتوكول كسر ثبات الوزن · Calorie & Carb Cycling',
    heroImage: IMAGES.clinicalMetabolicNutrition,
    metrics: [
      { label: 'استجابة الميزان بعد الخطة', value: '5 - 7 أيام', note: 'عبر تقنية الصدمة الأيضية الآمنة' },
      { label: 'رفع هرمون اللبتين (الحرق)', value: '+38%', note: 'باستخدام يومي Refeed المدروسين' },
      { label: 'طرد السوائل المحتبسة', value: '1.5 - 3 كجم', note: 'بضبط توازن البوتاسيوم والماء' },
    ],
    dailyScheduleTitle: 'خطة الـ 7 أيام المعتمدة في عيادة د. راندا لكسر ثبات الوزن:',
    dailySchedule: [
      {
        time: 'اليوم 1 إلى اليوم 3',
        title: 'مرحلة خفض النشويات ورفع البروتين والماء (Low-Carb Days)',
        detail: 'الاعتماد على البروتين الصافي والخضروات والدهون الصحية فقط مع شرب 3.5 لتر ماء لطرد السوائل.',
      },
      {
        time: 'اليوم 4',
        title: 'يوم إعادة شحن اللبتين (Structured Refeed Day)',
        detail: 'رفع النشويات الصحية المعقدة (أرز بسمتي، بطاطا مشوية، شوفان) لطمأنة المخ وإعادة تنشيط الغدة.',
      },
      {
        time: 'اليوم 5 إلى اليوم 7',
        title: 'عكس توقيت الوجبات وتغيير نافذة الصيام',
        detail: 'جعل وجبة الغداء هي الوجبة المبكرة وتبكير العشاء إلى الساعة 6:00 مساءً مع مشي 30 دقيقة.',
      },
    ],
    allowedTitle: 'أسرار كسر ثبات الوزن بنجاح دون إجهاد:',
    allowedList: [
      'الاعتماد على قياسات المازورة (الخصر والأرداف) وليس رقم الميزان وحده.',
      'النوم العميق 7 إلى 8 ساعات ليلاً لأن 70% من أكسدة الدهون تحدث أثناء النوم.',
      'فحص وتصحيح نقص فيتامين D3 ومخزون الحديد (Ferritin) إذا استمر الثبات.',
      'زيادة كمية البروتين والمغنيسيوم لفك احتباس السوائل العضلي والهرموني.',
    ],
    avoidTitle: 'أخطاء قاتلة تزيد من ثبات الوزن:',
    avoidList: [
      'تقليل الأكل إلى حد التجويع (أقل من 900 سعرة) مما يدخل الجسم في وضع المجاعة.',
      'الوزن اليومي المتكرر الذي يسبب التوتر ويرفع الكورتيزول الحابس للماء.',
      'ممارسة رياضات عنيفة ومرهقة جداً مع دايت قاسي.',
      'إهمال شرب الماء ظناً أنه يسبب احتباس السوائل (قلة الماء هي التي تحبس السوائل!).',
    ],
  },
  'supplements-labs': {
    badge: 'دليل التحاليل الطبية والفيتامينات الحارقة للدهون',
    heroImage: IMAGES.holisticMealPrep,
    metrics: [
      { label: 'زيادة كفاءة حرق الدهون', value: '+45%', note: 'بعد رفع الفيريتين وفيتامين د للمستوى المثالي' },
      { label: 'الفحوصات الأساسية', value: '8 تحاليل', note: 'تكشف السبب الجذري لزيادة الوزن' },
      { label: 'تحسن الطاقة والشعر', value: '4 أسابيع', note: 'من التعويض العلاجي الموجه' },
    ],
    dailyScheduleTitle: 'جدول التوقيت الطبي الصحيح لتناول الفيتامينات والمكملات يومياً:',
    dailySchedule: [
      {
        time: 'صباحاً بعد الفطور',
        title: 'مجموعة فيتامينات B المركبة أو الكروميوم',
        detail: 'تؤخذ صباحاً لدعم طاقة الجهاز العصبي وضبط حساسية الإنسولين وسد شهية السكريات طوال النهار.',
      },
      {
        time: 'وسط أو بعد وجبة الغداء مباشرة',
        title: 'فيتامين D3 + K2 وأحماض أوميغا-3',
        detail: 'كلاهما يذوب في الدهون، لذا يجب تناولهما مع الوجبة الرئيسية لتحقيق أعلى امتصاص.',
      },
      {
        time: 'عصراً (بعيداً عن الشاي والقهوة والكالسيوم)',
        title: 'مكمل الحديد + فيتامين C',
        detail: 'يؤخذ مع كوب ماء أو عصير برتقال طبيعي لرفع مخزون الفيريتين المسؤول عن نقل الأكسجين للحرق.',
      },
      {
        time: 'مساءً قبل النوم بساعة',
        title: 'المغنيسيوم جلايسينات (Magnesium Glycinate)',
        detail: 'يهدئ الجهاز العصبي، يخفض الكورتيزول الليلي، يمنع شد العضلات، ويحسن جودة النوم العميق.',
      },
    ],
    allowedTitle: 'لماذا نطلب التحاليل الطبية قبل تصميم برنامجكِ الغذائي؟',
    allowedList: [
      'معرفة مستوى مقاومة الإنسولين (HOMA-IR) لتحديد نسبة النشويات المناسبة لجسمكِ بدقة.',
      'التأكد من أن مخزون الحديد (Ferritin) فوق 50 ng/mL لضمان عدم تساقط الشعر وسرعة الحرق.',
      'فحص فيتامين د (25-OH Vitamin D) لأن نقصه يعطل مستقبلات الإنسولين ويسبب ثبات الوزن.',
      'تقييم وظائف الغدة الدرقية وإنزيمات الكبد والدهون الثلاثية لاختيار الأغذية العلاجية الشافية.',
    ],
    avoidTitle: 'أخطاء شائعة عند تناول الفيتامينات والمكملات:',
    avoidList: [
      'تناول فيتامين د على معدة فارغة أو مع الماء فقط مما يضيع أكثر من 60% من امتصاصه.',
      'شرب الشاي أو القهوة أو الحليب مع حبوب الحديد.',
      'شراء حوارق الدهون التجارية المجهولة التي ترفع ضربات القلب وتضر الغدة والعصب.',
      'تناول مكملات عشوائية بجرعات عالية دون إجراء تحليل دم مسبق.',
    ],
  },
};

export const SpecializedGuidePage: React.FC<{
  pageId: PageId;
  onNavigate: (page: PageId) => void;
}> = ({ pageId, onNavigate }) => {
  const guide = SPECIALIZED_GUIDE_CONTENT[pageId] || SPECIALIZED_GUIDE_CONTENT['intermittent-fasting'];
  const seoCfg = PAGES_SEO[pageId];

  return (
    <div>
      <PageHeroBanner pageId={pageId} onNavigate={onNavigate} />

      <section className="py-10 sm:py-16 px-4 sm:px-8 max-w-7xl mx-auto space-y-10 sm:space-y-14">
        {/* Top Overview + Metrics + Visual Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="inline-block text-xs font-bold text-[#9A6B13] bg-[#F2EFE9] px-3 py-1.5 rounded-lg border border-[#E5DFD5]">
              {guide.badge}
            </span>
            <h2 className="text-xl sm:text-3xl font-bold text-[#14281D] leading-snug">
              الخلاصة الإكلينيكية وخطة التطبيق العملي من عيادة د. راندا
            </h2>
            <p className="text-sm sm:text-base text-[#4A5D52] leading-relaxed">
              صُمم هذا الدليل الطبي ليكون مرجعكِ العلمي الموثوق، حيث يجمع بين التطبيق اليومي السهل من مطبخكِ وبين القواعد الفسيولوجية الدقيقة التي تضمن نزول الدهون الصافية والحفاظ على الكتلة العضلية ونضارة البشرة.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-2">
              {guide.metrics.map((m) => (
                <div
                  key={m.label}
                  className="p-4 rounded-xl bg-[#F2EFE9] border border-[#E5DFD5]"
                >
                  <span className="text-xl sm:text-2xl font-bold font-mono-nums text-[#1E4D3B] block">
                    {m.value}
                  </span>
                  <span className="text-xs font-bold text-[#14281D] mt-1 block">
                    {m.label}
                  </span>
                  <span className="text-[11px] text-[#4A5D52] mt-1 block">
                    {m.note}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-[#E5DFD5] bg-[#F2EFE9] h-64 sm:h-80">
            <SafeImage
              src={guide.heroImage}
              alt={seoCfg.h1Title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Step-by-Step Daily Schedule Timeline */}
        <div className="bg-[#F2EFE9] p-5 sm:p-8 lg:p-10 rounded-2xl border border-[#E5DFD5] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E5DFD5] pb-4">
            <h3 className="text-lg sm:text-2xl font-bold text-[#14281D]">
              {guide.dailyScheduleTitle}
            </h3>
            <a
              href={getWhatsAppUrl(`مرحباً د. راندا، قرأت (${seoCfg.shortTitle}) وأرغب في تفصيل جدول خاص بحالتي.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-bold text-[#1E4D3B] hover:underline inline-flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>اطلبي جدولكِ الشخصي عبر واتساب</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {guide.dailySchedule.map((step, idx) => (
              <div
                key={step.title}
                className="p-5 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5] space-y-2"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-[#9A6B13]">
                    {step.time}
                  </span>
                  <span className="font-mono-nums text-xs font-bold text-[#1E4D3B]">
                    0{idx + 1}
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#14281D]">{step.title}</h4>
                <p className="text-xs sm:text-sm text-[#4A5D52] leading-relaxed">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Allowed vs Avoided Clinical Lists */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-5 sm:p-8 rounded-2xl bg-[#F2EFE9] border border-[#E5DFD5] space-y-4">
            <h3 className="text-base sm:text-xl font-bold text-[#1E4D3B]">
              ✓ {guide.allowedTitle}
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-[#14281D]">
              {guide.allowedList.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#1E4D3B] shrink-0 mt-1" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 sm:p-8 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD5] space-y-4">
            <h3 className="text-base sm:text-xl font-bold text-[#991B1B]">
              ✕ {guide.avoidTitle}
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-[#4A5D52]">
              {guide.avoidList.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="text-[#991B1B] font-bold shrink-0 mt-0.5">•</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

