export interface NavDropdownItem {
  title: string;
  href: string;
  badge?: string;
  isExternal?: boolean;
}

export interface NavItem {
  id: string;
  title: string;
  href: string;
  dropdown?: NavDropdownItem[];
}

export interface ContentCardItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  image: string;
  aspectRatio: 'square' | 'video' | 'banner';
  badge?: string;
  category?: string;
}

export interface SectionData {
  id: string;
  type: 'grid' | 'hero' | 'banner' | 'holiday';
  title?: string;
  subtitle?: string;
  headerLogo?: string;
  columns?: number;
  theme: 'light' | 'dark' | 'midnight';
  backgroundColor: string;
  cards: ContentCardItem[];
}

export interface HeroBannerData {
  id: string;
  title: string;
  tagline: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  bgImage: string;
  logoImage: string;
  rating?: string;
  releaseDate?: string;
}

export const NAV_ITEMS: NavItem[] = [
  {
    id: 'disneyplus',
    title: 'DISNEY+',
    href: 'https://www.disneyplus.com',
    dropdown: [
      { title: 'Home', href: 'https://www.disneyplus.com' },
      { title: 'Explore Disney+', href: 'https://www.disneyplus.com/explore' },
      { title: 'The Disney Bundle', href: 'https://www.disneyplus.com/welcome/disney-hulu-espn-bundle', badge: 'Popular' }
    ]
  },
  {
    id: 'parks',
    title: 'PARKS & TRAVEL',
    href: 'https://disneyparks.disney.go.com/',
    dropdown: [
      { title: 'Walt Disney World Resort', href: 'https://disneyworld.disney.go.com/' },
      { title: 'Disneyland Resort', href: 'https://disneyland.disney.go.com/' },
      { title: 'Disney Cruise Line', href: 'https://disneycruise.disney.go.com/' },
      { title: 'Aulani - A Disney Resort & Spa', href: 'https://www.disneyaulani.com/' },
      { title: 'Adventures by Disney', href: 'https://www.adventuresbydisney.com/' },
      { title: 'Disney Vacation Club', href: 'https://disneyvacationclub.disney.go.com/' },
      { title: 'All Parks & Travel', href: 'https://disneyparks.disney.go.com/' }
    ]
  },
  {
    id: 'movies',
    title: 'MOVIES',
    href: 'https://movies.disney.com',
    dropdown: [
      { title: 'Movies Home', href: 'https://movies.disney.com' },
      { title: 'All Movies', href: 'https://movies.disney.com/all-movies' },
      { title: 'Movies Anywhere', href: 'https://moviesanywhere.com/collection/disney-collection' },
      { title: '20th Century Studios', href: 'https://www.20thcenturystudios.com/' }
    ]
  },
  {
    id: 'shop',
    title: 'SHOP',
    href: 'https://www.disneystore.com',
    dropdown: [
      { title: 'Shop Home', href: 'https://www.disneystore.com' },
      { title: 'Sale', href: 'https://www.disneystore.com/sale-content/' },
      { title: 'Clothes', href: 'https://www.disneystore.com/clothing-content' },
      { title: 'Accessories', href: 'https://www.disneystore.com/accessories-content' },
      { title: 'Toys', href: 'https://www.disneystore.com/toy-shop-content' },
      { title: 'Shop All', href: 'https://www.disneystore.com/' }
    ]
  },
  {
    id: 'more',
    title: 'MORE',
    href: '#',
    dropdown: [
      { title: 'D23: The Official Disney Fan Club', href: 'https://d23.com/' },
      { title: 'Live Shows', href: 'https://liveshows.disney.com/' },
      { title: 'Disney on Broadway', href: 'https://liveshows.disney.com/' },
      { title: 'Disney on Ice', href: 'https://www.disneyonice.com/' },
      { title: 'Music', href: 'https://disneymusic.disney.com/' }
    ]
  }
];

export const MOBILE_QUICK_NAV = [
  { title: 'Disney+', href: 'https://www.disneyplus.com' },
  { title: 'Shop', href: 'https://www.disneystore.com' },
  { title: 'Parks & Travel', href: 'https://disneyparks.disney.go.com/' },
  { title: 'Movies', href: 'https://movies.disney.com' }
];

export const HERO_BANNER: HeroBannerData = {
  id: 'hero-hexed',
  title: 'Hexed',
  tagline: 'Things are getting witchy!',
  description: "Get your tickets now for Disney's Hexed, exclusively in theaters November 25.",
  primaryCtaText: 'Get Tickets',
  primaryCtaLink: 'https://movies.disney.com/hexed',
  secondaryCtaText: 'Learn More',
  secondaryCtaLink: 'https://movies.disney.com/hexed',
  bgImage: '/assets/hero_hexed.jpeg',
  logoImage: '/assets/logo_hexed.png',
  releaseDate: 'In Theaters November 25'
};

export const BRAND_HUBS = [
  { name: 'Disney', logo: 'DISNEY', bg: 'linear-gradient(180deg, #1e2338 0%, #111422 100%)' },
  { name: 'Pixar', logo: 'PIXAR', bg: 'linear-gradient(180deg, #1e2338 0%, #111422 100%)' },
  { name: 'Marvel', logo: 'MARVEL', bg: 'linear-gradient(180deg, #1e2338 0%, #111422 100%)' },
  { name: 'Star Wars', logo: 'STAR WARS', bg: 'linear-gradient(180deg, #1e2338 0%, #111422 100%)' },
  { name: 'National Geographic', logo: 'NAT GEO', bg: 'linear-gradient(180deg, #1e2338 0%, #111422 100%)' },
  { name: '20th Century', logo: '20TH CENTURY', bg: 'linear-gradient(180deg, #1e2338 0%, #111422 100%)' }
];

export const HOMEPAGE_SECTIONS: SectionData[] = [
  {
    id: 'featured-row',
    type: 'grid',
    columns: 4,
    theme: 'light',
    backgroundColor: '#F1F2F3',
    cards: [
      {
        id: 'percy-jackson-s3',
        title: 'Percy Jackson and the Olympians',
        description: 'The first 2 episodes of season 3 are now available on Disney+!',
        ctaText: 'Available on Disney+',
        ctaLink: 'https://www.disneyplus.com/browse/entity-f1c31566-ec05-4d30-b23f-3177442233f4',
        image: '/assets/percy_jackson_s3.jpeg',
        aspectRatio: 'square',
        category: 'Disney+ Original'
      },
      {
        id: 'moana-live-action',
        title: 'Moana',
        description: 'The ocean is calling. Join Moana, Maui, Heihei, and Pua on an unforgettable adventure, now streaming on Disney+!',
        ctaText: 'Available on Disney+',
        ctaLink: 'https://www.disneyplus.com/browse/entity-46bee9e1-869a-4a04-a145-de2c28552866',
        image: '/assets/moana_live_action.jpeg',
        aspectRatio: 'square',
        category: 'Streaming Now'
      },
      {
        id: 'disney-store-toys',
        title: 'Disney Store',
        description: 'Shop the newest top toys, apparel, home decor, and collectibles from across the worlds of Disney.',
        ctaText: 'Shop Now',
        ctaLink: 'https://www.disneystore.com/toys-plush/top-toys/',
        image: '/assets/disneystore_toptoys.jpeg',
        aspectRatio: 'square',
        category: 'Official Merchandise'
      },
      {
        id: 'wdw-package-offer',
        title: 'Walt Disney World® Resort',
        description: 'Save up to $200 per night on a 4-night, 4-day room and ticket package at select Disney Resort hotels.',
        ctaText: 'Learn More',
        ctaLink: 'https://disneyworld.disney.go.com/special-offers/spring-2027-package-offer/',
        image: '/assets/wdw_package_offer.jpeg',
        aspectRatio: 'square',
        category: 'Parks & Vacations'
      }
    ]
  },
  {
    id: 'celebrate-the-magic',
    type: 'holiday',
    headerLogo: '/assets/celebrate_magic_logo.png',
    title: 'Celebrate the Magic',
    columns: 4,
    theme: 'midnight',
    backgroundColor: '#09233c',
    cards: [
      {
        id: 'invisible-horse',
        title: 'A Disney Holiday Short: The Invisible Horse',
        description: 'Just when Jack begins to think he’s too old for Christmas, he ends up befriending an invisible creature that reminds him of what makes Christmas so magical.',
        ctaText: 'Watch Now',
        ctaLink: 'https://www.disneyplus.com',
        image: '/assets/invisible_horse.jpeg',
        aspectRatio: 'square'
      },
      {
        id: 'holiday-magic-giving',
        title: 'Disney Holiday Magic',
        description: 'Join us and help make the holidays magic for kids and families when it’s needed most.',
        ctaText: 'Learn More',
        ctaLink: 'https://impact.disney.com',
        image: '/assets/holiday_magic.jpeg',
        aspectRatio: 'square'
      },
      {
        id: 'holiday-magic-shop',
        title: 'The Holiday Magic Shop',
        description: 'Find festive ornaments, matching sleepwear, gifts for the entire family, and holiday keepsakes.',
        ctaText: 'Shop DisneyStore.com',
        ctaLink: 'https://www.disneystore.com/holiday-shop/',
        image: '/assets/holiday_magic_shop.jpeg',
        aspectRatio: 'square'
      },
      {
        id: 'disney-hulu-holidays',
        title: 'Disney+ Hulu Holidays',
        description: 'Celebrate the season with heartwarming holiday favorites, brand-new original specials, and seasonal classics.',
        ctaText: 'Stream Now',
        ctaLink: 'https://www.disneyplus.com',
        image: '/assets/hulu_disney_holidays.jpeg',
        aspectRatio: 'square'
      }
    ]
  },
  {
    id: 'explore-more-disneyplus',
    type: 'grid',
    title: 'Explore More Disney+',
    columns: 3,
    theme: 'dark',
    backgroundColor: '#054553',
    cards: [
      {
        id: 'toy-story-5',
        title: 'Playtime starts now! Toy Story 5',
        description: 'Woody, Buzz, and the gang embark on their wildest and most heartfelt mission yet, streaming on Disney+.',
        ctaText: 'Available Now',
        ctaLink: 'https://www.disneyplus.com',
        image: '/assets/toystory5.jpeg',
        aspectRatio: 'video',
        category: 'Pixar Animation Studios'
      },
      {
        id: 'proud-family-wizmas',
        title: 'A Proud Family Wizmas',
        description: "It's beginning to look a LOT like Wizmas y'all! Watch the all-new festive musical special.",
        ctaText: 'Available Now',
        ctaLink: 'https://www.disneyplus.com',
        image: '/assets/proudfamily_wizmas.jpeg',
        aspectRatio: 'video',
        category: 'Disney Channel Original'
      },
      {
        id: 'avengers-encore',
        title: 'Avengers: Endgame Encore',
        description: 'Stream the culmination of 22 interconnected Marvel Studios movies with unprecedented IMAX enhanced visuals and bonus content.',
        ctaText: 'Stream Now',
        ctaLink: 'https://www.disneyplus.com',
        image: '/assets/avengers_encore.jpeg',
        aspectRatio: 'video',
        category: 'Marvel Studios'
      }
    ]
  },
  {
    id: 'vacation-with-disney-parks',
    type: 'grid',
    title: 'Vacation with Disney Parks',
    columns: 3,
    theme: 'light',
    backgroundColor: '#F1F2F3',
    cards: [
      {
        id: 'wdw-spring-hotel',
        title: 'Walt Disney World® Resort',
        description: 'Spring into the new year and save up to 25% on select rooms with the Disney Resorts Collection.',
        ctaText: 'Learn More',
        ctaLink: 'https://disneyworld.disney.go.com/',
        image: '/assets/wdw_spring_offer.jpeg',
        aspectRatio: 'video',
        category: 'Florida Destination'
      },
      {
        id: 'dlr-winter-hotel',
        title: 'Disneyland® Resort',
        description: 'Experience pure California magic and enjoy special ticket savings and premier hotel packages in Anaheim.',
        ctaText: 'Learn More',
        ctaLink: 'https://disneyland.disney.go.com/',
        image: '/assets/dlr_winter_offer.jpeg',
        aspectRatio: 'video',
        category: 'California Destination'
      },
      {
        id: 'dcl-cruise-offer',
        title: 'Disney Cruise Line',
        description: 'Sail away on unforgettable voyages with special rates on select sailings across tropical island destinations.',
        ctaText: 'Learn More',
        ctaLink: 'https://disneycruise.disney.go.com/',
        image: '/assets/dcl_gty_offer.jpeg',
        aspectRatio: 'video',
        category: 'Cruise Line'
      }
    ]
  },
  {
    id: 'disney-partners',
    type: 'grid',
    title: 'Disney Partners',
    columns: 2,
    theme: 'light',
    backgroundColor: '#F1F2F3',
    cards: [
      {
        id: 'fortnite-x-disney',
        title: 'Link Your Accounts',
        description: 'Connect your eligible MyDisney and Epic Games accounts to unlock special rewards and cosmetics in Fortnite.',
        ctaText: 'Learn More',
        ctaLink: 'https://www.disney.com/fortnite',
        image: '/assets/fortnite_disney.jpeg',
        aspectRatio: 'video',
        category: 'Gaming'
      },
      {
        id: 'disney-x-formula1',
        title: 'Disney x Formula 1®: Fuel the Magic',
        description: 'Experience the exhilarating crossover of world championship motorsport speed and iconic Disney storytelling.',
        ctaText: 'Shop Now',
        ctaLink: 'https://www.disneystore.com/f1',
        image: '/assets/f1_disney.jpeg',
        aspectRatio: 'video',
        category: 'Motorsport Partnership'
      }
    ]
  }
];

export const SLIM_BUNDLE_BANNER = {
  id: 'disney-bundle-slim',
  title: 'The Disney Bundle',
  description: 'Stream your favorite stories, Originals, and more from Disney+ and Hulu with bundle plans starting at $11.99/mo. Terms apply**',
  ctaText: 'GET THEM BOTH',
  ctaLink: 'https://www.disneyplus.com/welcome/disney-hulu-espn-bundle',
  bgImage: '/assets/bundle_banner.jpeg',
  logoImage: '/assets/bundle_logo.png'
};

export const VISA_REWARDS_BANNER = {
  id: 'disney-visa-rewards',
  eyebrow: 'EXCLUSIVE FOR NEW DISNEY® INSPIRE VISA® CARDMEMBERS',
  heading: '$500 OFFER',
  description: 'After spending $1,000 on purchases in the first 3 months of account opening.',
  ctaText: 'LEARN MORE',
  ctaLink: 'https://disneyrewards.com/disney-inspire-credit-card-p/',
  bgImage: '/assets/visa_rewards_banner.jpeg'
};

export const FOOTER_ABOUT_LINKS = [
  { title: 'About Disney', href: 'https://www.thewaltdisneycompany.com/' },
  { title: 'Disney Help', href: 'https://help.disney.com' },
  { title: 'Careers', href: 'https://jobs.disneycareers.com' },
  { title: 'Contact Us', href: 'https://help.disney.com/contact-us' },
  { title: 'Advertise With Us', href: 'https://disneyadsales.com/' },
  { title: 'Disney® Inspire Visa® Card', href: 'https://disneyrewards.com' }
];

export const FOOTER_LEGAL_LINKS = [
  { title: 'Terms of Use', href: 'https://disneytermsofuse.com/' },
  { title: 'Additional Content Information', href: 'https://help.disney.com/article/dcom-legal-notices' },
  { title: 'Privacy Policy', href: 'https://privacy.thewaltdisneycompany.com/en/' },
  { title: 'Your US State Privacy Rights', href: 'https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/your-us-state-privacy-rights/' },
  { title: "Children's Online Privacy Policy", href: 'https://privacy.thewaltdisneycompany.com/en/for-parents/childrens-online-privacy-policy/' },
  { title: 'Your Privacy Choices', href: 'https://privacy.thewaltdisneycompany.com/en/dnssmpi/' },
  { title: 'Interest-Based Ads', href: 'https://privacy.thewaltdisneycompany.com/en/privacy-controls/online-tracking-and-advertising/' }
];

export const SEARCH_CATALOG = [
  { title: 'Hexed', type: 'Movie', year: '2026', link: 'https://movies.disney.com/hexed', image: '/assets/hero_hexed.jpeg' },
  { title: 'Percy Jackson and the Olympians', type: 'Series', year: '2026', link: 'https://www.disneyplus.com', image: '/assets/percy_jackson_s3.jpeg' },
  { title: 'Moana (Live-Action)', type: 'Movie', year: '2026', link: 'https://www.disneyplus.com', image: '/assets/moana_live_action.jpeg' },
  { title: 'Toy Story 5', type: 'Movie', year: '2026', link: 'https://movies.disney.com', image: '/assets/toystory5.jpeg' },
  { title: 'A Proud Family Wizmas', type: 'Special', year: '2026', link: 'https://www.disneyplus.com', image: '/assets/proudfamily_wizmas.jpeg' },
  { title: 'Avengers: Endgame Encore', type: 'Movie', year: '2026', link: 'https://www.disneyplus.com', image: '/assets/avengers_encore.jpeg' },
  { title: 'Walt Disney World Resort', type: 'Parks & Travel', year: 'Orlando, FL', link: 'https://disneyworld.disney.go.com', image: '/assets/wdw_spring_offer.jpeg' },
  { title: 'Disneyland Resort', type: 'Parks & Travel', year: 'Anaheim, CA', link: 'https://disneyland.disney.go.com', image: '/assets/dlr_winter_offer.jpeg' },
  { title: 'Disney Cruise Line', type: 'Cruise', year: 'Global', link: 'https://disneycruise.disney.go.com', image: '/assets/dcl_gty_offer.jpeg' },
  { title: 'The Invisible Horse: Holiday Short', type: 'Short Film', year: '2026', link: 'https://www.disneyplus.com', image: '/assets/invisible_horse.jpeg' },
  { title: 'Fortnite x Disney', type: 'Game Collab', year: '2026', link: 'https://www.disney.com/fortnite', image: '/assets/fortnite_disney.jpeg' },
  { title: 'Disney x Formula 1® Racing', type: 'Partnership', year: '2026', link: 'https://www.disneystore.com/f1', image: '/assets/f1_disney.jpeg' },
  { title: 'Disney Store Top Toys', type: 'Shop', year: 'Collectibles', link: 'https://www.disneystore.com', image: '/assets/disneystore_toptoys.jpeg' }
];
