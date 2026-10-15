import type { Metadata } from 'next';
import LegalPage from '@/components/legal/LegalPage';
import { TERMS } from '@/lib/legal';

export const metadata: Metadata = {
  title: 'Terms of Use | TrustCircle',
  description: 'Terms for using the TrustCircle website, a Samakose initiative in Tamale, Ghana.',
  alternates: { canonical: '/terms' },
};

export default function Page() {
  return <LegalPage doc={TERMS} other={{ href: '/privacy', label: 'Privacy Policy' }} />;
}
