export default function ProcessStep({ number, title, children }: { number: string; title: string; children: string }) {
  return (
    <li className="relative">
      <span aria-hidden className="text-5xl font-extrabold leading-none text-accent">{number}</span>
      <h3 className="mt-3 text-xl !text-white"><span className="sr-only">Step {number}: </span>{title}</h3>
      <p className="mt-2 leading-relaxed text-white/75">{children}</p>
    </li>
  )
}
