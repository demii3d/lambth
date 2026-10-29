import { Link, useParams } from 'react-router-dom'
import { Check, Info } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import QuoteCTA from '../components/QuoteCTA'
import Button from '../components/Button'
import NotFound from './NotFound'
import { getService } from '../config/services'
import { images } from '../config/images'

export default function ServicePage() {
  const { slug = '' } = useParams()
  const service = getService(slug)
  if (!service) return <NotFound />
  const img = images[service.image]
  const related = service.related.map(getService).filter((s) => !!s)

  return (
    <>
      <SEOHead title={service.title} description={`${service.summary} ${service.title} from LAMBTH PR, Lambeth Property Repairs, in Lambeth, South London.`} />
      <PageHero
        eyebrow="Our Services"
        title={service.title}
        intro={service.intro}
        image={img}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Services', to: '/services' }, { label: service.title }]}
      >
        <Button to={`/contact?service=${service.slug}#enquiry-form`}>Request a Quote</Button>
        <Button to="/services" variant="outline-light">All Services</Button>
      </PageHero>

      <section aria-labelledby="typical-work" className="section">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading id="typical-work" eyebrow="Typical Work" title="What This Service May Include" />
            <p className="mt-4 text-slate">Examples of the kinds of work that may fall within this service. Not every requirement is listed; describe yours and we can discuss it.</p>
          </div>
          <ul className="space-y-3.5">
            {service.typicalWork.map((w) => (
              <li key={w} className="flex gap-3">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent text-navy-900"><Check aria-hidden className="size-4" strokeWidth={3} /></span>
                <span className="leading-relaxed">{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="support" className="section bg-mist">
        <div className="container-page">
          <SectionHeading id="support" eyebrow="How We Can Help" title="Support for Property Owners and Managers" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {service.support.map((s) => (
              <div key={s.title} className="rounded-xl border border-line bg-white p-6 shadow-card">
                <h3 className="text-xl">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-slate">{s.text}</p>
              </div>
            ))}
          </div>
          {service.note && (
            <p className="mt-8 flex gap-3 rounded-xl border border-line bg-white p-5 text-sm leading-relaxed text-charcoal">
              <Info aria-hidden className="mt-0.5 size-5 shrink-0 text-navy" />
              <span><strong>Please note: </strong>{service.note}</span>
            </p>
          )}
        </div>
      </section>

      <section aria-labelledby="related" className="section">
        <div className="container-page">
          <SectionHeading id="related" eyebrow="Related Services" title="You May Also Be Interested In" />
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {related.map((s) => <li key={s.slug} className="flex"><div className="flex w-full"><ServiceCard service={s} /></div></li>)}
          </ul>
          <p className="mt-8"><Link to="/services" className="font-bold text-accent-text underline underline-offset-2 hover:text-navy">View all services</Link></p>
        </div>
      </section>

      <QuoteCTA
        service={service.slug}
        title={`Enquire About ${service.title}`}
        text="Tell us about your property and what you need, and we can discuss the work and how it might be arranged."
        secondary={{ label: 'Contact LAMBTH PR', to: '/contact' }}
      />
    </>
  )
}
