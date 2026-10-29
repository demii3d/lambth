import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import PageHero from '../components/PageHero'

/** Marks content that must be supplied/confirmed by the business before launch. */
export const Ph = ({ children }: { children: ReactNode }) => (
  <mark className="rounded bg-amber-200 px-1 font-semibold text-amber-950">[Placeholder – review before launch: {children}]</mark>
)

export default function PrivacyPolicy() {
  return (
    <>
      <SEOHead title="Privacy Policy" description="How LAMBTH PR handles personal information submitted through this website." noindex />
      <PageHero title="Privacy Policy" crumbs={[{ label: 'Home', to: '/' }, { label: 'Privacy Policy' }]} />
      <div className="container-page section">
        <div className="prose-page max-w-3xl">
          <p className="rounded-lg border border-amber-600/40 bg-amber-50 p-4 text-sm text-amber-950">
            <strong>Draft for review.</strong> This policy contains highlighted placeholders for legal and data-handling details that have not yet been supplied. It must be reviewed, completed and approved before the website launches.
          </p>
          <h2>1. Who we are</h2>
          <p>This website is operated by LAMBTH PR (Lambeth Property Repairs). Legal entity name: <Ph>registered legal entity</Ph>. Registered office / contact address: <Ph>address</Ph>. Data controller contact: <Ph>email or postal contact</Ph>.</p>
          <h2>2. Information we collect</h2>
          <p>When you complete the enquiry form we ask for your name, email address and a description of the work required. You may also choose to provide a telephone number, client type, property address or postcode and your preferred contact method.</p>
          <h2>3. How we use your information</h2>
          <p>We use the information you submit to respond to your enquiry, discuss your requirements and, where relevant, provide a quote. <Ph>confirm any other purposes</Ph></p>
          <h2>4. Lawful basis</h2>
          <p><Ph>lawful basis, e.g. legitimate interests / steps prior to entering a contract – to be confirmed with legal advice</Ph></p>
          <h2>5. Who we share information with</h2>
          <p>Enquiries are handled through <Ph>enquiry form provider / email service and any other processors</Ph>. We may also share relevant details with subcontractors where needed to scope or carry out agreed work: <Ph>confirm</Ph>.</p>
          <h2>6. How long we keep information</h2>
          <p><Ph>retention period</Ph></p>
          <h2>7. Your rights</h2>
          <p>Under UK data protection law you may have the right to access, correct or erase your personal data, restrict or object to its use, and to complain to the Information Commissioner’s Office (<a href="https://ico.org.uk" rel="noopener noreferrer" target="_blank">ico.org.uk</a>). <Ph>how to exercise rights</Ph></p>
          <h2>8. Cookies</h2>
          <p>See our <Link to="/cookie-policy">Cookie Policy</Link>.</p>
          <h2>9. Changes to this policy</h2>
          <p>We may update this policy from time to time. <Ph>last updated date</Ph></p>
        </div>
      </div>
    </>
  )
}
