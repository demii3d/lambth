import type { ReactNode } from 'react'

type Props = { eyebrow?: string; title: string; children?: ReactNode; align?: 'left' | 'center'; dark?: boolean; as?: 'h1' | 'h2'; id?: string }

export default function SectionHeading({ eyebrow, title, children, align = 'left', dark, as: Tag = 'h2', id }: Props) {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''} ${dark ? 'on-dark' : ''}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <Tag id={id} className={`text-3xl sm:text-4xl lg:text-[2.6rem] lg:leading-[1.1] ${dark ? '!text-white' : ''}`}>
        {title}
      </Tag>
      {children && <p className={`lead mt-4 ${dark ? '!text-white/80' : ''}`}>{children}</p>}
    </div>
  )
}
