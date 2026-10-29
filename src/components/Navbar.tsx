import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Menu } from 'lucide-react'
import { mainNav } from '../config/navigation'
import { services, serviceHref } from '../config/services'
import Logo from './Logo'
import Button from './Button'
import MobileNavigation from './MobileNavigation'

const linkCls = ({ isActive }: { isActive: boolean }) =>
  `relative rounded-md px-3 py-2 text-[0.95rem] font-semibold transition-colors hover:text-accent-text ${
    isActive ? 'text-navy after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:bg-accent' : 'text-charcoal'
  }`

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)
  const dropRef = useRef<HTMLLIElement>(null)
  const { pathname } = useLocation()
  const servicesActive = pathname.startsWith('/services')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setDropOpen(false)
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!dropOpen) return
    const onDown = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setDropOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [dropOpen])

  return (
    <header className={`sticky top-0 z-40 border-b bg-white/95 backdrop-blur transition-shadow ${scrolled ? 'border-line shadow-card' : 'border-transparent'}`}>
      <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-20">
        <Logo />
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) =>
              item.label === 'Services' ? (
                <li
                  key={item.to}
                  ref={dropRef}
                  className="relative"
                  onMouseEnter={() => setDropOpen(true)}
                  onMouseLeave={() => setDropOpen(false)}
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') {
                      setDropOpen(false)
                      ;(dropRef.current?.querySelector('button') as HTMLElement | null)?.focus()
                    }
                  }}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) setDropOpen(false)
                  }}
                >
                  <button
                    type="button"
                    aria-expanded={dropOpen}
                    aria-controls="services-menu"
                    onClick={() => setDropOpen((o) => !o)}
                    className={`flex items-center gap-1 rounded-md px-3 py-2 text-[0.95rem] font-semibold hover:text-accent-text ${servicesActive ? 'text-navy' : 'text-charcoal'}`}
                  >
                    Services
                    <ChevronDown aria-hidden className={`size-4 transition-transform ${dropOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {dropOpen && (
                    <div id="services-menu" className="absolute left-0 top-full z-50 w-80 pt-2">
                      <ul className="rounded-xl border border-line bg-white p-2 shadow-lift">
                        <li>
                          <Link to="/services" className="block rounded-lg px-3 py-2 text-sm font-bold text-navy hover:bg-mist">All services</Link>
                        </li>
                        {services.map((s) => (
                          <li key={s.slug}>
                            <Link to={serviceHref(s)} className="block rounded-lg px-3 py-2 text-sm font-medium text-charcoal hover:bg-mist hover:text-navy">
                              {s.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ) : (
                <li key={item.to}>
                  <NavLink to={item.to} end={item.to === '/'} className={linkCls}>{item.label}</NavLink>
                </li>
              ),
            )}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <Button to="/contact#enquiry-form" className="max-sm:!hidden !min-h-11 !px-5 !py-2 text-[0.95rem]">Request a Quote</Button>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-haspopup="dialog"
            className="grid size-11 place-items-center rounded-lg text-navy hover:bg-mist lg:hidden"
          >
            <Menu aria-hidden className="size-6" />
          </button>
        </div>
      </div>
      <MobileNavigation open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  )
}
