export const areas = [
  { name: 'Windsor', note: 'From Walkerville and Riverside to South Windsor, we keep city lots and larger yards looking sharp.' },
  { name: 'Tecumseh', note: 'Reliable lawn care, beds and seasonal clean-ups for neighbourhoods across Tecumseh.' },
  { name: 'LaSalle', note: 'Tidy, dependable yard work for LaSalle homes, from new builds to established gardens.' },
  { name: 'Amherstburg', note: 'Gardens and lawns that suit Amherstburg properties, big and small.' },
  { name: 'Essex', note: 'Care for Essex town lots and the larger properties around it.' },
  { name: 'Kingsville', note: 'Landscaping and seasonal upkeep for homes across Kingsville and the lakeshore.' },
  { name: 'Leamington', note: 'Dependable service for Leamington homes and the surrounding countryside.' },
  { name: 'Lakeshore', note: 'Yard care for Lakeshore, Belle River and Stoney Point homeowners.' },
]

export const areaList = 'Windsor, Tecumseh, LaSalle, Amherstburg, Essex, Kingsville, Leamington, Lakeshore'

export type Service = {
  slug: string
  name: string
  kicker: string
  image: string
  copy: string
  intro: string
  includes: string[]
  body: string
  season: string
}

export const services: Service[] = [
  {
    slug: 'mulching', name: 'Mulching', kicker: 'Groundwork, refined',
    image: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1600&q=85',
    copy: 'A considered finish that protects your beds and sharpens every line.',
    intro: 'Fresh mulch is the quickest way to make a garden look finished. It also protects your plants, holds moisture through Windsor-Essex summers, and keeps weeds down.',
    includes: ['Bed edging and clean-up before mulching', 'Weed removal', 'Even spreading at the right depth', 'Careful placement around plants, trees and borders', 'Tidy-up of walkways and driveways when we leave'],
    body: 'We prepare each bed properly before the mulch goes down, so the result looks crisp and lasts. Whether you have a single front bed or a whole property of gardens, we keep the lines clean and the finish even.',
    season: 'Best in spring, with a refresh in fall.',
  },
  {
    slug: 'garden-building', name: 'Garden Building', kicker: 'Spaces that belong',
    image: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1600&q=85',
    copy: 'Purposeful outdoor rooms built for long lunches, late evenings, and quiet mornings.',
    intro: 'We design and build garden beds and outdoor spaces that suit how you actually use your yard, and that are straightforward to look after.',
    includes: ['Planning the layout with you', 'Bed shaping and soil preparation', 'Planting and placement', 'Edging and finishing', 'Advice on keeping it healthy'],
    body: 'From a first new bed to a full front-yard refresh, we start with a conversation about your space, your sun and your budget. Then we do the work carefully and leave the site clean.',
    season: 'Most projects run from spring through early fall.',
  },
  {
    slug: 'lawn-cutting', name: 'Lawn Cutting', kicker: 'The weekly ritual',
    image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1600&q=85',
    copy: 'A meticulous cut and clean edge, delivered with the same care every time.',
    intro: 'A regular cut keeps your lawn thick, even and healthy. We show up when we say we will, and the lawn looks right when we leave.',
    includes: ['Mowing at the correct height', 'Trimming along fences, beds and structures', 'Clean edging along walks and driveways', 'Blowing clippings off hard surfaces', 'Weekly or bi-weekly visits'],
    body: 'Consistent care matters more than anything else for a good lawn. We keep a steady schedule so you never have to think about it.',
    season: 'Regular visits from spring through late fall.',
  },
  {
    slug: 'sod-installation', name: 'Sod Installation', kicker: 'Instant composure',
    image: 'https://images.unsplash.com/photo-1599685315640-5b6c5ccf5e0e?auto=format&fit=crop&w=1600&q=85',
    copy: 'Fresh, seamless turf installed with an eye for healthy roots and lasting colour.',
    intro: 'New sod gives you a full, green lawn in a day. Getting the preparation right is what makes it take root and last.',
    includes: ['Removing old turf and debris', 'Grading and soil preparation', 'Laying sod with tight, staggered seams', 'Rolling for good soil contact', 'Watering guidance to help it establish'],
    body: 'We handle the whole job, from clearing the area to laying the final piece. We leave you with clear instructions so your new lawn gets the best start.',
    season: 'Best in spring and early fall, when it is cooler.',
  },
  {
    slug: 'snow-shoveling', name: 'Snow Shoveling', kicker: 'Winter, handled',
    image: 'https://images.unsplash.com/photo-1548777123-5dbe8a4f7a3e?auto=format&fit=crop&w=1600&q=85',
    copy: 'Quiet, dependable clearing that keeps your home welcoming through every storm.',
    intro: 'When the snow falls, we clear your driveway, walkways and steps so you can get out safely and your home stays welcoming.',
    includes: ['Driveway and walkway clearing', 'Steps and entrances', 'Clear paths to your door and mailbox', 'Reliable response after snowfall', 'Seasonal or per-visit options'],
    body: 'Winter in Windsor-Essex can change quickly. We keep an eye on the forecast so your property is looked after when you need it most.',
    season: 'Winter, after snowfall.',
  },
]
