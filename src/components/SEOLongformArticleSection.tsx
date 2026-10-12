import React from 'react';
import {
  ArrowLeft,
  BookOpen,
  Check,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { FACEBOOK_URL, PageId, WHATSAPP_DISPLAY, getWhatsAppUrl } from '../data/seoConfig';
import { PAGE_LONGFORM_ARTICLES } from '../data/longformArticles';

interface SEOLongformArticleSectionProps {
  pageId: PageId;
  onNavigate: (page: PageId) => void;
}

export const SEOLongformArticleSection: React.FC<SEOLongformArticleSectionProps> = ({
  pageId,
  onNavigate,
}) => {
  const article = PAGE_LONGFORM_ARTICLES[pageId];
  if (!article) return null;

  return (
    <section
      aria-label={article.mainTitle}
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8 bg-[#FAF8F5] border-t border-[#E5DFD5]"
    >
      <div className="max-w-7xl mx-auto">
        <article className="bg-[#F2EFE9] rounded-2xl border border-[#E5DFD5] p-5 sm:p-8 lg:p-12 shadow-xs">
          {/* Article Editorial Header */}
          <header className="border-b border-[#E5DFD5] pb-6 sm:pb-8">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#9A6B13] bg-[#FAF8F5] px-3.5 py-1.5 rounded-lg border border-[#E5DFD5] mb-3.5">
              <Sparkles className="w-3.5 h-3.5 text-[#9A6B13] shrink-0" />
              <span>{article.kicker}</span>
            </div>

            <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-[#14281D] leading-snug balance-text">
              {article.mainTitle}
            </h2>

            <p className="mt-4 text-sm sm:text-base lg:text-lg text-[#4A5D52] leading-relaxed">
              {article.executiveSummary}
            </p>

            <div className="mt-5 pt-4 border-t border-[#E5DFD5] flex flex-wrap items-center justify-between gap-3 text-xs text-[#1E4D3B] font-semibold">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#1E4D3B] shrink-0" />
                <span>{article.medicalReviewer}</span>
              </span>
              <span className="text-[#4A5D52]">مرجع طبي إكلينيكي معتمد</span>
            </div>
          </header>

          {/* Responsive Layout: Sticky Table of Contents on Desktop + Deep Prose */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Table of Contents & Quick Action Sidebar */}
            <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-5">
              <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD5]">
                <div className="flex items-center gap-2.5 text-sm font-bold text-[#14281D] mb-3.5 pb-2.5 border-b border-[#E5DFD5]">
                  <div className="w-7 h-7 rounded-lg bg-[#1E4D3B]/10 text-[#1E4D3B] flex items-center justify-center shrink-0">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <span>محاور الدليل الطبي:</span>
                </div>
                <nav aria-label="فهرس المقال">
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#4A5D52]">
                    {article.tableOfContents.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="hover:text-[#1E4D3B] transition-colors flex items-start gap-2 leading-relaxed py-0.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#9A6B13] mt-2 shrink-0" />
                          <span>{item.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-[#1E4D3B] text-white space-y-3.5 shadow-sm">
                <div className="inline-flex items-center gap-1.5 text-xs text-[#F3D067] font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>استشارة شخصية مع د. راندا</span>
                </div>
                <h3 className="text-base font-bold leading-snug">
                  احصلي على خطة علاجية مفصلة لتحاليلكِ وطبيعة جسمكِ
                </h3>
                <p className="text-xs text-white/85 leading-relaxed">
                  متاح الحجز بالكشف المباشر في العيادة أو عبر منظومة المتابعة الأونلاين من أي مكان.
                </p>
                <div className="space-y-2.5 pt-1">
                  <a
                    href={getWhatsAppUrl(
                      `مرحباً د. راندا، قرأت مقال (${article.mainTitle}) وأرغب في حجز استشارة.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 bg-white text-[#1E4D3B] font-bold text-xs sm:text-sm rounded-xl hover:bg-[#F2EFE9] transition-colors inline-flex items-center justify-center gap-2 shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    <span>واتساب ({WHATSAPP_DISPLAY})</span>
                  </a>
                  <button
                    onClick={() => onNavigate('booking')}
                    className="w-full py-2.5 px-4 bg-white/10 text-white font-semibold text-xs rounded-xl hover:bg-white/20 transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>استمارة الحجز بالموقع</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href={FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-4 bg-[#1877F2] text-white font-semibold text-xs rounded-xl hover:bg-[#155fc2] transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <span>تابعينا على فيسبوك</span>
                  </a>
                </div>
              </div>
            </aside>

            {/* Main Longform Medical Article Body */}
            <div className="lg:col-span-8 space-y-8 sm:space-y-10">
              {article.sections.map((sec) => (
                <section key={sec.id} id={sec.id} className="scroll-mt-24 space-y-4">
                  <h3 className="text-lg sm:text-2xl font-bold text-[#14281D] leading-snug">
                    {sec.heading}
                  </h3>

                  {sec.paragraphs.map((p, idx) => (
                    <p
                      key={idx}
                      className="text-sm sm:text-base text-[#36493E] leading-[1.85]"
                    >
                      {p}
                    </p>
                  ))}

                  {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                    <ul className="p-5 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5] space-y-2.5 text-xs sm:text-sm text-[#14281D]">
                      {sec.bulletPoints.map((bp) => (
                        <li key={bp} className="flex items-start gap-2.5">
                          <div className="w-5 h-5 rounded-md bg-[#1E4D3B]/10 text-[#1E4D3B] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span className="leading-relaxed">{bp}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {sec.clinicalHighlight && (
                    <div className="p-5 rounded-xl bg-[#FAF8F5] border-r-4 border-[#9A6B13] border border-[#E5DFD5] text-sm sm:text-base font-semibold text-[#14281D] leading-relaxed">
                      {sec.clinicalHighlight}
                    </div>
                  )}
                </section>
              ))}

              {/* Responsive Clinical Comparison Table (if available) */}
              {article.comparisonTable && (
                <div className="pt-4">
                  <h3 className="text-base sm:text-lg font-bold text-[#14281D] mb-3">
                    {article.comparisonTable.caption}
                  </h3>
                  <div className="overflow-x-auto rounded-xl border border-[#E5DFD5] bg-[#FAF8F5]">
                    <table className="w-full text-right border-collapse">
                      <thead>
                        <tr className="bg-[#1E4D3B] text-white text-[11px] sm:text-sm">
                          {article.comparisonTable.headers.map((h) => (
                            <th key={h} className="p-2.5 sm:p-4 font-bold">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E5DFD5] text-[11px] sm:text-sm">
                        {article.comparisonTable.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-[#F2EFE9]/60">
                            <td className="p-2.5 sm:p-4 font-bold text-[#14281D]">{row[0]}</td>
                            <td className="p-2.5 sm:p-4 text-[#4A5D52]">{row[1]}</td>
                            <td className="p-2.5 sm:p-4 font-semibold text-[#1E4D3B]">{row[2]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Page-Specific SEO Questions & Answers */}
              <div className="pt-6 border-t border-[#E5DFD5] space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-[#14281D]">
                  أسئلة طبية متكررة حول هذا الموضوع:
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {article.pageSpecificFAQs.map((q) => (
                    <div
                      key={q.question}
                      className="p-5 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5]"
                    >
                      <h4 className="text-sm sm:text-base font-bold text-[#14281D]">
                        س: {q.question}
                      </h4>
                      <p className="mt-2 text-xs sm:text-sm text-[#4A5D52] leading-relaxed">
                        ج: {q.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
