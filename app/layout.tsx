import type { Metadata, Viewport } from 'next';
import '@fontsource/bricolage-grotesque/600.css';
import '@fontsource/bricolage-grotesque/800.css';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/700.css';
import './tc.css';
import './extras.css';
import Analytics from '@/components/Analytics';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: SITE.title,
  description: SITE.description,
  applicationName: SITE.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: SITE.ogTitle,
    description: SITE.ogDescription,
    url: '/',
    locale: 'en_GH',
  },
  twitter: { card: 'summary_large_image', title: SITE.ogTitle, description: SITE.ogDescription },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#192850',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'TrustCircle',
  parentOrganization: { '@type': 'Organization', name: 'Samakose' },
  url: SITE.url,
  email: SITE.email,
  telephone: SITE.phone,
  areaServed: ['Tamale Metropolitan Area', 'Sagnarigu Municipality'],
  address: { '@type': 'PostalAddress', addressLocality: 'Tamale', addressCountry: 'GH' },
};

// Runs before first paint: skip the intro on repeat visits and on slow or data-saving devices.
const earlyScript = `(function(){try{var d=document.documentElement,n=navigator,c=n.connection||{};
if(c.saveData||/(^|-)2g$/.test(c.effectiveType||'')||(n.deviceMemory&&n.deviceMemory<=2)||(n.hardwareConcurrency&&n.hardwareConcurrency<=2))d.classList.add('tc-lite-html');
if(sessionStorage.getItem('tc-intro-seen')==='1')d.classList.add('tc-skip-intro');}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: earlyScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
