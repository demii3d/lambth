import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { site } from '../config/site'

type Props = { title: string; description: string; noindex?: boolean; jsonLd?: object }

/** React 19 hoists <title>, <meta> and <link> into <head>, so no helmet dependency is needed. */
export default function SEOHead({ title, description, noindex, jsonLd }: Props) {
  useEffect(() => {
    // Drop the static defaults from index.html now that per-route tags are rendered
    document.querySelectorAll('[data-seo-default]').forEach((el) => el.remove())
  }, [])
  const { pathname } = useLocation()
  const url = `${site.url}${pathname === '/' ? '/' : pathname.replace(/\/$/, '')}`
  const full = title.includes(site.name) ? title : `${title} | ${site.name}`
  return (
    <>
      <title>{full}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex" />}
      <meta property="og:title" content={full} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={full} />
      <meta name="twitter:description" content={description} />
      {jsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />}
    </>
  )
}
