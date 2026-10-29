import type { ComponentProps, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'outline' | 'outline-light'

const base =
  'inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-bold transition-all duration-200 ease-out active:translate-y-px disabled:cursor-not-allowed disabled:opacity-60'

const variants: Record<Variant, string> = {
  // Navy text on the muted orange keeps contrast above 4.5:1
  primary: 'bg-accent text-navy-900 shadow-sm hover:bg-accent-hover hover:shadow-md',
  secondary: 'bg-navy text-white hover:bg-navy-900',
  outline: 'border-2 border-navy text-navy hover:bg-navy hover:text-white',
  'outline-light': 'on-dark border-2 border-white/80 text-white hover:bg-white hover:text-navy',
}

type Common = { variant?: Variant; className?: string; children: ReactNode }
type LinkProps = Common & { to: string } & Omit<ComponentProps<typeof Link>, 'to' | 'className' | 'children'>
type ButtonProps = Common & { to?: undefined } & Omit<ComponentProps<'button'>, 'className' | 'children'>

export default function Button(props: LinkProps | ButtonProps) {
  const { variant = 'primary', className = '', children, ...rest } = props
  const cls = `${base} ${variants[variant]} ${className}`
  if ('to' in rest && rest.to !== undefined) {
    return (
      <Link {...(rest as Omit<LinkProps, keyof Common>)} className={cls}>
        {children}
      </Link>
    )
  }
  return (
    <button type="button" {...(rest as Omit<ButtonProps, keyof Common>)} className={cls}>
      {children}
    </button>
  )
}
