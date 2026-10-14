# TrustCircle website

Next.js (App Router, TypeScript) build of the TrustCircle home page, converted section by section from the approved design canvas (desktop and mobile, merged into one responsive page).

TrustCircle: Save Small. Build Trust. Access More. Enterprise development, savings groups and responsible financing, Tamale, Ghana.

## Run it

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

Node 20+ recommended.

## Environment variables

| Name | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Live URL. Used for canonical, Open Graph, sitemap and robots. |
| `NEXT_PUBLIC_GA_ID` | GA4 measurement ID (`G-XXXXXXXXXX`). Analytics load only when set. |
| `NEXT_PUBLIC_VIDEO_URL` | Teaser video link for the video section. |

## Structure

```
app/                 layout (fonts, SEO, JSON-LD), page, tc.css (design styles), extras.css, robots, sitemap, icon
components/
  HomeClient.tsx     composes the page
  useHomeState.ts    intro, mobile menu, four popups, FAQ accordion, scroll lock, anchor scrolling
  Analytics.tsx      GA4 plus click events (whatsapp_click, brief_download, email_click, call_click)
  sections/          one component per section (Intro, Nav, Home, Video, People, Problem, Solution,
                     How, Journey, Loans, Bizdev, Serve, Impact, Stories, Partners, Join, Footer,
                     and the Faq, Member, Loan and Contact popups)
lib/site.ts          contact details and site constants
public/assets/       logo, photos, animated layer images
public/TrustCircle_Partnership_Brief.pdf   file behind "Download Partnership Brief"
```

## Behaviour added beyond the canvas

- Low-power mode: devices with Save-Data, 2G, 2 GB memory or 2 cores or fewer skip the intro and heavy ambient motion.
- The intro plays once per browser session and has a Skip button.
- Lazy images and deferred rendering of off-screen sections for weak connections.
- Menu links re-measure after jumping, so they land exactly on long pages.
- Escape closes popups and the menu.

## Known placeholders (carried over from the canvas, fill before launch)

- Testimonials 2 and 3 are placeholder text.
- Video link is `#` until `NEXT_PUBLIC_VIDEO_URL` is set.
- Social links, Privacy and Terms point to `#`.
- Figures in the Impact and brief sections are 2027 targets, not results.
- No contact or call-back form yet. Visitors reach TrustCircle by WhatsApp (+233 55 858 9254), email (info@samakose.com) or phone.
- Images use plain `<img>`; move to `next/image` if you host on a platform that optimises them.

## Deploy

Works on Vercel as is (framework preset: Next.js). Set the three environment variables in the project settings.
