import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import PageHero from '../components/PageHero'
import { Ph } from './PrivacyPolicy'

export default function CookiePolicy() {
  return (
    <>
      <SEOHead title="Cookie Policy" description="How cookies and similar technologies are used on the LAMBTH PR website." noindex />
      <PageHero title="Cookie Policy" crumbs={[{ label: 'Home', to: '/' }, { label: 'Cookie Policy' }]} />
      <div className="container-page section">
        <div className="prose-page max-w-3xl">
          <p className="rounded-lg border border-amber-600/40 bg-amber-50 p-4 text-sm text-amber-950"><strong>Draft for review.</strong> Update this page, and add a consent mechanism, if analytics, advertising or other tracking is added before launch.</p>
          <h2>Current use of cookies</h2>
          <p>At the time of writing, this website does not set analytics, advertising or other non-essential cookies, and does not use tracking technologies. Because of this, no cookie consent banner is shown.</p>
          <p>The website is served with web fonts from Google Fonts, which may involve your browser making a request to Google’s servers. <Ph>confirm whether fonts will be self-hosted before launch</Ph></p>
          <h2>If this changes</h2>
          <p>If analytics or other non-essential technologies are added, we will update this policy and ask for your consent before they are used.</p>
          <h2>Managing cookies</h2>
          <p>You can control or delete cookies through your browser settings.</p>
          <h2>Contact</h2>
          <p>For questions, see the contact details in our <Link to="/privacy-policy">Privacy Policy</Link>. <Ph>contact details</Ph></p>
        </div>
      </div>
    </>
  )
}
