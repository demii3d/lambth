import { Hammer, Wrench, PaintRoller, LayoutGrid, CookingPot, Bath, Droplets, HousePlus, CalendarCheck, DoorOpen, type LucideProps } from 'lucide-react'
import type { IconName } from '../config/services'

const map: Record<IconName, React.ComponentType<LucideProps>> = {
  hammer: Hammer,
  wrench: Wrench,
  'paint-roller': PaintRoller,
  'layout-grid': LayoutGrid,
  'cooking-pot': CookingPot,
  bath: Bath,
  droplets: Droplets,
  'house-plus': HousePlus,
  'calendar-check': CalendarCheck,
  'door-open': DoorOpen,
}

export default function ServiceIcon({ name, ...props }: { name: IconName } & LucideProps) {
  const Icon = map[name]
  return <Icon aria-hidden strokeWidth={1.75} {...props} />
}
