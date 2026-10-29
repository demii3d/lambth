export const mainNav = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' }, // dropdown, populated from services config
  { label: 'Who We Help', to: '/who-we-help' },
  { label: 'Contact', to: '/contact' },
] as const

export const legalNav = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Cookie Policy', to: '/cookie-policy' },
] as const
