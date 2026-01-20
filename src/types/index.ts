/**
 * Common TypeScript types and interfaces for the Equestrian Club website
 */

// Navigation types
export interface NavItem {
    label: string;
    href: string;
    children?: NavItem[];
}

// Image types for Next.js Image component
export interface ImageData {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    blurDataURL?: string;
}

// SEO Metadata types
export interface SEOData {
    title: string;
    description: string;
    keywords?: string[];
    ogImage?: string;
    canonical?: string;
}

// Common component props
export interface BaseComponentProps {
    className?: string;
    children?: React.ReactNode;
}

// Section component props
export interface SectionProps extends BaseComponentProps {
    id?: string;
    fullWidth?: boolean;
    background?: 'cream' | 'white' | 'dark' | 'accent';
}

// Button variants
export type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends BaseComponentProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
    loading?: boolean;
    href?: string;
    onClick?: () => void;
}

// Card types
export interface CardProps extends BaseComponentProps {
    title?: string;
    description?: string;
    image?: ImageData;
    href?: string;
    featured?: boolean;
}

// Service/Program types
export interface Service {
    id: string;
    title: string;
    description: string;
    image: ImageData;
    features?: string[];
    price?: string;
    href: string;
}

// Testimonial types
export interface Testimonial {
    id: string;
    quote: string;
    author: string;
    role?: string;
    avatar?: ImageData;
    rating?: number;
}

// Team member types
export interface TeamMember {
    id: string;
    name: string;
    role: string;
    bio: string;
    image: ImageData;
    specialties?: string[];
    socialLinks?: {
        instagram?: string;
        linkedin?: string;
        email?: string;
    };
}

// Horse types
export interface Horse {
    id: string;
    name: string;
    breed: string;
    age: number;
    discipline: string[];
    image: ImageData;
    description?: string;
    achievements?: string[];
}

// Event types
export interface Event {
    id: string;
    title: string;
    date: string;
    time?: string;
    location?: string;
    description: string;
    image?: ImageData;
    category: 'competition' | 'clinic' | 'social' | 'training';
    registrationLink?: string;
}

// Contact form types
export interface ContactFormData {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
    preferredContact?: 'email' | 'phone';
}

// Membership tier types
export interface MembershipTier {
    id: string;
    name: string;
    price: string;
    period: 'monthly' | 'yearly';
    description: string;
    features: string[];
    highlighted?: boolean;
    cta: string;
}

// FAQ types
export interface FAQItem {
    question: string;
    answer: string;
    category?: string;
}

// Animation variants for Framer Motion
export interface AnimationVariants {
    hidden: object;
    visible: object;
    exit?: object;
}
