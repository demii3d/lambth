import { images } from '../config/images'
import { site } from '../config/site'
import Button from './Button'

export default function HeroSection() {
  const img = images.hero
  return (
    <section aria-labelledby="hero-title" className="on-dark relative isolate overflow-hidden bg-navy">
      <img src={img.src} alt={img.alt} width={1920} height={1280} fetchPriority="high" className="absolute inset-0 -z-20 size-full object-cover object-[65%_center]" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-900 via-navy/90 to-navy/55 sm:to-navy/40" />
      <div className="container-page flex min-h-[34rem] flex-col justify-center py-20 sm:min-h-[38rem] lg:min-h-[42rem]">
        <div className="max-w-2xl">
          <p className="eyebrow rise">Construction &amp; Property Maintenance</p>
          <h1 id="hero-title" className="rise rise-2 mt-4 text-4xl !text-white sm:text-5xl lg:text-6xl lg:leading-[1.05]">
            Reliable Property Repairs. Professional Building Solutions.
          </h1>
          <p className="rise rise-3 mt-6 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
            From everyday property repairs to refurbishment projects and ongoing maintenance, LAMBTH PR provides practical building services for landlords, property managers, businesses, and private clients.
          </p>
          <div className="rise rise-3 mt-9 flex flex-col gap-3 sm:flex-row">
            <Button to="/contact#enquiry-form">Request a Quote</Button>
            <Button to="/services" variant="outline-light">Explore Our Services</Button>
          </div>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-white/70">{site.location}</p>
        </div>
      </div>
    </section>
  )
}
