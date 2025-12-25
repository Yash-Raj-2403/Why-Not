import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: 'website' | 'article';
  twitterCard?: 'summary' | 'summary_large_image';
  canonicalUrl?: string;
  structuredData?: object;
}

/**
 * SEO component with meta tags, Open Graph, Twitter cards, and JSON-LD
 * @param title - Page title
 * @param description - Page description
 * @param keywords - SEO keywords
 * @param ogImage - Open Graph image URL
 * @param ogType - Open Graph type
 * @param twitterCard - Twitter card type
 * @param canonicalUrl - Canonical URL
 * @param structuredData - JSON-LD structured data
 */
const SEO: React.FC<SEOProps> = ({
  title = 'WhyNot - Campus Internship & Placement Platform',
  description = 'Turn rejections into opportunities. AI-powered platform for campus placements with smart rejection analysis, one-click applications, and real-time tracking.',
  keywords = ['campus placement', 'internship', 'rejection analysis', 'AI career insights', 'student placement', 'job application tracking'],
  ogImage = '/og-image.png',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  canonicalUrl,
  structuredData
}) => {
  const siteUrl = 'https://whynot.app'; // Update with actual domain
  const fullUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  const fullImageUrl = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'WhyNot',
    'applicationCategory': 'EducationalApplication',
    'operatingSystem': 'Web',
    'description': description,
    'url': siteUrl,
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'USD'
    },
    'featureList': [
      'AI-powered rejection analysis',
      'One-click job applications',
      'Real-time application tracking',
      'Smart opportunity matching'
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content="WhyNot" />

      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImageUrl} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="WhyNot Team" />

      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#bc13fe" />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
