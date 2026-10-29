import { services as all, type Service } from '../config/services'
import ServiceCard from './ServiceCard'

export default function ServiceGrid({ services = all, cols = 3 }: { services?: Service[]; cols?: 3 | 4 }) {
  return (
    <ul className={`grid gap-6 sm:grid-cols-2 ${cols === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
      {services.map((s) => (
        <li key={s.slug} className="flex">
          <div className="flex w-full"><ServiceCard service={s} /></div>
        </li>
      ))}
    </ul>
  )
}
