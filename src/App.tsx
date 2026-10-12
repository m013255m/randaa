/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  Activity,
  Award,
  BookOpen,
  Calculator,
  Calendar,
  ChevronDown,
  ChevronLeft,
  Flame,
  HeartPulse,
  HelpCircle,
  Home,
  LayoutGrid,
  MessageCircle,
  PhoneCall,
  Scale,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  TrendingDown,
  Utensils,
  X,
} from 'lucide-react';
import { BrandLogo } from './components/BrandLogo';
import { SEOHeadManager } from './components/SEOHeadManager';
import { SEOLongformArticleSection } from './components/SEOLongformArticleSection';
import {
  FACEBOOK_URL,
  PAGES_SEO,
  PageId,
  WHATSAPP_DISPLAY,
  getWhatsAppUrl,
} from './data/seoConfig';
import {
  AboutPage,
  BlogPage,
  BookingPage,
  CalculatorsPage,
  ConditionsPage,
  FAQPage,
  HomePage,
  ProgramsPage,
  RecipesPage,
  SpecializedGuidePage,
  SuccessStoriesPage,
} from './components/PageViews';

const ALL_PAGE_IDS: PageId[] = [
  'home',
  'about',
  'programs',
  'conditions',
  'intermittent-fasting',
  'insulin-resistance-diet',
  'belly-fat-loss',
  'womens-hormones',
  'weight-plateau',
  'supplements-labs',
  'success-stories',
  'calculators',
  'recipes',
  'blog',
  'faq',
  'booking',
];

const PAGE_ICONS: Record<PageId, React.ReactNode> = {
  home: <Home className="w-4 h-4" />,
  about: <Award className="w-4 h-4" />,
  programs: <Sparkles className="w-4 h-4" />,
  conditions: <Stethoscope className="w-4 h-4" />,
  'intermittent-fasting': <Flame className="w-4 h-4" />,
  'insulin-resistance-diet': <Activity className="w-4 h-4" />,
  'belly-fat-loss': <Scale className="w-4 h-4" />,
  'womens-hormones': <HeartPulse className="w-4 h-4" />,
  'weight-plateau': <TrendingDown className="w-4 h-4" />,
  'supplements-labs': <ShieldCheck className="w-4 h-4" />,
  'success-stories': <Award className="w-4 h-4" />,
  calculators: <Calculator className="w-4 h-4" />,
  recipes: <Utensils className="w-4 h-4" />,
  blog: <BookOpen className="w-4 h-4" />,
  faq: <HelpCircle className="w-4 h-4" />,
  booking: <Calendar className="w-4 h-4" />,
};

export const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const pageParam = params.get('page') as PageId | null;
      if (pageParam && ALL_PAGE_IDS.includes(pageParam)) {
        return pageParam;
      }
    }
    return 'home';
  });

  // Collapsible Sections Drawer (opens & closes smoothly on click)
  const [sectionsDrawerOpen, setSectionsDrawerOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    setSectionsDrawerOpen(false);
    if (typeof window !== 'undefined') {
      const newUrl = `${window.location.pathname}?page=${page}`;
      window.history.pushState({ page }, '', newUrl);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const pageParam = params.get('page') as PageId | null;
      if (pageParam && ALL_PAGE_IDS.includes(pageParam)) {
        setCurrentPage(pageParam);
      } else {
        setCurrentPage('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Close sections drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        sectionsDrawerOpen &&
        headerRef.current &&
        !headerRef.current.contains(e.target as Node)
      ) {
        setSectionsDrawerOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [sectionsDrawerOpen]);

  const primaryNavLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'الرئيسية' },
    { id: 'programs', label: 'البرامج العلاجية' },
    { id: 'conditions', label: 'علاج الأمراض' },
    { id: 'calculators', label: 'حاسبة السعرات' },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigateTo} />;
      case 'about':
        return <AboutPage onNavigate={navigateTo} />;
      case 'programs':
        return <ProgramsPage onNavigate={navigateTo} />;
      case 'conditions':
        return <ConditionsPage onNavigate={navigateTo} />;
      case 'intermittent-fasting':
      case 'insulin-resistance-diet':
      case 'belly-fat-loss':
      case 'womens-hormones':
      case 'weight-plateau':
      case 'supplements-labs':
        return <SpecializedGuidePage pageId={currentPage} onNavigate={navigateTo} />;
      case 'success-stories':
        return <SuccessStoriesPage onNavigate={navigateTo} />;
      case 'calculators':
        return <CalculatorsPage onNavigate={navigateTo} />;
      case 'recipes':
        return <RecipesPage onNavigate={navigateTo} />;
      case 'blog':
        return <BlogPage onNavigate={navigateTo} />;
      case 'faq':
        return <FAQPage onNavigate={navigateTo} />;
      case 'booking':
        return <BookingPage onNavigate={navigateTo} />;
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div dir="rtl" className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#14281D] overflow-x-hidden">
      {/* Dynamic Per-Page SEO & Structured Data Engine */}
      <SEOHeadManager currentPage={currentPage} />

      {/* TOP BAR CONTRACT: Ultra-clean, mobile-optimized header */}
      <header
        ref={headerRef}
        className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E5DFD5]"
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-8 h-16 sm:h-20 flex items-center justify-between gap-2">
          {/* 1. Right Side: Brand Logo Emblem */}
          <button
            onClick={() => navigateTo('home')}
            className="text-right focus:outline-none cursor-pointer shrink-0"
            aria-label="العودة للصفحة الرئيسية - عيادة د. راندا للتغذية العلاجية"
          >
            <BrandLogo size="sm" variant="dark" />
          </button>

          {/* 2. Center: Primary Desktop Navigation (Hidden on mobile to keep top bar clean) */}
          <nav
            aria-label="التنقل الرئيسي"
            className="hidden xl:flex items-center gap-1"
          >
            {primaryNavLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => navigateTo(link.id)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'text-[#1E4D3B] bg-[#F2EFE9]'
                      : 'text-[#4A5D52] hover:text-[#14281D] hover:bg-[#F2EFE9]/50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* 3. Left Side: Perfectly proportioned mobile & desktop controls */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Collapsible Sections Toggle Button (Primary Navigation Trigger on Mobile & Desktop) */}
            <button
              onClick={() => setSectionsDrawerOpen(!sectionsDrawerOpen)}
              aria-expanded={sectionsDrawerOpen}
              className={`h-10 sm:h-11 px-3.5 sm:px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all inline-flex items-center gap-1.5 sm:gap-2 cursor-pointer whitespace-nowrap ${
                sectionsDrawerOpen
                  ? 'bg-[#1E4D3B] text-white border-[#1E4D3B] shadow-sm'
                  : 'bg-[#F2EFE9] text-[#14281D] border-[#D8D0C5] hover:bg-[#E7E2D8]'
              }`}
            >
              <LayoutGrid
                className={`w-4 h-4 shrink-0 ${
                  sectionsDrawerOpen ? 'text-[#F3D067]' : 'text-[#9A6B13]'
                }`}
              />
              <span>أقسام الموقع</span>
              <ChevronDown
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 shrink-0 ${
                  sectionsDrawerOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Direct WhatsApp Button (Compact icon button on mobile, labeled on md+) */}
            <a
              href={getWhatsAppUrl('مرحباً د. راندا، أود الاستفسار عن برامج التغذية وحجز استشارة.')}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تواصل عبر واتساب العيادة"
              className="h-10 sm:h-11 px-3 sm:px-4 bg-[#1E4D3B] sm:bg-[#F2EFE9] text-white sm:text-[#1E4D3B] border border-[#1E4D3B] sm:border-[#1E4D3B]/30 text-xs sm:text-sm font-bold rounded-xl hover:opacity-95 transition-all inline-flex items-center justify-center gap-1.5 whitespace-nowrap shadow-xs sm:shadow-none"
            >
              <MessageCircle className="w-4 h-4 shrink-0 text-[#F3D067] sm:text-[#1E4D3B]" />
              <span className="hidden sm:inline">واتساب العيادة</span>
            </a>

            {/* Facebook Button (Visible on sm+ in top bar, and inside drawer on mobile) */}
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="صفحة د. راندا الرسمية على فيسبوك"
              title="تابعينا على فيسبوك"
              className="hidden sm:inline-flex w-11 h-11 bg-[#1877F2]/10 text-[#1877F2] rounded-xl border border-[#1877F2]/25 hover:bg-[#1877F2] hover:text-white transition-colors items-center justify-center"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>

            {/* Consultation Booking CTA (Visible on md+ in top bar, and prominent inside mobile drawer) */}
            <button
              onClick={() => navigateTo('booking')}
              className="hidden md:inline-flex h-11 px-5 bg-[#1E4D3B] text-white text-sm font-semibold rounded-xl hover:bg-[#163B2D] transition-colors whitespace-nowrap cursor-pointer items-center gap-1.5 shadow-sm"
            >
              <Calendar className="w-4 h-4 shrink-0 text-[#F3D067]" />
              <span>حجز استشارة</span>
            </button>
          </div>
        </div>

        {/* COLLAPSIBLE SECTIONS DRAWER (Opens & Closes smoothly when user clicks 'أقسام الموقع') */}
        <AnimatePresence>
          {sectionsDrawerOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="border-t border-[#E5DFD5] bg-[#FAF8F5] shadow-2xl max-h-[84vh] overflow-y-auto"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-6">
                {/* Mobile Quick Action Strip at Top of Drawer */}
                <div className="grid grid-cols-2 sm:hidden gap-2.5 mb-4 pb-4 border-b border-[#E5DFD5]">
                  <button
                    onClick={() => navigateTo('booking')}
                    className="py-2.5 px-3 bg-[#1E4D3B] text-white text-xs font-bold rounded-xl inline-flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#F3D067] shrink-0" />
                    <span>حجز استشارة الآن</span>
                  </button>
                  <a
                    href={FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 bg-[#1877F2] text-white text-xs font-bold rounded-xl inline-flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <FacebookIcon className="w-3.5 h-3.5 shrink-0" />
                    <span>صفحة فيسبوك</span>
                  </a>
                </div>

                <div className="flex items-center justify-between mb-3.5 pb-3 border-b border-[#E5DFD5]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#1E4D3B] text-[#F3D067] flex items-center justify-center shrink-0">
                      <LayoutGrid className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="text-xs sm:text-base font-bold text-[#14281D]">
                        أقسام العيادة والأدلة الطبية المتخصصة
                      </h2>
                      <p className="text-[11px] sm:text-xs text-[#4A5D52] mt-0.5">
                        اختر القسم أو الدليل العلاجي للانتقال الفوري
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSectionsDrawerOpen(false)}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#F2EFE9] text-[#4A5D52] hover:bg-[#E5DFD5] hover:text-[#14281D] flex items-center justify-center cursor-pointer transition-colors shrink-0"
                    aria-label="إغلاق قائمة الأقسام"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* All Pages Organized Cleanly with Dedicated Medical Icons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-2.5">
                  {ALL_PAGE_IDS.map((pid) => {
                    const item = PAGES_SEO[pid];
                    const isCurrent = currentPage === pid;
                    return (
                      <button
                        key={pid}
                        onClick={() => navigateTo(pid)}
                        className={`group text-right p-3 sm:p-3.5 rounded-xl border transition-all flex items-center justify-between gap-2.5 cursor-pointer ${
                          isCurrent
                            ? 'bg-[#1E4D3B] text-white border-[#1E4D3B] shadow-sm'
                            : 'bg-[#F2EFE9]/70 text-[#14281D] border-[#E5DFD5] hover:bg-[#F2EFE9] hover:border-[#D8D0C5]'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                          <div
                            className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                              isCurrent
                                ? 'bg-white/15 text-[#F3D067]'
                                : 'bg-[#FAF8F5] text-[#1E4D3B] border border-[#E5DFD5] group-hover:bg-[#1E4D3B] group-hover:text-white'
                            }`}
                          >
                            {PAGE_ICONS[pid]}
                          </div>
                          <div className="min-w-0">
                            <span className="text-xs sm:text-sm font-bold block truncate">
                              {item.navLabel}
                            </span>
                            <span
                              className={`text-[11px] block mt-0.5 truncate ${
                                isCurrent ? 'text-white/80' : 'text-[#4A5D52]'
                              }`}
                            >
                              {item.shortTitle}
                            </span>
                          </div>
                        </div>
                        <ChevronLeft
                          className={`w-4 h-4 shrink-0 transition-transform group-hover:-translate-x-0.5 ${
                            isCurrent ? 'text-[#F3D067]' : 'text-[#9A6B13]'
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>

                {/* Quick WhatsApp & Facebook Bar inside Drawer */}
                <div className="mt-4 sm:mt-5 pt-3.5 sm:pt-4 border-t border-[#E5DFD5] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-[#14281D]">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#1E4D3B]/10 text-[#1E4D3B] flex items-center justify-center shrink-0">
                      <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <span>واتساب العيادة المباشر:</span>
                    <strong dir="ltr" className="font-mono-nums text-[#1E4D3B]">
                      {WHATSAPP_DISPLAY}
                    </strong>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href={FACEBOOK_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-initial justify-center px-4 py-2 bg-[#1877F2] text-white text-xs font-bold rounded-xl hover:bg-[#155fc2] transition-colors inline-flex items-center gap-1.5 shadow-xs"
                    >
                      <FacebookIcon className="w-3.5 h-3.5" />
                      <span>فيسبوك</span>
                    </a>
                    <a
                      href={getWhatsAppUrl('مرحباً د. راندا، أرغب في حجز استشارة تغذية علاجية.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-initial justify-center px-4 py-2 bg-[#1E4D3B] text-white text-xs font-bold rounded-xl hover:bg-[#163B2D] transition-colors inline-flex items-center gap-1.5 shadow-xs"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>مراسلة واتساب</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* MAIN PAGE CONTENT AREA + LONG-FORM SEO MEDICAL ARTICLE ON EVERY PAGE */}
      <main id="main-content" className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
          >
            {renderPage()}
            <SEOLongformArticleSection pageId={currentPage} onNavigate={navigateTo} />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* FLOATING WHATSAPP DIRECT CHAT BUTTON */}
      <a
        href={getWhatsAppUrl('مرحباً د. راندا، أود الاستفسار عن برامج التغذية وحجز موعد.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل واتساب مباشر مع عيادة د. راندا"
        className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 bg-[#1E4D3B] hover:bg-[#163B2D] text-white px-4 py-3 sm:px-5 sm:py-3.5 rounded-full shadow-lg border border-white/20 flex items-center gap-2.5 transition-transform hover:scale-105"
      >
        <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center shrink-0">
          <MessageCircle className="w-4 h-4 text-[#F3D067]" />
        </div>
        <div className="text-right leading-tight">
          <span className="block text-[10px] text-[#E8DFCA]">تواصل واتساب مباشر</span>
          <span dir="ltr" className="block text-xs sm:text-sm font-bold font-mono-nums">
            {WHATSAPP_DISPLAY}
          </span>
        </div>
      </a>

      {/* PROFESSIONAL CLINICAL FOOTER */}
      <footer className="bg-[#14281D] text-white pt-12 sm:pt-16 pb-24 sm:pb-12 px-4 sm:px-8 border-t border-[#1E4D3B]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-white/10">
            {/* Brand Column */}
            <div className="lg:col-span-4 space-y-4">
              <BrandLogo size="md" variant="light" />
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-sm">
                العيادة التخصصية للدكتورة راندا (Dr. Randa) للتغذية العلاجية، علاج السمنة الموضعية، ضبط مقاومة الإنسولين، وتوازن هرمونات المرأة بأحدث البروتوكولات الطبية العالمية بدون حرمان.
              </p>

              {/* Direct WhatsApp & Facebook Social Block in Footer */}
              <div className="pt-2 flex flex-wrap items-center gap-2.5">
                <a
                  href={getWhatsAppUrl('مرحباً د. راندا، أود حجز استشارة تغذية علاجية.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs sm:text-sm font-bold text-[#F3D067] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>واتساب:</span>
                  <span dir="ltr" className="font-mono-nums">{WHATSAPP_DISPLAY}</span>
                </a>

                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1877F2] hover:bg-[#155fc2] text-xs sm:text-sm font-bold text-white transition-colors"
                >
                  <FacebookIcon className="w-4 h-4 shrink-0" />
                  <span>صفحتنا على فيسبوك</span>
                </a>
              </div>
            </div>

            {/* Clinic Main Pages */}
            <div className="lg:col-span-2 space-y-3">
              <h3 className="text-sm font-bold text-[#F3D067]">أقسام العيادة</h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-white/80">
                <li>
                  <button onClick={() => navigateTo('home')} className="hover:text-white cursor-pointer">
                    الصفحة الرئيسية
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('about')} className="hover:text-white cursor-pointer">
                    عن د. راندا والسيرة العلمية
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('programs')} className="hover:text-white cursor-pointer">
                    البرامج والأنظمة العلاجية
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('conditions')} className="hover:text-white cursor-pointer">
                    علاج الأمراض بالتغذية
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('success-stories')} className="hover:text-white cursor-pointer">
                    قصص النجاح الواقعية
                  </button>
                </li>
              </ul>
            </div>

            {/* Top Google Nutrition Guides */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="text-sm font-bold text-[#F3D067]">أهم الأدلة العلاجية الشاملة</h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-white/80">
                <li>
                  <button
                    onClick={() => navigateTo('intermittent-fasting')}
                    className="hover:text-white cursor-pointer text-right"
                  >
                    جدول الصيام المتقطع للمبتدئين والنساء
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateTo('insulin-resistance-diet')}
                    className="hover:text-white cursor-pointer text-right"
                  >
                    النظام الغذائي لعلاج مقاومة الإنسولين
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateTo('belly-fat-loss')}
                    className="hover:text-white cursor-pointer text-right"
                  >
                    تخسيس البطن والأرداف والكرش الهرموني
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateTo('womens-hormones')}
                    className="hover:text-white cursor-pointer text-right"
                  >
                    تغذية تكيس المبايض وخمول الغدة الدرقية
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateTo('weight-plateau')}
                    className="hover:text-white cursor-pointer text-right"
                  >
                    خطة كسر ثبات الوزن في 7 أيام
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateTo('supplements-labs')}
                    className="hover:text-white cursor-pointer text-right"
                  >
                    التحاليل المطلوبة قبل الدايت والفيتامينات
                  </button>
                </li>
              </ul>
            </div>

            {/* Patient Services & Contact */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="text-sm font-bold text-[#F3D067]">خدمات المراجعين والتواصل</h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-white/80">
                <li>
                  <button onClick={() => navigateTo('calculators')} className="hover:text-white cursor-pointer">
                    حاسبة السعرات والوزن المثالي
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('recipes')} className="hover:text-white cursor-pointer">
                    وصفات المطبخ العلاجي المحسوبة
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('blog')} className="hover:text-white cursor-pointer">
                    الموسوعة والمقالات الطبية
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('faq')} className="hover:text-white cursor-pointer">
                    الأسئلة الطبية الشائعة
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('booking')} className="hover:text-white cursor-pointer">
                    حجز استشارة بالعيادة أو أونلاين
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70">
            <p>
              © {new Date().getFullYear()} عيادة د. راندا للتغذية العلاجية والحميات المتقدمة (Dr. Randa Clinical Nutrition). جميع الحقوق محفوظة.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#F3D067] font-semibold inline-flex items-center gap-1.5"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
                <span>فيسبوك</span>
              </a>
              <span>·</span>
              <a
                href={getWhatsAppUrl('مرحباً د. راندا، أود الاستفسار عن حجز موعد.')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F3D067] hover:underline font-semibold"
              >
                واتساب: <span dir="ltr" className="font-mono-nums">{WHATSAPP_DISPLAY}</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
