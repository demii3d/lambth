import type { ImageKey } from './images'

export type IconName =
  | 'hammer'
  | 'wrench'
  | 'paint-roller'
  | 'layout-grid'
  | 'cooking-pot'
  | 'bath'
  | 'droplets'
  | 'house-plus'
  | 'calendar-check'
  | 'door-open'

export type Service = {
  slug: string
  title: string
  /** Short card description */
  summary: string
  /** Hero / intro paragraph on the service page */
  intro: string
  icon: IconName
  image: ImageKey
  typicalWork: string[]
  support: { title: string; text: string }[]
  /** Optional scope note shown on the service page */
  note?: string
  related: string[]
}

export const services: Service[] = [
  {
    slug: 'general-building-work',
    title: 'General Building Work',
    summary: 'Practical building work for alterations, repairs and improvements around the property.',
    intro:
      'General building work covers the practical, hands-on tasks that keep a property sound and usable. LAMBTH PR can discuss small to medium building requirements, helping you define what needs doing and how the work should be arranged.',
    icon: 'hammer',
    image: 'general-building',
    typicalWork: [
      'Carpentry repairs and fitting, such as doors, frames and skirting',
      'Minor alterations and making good after other works',
      'Plastering repairs and patching',
      'Brickwork and masonry repairs of a minor nature',
      'Boxing in, partitioning and general joinery tasks',
      'Fixing, mounting and installation tasks',
    ],
    support: [
      { title: 'One point of contact', text: 'Describe the work once and discuss how it can be organised, rather than coordinating several people yourself.' },
      { title: 'Scope agreed first', text: 'Requirements and arrangements can be discussed and agreed before work begins.' },
      { title: 'Flexible for property professionals', text: 'Suitable for single tasks as well as combined lists of works across a property.' },
    ],
    note: 'Structural design or engineering input is not described as part of this service. If your project may involve structural changes, mention it when you enquire.',
    related: ['property-refurbishment', 'internal-repairs', 'property-maintenance'],
  },
  {
    slug: 'property-maintenance',
    title: 'Property Maintenance',
    summary: 'Keeping residential and commercial properties in good condition with dependable day-to-day upkeep.',
    intro:
      'Good maintenance prevents small defects becoming larger problems. LAMBTH PR can support property owners and managers with the repairs and upkeep a building needs to stay in good condition, whether as a one-off visit or a list of outstanding tasks.',
    icon: 'wrench',
    image: 'property-maintenance',
    typicalWork: [
      'Fixing worn, damaged or loose fittings and fixtures',
      'Sealing, filling and making good around the property',
      'Door, window furniture and lock-related repairs of a minor nature',
      'External upkeep tasks such as fencing, gates and minor repairs',
      'Tackling snagging and maintenance lists',
      'Preparing a property between tenancies or occupiers',
    ],
    support: [
      { title: 'Landlords and agents', text: 'Work through a list of maintenance items in a coordinated way.' },
      { title: 'Managed properties', text: 'Help address recurring maintenance needs across a portfolio, as agreed.' },
      { title: 'Clear communication', text: 'Keep the people responsible for the property informed about arrangements and progress.' },
    ],
    related: ['ongoing-maintenance', 'internal-repairs', 'general-building-work'],
  },
  {
    slug: 'internal-repairs',
    title: 'Internal Repairs',
    summary: 'Repairs to the interior of a property, from damaged walls and ceilings to worn fittings.',
    intro:
      'Interiors take daily wear. Internal repairs focus on putting right the damage and defects inside a home or commercial space so rooms look cared for and work properly again.',
    icon: 'door-open',
    image: 'internal-repairs',
    typicalWork: [
      'Repairing cracks, holes and damaged plasterwork',
      'Ceiling and wall repairs ready for redecoration',
      'Door adjustment, replacement and ironmongery',
      'Skirting, architrave and trim repairs',
      'Repairs to built-in storage and shelving',
      'Making good after other trades have completed work',
    ],
    support: [
      { title: 'Between tenancies', text: 'Address wear and damage so a property is ready for its next occupier.' },
      { title: 'Ready for decoration', text: 'Repairs can be coordinated with painting and decorating so surfaces are properly prepared.' },
      { title: 'Occupied spaces', text: 'Arrangements for working in occupied premises can be discussed when you enquire.' },
    ],
    related: ['painting-decorating', 'flooring', 'property-maintenance'],
  },
  {
    slug: 'painting-decorating',
    title: 'Painting and Decorating',
    summary: 'Careful preparation and decorative finishes that refresh rooms and protect surfaces.',
    intro:
      'A good finish depends on preparation. LAMBTH PR can discuss interior painting and decorating for homes and commercial spaces, from refreshing a single room to redecorating a whole property.',
    icon: 'paint-roller',
    image: 'painting',
    typicalWork: [
      'Interior painting of walls, ceilings and woodwork',
      'Surface preparation, filling and sanding',
      'Redecoration between tenancies',
      'Wallpapering and wall coverings',
      'Touch-ups and repainting following repairs',
      'Refreshing communal areas',
    ],
    support: [
      { title: 'Consistent finish', text: 'Pair decorating with repairs so the end result looks cohesive.' },
      { title: 'Refresh a property', text: 'Help keep rental and commercial premises presentable.' },
      { title: 'Plan around your timing', text: 'Discuss how the work can be arranged to suit the property.' },
    ],
    related: ['internal-repairs', 'property-refurbishment', 'flooring'],
  },
  {
    slug: 'flooring',
    title: 'Flooring Installation and Repairs',
    summary: 'Fitting and repairing floor finishes to restore worn or damaged areas.',
    intro:
      'Floors take the heaviest use in any property. LAMBTH PR can discuss the installation and repair of suitable floor finishes, helping you choose a practical approach for the space and how it is used.',
    icon: 'layout-grid',
    image: 'flooring',
    typicalWork: [
      'Installing laminate, engineered and similar floor coverings',
      'Replacing damaged boards and sections',
      'Floor preparation and levelling where appropriate',
      'Fitting threshold strips, trims and skirting adjustments',
      'Replacing worn floor coverings in rental or commercial units',
      'Repairs that bring a floor back into good condition',
    ],
    support: [
      { title: 'Practical choices', text: 'Discuss options that suit the property, its use and your budget.' },
      { title: 'Part of a wider project', text: 'Coordinate floors with decorating, kitchen or bathroom work.' },
      { title: 'Turnaround of units', text: 'Support landlords and managers refreshing floors between occupiers.' },
    ],
    related: ['internal-repairs', 'property-refurbishment', 'kitchen-improvements'],
  },
  {
    slug: 'kitchen-improvements',
    title: 'Kitchen Improvements',
    summary: 'Updating and repairing kitchens, from worktops and units to the finishing details.',
    intro:
      'The kitchen is often the room that matters most when a property is lived in or let. LAMBTH PR can discuss kitchen improvements, from replacing worn elements to a wider update of the room.',
    icon: 'cooking-pot',
    image: 'kitchen',
    typicalWork: [
      'Fitting or replacing kitchen units and worktops',
      'Repairing doors, hinges and drawer fronts',
      'Splashbacks and tiling',
      'Associated carpentry, making good and decoration',
      'Coordinating flooring alongside kitchen updates',
      'Refreshing kitchens in rental properties',
    ],
    support: [
      { title: 'Defined scope', text: 'Agree the extent of the improvements before work begins.' },
      { title: 'Coordinated work', text: 'Associated trades can be coordinated directly or through appropriately engaged subcontractors.' },
      { title: 'Practical outcomes', text: 'Focus on durable, easily maintained finishes for busy properties.' },
    ],
    note: 'Gas appliance connection and electrical certification are not described as services on this website. If your kitchen project includes them, mention it in your enquiry.',
    related: ['bathroom-improvements', 'property-refurbishment', 'flooring'],
  },
  {
    slug: 'bathroom-improvements',
    title: 'Bathroom Improvements',
    summary: 'Refreshing and repairing bathrooms, including tiling, fittings and finishing work.',
    intro:
      'Bathrooms need to be watertight, hard-wearing and easy to keep clean. LAMBTH PR can discuss bathroom improvements, whether you need targeted repairs or a more complete update.',
    icon: 'bath',
    image: 'bathroom',
    typicalWork: [
      'Wall and floor tiling, regrouting and resealing',
      'Replacing or refitting bathroom suites and fittings',
      'Boxing in pipework and panelling',
      'Associated carpentry, decorating and making good',
      'Repairing damage from long-term wear',
      'Refreshing bathrooms between tenancies',
    ],
    support: [
      { title: 'Planned improvements', text: 'Discuss and agree the scope, so everyone knows what the work covers.' },
      { title: 'Minor plumbing alongside', text: 'Combine with minor plumbing repairs where appropriate.' },
      { title: 'Property presentation', text: 'Help keep bathrooms in rental and commercial properties in good order.' },
    ],
    note: 'Gas work and electrical certification are not described as services on this website. Mention any such requirements when you enquire.',
    related: ['minor-plumbing-repairs', 'kitchen-improvements', 'property-refurbishment'],
  },
  {
    slug: 'minor-plumbing-repairs',
    title: 'Minor Plumbing Repairs',
    summary: 'Small-scale plumbing repairs around sinks, taps, toilets and fittings.',
    intro:
      'Small plumbing faults can cause disproportionate disruption. LAMBTH PR can discuss minor plumbing repairs and fittings as part of its wider repair and maintenance work.',
    icon: 'droplets',
    image: 'plumbing',
    typicalWork: [
      'Repairing or replacing taps and basin fittings',
      'Toilet cistern and seat repairs and replacements',
      'Resealing around baths, showers and sinks',
      'Minor repairs to waste and overflow connections',
      'Fitting and replacing bathroom accessories',
      'Plumbing-related making good following other works',
    ],
    support: [
      { title: 'Alongside other repairs', text: 'Handle small plumbing items in the same visit as related maintenance.' },
      { title: 'Straightforward arrangements', text: 'Discuss the issue and agree what is needed before work starts.' },
      { title: 'For landlords and managers', text: 'Help address minor plumbing defects across rental and managed properties.' },
    ],
    note: 'This page covers minor repairs only. Gas work, heating systems and other specialist or regulated work are not described as services on this website; please mention any such requirement in your enquiry and it can be discussed.',
    related: ['bathroom-improvements', 'property-maintenance', 'internal-repairs'],
  },
  {
    slug: 'property-refurbishment',
    title: 'Property Refurbishment',
    summary: 'Planned refurbishment projects that bring tired properties back into good use.',
    intro:
      'Refurbishment brings several kinds of work together. LAMBTH PR can discuss planned refurbishment projects for residential and commercial properties, helping to scope what is needed and how it will be coordinated.',
    icon: 'house-plus',
    image: 'refurbishment',
    typicalWork: [
      'Combined repair, decoration and flooring programmes',
      'Kitchen and bathroom updates as part of a wider scheme',
      'Interior upgrades ahead of letting or reletting',
      'Coordinating trades to suit the project',
      'Working directly or through appropriately engaged subcontractors',
      'Making good and finishing to prepare a space for use',
    ],
    support: [
      { title: 'Scope first', text: 'Work through requirements and arrangements before agreeing the work.' },
      { title: 'Coordinated delivery', text: 'A single point of contact for the elements of a project.' },
      { title: 'Planned improvements', text: 'Suitable for landlords, managers and owners improving a property.' },
    ],
    note: 'Larger projects may require specialist design or regulatory input. Describe your plans when you enquire and what is involved can be discussed.',
    related: ['general-building-work', 'kitchen-improvements', 'bathroom-improvements'],
  },
  {
    slug: 'ongoing-maintenance',
    title: 'Ongoing Property Maintenance',
    summary: 'A continuing relationship for properties that need regular attention, not just one-off repairs.',
    intro:
      'Some properties need regular attention rather than a single visit. LAMBTH PR is interested in building longer-term relationships with landlords, agents, managers and businesses, supporting recurring maintenance requirements as they arise.',
    icon: 'calendar-check',
    image: 'ongoing-maintenance',
    typicalWork: [
      'Repairs requested over time across one or several properties',
      'Regular maintenance and snagging lists',
      'Preparing properties between occupiers',
      'Working with letting agents and property managers on recurring requirements',
      'Combining routine repairs with minor improvements',
      'Arrangements agreed to suit how you manage your property',
    ],
    support: [
      { title: 'Familiar with your properties', text: 'Continuing to work with the same business can make requests easier to organise.' },
      { title: 'Flexible arrangements', text: 'Discuss how recurring requirements can best be handled; no fixed plan is assumed.' },
      { title: 'Long-term relationships', text: 'Built on clear communication and a practical approach.' },
    ],
    related: ['property-maintenance', 'internal-repairs', 'general-building-work'],
  },
]

export const getService = (slug: string) => services.find((s) => s.slug === slug)
export const serviceHref = (s: Service) => `/services/${s.slug}`
