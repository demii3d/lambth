import { useLocation } from 'react-router-dom'
import { site } from '../config/site'

type Props = { title: string; description: string; image?: string; noindex?: boolean; jsonLd?: object }

/** React 19 hoists <title>, <meta> and <link> into <head>, so no helmet dependency is needed. */
export default function SEOHead({ title, description, image = site.ogImage, noindex, jsonLd }: Props) {
  const { pathname } = useLocation()
  const url = `${site.url}${pathname === '/' ? '/' : pathname.replace(/\/$/, '')}`
  const img = image.startsWith('http') ? image : `${site.url}${image}`
  const full = title.includes(site.name) ? title : `${title} | ${site.name}`
  return (
    <>
      <title>{full}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex" />}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:site_name" content={`${site.name} – ${site.fullName}`} />
      <meta property="og:title" content={full} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${site.name} – ${site.fullName}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={full} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
      <meta name="twitter:image:alt" content={`${site.name} – ${site.fullName}`} />
      {jsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />}
    </>
  )
}
