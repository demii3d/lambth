import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import ServiceGrid from '../components/ServiceGrid'
import QuoteCTA from '../components/QuoteCTA'
import { services, serviceHref } from '../config/services'

const kinds = [
  { t: 'Individual repair jobs', d: 'A specific fault or task, such as a damaged door, a worn floor section or a leaking tap. Describe the job and discuss what is needed.' },
  { t: 'Refurbishment projects', d: 'Planned works that bring several kinds of work together, such as decoration, flooring and a kitchen or bathroom update, coordinated as one project.' },
  { t: 'Ongoing maintenance', d: 'A continuing arrangement for properties that need regular attention, agreed to suit how you manage your property.' },
]

export default function Services() {
  return (
    <>
      <SEOHead title="Building & Property Maintenance Services" description="General building work, property maintenance, internal repairs, painting and decorating, flooring, kitchens, bathrooms, minor plumbing and refurbishment from LAMBTH PR in Lambeth, South London." />
      <PageHero
        eyebrow="Our Services"
        title="Building and Maintenance Services"
        intro="From essential repairs to property improvements, LAMBTH PR helps clients address maintenance requirements and keep their properties in good condition. Choose the service closest to what you need."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
      />
      <section aria-label="Service navigation" className="border-b border-line bg-mist">
        <nav aria-label="Jump to a service" className="container-page py-4">
          <ul className="flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible">
            {services.map((s) => (
              <li key={s.slug} className="shrink-0">
                <Link to={serviceHref(s)} className="inline-block rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-semibold text-navy hover:border-navy">{s.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
      <section aria-labelledby="all-services" className="section">
        <div className="container-page">
          <h2 id="all-services" className="sr-only">All services</h2>
          <ServiceGrid />
        </div>
      </section>
      <section aria-labelledby="kinds" className="section bg-mist">
        <div className="container-page">
          <SectionHeading id="kinds" eyebrow="Which Applies to You?" title="Repairs, Refurbishment and Ongoing Maintenance.">
            Many enquiries fall into one of three broad categories. If you are unsure, describe your situation and we can help you work out the right approach.
          </SectionHeading>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {kinds.map((k, i) => (
              <div key={k.t} className="rounded-xl border border-line bg-white p-6 shadow-card">
                <span aria-hidden className="text-4xl font-extrabold text-accent">0{i + 1}</span>
                <h3 className="mt-2 text-xl">{k.t}</h3>
                <p className="mt-2 leading-relaxed text-slate">{k.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <QuoteCTA title="Not Sure Which Service You Need?" text="Describe the work in your own words and we can discuss the right approach." />
    </>
  )
}
