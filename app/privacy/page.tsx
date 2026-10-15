import type { Metadata } from 'next';
import LegalPage from '@/components/legal/LegalPage';
import { PRIVACY } from '@/lib/legal';

export const metadata: Metadata = {
  title: 'Privacy Policy | TrustCircle',
  description: 'How TrustCircle, a Samakose initiative, collects, uses and protects personal information.',
  alternates: { canonical: '/privacy' },
};

export default function Page() {
  return <LegalPage doc={PRIVACY} other={{ href: '/terms', label: 'Terms of Use' }} />;
}
