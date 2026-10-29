import type { ReactNode } from 'react'
import Breadcrumbs, { type Crumb } from './Breadcrumbs'
import type { SiteImage } from '../config/images'

type Props = { title: string; eyebrow?: string; intro?: string; crumbs?: Crumb[]; image?: SiteImage; children?: ReactNode }

export default function PageHero({ title, eyebrow, intro, crumbs, image, children }: Props) {
  return (
    <section aria-labelledby="page-title" className="on-dark relative overflow-hidden bg-navy">
      <div aria-hidden className="absolute -right-32 -top-32 size-[28rem] rounded-full border-[56px] border-white/[0.04]" />
      <div className={`container-page relative py-12 sm:py-16 lg:py-20 ${image ? 'grid items-center gap-10 lg:grid-cols-2' : ''}`}>
        <div className="max-w-3xl">
          {crumbs && <Breadcrumbs items={crumbs} dark />}
          {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
          <h1 id="page-title" className="text-4xl !text-white sm:text-5xl lg:leading-[1.08]">{title}</h1>
          {intro && <p className="mt-5 text-lg leading-relaxed text-white/80 sm:text-xl">{intro}</p>}
          {children && <div className="mt-8 flex flex-col gap-3 sm:flex-row">{children}</div>}
        </div>
        {image && (
          <img src={image.src} alt={image.alt} width={1200} height={800} fetchPriority="high" className="aspect-[3/2] w-full rounded-xl object-cover shadow-lift" />
        )}
      </div>
    </section>
  )
}
