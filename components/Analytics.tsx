import Script from 'next/script';
import { SITE } from '@/lib/site';

/** Google Analytics 4. Renders nothing until NEXT_PUBLIC_GA_ID is set. */
export default function Analytics() {
  const id = SITE.gaId;
  if (!/^G-[A-Z0-9]{6,}$/.test(id)) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', '${id}', { anonymize_ip: true });
        document.addEventListener('click', function (e) {
          var a = e.target && e.target.closest && e.target.closest('a');
          if (!a) return;
          var h = a.getAttribute('href') || '';
          if (h.indexOf('wa.me') > -1) gtag('event', 'whatsapp_click', { link: h });
          else if (a.hasAttribute('download')) gtag('event', 'brief_download');
          else if (h.indexOf('mailto:') === 0) gtag('event', 'email_click');
          else if (h.indexOf('tel:') === 0) gtag('event', 'call_click');
        });
      `}</Script>
    </>
  );
}
