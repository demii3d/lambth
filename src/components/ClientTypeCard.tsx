import { Building, Building2, Briefcase, Home, KeyRound, Users, type LucideProps } from 'lucide-react'

const icons: Record<string, React.ComponentType<LucideProps>> = {
  landlords: KeyRound,
  'letting-agents': Users,
  'property-management': Building2,
  'residential-owners': Home,
  'commercial-owners': Building,
  businesses: Briefcase,
  'businesses-private': Briefcase,
  'private-clients': Home,
}

export default function ClientTypeCard({ id, title, children }: { id: string; title: string; children: string }) {
  const Icon = icons[id] ?? Home
  return (
    <div className="h-full rounded-xl border border-line bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-lift">
      <span className="grid size-12 place-items-center rounded-lg bg-mist text-navy">
        <Icon aria-hidden strokeWidth={1.75} className="size-6" />
      </span>
      <h3 className="mt-5 text-xl">{title}</h3>
      <p className="mt-2 leading-relaxed text-slate">{children}</p>
    </div>
  )
}
