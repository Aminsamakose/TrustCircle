import type { LegalDoc } from '@/lib/legal';

export default function LegalPage({ doc, other }: { doc: LegalDoc; other: { href: string; label: string } }) {
  return (
    <main className="legal">
      <div className="legal-wrap">
        <a className="legal-back" href="/">← Back to TrustCircle</a>
        <h1>{doc.title}</h1>
        <p className="legal-date">Last updated: {doc.updated}</p>
        {doc.intro.map((t, i) => (
          <p key={i}>{t}</p>
        ))}
        {doc.sections.map((s) => (
          <section key={s.h}>
            <h2>{s.h}</h2>
            {s.p?.map((t, i) => (
              <p key={i}>{t}</p>
            ))}
            {s.ul && (
              <ul>
                {s.ul.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
        <p className="legal-foot">
          <a href={other.href}>{other.label}</a> · <a href="/">Home</a>
        </p>
      </div>
    </main>
  );
}
