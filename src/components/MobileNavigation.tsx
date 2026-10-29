import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ChevronDown, X } from 'lucide-react'
import { mainNav } from '../config/navigation'
import { services, serviceHref } from '../config/services'
import Logo from './Logo'
import Button from './Button'

const FOCUSABLE = 'a[href], button:not([disabled])'

export default function MobileNavigation({ open, onClose }: { open: boolean; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null)
  const [svcOpen, setSvcOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const el = ref.current
    el?.querySelector<HTMLElement>(FOCUSABLE)?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') return onClose()
      if (e.key !== 'Tab' || !el) return
      const items = [...el.querySelectorAll<HTMLElement>(FOCUSABLE)]
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  return (
    <div className={`fixed inset-0 z-50 overflow-hidden lg:hidden ${open ? '' : 'pointer-events-none invisible'}`} aria-hidden={!open} style={{ transition: 'visibility 0s linear ' + (open ? '0s' : '0.3s') }}>
      <div onClick={onClose} className={`absolute inset-0 bg-navy-900/60 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`} />
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`absolute right-0 top-0 flex h-full w-[min(22rem,100%)] flex-col bg-white shadow-lift transition-transform duration-300 ease-out ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex h-16 items-center justify-between border-b border-line px-4">
          <Logo />
          <button type="button" onClick={onClose} aria-label="Close menu" className="grid size-11 place-items-center rounded-lg text-navy hover:bg-mist">
            <X aria-hidden className="size-6" />
          </button>
        </div>
        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-4 py-4">
          <ul className="space-y-1">
            {mainNav.map((item) =>
              item.label === 'Services' ? (
                <li key={item.to}>
                  <div className="flex items-center">
                    <NavLink to="/services" onClick={onClose} className={({ isActive }) => `flex-1 rounded-lg px-3 py-3 text-lg font-semibold ${isActive ? 'text-accent-text' : 'text-navy'}`}>Services</NavLink>
                    <button type="button" aria-expanded={svcOpen} aria-controls="mobile-services" aria-label="Show individual services" onClick={() => setSvcOpen((o) => !o)} className="grid size-11 place-items-center rounded-lg text-navy hover:bg-mist">
                      <ChevronDown aria-hidden className={`size-5 transition-transform ${svcOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                  {svcOpen && (
                    <ul id="mobile-services" className="mb-2 ml-3 space-y-0.5 border-l-2 border-line pl-3">
                      {services.map((s) => (
                        <li key={s.slug}>
                          <NavLink to={serviceHref(s)} onClick={onClose} className="block rounded-lg px-3 py-2.5 text-base text-charcoal hover:bg-mist">{s.title}</NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.to}>
                  <NavLink to={item.to} end={item.to === '/'} onClick={onClose} className={({ isActive }) => `block rounded-lg px-3 py-3 text-lg font-semibold ${isActive ? 'text-accent-text' : 'text-navy'}`}>{item.label}</NavLink>
                </li>
              ),
            )}
          </ul>
        </nav>
        <div className="border-t border-line p-4">
          <Button to="/contact#enquiry-form" onClick={onClose} className="w-full">Request a Quote</Button>
        </div>
      </div>
    </div>
  )
}
