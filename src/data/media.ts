export type GalleryFilter = 'all' | 'runway' | 'backstage' | 'looks'

export interface MediaAsset {
  id: string
  src: string
  alt: string
  category: Exclude<GalleryFilter, 'all'>
  objectPosition?: string
}

const unsplash = (path: string, width: number) =>
  `https://images.unsplash.com/${path}?auto=format&fit=crop&w=${width}&q=82`
const pexels = (id: string, width: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}&q=82`

export const media = {
  heroStreet: {
    id: 'hero-street',
    src: unsplash('photo-1697292309769-074960b2321b', 900),
    alt: 'Young boy wearing sunglasses in streetwear, photographed by DM David on Unsplash',
    category: 'looks',
  },
  heroKid: {
    id: 'hero-kid',
    src: pexels('38778561', 1100),
    alt: 'Stylish child in a denim jacket, photographed by Krishna Kids Photography on Pexels',
    category: 'looks',
  },
  heroPortrait: {
    id: 'hero-portrait',
    src: unsplash('photo-1630827225845-bd4c24771aca', 900),
    alt: 'Young boy in sunglasses and a white top, photographed by Shazaf Zafar on Unsplash',
    category: 'looks',
  },
  homeRunwayHost: {
    id: 'home-runway-host',
    src: '/home-runway-host.jpeg',
    alt: 'NexGen Runway Australia host speaking on stage with two young models',
    category: 'runway',
  },
  homeRunwayFormal: {
    id: 'home-runway-formal',
    src: '/home-runway-formal.jpeg',
    alt: 'Young models in formal white and black looks walking the NexGen Runway Australia stage',
    category: 'runway',
  },
  homeRunwayLineup: {
    id: 'home-runway-lineup',
    src: '/home-runway-lineup.jpeg',
    alt: 'Three young models in colourful fashion looks walking together at the NexGen Runway Australia event',
    category: 'runway',
  },
  runwayKids: {
    id: 'runway-kids',
    src: pexels('7303182', 1000),
    alt: 'Child model portrait in a high-fashion look, photographed by Norma Mortenson on Pexels',
    category: 'runway',
  },
  runwayAction: {
    id: 'runway-action',
    src: pexels('19288322', 1200),
    alt: 'Young child on a brightly lit show stage, photographed by Luis Zambrano on Pexels',
    category: 'runway',
  },
  runwayCrowd: {
    id: 'runway-crowd',
    src: pexels('9654722', 1200),
    alt: 'Children posing together in a fashion editorial, photographed by cottonbro studio on Pexels',
    category: 'runway',
  },
  backstage: {
    id: 'backstage',
    src: pexels('16582069', 900),
    alt: 'Young model getting ready backstage, photographed by Escola de Dança Razões do Corpo on Pexels',
    category: 'backstage',
  },
  wardrobe: {
    id: 'wardrobe',
    src: pexels('9393544', 1000),
    alt: 'Colorful fashion rack backstage, photographed by Mikhail Nilov on Pexels',
    category: 'backstage',
  },
  brandBigBayLittleBay: {
    id: 'brand-big-bay-little-bay',
    src: '/brand-big-bay-little-bay.jpeg',
    alt: 'Big Bay Little Bay kids fashion group photographed at the NexGen Runway Australia event',
    category: 'looks',
  },
  brandNVKids: {
    id: 'brand-nvkids',
    src: '/brand-nvkids.jpeg',
    alt: 'NVKids colourful activewear runway look photographed at the NexGen Runway Australia event',
    category: 'runway',
  },
  brandFierceAndFlawlessCouture: {
    id: 'brand-fierce-and-flawless-couture',
    src: '/brand-fierce-and-flawless-couture.jpeg',
    alt: 'Fierce and Flawless Couture formalwear runway group photographed at the NexGen Runway Australia event',
    category: 'runway',
  },
  brandLittleBaddies: {
    id: 'brand-little-baddies',
    src: '/brand-little-baddies.jpeg',
    alt: 'Little Baddies bold kidswear runway look photographed at the NexGen Runway Australia event',
    category: 'looks',
  },
  brandLittleBaddiesEvent: {
    id: 'brand-little-baddies-event',
    src: '/brand-little-baddies-runway.jpeg',
    alt: 'Little Baddies model walking the NexGen Runway Australia stage in a bold streetwear look',
    category: 'runway',
  },
  brandPreciousThreads: {
    id: 'brand-precious-threads',
    src: '/brand-precious-threads.jpeg',
    alt: 'Precious Threads coordinated performancewear looks photographed at the NexGen Runway Australia event',
    category: 'runway',
  },
  brandBigBayLittleBayEvent: {
    id: 'brand-big-bay-little-bay-event',
    src: '/brand-big-bay-little-bay-event.jpeg',
    alt: 'Big Bay Little Bay young models posing at the NexGen Runway Australia event',
    category: 'looks',
  },
  brandNVKidsEvent: {
    id: 'brand-nvkids-event',
    src: '/brand-nvkids-event.jpeg',
    alt: 'NVKids young models in coordinated white looks at the NexGen Runway Australia event',
    category: 'runway',
  },
  brandFierceAndFlawlessCoutureEvent: {
    id: 'brand-fierce-and-flawless-couture-event',
    src: '/brand-fierce-and-flawless-group.jpeg',
    alt: 'Fierce and Flawless Couture young models posing at the NexGen Runway Australia event',
    category: 'runway',
  },
  brandPreciousThreadsEvent: {
    id: 'brand-precious-threads-event',
    src: '/brand-precious-threads-event.jpeg',
    alt: 'Precious Threads young models in colourful performancewear at the NexGen Runway Australia event',
    category: 'runway',
  },
  brandAffriluxEvent: {
    id: 'brand-affrilux-event',
    src: '/brand-affrilux-event.jpeg',
    alt: 'Affrilux young models presenting colourful occasionwear at the NexGen Runway Australia event',
    category: 'looks',
  },
  galleryGoldSolo: {
    id: 'gallery-gold-solo',
    src: '/gallery-gold-solo.jpeg',
    alt: 'Young model in a gold and black runway look at the NexGen Runway Australia event',
    category: 'runway',
  },
  galleryCoutureTrio: {
    id: 'gallery-couture-trio',
    src: '/gallery-couture-trio.jpeg',
    alt: 'Three young models presenting couture dresses on the NexGen Runway Australia stage',
    category: 'runway',
  },
  galleryBlueDress: {
    id: 'gallery-blue-dress',
    src: '/gallery-blue-dress.jpeg',
    alt: 'Young model in a blue and white dress walking the NexGen Runway Australia stage',
    category: 'looks',
  },
  galleryStepAndRepeat: {
    id: 'gallery-step-and-repeat',
    src: '/gallery-step-and-repeat.jpeg',
    alt: 'NexGen Runway Australia guest posing at the branded step-and-repeat backdrop',
    category: 'backstage',
  },
  galleryPastelLineup: {
    id: 'gallery-pastel-lineup',
    src: '/gallery-pastel-lineup.jpeg',
    alt: 'Three young models in pastel looks posing on the NexGen Runway Australia stage',
    category: 'looks',
    objectPosition: 'center 22%',
  },
  galleryColorfulGroup: {
    id: 'gallery-colorful-group',
    src: '/gallery-colorful-group.jpeg',
    alt: 'Group of young models in colourful fashion looks at the NexGen Runway Australia event',
    category: 'backstage',
  },
  galleryPinkGroup: {
    id: 'gallery-pink-group',
    src: '/gallery-pink-group.jpeg',
    alt: 'Young models in pink and colourful outfits posing at the NexGen Runway Australia event',
    category: 'backstage',
  },
  galleryFormalGroup: {
    id: 'gallery-formal-group',
    src: '/gallery-formal-group.jpeg',
    alt: 'Young models in formal occasionwear posing on the NexGen Runway Australia stage',
    category: 'runway',
  },
  galleryWhiteLooks: {
    id: 'gallery-white-looks',
    src: '/gallery-white-looks.jpeg',
    alt: 'Young models in coordinated white looks at the NexGen Runway Australia event',
    category: 'runway',
  },
} satisfies Record<string, MediaAsset>

export const galleryMedia: MediaAsset[] = [
  media.galleryGoldSolo,
  media.galleryCoutureTrio,
  media.galleryBlueDress,
  media.galleryStepAndRepeat,
  media.galleryPastelLineup,
  media.galleryColorfulGroup,
  media.galleryPinkGroup,
  media.galleryFormalGroup,
  media.galleryWhiteLooks,
]

export const homeArchiveMedia: MediaAsset[] = [
  media.homeRunwayFormal,
  media.homeRunwayLineup,
  media.brandLittleBaddies,
  media.brandPreciousThreads,
]
