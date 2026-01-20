'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export interface PageTransitionProps {
    children: React.ReactNode;
    className?: string;
    mode?: 'fade' | 'slide' | 'scale' | 'slideUp';
}

// Animation variants for different transition modes
const transitionVariants = {
    fade: {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
            },
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    },
    slide: {
        initial: { opacity: 0, x: 20 },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
        exit: {
            opacity: 0,
            x: -20,
            transition: {
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    },
    slideUp: {
        initial: { opacity: 0, y: 30 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            },
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    },
    scale: {
        initial: { opacity: 0, scale: 0.98 },
        animate: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
        exit: {
            opacity: 0,
            scale: 0.98,
            transition: {
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    },
};

export function PageTransition({
    children,
    className,
    mode = 'slideUp',
}: PageTransitionProps) {
    const pathname = usePathname();
    const variants = transitionVariants[mode];

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                className={cn('w-full', className)}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={variants}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}

// Simple fade wrapper for individual elements
export interface FadeInProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    distance?: number;
    once?: boolean;
    threshold?: number;
}

export function FadeIn({
    children,
    className,
    delay = 0,
    duration = 0.6,
    direction = 'up',
    distance = 30,
    once = true,
    threshold = 0.1,
}: FadeInProps) {
    const directionOffset = {
        up: { y: distance },
        down: { y: -distance },
        left: { x: distance },
        right: { x: -distance },
        none: {},
    };

    const initial = {
        opacity: 0,
        ...directionOffset[direction],
    };

    const animate = {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            duration,
            delay,
            ease: [0.22, 1, 0.36, 1],
        },
    };

    return (
        <motion.div
            className={className}
            initial={initial}
            whileInView={animate}
            viewport={{ once, amount: threshold }}
        >
            {children}
        </motion.div>
    );
}

// Stagger container for lists of items
export interface StaggerContainerProps {
    children: React.ReactNode;
    className?: string;
    staggerDelay?: number;
    initialDelay?: number;
    once?: boolean;
}

export function StaggerContainer({
    children,
    className,
    staggerDelay = 0.1,
    initialDelay = 0.1,
    once = true,
}: StaggerContainerProps) {
    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount: 0.1 }}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: staggerDelay,
                        delayChildren: initialDelay,
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
}

// Stagger item to be used inside StaggerContainer
export interface StaggerItemProps {
    children: React.ReactNode;
    className?: string;
}

export function StaggerItem({ children, className }: StaggerItemProps) {
    return (
        <motion.div
            className={className}
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
}

// Parallax wrapper for scroll-based parallax effects
export interface ParallaxProps {
    children: React.ReactNode;
    className?: string;
    speed?: number; // Negative values scroll faster, positive slower
    offset?: number;
}

export function Parallax({
    children,
    className,
    speed = 0.5,
    offset = 0,
}: ParallaxProps) {
    return (
        <motion.div
            className={className}
            initial={{ y: offset }}
            style={{
                y: offset,
            }}
            whileInView={{
                y: offset - 50 * speed,
                transition: {
                    type: 'tween',
                    ease: 'linear',
                },
            }}
            viewport={{ once: false, amount: 'some' }}
        >
            {children}
        </motion.div>
    );
}

export default PageTransition;
