import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import PageHero from '../components/PageHero'
import QuoteCTA from '../components/QuoteCTA'
import ClientTypeCard from '../components/ClientTypeCard'
import Button from '../components/Button'
import { clientTypes } from '../config/clients'

export default function WhoWeHelp() {
  return (
    <>
      <SEOHead title="Who We Help" description="Property repairs, maintenance and refurbishment support for landlords, letting agents, property managers, property owners, businesses and private clients." />
      <PageHero
        eyebrow="Who We Help"
        title="Property Support for Different Needs"
        intro="LAMBTH PR works with the people who own, manage and occupy property. Find the description closest to you to see how building and maintenance support may help."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Who We Help' }]}
      />
      <section aria-label="Client groups" className="border-b border-line bg-mist">
        <nav aria-label="Jump to a client group" className="container-page py-4">
          <ul className="flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible">
            {clientTypes.map((c) => (
              <li key={c.id} className="shrink-0"><a href={`#${c.id}`} className="inline-block rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-semibold text-navy hover:border-navy">{c.title}</a></li>
            ))}
          </ul>
        </nav>
      </section>
      <div className="container-page">
        {clientTypes.map((c, i) => (
          <section key={c.id} id={c.id} aria-labelledby={`${c.id}-title`} className={`grid gap-8 py-14 lg:grid-cols-[1fr_1.2fr] lg:gap-14 ${i > 0 ? 'border-t border-line' : ''}`}>
            <div>
              <ClientTypeCard id={c.id} title={c.title}>{c.summary}</ClientTypeCard>
            </div>
            <div>
              <h2 id={`${c.id}-title`} className="text-2xl sm:text-3xl">How we can support {c.title.toLowerCase()}</h2>
              <p className="mt-3 leading-relaxed text-slate">{c.detail}</p>
              <h3 className="mt-6 text-sm font-bold uppercase tracking-widest text-navy">Relevant work may include</h3>
              <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {c.examples.map((e) => (
                  <li key={e} className="flex gap-2.5"><Check aria-hidden className="mt-1 size-4 shrink-0 text-accent-text" strokeWidth={3} />{e}</li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button to="/services" variant="outline" className="!min-h-11">Explore Our Services</Button>
                <Link to="/contact#enquiry-form" className="inline-flex min-h-11 items-center font-bold text-accent-text underline underline-offset-2 hover:text-navy">Contact LAMBTH PR</Link>
              </div>
            </div>
          </section>
        ))}
      </div>
      <QuoteCTA title="Tell Us About Your Property" primaryLabel="Request a Quote" />
    </>
  )
}
