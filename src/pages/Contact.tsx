import SEOHead from '../components/SEOHead'
import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'
import { site } from '../config/site'

export default function Contact() {
  const { phone, email, address, hours } = site.contact
  return (
    <>
      <SEOHead title="Contact Us & Request a Quote" description="Tell LAMBTH PR about your property repair, maintenance or refurbishment requirement and request a quote." />
      <PageHero
        eyebrow="Contact"
        title="Request a Quote"
        intro="Tell us about your property and the work you need, and we can discuss the appropriate building, repair or maintenance support."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
      />
      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[1.7fr_1fr]">
          <div id="enquiry-form" className="scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl">Tell Us About Your Property</h2>
            <p className="mb-8 mt-2 text-slate">Fields marked <span className="text-red-700">*</span> are required.</p>
            <ContactForm />
          </div>
          <aside aria-label="Contact details" className="h-fit rounded-xl border border-line bg-mist p-6">
            <h2 className="text-xl">Contact details</h2>
            <dl className="mt-4 space-y-4 text-sm">
              <div><dt className="font-bold text-navy">Location</dt><dd className="mt-0.5 text-charcoal">{site.location}</dd></div>
              {phone && <div><dt className="font-bold text-navy">Telephone</dt><dd className="mt-0.5"><a className="text-accent-text underline" href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a></dd></div>}
              {email && <div><dt className="font-bold text-navy">Email</dt><dd className="mt-0.5"><a className="text-accent-text underline" href={`mailto:${email}`}>{email}</a></dd></div>}
              {address && <div><dt className="font-bold text-navy">Address</dt><dd className="mt-0.5">{address}</dd></div>}
              {hours && <div><dt className="font-bold text-navy">Hours</dt><dd className="mt-0.5">{hours}</dd></div>}
            </dl>
            <p className="mt-5 text-sm leading-relaxed text-slate">The enquiry form is the best way to reach us. Please include as much detail as you can about the work.</p>
          </aside>
        </div>
      </section>
    </>
  )
}
