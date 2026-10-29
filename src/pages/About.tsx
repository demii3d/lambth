import SEOHead from '../components/SEOHead'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import QuoteCTA from '../components/QuoteCTA'
import { images } from '../config/images'
import { services, serviceHref } from '../config/services'
import { Link } from 'react-router-dom'

export default function About() {
  const img = images['general-building']
  return (
    <>
      <SEOHead title="About Us" description="LAMBTH PR stands for Lambeth Property Repairs: a construction and property maintenance business rooted in Lambeth, South London." />
      <PageHero
        eyebrow="About Us"
        title="Practical Building Expertise. Dependable Property Support."
        intro="LAMBTH PR stands for Lambeth Property Repairs. Rooted in Lambeth, South London, the company focuses on providing practical building, repair, refurbishment, and property maintenance services for property owners, landlords, businesses, and property professionals."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About Us' }]}
      />

      <section aria-labelledby="who-we-are" className="section">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="prose-page">
            <SectionHeading id="who-we-are" eyebrow="Who We Are" title="A Local Name With a Practical Focus." />
            <p className="mt-5">LAMBTH PR was established to provide reliable, professional and practical building solutions for residential landlords, property managers, businesses and private clients.</p>
            <p>The name is a direct reference to our roots: <strong>Lam</strong>bth <strong>P</strong>roperty <strong>R</strong>epairs. Lambeth, South London is where the business is based and the context in which we work.</p>
            <p>We undertake individual maintenance jobs, refurbishment projects and ongoing property maintenance requirements, and we aim to build lasting working relationships with the people who rely on us.</p>
          </div>
          <img src={img.src} alt={img.alt} width={1200} height={800} loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover shadow-lift" />
        </div>
      </section>

      <section aria-labelledby="what-we-do" className="section bg-mist">
        <div className="container-page">
          <SectionHeading id="what-we-do" eyebrow="What We Do" title="Construction and Property Maintenance Services.">
            General building work, property maintenance, internal repairs, painting and decorating, flooring, kitchen and bathroom improvements, minor plumbing repairs and related construction services.
          </SectionHeading>
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={serviceHref(s)} className="inline-block rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="commitments" className="section">
        <div className="container-page">
          <SectionHeading id="commitments" eyebrow="How We Work" title="Workmanship, Communication and Reliable Delivery." />
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              ['Quality workmanship', 'We aim to complete work carefully, with attention to the details that matter to the property and its users.'],
              ['Clear communication', 'We aim to keep clients informed about requirements, arrangements and progress, as appropriate to the job.'],
              ['Reliable delivery', 'We take a practical, organised approach to agreed work, so you know what has been agreed and what to expect.'],
            ].map(([t, d]) => (
              <div key={t} className="border-t-4 border-accent pt-5">
                <h3 className="text-xl">{t}</h3>
                <p className="mt-2 leading-relaxed text-slate">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="delivery" className="on-dark section bg-navy">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading id="delivery" dark eyebrow="Delivery" title="Direct Work and Subcontractors." />
            <p className="lead mt-4 !text-white/80">Depending on the nature of a project, work may be completed directly by LAMBTH PR or through appropriately engaged subcontractors. We coordinate the work so that you have a clear point of contact.</p>
          </div>
          <div>
            <SectionHeading dark eyebrow="Relationships" title="Built for the Long Term." />
            <p className="lead mt-4 !text-white/80">We want to build constructive relationships with landlords, letting agents, property managers, businesses and private clients, from a single repair to continuing maintenance.</p>
          </div>
        </div>
      </section>

      <QuoteCTA
        title="Have a Property Requirement to Discuss?"
        text="Tell us about the property and the work you have in mind, and we can discuss how LAMBTH PR may be able to help."
        primaryLabel="Discuss Your Requirements"
      />
    </>
  )
}
