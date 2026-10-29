import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export type Crumb = { label: string; to?: string }

export default function Breadcrumbs({ items, dark }: { items: Crumb[]; dark?: boolean }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className={`flex flex-wrap items-center gap-1.5 text-sm ${dark ? 'text-white/75' : 'text-slate'}`}>
        {items.map((c, i) => {
          const last = i === items.length - 1
          return (
            <li key={c.label} className="flex items-center gap-1.5">
              {c.to && !last ? (
                <Link to={c.to} className={`underline-offset-2 hover:underline ${dark ? 'on-dark hover:text-white' : 'hover:text-navy'}`}>
                  {c.label}
                </Link>
              ) : (
                <span aria-current={last ? 'page' : undefined} className={`font-semibold ${dark ? 'text-white' : 'text-navy'}`}>
                  {c.label}
                </span>
              )}
              {!last && <ChevronRight aria-hidden className="size-3.5" />}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
