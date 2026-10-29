import SEOHead from '../components/SEOHead'
import Button from '../components/Button'

export default function NotFound() {
  return (
    <>
      <SEOHead title="Page not found" description="The page you were looking for could not be found." noindex />
      <section className="container-page section text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-3 text-4xl sm:text-5xl">Page not found</h1>
        <p className="lead mx-auto mt-4 max-w-xl">Sorry, we could not find that page. It may have moved, or the address may be mistyped.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button to="/">Back to Home</Button>
          <Button to="/services" variant="outline">View Services</Button>
        </div>
      </section>
    </>
  )
}
