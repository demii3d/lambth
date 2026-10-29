import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { images } from '../config/images'
import { serviceHref, type Service } from '../config/services'
import ServiceIcon from './ServiceIcon'

export default function ServiceCard({ service, lazy = true }: { service: Service; lazy?: boolean }) {
  const img = images[service.image]
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-line bg-white shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lift focus-within:shadow-lift">
      <div className="relative aspect-[3/2] overflow-hidden bg-mist">
        <img
          src={img.src}
          alt={img.alt}
          width={1200}
          height={800}
          loading={lazy ? 'lazy' : undefined}
          decoding="async"
          className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <span className="absolute bottom-0 left-4 grid size-11 translate-y-1/2 place-items-center rounded-lg bg-navy text-white shadow-md">
          <ServiceIcon name={service.icon} className="size-5" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 pt-9">
        <h3 className="text-xl">{service.title}</h3>
        <p className="mt-2 flex-1 leading-relaxed text-slate">{service.summary}</p>
        <Link
          to={serviceHref(service)}
          className="mt-4 inline-flex items-center gap-1.5 font-bold text-accent-text after:absolute after:inset-0 after:content-[''] hover:text-navy"
        >
          Learn more<span className="sr-only"> about {service.title}</span>
          <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  )
}
