import { Link } from 'react-router-dom'
import { site } from '../config/site'
import { mainNav, legalNav } from '../config/navigation'
import { services, serviceHref } from '../config/services'
import Logo from './Logo'

export default function Footer() {
  const { phone, email, address, hours } = site.contact
  const hasContact = phone || email || address || hours
  const linkCls = 'on-dark text-white/75 underline-offset-2 hover:text-white hover:underline'
  return (
    <footer className="on-dark bg-navy-900 text-white">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.3fr_1.2fr]">
        <div>
          <Logo tone="dark" />
          <p className="mt-1 text-sm text-white/60">{site.fullName}</p>
          <p className="mt-4 max-w-xs leading-relaxed text-white/75">{site.description}</p>
        </div>
        <nav aria-label="Footer main">
          <h2 className="text-sm font-bold uppercase tracking-widest !text-white">Company</h2>
          <ul className="mt-4 space-y-2.5">
            {mainNav.filter((n) => n.label !== 'Services').map((n) => (
              <li key={n.to}><Link className={linkCls} to={n.to}>{n.label}</Link></li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Footer services">
          <h2 className="text-sm font-bold uppercase tracking-widest !text-white">Services</h2>
          <ul className="mt-4 space-y-2.5">
            {services.map((s) => (
              <li key={s.slug}><Link className={linkCls} to={serviceHref(s)}>{s.title}</Link></li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest !text-white">Contact</h2>
          <ul className="mt-4 space-y-2.5 text-white/75">
            <li>{site.location}</li>
            {phone && <li><a className={linkCls} href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a></li>}
            {email && <li><a className={linkCls} href={`mailto:${email}`}>{email}</a></li>}
            {address && <li>{address}</li>}
            {hours && <li>{hours}</li>}
            {!hasContact && <li><Link className={linkCls} to="/contact#enquiry-form">Send an enquiry online</Link></li>}
          </ul>
          {site.social.length > 0 && (
            <ul className="mt-4 flex gap-4">
              {site.social.map((s) => (
                <li key={s.href}><a className={linkCls} href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a></li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.name} – {site.fullName}. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-1">
            {legalNav.map((n) => (
              <li key={n.to}><Link className={linkCls} to={n.to}>{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <p className="container-page pb-6 text-xs text-white/50">Photography on this website is illustrative stock imagery and does not show completed LAMBTH PR projects.</p>
      </div>
    </footer>
  )
}
