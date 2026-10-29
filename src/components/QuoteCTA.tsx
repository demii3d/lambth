import Button from './Button'

type Props = {
  title?: string
  text?: string
  /** Preselects this service in the contact form */
  service?: string
  primaryLabel?: string
  secondary?: { label: string; to: string }
}

export default function QuoteCTA({
  title = 'Need Help With a Property Repair or Improvement?',
  text = 'Tell us about your property requirements, and we can discuss the appropriate building, repair, or maintenance support.',
  service,
  primaryLabel = 'Request a Quote',
  secondary = { label: 'Contact Us', to: '/contact' },
}: Props) {
  const to = service ? `/contact?service=${encodeURIComponent(service)}#enquiry-form` : '/contact#enquiry-form'
  return (
    <section aria-labelledby="quote-cta-title" className="on-dark relative overflow-hidden bg-navy">
      <div aria-hidden className="absolute -right-24 -top-24 size-96 rounded-full border-[48px] border-white/[0.04]" />
      <div className="container-page section relative text-center">
        <h2 id="quote-cta-title" className="mx-auto max-w-3xl text-3xl !text-white sm:text-4xl">{title}</h2>
        <p className="lead mx-auto mt-4 max-w-2xl !text-white/80">{text}</p>
        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Button to={to}>{primaryLabel}</Button>
          <Button to={secondary.to} variant="outline-light">{secondary.label}</Button>
        </div>
      </div>
    </section>
  )
}
