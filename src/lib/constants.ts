/**
 * Site-wide constants and configuration
 */

export const SITE_CONFIG = {
    name: 'Majestic Equestrian Club',
    shortName: 'Majestic',
    description:
        'Experience world-class equestrian excellence at Majestic Equestrian Club. Premier horse riding lessons, professional training, and exclusive membership.',
    url: 'https://majesticequestrian.com',
    email: 'info@majesticequestrian.com',
    phone: '+1 (555) 123-4567',
    address: {
        street: '1234 Countryside Lane',
        city: 'Wellington',
        state: 'FL',
        zip: '33414',
        country: 'United States',
    },
    social: {
        instagram: 'https://instagram.com/majesticequestrian',
        facebook: 'https://facebook.com/majesticequestrian',
        youtube: 'https://youtube.com/@majesticequestrian',
        twitter: 'https://twitter.com/majesticequestrian',
    },
    openingHours: {
        weekdays: '6:00 AM - 8:00 PM',
        weekends: '7:00 AM - 6:00 PM',
    },
} as const;

// Navigation links
export const NAV_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    {
        label: 'Programs',
        href: '/programs',
        children: [
            { label: 'Riding Lessons', href: '/programs/riding-lessons' },
            { label: 'Dressage Training', href: '/programs/dressage' },
            { label: 'Show Jumping', href: '/programs/show-jumping' },
            { label: 'Youth Programs', href: '/programs/youth' },
        ],
    },
    { label: 'Facilities', href: '/facilities' },
    { label: 'Membership', href: '/membership' },
    { label: 'Events', href: '/events' },
    { label: 'Contact', href: '/contact' },
] as const;

// Footer navigation
export const FOOTER_LINKS = {
    programs: [
        { label: 'Riding Lessons', href: '/programs/riding-lessons' },
        { label: 'Dressage Training', href: '/programs/dressage' },
        { label: 'Show Jumping', href: '/programs/show-jumping' },
        { label: 'Youth Programs', href: '/programs/youth' },
        { label: 'Summer Camp', href: '/programs/summer-camp' },
    ],
    about: [
        { label: 'Our Story', href: '/about' },
        { label: 'Our Team', href: '/about/team' },
        { label: 'Our Horses', href: '/about/horses' },
        { label: 'Facilities', href: '/facilities' },
        { label: 'Testimonials', href: '/testimonials' },
    ],
    members: [
        { label: 'Membership Options', href: '/membership' },
        { label: 'Member Portal', href: '/portal' },
        { label: 'Events Calendar', href: '/events' },
        { label: 'Club News', href: '/news' },
        { label: 'FAQ', href: '/faq' },
    ],
    legal: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Cookie Policy', href: '/cookies' },
    ],
} as const;

// Breakpoints (matching Tailwind defaults for JS usage)
export const BREAKPOINTS = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
} as const;

// Animation delays for staggered animations
export const STAGGER_DELAYS = {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15,
} as const;

// Z-index values for layering
export const Z_INDEX = {
    base: 0,
    dropdown: 10,
    sticky: 20,
    fixed: 30,
    modalBackdrop: 40,
    modal: 50,
    popover: 60,
    tooltip: 70,
} as const;

// Image placeholders and defaults
export const DEFAULT_IMAGES = {
    hero: '/images/hero-placeholder.jpg',
    horse: '/images/horse-placeholder.jpg',
    facility: '/images/facility-placeholder.jpg',
    team: '/images/team-placeholder.jpg',
    event: '/images/event-placeholder.jpg',
} as const;

// Form validation patterns
export const VALIDATION_PATTERNS = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^[\d\s\-+()]{10,}$/,
    name: /^[a-zA-Z\s'-]{2,50}$/,
} as const;
