# Untapped Soul — Next.js Website

A faith-centered self-awareness and personal development platform built with Next.js 14, Tailwind CSS, and TypeScript.

---

## 🗂️ Project Structure

```
untapped-soul/
├── app/
│   ├── layout.tsx           # Root layout (fonts, metadata, Navbar, Footer)
│   ├── globals.css          # Global styles, CSS vars, utility classes
│   ├── page.tsx             # Home page
│   ├── about/
│   │   └── page.tsx         # About page
│   ├── work-with-me/
│   │   └── page.tsx         # Services / Work With Me page
│   ├── insights/
│   │   └── page.tsx         # Blog / Insights page
│   └── contact/
│       └── page.tsx         # Contact page
├── components/
│   ├── Navbar.tsx           # Sticky navbar with mobile menu
│   ├── Footer.tsx           # Footer with links and email signup
│   ├── SectionWrapper.tsx   # Reusable section container
│   ├── CTAButton.tsx        # Reusable CTA button component
│   ├── InsightCard.tsx      # Blog post card
│   ├── ServiceCard.tsx      # Service offering card
│   └── ScrollReveal.tsx     # Scroll-triggered animation wrapper
├── public/                  # Static assets (logo, images)
├── styles/                  # Additional style files if needed
├── tailwind.config.ts       # Tailwind configuration + brand tokens
├── next.config.ts           # Next.js configuration
├── vercel.json              # Vercel deployment config
└── package.json
```

---

## 🎨 Brand Design Tokens

All brand colors are defined in `tailwind.config.ts`:

| Token              | Value     | Usage                      |
|--------------------|-----------|----------------------------|
| `teal-deep`        | `#22848E` | Primary CTAs, links        |
| `teal-mint`        | `#6ED1B4` | Accents, highlights        |
| `teal-lagoon`      | `#3AA8B4` | Hover states               |
| `teal-abyss`       | `#0D3A3F` | Dark backgrounds, text     |
| `teal-seafoam`     | `#9DE0D0` | Borders, soft accents      |
| `teal-mist`        | `#E8F7F5` | Light section backgrounds  |
| `cloud`            | `#F5F5F5` | Card/content backgrounds   |

Typography:
- **Display font**: Playfair Display (headings)
- **Body font**: DM Sans (body text, UI)

---

## 🚀 Getting Started — Run Locally

### 1. Prerequisites
- Node.js 18+ installed
- npm or yarn

### 2. Install dependencies
```bash
cd untapped-soul
npm install
```

### 3. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production (test locally)
```bash
npm run build
npm run start
```

---

## 📁 Add Your Logo

1. Place your logo file at: `public/logo.png` (or `.svg`)
2. In `components/Navbar.tsx`, replace the inline SVG logo mark with:

```tsx
import Image from "next/image";

// Replace the SVG div with:
<Image
  src="/logo.png"
  alt="Untapped Soul"
  width={36}
  height={36}
  className="w-9 h-9 object-contain"
/>
```

---

## 🔗 Connect Calendly (Contact Page)

In `app/contact/page.tsx`, find the `#calendly` section and replace the placeholder with:

```tsx
{/* Option 1: Direct link button */}
<a href="https://calendly.com/YOUR-USERNAME/YOUR-EVENT" target="_blank">
  Book a Session
</a>

{/* Option 2: Inline embed */}
<div
  className="calendly-inline-widget"
  data-url="https://calendly.com/YOUR-USERNAME"
  style={{ minWidth: '320px', height: '630px' }}
/>
<script
  type="text/javascript"
  src="https://assets.calendly.com/assets/external/widget.js"
  async
/>
```

---

## 📧 Connect Email Signup

The email signup forms are currently frontend-only. To make them functional:

**Option A: Mailchimp**
```bash
npm install @mailchimp/mailchimp_marketing
```
Create `/app/api/subscribe/route.ts` and connect your Mailchimp list.

**Option B: ConvertKit / Beehiiv / Resend**
Create a Next.js API route at `/app/api/subscribe/route.ts` and call the relevant API.

---

## 🌐 Push to GitHub

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "feat: initial Untapped Soul website"

# Create a repo on GitHub, then:
git remote add origin https://github.com/YOUR-USERNAME/untapped-soul.git
git branch -M main
git push -u origin main
```

---

## ▲ Deploy to Vercel

### Option 1: Vercel CLI
```bash
npm install -g vercel
vercel login
vercel
```

### Option 2: GitHub Integration (Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Your site is live at `your-project.vercel.app`

### Custom Domain
In Vercel Dashboard → Settings → Domains → Add your domain (e.g., `untappedsoul.com`)

---

## 🧩 Extending the Site

### Add a new page
1. Create `app/your-page/page.tsx`
2. Export a default React component
3. Add the route to `components/Navbar.tsx` in the `navLinks` array

### Add real blog posts
Replace the dummy data in `app/insights/page.tsx` with a CMS integration:
- **Contentful**, **Sanity**, or **Notion API** all work well with Next.js App Router

### Add animations
The `ScrollReveal` component wraps any element with a fade-up-on-scroll animation:
```tsx
<ScrollReveal delay={200}>
  <YourComponent />
</ScrollReveal>
```

---

## ⚡ Performance Notes

- Fonts loaded via `next/font/google` — zero layout shift
- Images should use `next/image` for automatic optimisation
- All pages are server components by default (only interactive components use `"use client"`)
- SEO metadata defined per-page via Next.js `Metadata` API

---

## 📬 Contact

Built for **Untapped Soul**. For questions or customisations, reach out to your developer.
