/**
 * Central business configuration.
 * Anything set to `null` / empty has NOT been supplied by the business and is
 * deliberately hidden from the public interface. Fill in verified details here.
 */
export const site = {
  name: 'LAMBTH PR',
  fullName: 'Lambeth Property Repairs',
  location: 'Lambeth, South London',
  description:
    'Construction and property maintenance for landlords, property managers, businesses and private clients, rooted in Lambeth, South London.',
  url: (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '') || 'https://www.example.com',

  /** Verified contact details. Leave null until confirmed by the business. */
  contact: {
    phone: null as string | null,
    email: null as string | null,
    address: null as string | null,
    hours: null as string | null,
  },

  /** Official social profiles, e.g. { label: 'LinkedIn', href: 'https://…' }. Empty until supplied. */
  social: [] as { label: string; href: string }[],

  /** Enquiry endpoint (see README). When empty the form stays in its development state. */
  formEndpoint: (import.meta.env.VITE_FORM_ENDPOINT as string | undefined) || '',

  /** Social share image path (relative to /public). Add a branded 1200x630 image before launch. */
  ogImage: '/images/hero.jpg',
}
