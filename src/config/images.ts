/**
 * Image registry. All photography is illustrative stock imagery and must never
 * be presented as completed LAMBTH PR work. To add genuine project photos later,
 * drop files into /public/images and add entries here (or a `projects` list).
 */
export type SiteImage = { src: string; alt: string }

export const images = {
  hero: { src: '/images/hero.jpg', alt: 'A tradesperson pressing a white tile into adhesive on a prepared wall' },
  interior: { src: '/images/interior.jpg', alt: 'Bright, well-maintained living room with large windows and neutral decor' },
  'general-building': { src: '/images/general-building.jpg', alt: 'Carpenter cutting timber with a circular saw on a workbench' },
  'property-maintenance': { src: '/images/property-maintenance.jpg', alt: 'Person inspecting the roof of a brick house with a ladder against the wall' },
  'internal-repairs': { src: '/images/internal-repairs.jpg', alt: 'Cordless drill resting on a stripped, worn floor surface' },
  painting: { src: '/images/painting.jpg', alt: 'Paint roller applying blue paint to a white wall' },
  flooring: { src: '/images/flooring.jpg', alt: 'Light timber flooring running through a bright hallway' },
  kitchen: { src: '/images/kitchen.jpg', alt: 'Bright kitchen with white cabinetry and a stone worktop' },
  bathroom: { src: '/images/bathroom.jpg', alt: 'Modern bathroom with a glass-screened shower and wide vanity unit' },
  plumbing: { src: '/images/plumbing.jpg', alt: 'Close view of a chrome tap and shower hose over a bath' },
  refurbishment: { src: '/images/refurbishment.jpg', alt: 'Refurbished open-plan living space with timber wall panelling' },
  'ongoing-maintenance': { src: '/images/ongoing-maintenance.jpg', alt: 'Set of precision screwdriver bits laid out in a tool roll' },
} satisfies Record<string, SiteImage>

export type ImageKey = keyof typeof images
