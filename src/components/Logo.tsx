import { Link } from 'react-router-dom'
import { site } from '../config/site'

/** Typographic wordmark. `tone` picks colours for light or dark backgrounds. */
export default function Logo({ tone = 'light', className = '' }: { tone?: 'light' | 'dark'; className?: string }) {
  const dark = tone === 'dark'
  return (
    <Link to="/" aria-label={`${site.name} – ${site.fullName}, home`} className={`group inline-flex flex-col leading-none ${className}`}>
      <span className={`text-[1.6rem] font-extrabold tracking-[0.04em] ${dark ? 'text-white' : 'text-navy'}`}>
        LAMBTH<span className="text-accent"> PR</span>
      </span>
      <span className={`mt-1 whitespace-nowrap text-[0.6rem] font-semibold uppercase tracking-[0.22em] ${dark ? 'text-white/70' : 'text-slate'}`}>
        Lambeth Property Repairs
      </span>
    </Link>
  )
}
