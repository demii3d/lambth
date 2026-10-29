import { useRef, useState, type FormEvent, type ReactNode } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { AlertTriangle, CheckCircle2, Loader2 } from 'lucide-react'
import { site } from '../config/site'
import { services } from '../config/services'
import { clientTypeOptions } from '../config/clients'
import Button from './Button'

type Values = {
  name: string
  email: string
  phone: string
  clientType: string
  service: string
  location: string
  contactMethod: string
  message: string
  company_website: string // honeypot
}
type Errors = Partial<Record<keyof Values, string>>
type Status = 'idle' | 'submitting' | 'success' | 'error' | 'unconfigured'

const serviceOptions = [...services.map((s) => s.title), 'Other']
const emptyValues: Values = { name: '', email: '', phone: '', clientType: '', service: '', location: '', contactMethod: '', message: '', company_website: '' }

function validate(v: Values): Errors {
  const e: Errors = {}
  if (!v.name.trim()) e.name = 'Please enter your full name.'
  if (!v.email.trim()) e.email = 'Please enter your email address.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'Please enter a valid email address, such as name@example.co.uk.'
  if (v.phone.trim() && !/^[+\d][\d\s()-]{6,}$/.test(v.phone.trim())) e.phone = 'Please enter a valid telephone number, or leave this blank.'
  if (!v.service) e.service = 'Please choose the service you need.'
  if (v.message.trim().length < 10) e.message = 'Please describe the work required (at least 10 characters).'
  return e
}

function Field({ id, label, required, error, hint, children }: { id: string; label: string; required?: boolean; error?: string; hint?: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-bold text-navy">
        {label} {required ? <span aria-hidden className="text-red-700">*</span> : <span className="font-normal text-slate">(optional)</span>}
      </label>
      {children}
      {hint && !error && <p id={`${id}-hint`} className="mt-1 text-sm text-slate">{hint}</p>}
      {error && <p id={`${id}-error`} className="mt-1.5 text-sm font-semibold text-red-700">{error}</p>}
    </div>
  )
}

export default function ContactForm() {
  const [params] = useSearchParams()
  const requested = params.get('service')
  const initialService = serviceOptions.find((o) => o === requested) ?? services.find((s) => s.slug === requested)?.title ?? ''
  const [values, setValues] = useState<Values>({ ...emptyValues, service: initialService })
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')
  const submitting = useRef(false)
  const formRef = useRef<HTMLFormElement>(null)
  const statusRef = useRef<HTMLDivElement>(null)

  const set = (k: keyof Values) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [k]: e.target.value }))
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }))
  }
  const aria = (k: keyof Values, hint = false) => ({
    'aria-invalid': errors[k] ? (true as const) : undefined,
    'aria-describedby': errors[k] ? `${k}-error` : hint ? `${k}-hint` : undefined,
  })

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault()
    if (submitting.current) return // guards against double submits
    if (values.company_website) return // bots fill the honeypot; silently drop
    const errs = validate(values)
    setErrors(errs)
    const first = (Object.keys(errs) as (keyof Values)[])[0]
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`#${first}`)?.focus()
      return
    }
    if (!site.formEndpoint) {
      setStatus('unconfigured')
      requestAnimationFrame(() => statusRef.current?.focus())
      return
    }
    submitting.current = true
    setStatus('submitting')
    try {
      const { company_website: _hp, ...payload } = values
      const res = await fetch(site.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...payload, source: window.location.href }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setStatus('success')
      setValues(emptyValues)
    } catch {
      setStatus('error')
    } finally {
      submitting.current = false
      requestAnimationFrame(() => statusRef.current?.focus())
    }
  }

  if (status === 'success') {
    return (
      <div ref={statusRef} tabIndex={-1} role="status" className="rounded-xl border border-green-700/30 bg-green-50 p-8 outline-none">
        <CheckCircle2 aria-hidden className="size-10 text-green-700" />
        <h3 className="mt-4 text-2xl">Thank you – your enquiry has been sent.</h3>
        <p className="mt-2 text-charcoal/90">Your message was accepted by our enquiry service. We will review it and be in touch using the details you provided.</p>
        <Button variant="secondary" className="mt-6" onClick={() => setStatus('idle')}>Send another enquiry</Button>
      </div>
    )
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate aria-describedby="privacy-note" className="space-y-5">
      <div ref={statusRef} tabIndex={-1} className="outline-none" aria-live="polite">
        {status === 'unconfigured' && (
          <div role="alert" className="flex gap-3 rounded-xl border border-amber-600/40 bg-amber-50 p-4 text-amber-950">
            <AlertTriangle aria-hidden className="mt-0.5 size-5 shrink-0" />
            <div>
              <p className="font-bold">Development state: this enquiry has not been sent.</p>
              <p className="mt-1 text-sm">The form is validated and ready, but no enquiry endpoint is connected yet (set <code>VITE_FORM_ENDPOINT</code>). Nothing has been delivered to LAMBTH PR.</p>
            </div>
          </div>
        )}
        {status === 'error' && (
          <div role="alert" className="flex gap-3 rounded-xl border border-red-700/40 bg-red-50 p-4 text-red-950">
            <AlertTriangle aria-hidden className="mt-0.5 size-5 shrink-0" />
            <div>
              <p className="font-bold">Sorry, your enquiry could not be sent.</p>
              <p className="mt-1 text-sm">Nothing has been lost from the form. Please check your connection and try again.</p>
            </div>
          </div>
        )}
        {Object.keys(errors).length > 0 && Object.values(errors).some(Boolean) && (
          <p role="alert" className="rounded-xl border border-red-700/40 bg-red-50 p-4 text-sm font-semibold text-red-900">Please correct the highlighted fields below.</p>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Full name" required error={errors.name}>
          <input id="name" name="name" autoComplete="name" className="field" value={values.name} onChange={set('name')} {...aria('name')} />
        </Field>
        <Field id="email" label="Email address" required error={errors.email}>
          <input id="email" name="email" type="email" autoComplete="email" className="field" value={values.email} onChange={set('email')} {...aria('email')} />
        </Field>
        <Field id="phone" label="Telephone number" error={errors.phone}>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className="field" value={values.phone} onChange={set('phone')} {...aria('phone')} />
        </Field>
        <Field id="clientType" label="Client type">
          <select id="clientType" name="clientType" className="field" value={values.clientType} onChange={set('clientType')}>
            <option value="">Select…</option>
            {clientTypeOptions.map((o) => <option key={o}>{o}</option>)}
          </select>
        </Field>
        <Field id="service" label="Service required" required error={errors.service}>
          <select id="service" name="service" className="field" value={values.service} onChange={set('service')} {...aria('service')}>
            <option value="">Select a service…</option>
            {serviceOptions.map((o) => <option key={o}>{o}</option>)}
          </select>
        </Field>
        <Field id="location" label="Property address or postcode" hint="A postcode is enough at this stage.">
          <input id="location" name="location" autoComplete="postal-code" className="field" value={values.location} onChange={set('location')} {...aria('location', true)} />
        </Field>
      </div>

      <Field id="contactMethod" label="Preferred contact method">
        <select id="contactMethod" name="contactMethod" className="field sm:max-w-xs" value={values.contactMethod} onChange={set('contactMethod')}>
          <option value="">No preference</option>
          <option>Email</option>
          <option>Telephone</option>
        </select>
      </Field>

      <Field id="message" label="Description of work required" required error={errors.message}>
        <textarea id="message" name="message" rows={6} className="field" value={values.message} onChange={set('message')} {...aria('message')} />
      </Field>

      {/* Honeypot: hidden from people and assistive tech */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>Leave this field empty<input tabIndex={-1} autoComplete="off" name="company_website" value={values.company_website} onChange={set('company_website')} /></label>
      </div>

      <p id="privacy-note" className="text-sm leading-relaxed text-slate">
        We will use the details you provide only to respond to your enquiry. See our <Link to="/privacy-policy" className="font-semibold text-accent-text underline underline-offset-2">Privacy Policy</Link> for more information.
      </p>

      <Button type="submit" disabled={status === 'submitting'} className="w-full sm:w-auto">
        {status === 'submitting' ? (<><Loader2 aria-hidden className="size-5 animate-spin" />Sending…</>) : 'Send Enquiry'}
      </Button>
    </form>
  )
}
