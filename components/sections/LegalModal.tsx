import type { CSSProperties } from 'react';
import type { Vals } from '../useHomeState';
import { PRIVACY, TERMS, type LegalDoc } from '@/lib/legal';

const shell: CSSProperties = { position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 };
const veil: CSSProperties = { position: 'absolute', inset: 0, background: 'rgba(18,28,61,.62)' };
const card: CSSProperties = { position: 'relative', width: '100%', maxWidth: 760, maxHeight: '88vh', overflow: 'auto', background: '#fff', borderRadius: 28, padding: '36px 40px 28px', boxShadow: '0 30px 80px rgba(0,0,0,.35)' };
const closeBtn: CSSProperties = { all: 'unset', boxSizing: 'border-box', position: 'absolute', top: 18, right: 18, width: 44, height: 44, borderRadius: '50%', background: '#F5F7FB', color: '#192850', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' };
const h2: CSSProperties = { fontFamily: "'Bricolage Grotesque','DM Sans',sans-serif", fontWeight: 800, fontSize: 34, lineHeight: 1.1, color: '#192850', margin: '8px 0 6px', paddingRight: 52 };
const h3: CSSProperties = { fontFamily: "'Bricolage Grotesque','DM Sans',sans-serif", fontWeight: 600, fontSize: 18, color: '#192850', margin: '24px 0 6px' };

function Doc({ doc, eyebrow, v }: { doc: LegalDoc; eyebrow: string; v: Vals }) {
  return (
    <div style={shell}>
      <div onClick={v.closeModal} style={veil}></div>
      <div role="dialog" aria-modal="true" aria-label={doc.title} className="tc-a" style={card}>
        <button type="button" onClick={v.closeModal} aria-label="Close" style={closeBtn}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"></path></svg>
        </button>
        <div className="tc-eyebrow" style={{ color: '#0B6E9E', fontSize: 12 }}>{eyebrow}</div>
        <h2 style={h2}>{doc.title}</h2>
        <p className="tc-body" style={{ color: '#4A5876', fontSize: 14, marginBottom: 14 }}>Last updated: {doc.updated}</p>
        {doc.intro.map((t, i) => (
          <p key={i} className="tc-body" style={{ color: '#4A5876', margin: '0 0 10px' }}>{t}</p>
        ))}
        {doc.sections.map((s) => (
          <section key={s.h}>
            <h3 style={h3}>{s.h}</h3>
            {s.p?.map((t, i) => (
              <p key={i} className="tc-body" style={{ color: '#4A5876', margin: '0 0 8px' }}>{t}</p>
            ))}
            {s.ul && (
              <ul style={{ listStyle: 'disc', paddingLeft: 22, margin: '6px 0', color: '#4A5876', lineHeight: 1.7 }}>
                {s.ul.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}

export default function LegalModal({ v }: { v: Vals }) {
  return (
    <>
      {v.privacyOpen && <Doc doc={PRIVACY} eyebrow="Your information" v={v} />}
      {v.termsOpen && <Doc doc={TERMS} eyebrow="Using this website" v={v} />}
    </>
  );
}
