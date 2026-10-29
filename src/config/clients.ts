export type ClientType = {
  id: string
  title: string
  summary: string
  detail: string
  examples: string[]
}

export const clientTypes: ClientType[] = [
  {
    id: 'landlords',
    title: 'Landlords',
    summary: 'Practical support with property repairs, maintenance and improvements to help address the needs of rental properties.',
    detail:
      'Rental properties need to be kept in good order, whether you manage one flat or several. LAMBTH PR can discuss repairs, maintenance and improvement work that helps address the condition of your properties.',
    examples: ['Repairs reported by occupiers', 'Preparing a property between tenancies', 'Redecoration and flooring', 'Kitchen and bathroom refreshes'],
  },
  {
    id: 'letting-agents',
    title: 'Letting Agents',
    summary: 'Building and maintenance support for properties requiring repairs, improvement works or ongoing attention.',
    detail:
      'Agents balance the needs of landlords and occupiers. LAMBTH PR can support with building and maintenance requirements across the properties you handle, with clear communication about arrangements.',
    examples: ['Maintenance and repair requests', 'Inventory and check-out follow-up works', 'Refurbishment before letting', 'Recurring requirements across properties'],
  },
  {
    id: 'property-management',
    title: 'Property Management Companies',
    summary: 'Flexible support for individual maintenance requirements and coordinated building works across managed properties.',
    detail:
      'Managed properties generate a steady flow of maintenance tasks as well as larger works. LAMBTH PR can discuss both individual jobs and more coordinated programmes, working directly or with appropriately engaged subcontractors.',
    examples: ['Maintenance snagging lists', 'Communal area repairs and decoration', 'Coordinated works across several properties', 'Longer-term maintenance relationships'],
  },
  {
    id: 'residential-owners',
    title: 'Residential Property Owners',
    summary: 'Repairs, improvements and refurbishment for homeowners who want a practical, organised approach.',
    detail:
      'Whether you are fixing something that has worn out or planning an improvement, LAMBTH PR can discuss what is needed and how the work could be arranged around your home.',
    examples: ['Internal repairs and decoration', 'Flooring updates', 'Kitchen and bathroom improvements', 'General building and carpentry tasks'],
  },
  {
    id: 'commercial-owners',
    title: 'Commercial Property Owners',
    summary: 'Maintenance, repair and refurbishment support for commercial premises and units.',
    detail:
      'Commercial premises need to be kept presentable and fit for use. LAMBTH PR can discuss repair, maintenance and refurbishment requirements for commercial property owners.',
    examples: ['Unit repairs and making good', 'Redecoration of premises', 'Flooring replacement', 'Planned refurbishment of commercial space'],
  },
  {
    id: 'businesses',
    title: 'Businesses',
    summary: 'Practical building and maintenance support for businesses that occupy and look after their premises.',
    detail:
      'Businesses that lease or own premises often need dependable help with repairs and improvements. LAMBTH PR can discuss one-off requirements as well as continuing maintenance.',
    examples: ['Office and shop repairs', 'Redecoration and flooring', 'Fit-out related building tasks', 'Ongoing maintenance requirements'],
  },
  {
    id: 'private-clients',
    title: 'Private Clients',
    summary: 'Straightforward building and repair support for individuals with a specific job in mind.',
    detail:
      'If you have a specific repair or improvement in mind, you can describe it and discuss the requirements with LAMBTH PR. Individual jobs are welcome.',
    examples: ['One-off repairs', 'Decorating a room', 'Fitting flooring or fixtures', 'Smaller improvement projects'],
  },
]

/** The six cards shown on the homepage, where Businesses and Private Clients are combined. */
export const homeClientCards: Pick<ClientType, 'id' | 'title' | 'summary'>[] = [
  ...clientTypes.slice(0, 5),
  {
    id: 'businesses-private',
    title: 'Businesses and Private Clients',
    summary: 'Practical help with repairs, improvements and ongoing upkeep, whether for business premises or a specific job at home.',
  },
]

export const clientTypeOptions = [...clientTypes.map((c) => c.title), 'Other']
