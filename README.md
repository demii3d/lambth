# LAMBTH PR – Lambeth Property Repairs

React + TypeScript + Vite + Tailwind CSS v4 + React Router + Lucide.

```bash
npm install
npm run dev       # local development
npm run build     # type-check + production build (also emits sitemap.xml and robots.txt)
npm run preview   # serve the production build
```

## Configuration
- `src/config/site.ts` – business details. Contact fields are `null` until verified; nothing is shown publicly until filled in.
- `src/config/services.ts`, `clients.ts`, `navigation.ts`, `images.ts` – all content and image data.
- `.env` – `VITE_SITE_URL` (canonical URLs, sitemap) and `VITE_FORM_ENDPOINT` (enquiry form).

## Enquiry form integration
The form POSTs JSON (`name, email, phone, clientType, service, location, contactMethod, message, source`) to `VITE_FORM_ENDPOINT` (Formspree, Basin, or your own API). Without an endpoint it validates, then shows a clear "not sent" development notice. File attachments are intentionally omitted until the chosen service supports uploads.

## Before launch
- Supply verified contact details, social links and legal details; complete the highlighted placeholders in the Privacy and Cookie pages.
- Replace stock photography with genuine project photos where available (`public/images`, `src/config/images.ts`); add a branded 1200×630 share image.
- Set the real `VITE_SITE_URL`. Consider pre-rendering/SSR for search indexing, and self-hosting the Inter font.
