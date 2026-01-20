'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui';

export interface HeroProps {
    headline?: string;
    subheadline?: string;
    ctaText?: string;
    ctaHref?: string;
    secondaryCtaText?: string;
    secondaryCtaHref?: string;
    backgroundImage?: string;
    backgroundAlt?: string;
    overlayOpacity?: number;
    className?: string;
}

export function Hero({
    headline = 'Experience Equestrian Excellence',
    subheadline = 'Where timeless tradition meets modern luxury. Discover a world of refined horsemanship, exceptional training, and unforgettable moments at our exclusive equestrian sanctuary.',
    ctaText = 'Begin Your Journey',
    ctaHref = '/membership',
    secondaryCtaText = 'Explore Our World',
    secondaryCtaHref = '/about',
    backgroundImage = 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=2942&auto=format&fit=crop',
    backgroundAlt = 'Majestic horse in golden sunset light',
    overlayOpacity = 0.5,
    className,
}: HeroProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const containerRef = useRef<HTMLElement>(null);

    // Parallax effect using scroll position
    const { scrollY } = useScroll();
    const smoothScrollY = useSpring(scrollY, { stiffness: 100, damping: 30 });

    // Parallax transforms - subtle movement
    const backgroundY = useTransform(smoothScrollY, [0, 1000], [0, 150]);
    const contentOpacity = useTransform(scrollY, [0, 400], [1, 0]);
    const contentY = useTransform(smoothScrollY, [0, 400], [0, 100]);

    // Handle image load for smooth reveal
    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section
            ref={containerRef}
            className={cn(
                'relative w-full min-h-screen overflow-hidden',
                'flex items-center justify-center',
                className
            )}
            aria-label="Hero section"
        >
            {/* Background Image with Parallax */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ y: backgroundY }}
            >
                <Image
                    src={backgroundImage}
                    alt={backgroundAlt}
                    fill
                    priority
                    quality={90}
                    sizes="100vw"
                    className={cn(
                        'object-cover object-center',
                        'transition-transform duration-[1.5s] ease-out',
                        isLoaded ? 'scale-100' : 'scale-110'
                    )}
                    onLoad={() => setIsLoaded(true)}
                />

                {/* Gradient Overlays for depth and readability */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: `linear-gradient(
              to bottom,
              rgba(42, 31, 26, ${overlayOpacity * 0.3}) 0%,
              rgba(42, 31, 26, ${overlayOpacity}) 40%,
              rgba(42, 31, 26, ${overlayOpacity * 0.9}) 70%,
              rgba(42, 31, 26, ${overlayOpacity * 1.1}) 100%
            )`,
                    }}
                />

                {/* Side vignette for cinematic feel */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: `radial-gradient(
              ellipse at center,
              transparent 0%,
              transparent 50%,
              rgba(42, 31, 26, 0.4) 100%
            )`,
                    }}
                />
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
                {/* Subtle gold accent line at top */}
                <motion.div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-accent-500/60 to-transparent"
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={isLoaded ? { scaleY: 1, opacity: 1 } : {}}
                    transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
                    style={{ transformOrigin: 'top' }}
                />

                {/* Corner accents */}
                <motion.div
                    className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-accent-500/30"
                    initial={{ opacity: 0, x: -20, y: -20 }}
                    animate={isLoaded ? { opacity: 1, x: 0, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 1 }}
                />
                <motion.div
                    className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-accent-500/30"
                    initial={{ opacity: 0, x: 20, y: -20 }}
                    animate={isLoaded ? { opacity: 1, x: 0, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 1 }}
                />
            </div>

            {/* Main Content */}
            <motion.div
                className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12"
                style={{ opacity: contentOpacity, y: contentY }}
            >
                <div className="text-center">
                    {/* Eyebrow text */}
                    <motion.div
                        className="mb-6 sm:mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <span className="inline-flex items-center gap-3 text-accent-400 text-xs sm:text-sm font-sans font-medium uppercase tracking-[0.25em]">
                            <span className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-accent-400" />
                            Est. 1985
                            <span className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-accent-400" />
                        </span>
                    </motion.div>

                    {/* Glassmorphism Card */}
                    <motion.div
                        className={cn(
                            'relative mx-auto max-w-4xl',
                            'px-6 py-10 sm:px-12 sm:py-14 lg:px-16 lg:py-16',
                            'bg-white/5 backdrop-blur-md',
                            'border border-white/10',
                            'rounded-2xl',
                            'shadow-2xl shadow-black/20'
                        )}
                        initial={{ opacity: 0, y: 40, scale: 0.98 }}
                        animate={isLoaded ? { opacity: 1, y: 0, scale: 1 } : {}}
                        transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
                    >
                        {/* Subtle glow effect behind card */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-accent-500/10 via-transparent to-accent-500/10 rounded-2xl blur-xl -z-10" />

                        {/* Headline */}
                        <motion.h1
                            className={cn(
                                'font-serif font-medium',
                                'text-3xl sm:text-5xl md:text-6xl lg:text-7xl',
                                'leading-[1.1] tracking-tight',
                                'text-cream-50',
                                'mb-6 sm:mb-8'
                            )}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <span className="block">{headline.split(' ').slice(0, 2).join(' ')}</span>
                            <span className="block mt-2 bg-gradient-to-r from-accent-400 via-accent-500 to-accent-400 bg-clip-text text-transparent">
                                {headline.split(' ').slice(2).join(' ')}
                            </span>
                        </motion.h1>

                        {/* Decorative divider */}
                        <motion.div
                            className="flex items-center justify-center gap-4 mb-6 sm:mb-8"
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={isLoaded ? { opacity: 1, scaleX: 1 } : {}}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <span className="w-12 sm:w-20 h-px bg-gradient-to-r from-transparent to-accent-500/60" />
                            <svg
                                className="w-4 h-4 sm:w-5 sm:h-5 text-accent-500"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                            </svg>
                            <span className="w-12 sm:w-20 h-px bg-gradient-to-l from-transparent to-accent-500/60" />
                        </motion.div>

                        {/* Subheadline */}
                        <motion.p
                            className={cn(
                                'font-sans text-base sm:text-lg lg:text-xl',
                                'leading-relaxed',
                                'text-cream-100/80',
                                'max-w-2xl mx-auto',
                                'mb-8 sm:mb-10'
                            )}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.9 }}
                        >
                            {subheadline}
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 1.1 }}
                        >
                            <Button
                                variant="accent"
                                size="lg"
                                href={ctaHref}
                                className="w-full sm:w-auto min-w-[200px]"
                            >
                                {ctaText}
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                href={secondaryCtaHref}
                                className="w-full sm:w-auto min-w-[200px] border-cream-100/30 text-cream-100 hover:bg-cream-100/10 hover:text-cream-50"
                            >
                                {secondaryCtaText}
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-10"
                initial={{ opacity: 0, y: -20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.5 }}
            >
                <motion.button
                    className={cn(
                        'flex flex-col items-center gap-2',
                        'text-cream-100/60 hover:text-cream-100',
                        'transition-colors duration-300',
                        'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-950'
                    )}
                    onClick={() => {
                        window.scrollTo({
                            top: window.innerHeight,
                            behavior: 'smooth',
                        });
                    }}
                    aria-label="Scroll to explore"
                >
                    <span className="text-xs font-sans uppercase tracking-widest">
                        Scroll to Explore
                    </span>
                    <motion.div
                        className="w-6 h-10 rounded-full border-2 border-current p-1"
                        animate={{ y: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <motion.div
                            className="w-1.5 h-1.5 bg-accent-500 rounded-full mx-auto"
                            animate={{ y: [0, 16, 0], opacity: [1, 0.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        />
                    </motion.div>
                </motion.button>
            </motion.div>

            {/* Bottom Gradient Transition */}
            <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-48 bg-gradient-to-t from-cream-50 dark:from-primary-950 to-transparent z-[5] pointer-events-none" />
        </section>
    );
}

export default Hero;
