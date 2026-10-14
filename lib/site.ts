export const SITE = {
  name: 'TrustCircle',
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, ''),
  title: 'TrustCircle | Savings, Enterprise Support and Responsible Financing in Tamale, Ghana',
  description:
    'TrustCircle, a Samakose initiative in Tamale, Ghana, helps enterprises save small, build trust and access responsible financing step by step.',
  ogTitle: 'TrustCircle | Save Small. Build Trust. Access More.',
  ogDescription:
    'Group savings, enterprise support and responsible financing for micro enterprises in Tamale and Sagnarigu, Ghana.',
  email: 'info@samakose.com',
  phone: '+233558589254',
  gaId: process.env.NEXT_PUBLIC_GA_ID || '',
  videoUrl: process.env.NEXT_PUBLIC_VIDEO_URL || '#',
} as const;
