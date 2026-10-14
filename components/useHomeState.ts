'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { SITE } from '@/lib/site';

type Handler = (e?: { preventDefault?: () => void }) => void;

type Idx = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type Vals = {
  videoUrl: string;
  rootCls: string;
  introOn: boolean;
  skipIntro: Handler;
  menuOpen: boolean;
  toggleMenu: Handler;
  faqOpen: boolean;
  memberOpen: boolean;
  loanOpen: boolean;
  contactOpen: boolean;
  openFaq: Handler;
  openMember: Handler;
  openLoan: Handler;
  openContact: Handler;
  closeModal: Handler;
} & { [K in `open${Idx}` | `close${Idx}`]: boolean } & { [K in `tog${Idx}`]: Handler };

const FAQ_COUNT = 7;

/** Same behaviour as the design canvas: intro, mobile menu, four popups, FAQ accordion. */
export function useHomeState(): Vals {
  const [introDone, setIntroDone] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modal, setModal] = useState('');
  const [faq, setFaq] = useState(-1);
  const [lite, setLite] = useState(false);

  // Slow or low-power devices skip the intro and heavy ambient motion.
  useEffect(() => {
    const nav = navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string }; deviceMemory?: number };
    const cn = nav.connection || {};
    const isLite = !!(
      cn.saveData ||
      /(^|-)2g$/.test(cn.effectiveType || '') ||
      (nav.deviceMemory && nav.deviceMemory <= 2) ||
      (nav.hardwareConcurrency && nav.hardwareConcurrency <= 2)
    );
    setLite(isLite);
    let seen = false;
    try {
      seen = sessionStorage.getItem('tc-intro-seen') === '1';
      sessionStorage.setItem('tc-intro-seen', '1');
    } catch {
      /* storage can be blocked */
    }
    if (seen) setIntroDone(true);
  }, []);

  // Escape closes popups and the menu; page scroll is locked while a popup is open.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setModal('');
      setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);
  useEffect(() => {
    document.body.style.overflow = modal ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [modal]);

  // Choosing a menu link closes the mobile menu.
  useEffect(() => {
    if (!menuOpen) return;
    const onClick = (e: MouseEvent) => {
      if ((e.target as Element | null)?.closest?.('.tc-mm a')) setMenuOpen(false);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [menuOpen]);

  // Long page with deferred section rendering: re-measure after jumping so anchors land exactly.
  useEffect(() => {
    const onAnchor = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      const id = a?.getAttribute('href')?.slice(1);
      if (!a || !id) return;
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      history.replaceState(null, '', '#' + id);
      let n = 0;
      const go = () => {
        const y = el.getBoundingClientRect().top + window.scrollY - 84;
        window.scrollTo({ top: y, behavior: n === 0 ? 'smooth' : 'auto' });
        if (++n < 14 && (n < 3 || Math.abs(el.getBoundingClientRect().top - 84) > 2)) setTimeout(go, n === 1 ? 900 : 300);
      };
      go();
    };
    document.addEventListener('click', onAnchor);
    return () => document.removeEventListener('click', onAnchor);
  }, []);

  const open = useCallback(
    (name: string): Handler =>
      (e) => {
        e?.preventDefault?.();
        setModal(name);
        setFaq(-1);
      },
    [],
  );

  return useMemo(() => {
    const v: Record<string, boolean | string | Handler> = {
      videoUrl: SITE.videoUrl,
      rootCls: introDone || lite ? 'tc-root' + (lite ? ' tc-lite' : '') : 'tc-root tc-on',
      introOn: !introDone && !lite,
      skipIntro: () => setIntroDone(true),
      menuOpen,
      toggleMenu: () => setMenuOpen((m) => !m),
      faqOpen: modal === 'faq',
      memberOpen: modal === 'member',
      loanOpen: modal === 'loan',
      contactOpen: modal === 'contact',
      openFaq: open('faq'),
      openMember: open('member'),
      openLoan: open('loan'),
      openContact: open('contact'),
      closeModal: () => setModal(''),
    };
    for (let i = 0; i < FAQ_COUNT; i++) {
      v['open' + i] = faq === i;
      v['close' + i] = faq !== i;
      v['tog' + i] = () => setFaq((f) => (f === i ? -1 : i));
    }
    return v as Vals;
  }, [introDone, lite, menuOpen, modal, faq, open]);
}
