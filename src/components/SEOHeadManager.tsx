import React, { useEffect } from 'react';
import { PAGES_SEO, PageId } from '../data/seoConfig';
import { FAQ_ITEMS, HEALTHY_RECIPES, BLOG_ARTICLES } from '../data/clinicalData';
import { PAGE_LONGFORM_ARTICLES } from '../data/longformArticles';

interface SEOHeadManagerProps {
  currentPage: PageId;
}

export const SEOHeadManager: React.FC<SEOHeadManagerProps> = ({ currentPage }) => {
  const pageConfig = PAGES_SEO[currentPage] || PAGES_SEO.home;

  useEffect(() => {
    // 1. Update Document Title
    document.title = pageConfig.seoTitle;

    // 2. Helper to set meta tags
    const updateMeta = (selector: string, attribute: string, value: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        if (selector.includes('property=')) {
          const propMatch = selector.match(/property="([^"]+)"/);
          if (propMatch) el.setAttribute('property', propMatch[1]);
        } else if (selector.includes('name=')) {
          const nameMatch = selector.match(/name="([^"]+)"/);
          if (nameMatch) el.setAttribute('name', nameMatch[1]);
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attribute, value);
    };

    const currentUrl =
      typeof window !== 'undefined'
        ? `${window.location.origin}${window.location.pathname}${pageConfig.canonicalSlug}`
        : `https://drrandanutrition.com/${pageConfig.canonicalSlug}`;

    updateMeta('meta[name="description"]', 'content', pageConfig.metaDescription);
    updateMeta('meta[name="keywords"]', 'content', pageConfig.keywords.join(', '));
    updateMeta('meta[property="og:title"]', 'content', pageConfig.seoTitle);
    updateMeta('meta[property="og:description"]', 'content', pageConfig.metaDescription);
    updateMeta('meta[property="og:url"]', 'content', currentUrl);
    updateMeta('meta[name="twitter:title"]', 'content', pageConfig.seoTitle);
    updateMeta('meta[name="twitter:description"]', 'content', pageConfig.metaDescription);

    // 3. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

    // 4. Dynamic Schema.org JSON-LD injection
    const longformArticle = PAGE_LONGFORM_ARTICLES[currentPage];

    const basePhysicianSchema = {
      '@context': 'https://schema.org',
      '@type': ['MedicalClinic', 'Physician', 'Dietitian'],
      name: 'عيادة د. راندا للتغذية العلاجية والحميات المتقدمة | Dr. Randa Clinical Nutrition',
      url: currentUrl,
      telephone: '+96555518676',
      sameAs: ['https://www.facebook.com/share/19X7Eqag3V/?mibextid=wwXIfr'],
      description: pageConfig.metaDescription,
      medicalSpecialty: ['DietNutrition', 'Endocrine', 'PublicHealth'],
      founder: {
        '@type': 'Person',
        name: 'د. راندا (Dr. Randa)',
        jobTitle: 'استشاري التغذية الإكلينيكية والحميات العلاجية',
      },
      ...(longformArticle
        ? {
            subjectOf: {
              '@type': 'MedicalWebPage',
              headline: longformArticle.mainTitle,
              description: longformArticle.executiveSummary,
              author: {
                '@type': 'Person',
                name: 'د. راندا (Dr. Randa)',
              },
              mainEntity: longformArticle.pageSpecificFAQs.map((q) => ({
                '@type': 'Question',
                name: q.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: q.answer,
                },
              })),
            },
          }
        : {}),
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'الرئيسية - د. راندا للتغذية العلاجية',
            item: typeof window !== 'undefined' ? `${window.location.origin}/?page=home` : 'https://drrandanutrition.com/?page=home',
          },
          ...(currentPage !== 'home'
            ? [
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: pageConfig.shortTitle,
                  item: currentUrl,
                },
              ]
            : []),
        ],
      },
    };

    let pageSpecificSchema: Record<string, unknown> = basePhysicianSchema;

    if (currentPage === 'faq') {
      pageSpecificSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        name: pageConfig.seoTitle,
        description: pageConfig.metaDescription,
        mainEntity: FAQ_ITEMS.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      };
    } else if (currentPage === 'recipes') {
      pageSpecificSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: pageConfig.seoTitle,
        itemListElement: HEALTHY_RECIPES.map((recipe, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          item: {
            '@type': 'Recipe',
            name: recipe.title,
            author: { '@type': 'Person', name: 'د. راندا (Dr. Randa)' },
            prepTime: 'PT15M',
            nutrition: {
              '@type': 'NutritionInformation',
              calories: `${recipe.calories} calories`,
              proteinContent: `${recipe.proteinG}g`,
              carbohydrateContent: `${recipe.carbsG}g`,
              fatContent: `${recipe.fatsG}g`,
            },
            recipeIngredient: recipe.ingredients,
          },
        })),
      };
    } else if (currentPage === 'blog') {
      pageSpecificSchema = {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: pageConfig.seoTitle,
        description: pageConfig.metaDescription,
        blogPost: BLOG_ARTICLES.map((art) => ({
          '@type': 'BlogPosting',
          headline: art.title,
          description: art.excerpt,
          datePublished: '2026-10-01',
          author: { '@type': 'Person', name: 'د. راندا (Dr. Randa)' },
        })),
      };
    } else if (currentPage === 'calculators') {
      pageSpecificSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: pageConfig.seoTitle,
        applicationCategory: 'HealthApplication',
        operatingSystem: 'All',
        description: pageConfig.metaDescription,
      };
    }

    const scriptEl = document.getElementById('dynamic-json-ld');
    if (scriptEl) {
      scriptEl.textContent = JSON.stringify(pageSpecificSchema, null, 2);
    }
  }, [currentPage, pageConfig]);

  return null;
};
