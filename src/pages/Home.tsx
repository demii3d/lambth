import { Check } from 'lucide-react'
import { Briefcase, ClipboardCheck, Handshake, MessageSquareText, ShieldCheck, Wrench, type LucideProps } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import HeroSection from '../components/HeroSection'
import SectionHeading from '../components/SectionHeading'
import ServiceGrid from '../components/ServiceGrid'
import ClientTypeCard from '../components/ClientTypeCard'
import ProcessStep from '../components/ProcessStep'
import QuoteCTA from '../components/QuoteCTA'
import Button from '../components/Button'
import { images } from '../config/images'
import { homeClientCards } from '../config/clients'
import { site } from '../config/site'

const principles: { title: string; text: string; icon: React.ComponentType<LucideProps> }[] = [
  { title: 'Quality Workmanship', text: 'A focus on completing work carefully and paying attention to relevant details.', icon: Wrench },
  { title: 'Clear Communication', text: 'Keeping clients informed about requirements, arrangements, and project progress as appropriate.', icon: MessageSquareText },
  { title: 'Reliable Service', text: 'Taking a practical, organised approach to agreed maintenance and building work.', icon: ClipboardCheck },
  { title: 'Flexible Support', text: 'Supporting individual repair requests, refurbishment projects, and ongoing property maintenance requirements.', icon: ShieldCheck },
  { title: 'Professional Coordination', text: 'Coordinating work directly or through appropriately engaged subcontractors when required by a project.', icon: Briefcase },
  { title: 'Long-Term Relationships', text: 'Building constructive working relationships with landlords, letting agents, property managers, businesses, and private clients.', icon: Handshake },
]

const steps = [
  { n: '01', t: 'Tell Us What You Need', d: 'The client describes the repair, maintenance issue, or proposed refurbishment.' },
  { n: '02', t: 'Discuss the Requirements', d: 'LAMBTH PR reviews the information and clarifies the scope of work.' },
  { n: '03', t: 'Agree the Work', d: 'The project requirements, arrangements, and applicable costs can be discussed and agreed before work begins.' },
  { n: '04', t: 'Complete the Agreed Work', d: 'The work is undertaken according to the agreed scope and arrangements.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  alternateName: site.fullName,
  url: site.url,
  description: site.description,
}

export default function Home() {
  const img = images.interior
  return (
    <>
      <SEOHead
        title="LAMBTH PR | Lambeth Property Repairs – Building & Property Maintenance"
        description="LAMBTH PR provides property repairs, refurbishment and ongoing maintenance for landlords, property managers, businesses and private clients in Lambeth, South London."
        jsonLd={jsonLd}
      />
      <HeroSection />

      <section aria-labelledby="intro-title" className="section">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading id="intro-title" eyebrow="About LAMBTH PR" title="Practical Property Solutions You Can Rely On.">
              LAMBTH PR provides construction, repairs, refurbishment, and property maintenance services designed around the practical needs of property owners and managers.
            </SectionHeading>
            <ul className="mt-6 space-y-3">
              {['Individual repair jobs', 'Planned improvement works', 'Ongoing maintenance requirements'].map((t) => (
                <li key={t} className="flex items-center gap-3 font-semibold text-navy">
                  <span className="grid size-6 place-items-center rounded-full bg-accent text-navy-900"><Check aria-hidden className="size-4" strokeWidth={3} /></span>
                  {t}
                </li>
              ))}
            </ul>
            <Button to="/about" variant="secondary" className="mt-8">About LAMBTH PR</Button>
          </div>
          <img src={img.src} alt={img.alt} width={1200} height={800} loading="lazy" decoding="async" className="aspect-[4/3] w-full rounded-xl object-cover shadow-lift" />
        </div>
      </section>

      <section aria-labelledby="services-title" className="section bg-mist">
        <div className="container-page">
          <SectionHeading id="services-title" eyebrow="What We Do" title="Building and Maintenance Services.">
            From essential repairs to property improvements, we help clients address maintenance requirements and keep their properties in good condition.
          </SectionHeading>
          <div className="mt-12"><ServiceGrid /></div>
          <div className="mt-12 text-center"><Button to="/services" variant="secondary">View All Services</Button></div>
        </div>
      </section>

      <section aria-labelledby="why-title" className="section">
        <div className="container-page">
          <SectionHeading id="why-title" eyebrow="Why Choose LAMBTH PR" title="A Straightforward Approach to Property Maintenance." />
          <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map(({ title, text, icon: Icon }) => (
              <li key={title} className="flex gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-lg bg-navy text-white"><Icon aria-hidden strokeWidth={1.75} className="size-6" /></span>
                <div>
                  <h3 className="text-lg">{title}</h3>
                  <p className="mt-1.5 leading-relaxed text-slate">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="who-title" className="section bg-mist">
        <div className="container-page">
          <SectionHeading id="who-title" eyebrow="Who We Help" title="Property Support for Different Needs.">
            LAMBTH PR works with the people who own, manage and occupy property.
          </SectionHeading>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeClientCards.map((c) => (
              <li key={c.id}><ClientTypeCard id={c.id} title={c.title}>{c.summary}</ClientTypeCard></li>
            ))}
          </ul>
          <div className="mt-12 text-center"><Button to="/who-we-help" variant="secondary">See Who We Help</Button></div>
        </div>
      </section>

      <section aria-labelledby="process-title" className="on-dark section bg-navy">
        <div className="container-page">
          <SectionHeading id="process-title" dark eyebrow="How It Works" title="From Enquiry to Completed Work.">
            A general outline of how an enquiry progresses. Timings and arrangements depend on each project.
          </SectionHeading>
          <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => <ProcessStep key={s.n} number={s.n} title={s.t}>{s.d}</ProcessStep>)}
          </ol>
        </div>
      </section>

      <QuoteCTA />
    </>
  )
}
