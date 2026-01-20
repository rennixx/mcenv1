/**
 * Framer Motion animation variants and constants
 * for consistent, elegant animations throughout the site
 */

// Easing curves
export const easings = {
    // Smooth and elegant
    elegant: [0.22, 1, 0.36, 1],
    // Quick start, slow end
    easeOut: [0, 0, 0.2, 1],
    // Slow start, quick end
    easeIn: [0.4, 0, 1, 1],
    // Smooth both ways
    easeInOut: [0.4, 0, 0.2, 1],
    // Bouncy
    bounce: [0.68, -0.55, 0.265, 1.55],
} as const;

// Duration presets
export const durations = {
    fast: 0.15,
    normal: 0.3,
    slow: 0.5,
    elegant: 0.6,
    hero: 0.8,
} as const;

// Fade animations
export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: durations.normal,
            ease: easings.easeOut,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: durations.fast,
            ease: easings.easeIn,
        },
    },
};

// Fade up animations (most common for content reveal)
export const fadeInUp = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: durations.elegant,
            ease: easings.elegant,
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: durations.normal,
            ease: easings.easeIn,
        },
    },
};

// Fade down animation
export const fadeInDown = {
    hidden: {
        opacity: 0,
        y: -30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: durations.elegant,
            ease: easings.elegant,
        },
    },
};

// Fade in from left
export const fadeInLeft = {
    hidden: {
        opacity: 0,
        x: -50,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: durations.elegant,
            ease: easings.elegant,
        },
    },
};

// Fade in from right
export const fadeInRight = {
    hidden: {
        opacity: 0,
        x: 50,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: durations.elegant,
            ease: easings.elegant,
        },
    },
};

// Scale animations
export const scaleIn = {
    hidden: {
        opacity: 0,
        scale: 0.9,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: durations.normal,
            ease: easings.easeOut,
        },
    },
    exit: {
        opacity: 0,
        scale: 0.95,
        transition: {
            duration: durations.fast,
            ease: easings.easeIn,
        },
    },
};

// Stagger container for lists/grids
export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

// Fast stagger for smaller items
export const staggerContainerFast = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.05,
        },
    },
};

// Slow stagger for hero sections
export const staggerContainerSlow = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

// Stagger child item
export const staggerItem = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: durations.elegant,
            ease: easings.elegant,
        },
    },
};

// Hero text animation (letter by letter or word by word)
export const heroTextContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.03,
            delayChildren: 0.2,
        },
    },
};

export const heroTextChild = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: durations.slow,
            ease: easings.elegant,
        },
    },
};

// Image reveal animation
export const imageReveal = {
    hidden: {
        clipPath: 'inset(100% 0 0 0)',
        opacity: 0,
    },
    visible: {
        clipPath: 'inset(0% 0 0 0)',
        opacity: 1,
        transition: {
            duration: durations.hero,
            ease: easings.elegant,
        },
    },
};

// Slide overlay (for image hover effects)
export const slideOverlay = {
    hidden: {
        scaleY: 0,
        originY: 0,
    },
    visible: {
        scaleY: 1,
        transition: {
            duration: durations.normal,
            ease: easings.easeOut,
        },
    },
    exit: {
        scaleY: 0,
        originY: 1,
        transition: {
            duration: durations.normal,
            ease: easings.easeIn,
        },
    },
};

// Card hover animation
export const cardHover = {
    rest: {
        y: 0,
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.08)',
        transition: {
            duration: durations.normal,
            ease: easings.easeOut,
        },
    },
    hover: {
        y: -8,
        boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
        transition: {
            duration: durations.normal,
            ease: easings.easeOut,
        },
    },
};

// Button hover animation
export const buttonHover = {
    rest: {
        scale: 1,
        transition: {
            duration: durations.fast,
            ease: easings.easeOut,
        },
    },
    hover: {
        scale: 1.02,
        transition: {
            duration: durations.fast,
            ease: easings.easeOut,
        },
    },
    tap: {
        scale: 0.98,
        transition: {
            duration: durations.fast,
            ease: easings.easeOut,
        },
    },
};

// Navigation link underline animation
export const navLinkUnderline = {
    rest: {
        scaleX: 0,
        originX: 0,
    },
    hover: {
        scaleX: 1,
        transition: {
            duration: durations.normal,
            ease: easings.easeOut,
        },
    },
};

// Modal/Dialog animations
export const modalBackdrop = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: durations.normal,
            ease: easings.easeOut,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: durations.fast,
            ease: easings.easeIn,
        },
    },
};

export const modalContent = {
    hidden: {
        opacity: 0,
        scale: 0.95,
        y: 20,
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: durations.normal,
            ease: easings.easeOut,
        },
    },
    exit: {
        opacity: 0,
        scale: 0.95,
        y: 10,
        transition: {
            duration: durations.fast,
            ease: easings.easeIn,
        },
    },
};

// Parallax scroll effect values
export const parallaxSlow = {
    y: ['0%', '-10%'],
};

export const parallaxMedium = {
    y: ['0%', '-20%'],
};

export const parallaxFast = {
    y: ['0%', '-30%'],
};

// Page transition animations
export const pageTransition = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: durations.elegant,
            ease: easings.elegant,
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: durations.normal,
            ease: easings.easeIn,
        },
    },
};

// Scroll-triggered viewport settings
export const viewportSettings = {
    once: true,
    margin: '-100px',
    amount: 0.3,
} as const;

// Quick viewport for elements that should animate early
export const viewportEarly = {
    once: true,
    margin: '-50px',
    amount: 0.1,
} as const;
