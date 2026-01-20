'use client';

import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { NAV_LINKS } from '@/lib/constants';

export interface NavigationOverlayProps {
    isOpen: boolean;
    onClose: () => void;
    links?: typeof NAV_LINKS;
}

// Animation variants
const overlayVariants = {
    hidden: {
        opacity: 0,
        transition: {
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
        },
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const menuVariants = {
    hidden: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
        },
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
    exit: {
        opacity: 0,
        y: -10,
        transition: {
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const linkVariants = {
    hidden: {
        opacity: 0,
        y: 20,
        x: -10,
    },
    visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
        },
    },
    exit: {
        opacity: 0,
        y: -10,
        transition: {
            duration: 0.2,
        },
    },
};

export function NavigationOverlay({
    isOpen,
    onClose,
    links = NAV_LINKS,
}: NavigationOverlayProps) {
    // Handle escape key
    const handleKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        },
        [onClose]
    );

    // Lock body scroll and add escape listener when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, handleKeyDown]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div key="navigation-overlay">
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 z-40 bg-primary-950/60 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        onClick={onClose}
                        aria-hidden="true"
                    />

                    {/* Navigation panel */}
                    <motion.nav
                        className={cn(
                            'fixed inset-x-0 top-0 z-50',
                            'min-h-screen lg:min-h-0 lg:h-auto',
                            'bg-white/90 dark:bg-primary-950/95',
                            'backdrop-blur-xl',
                            'border-b border-cream-200/50 dark:border-cream-100/10',
                            'shadow-2xl'
                        )}
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Main navigation"
                    >
                        {/* Close button */}
                        <div className="flex justify-end p-4 lg:p-6">
                            <motion.button
                                className={cn(
                                    'p-3 rounded-full',
                                    'bg-cream-100 dark:bg-primary-800',
                                    'text-primary-800 dark:text-cream-100',
                                    'hover:bg-cream-200 dark:hover:bg-primary-700',
                                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500',
                                    'transition-colors duration-200'
                                )}
                                onClick={onClose}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label="Close navigation menu"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </motion.button>
                        </div>

                        {/* Navigation links */}
                        <motion.ul
                            className="flex flex-col items-center gap-2 px-6 pb-12 lg:pb-8"
                            variants={menuVariants}
                        >
                            {links.map((link, index) => (
                                <motion.li
                                    key={link.href}
                                    variants={linkVariants}
                                    className="w-full max-w-md"
                                >
                                    <a
                                        href={link.href}
                                        className={cn(
                                            'block py-4 px-6',
                                            'font-serif text-2xl lg:text-3xl font-medium text-center',
                                            'text-primary-900 dark:text-cream-50',
                                            'hover:text-accent-600 dark:hover:text-accent-400',
                                            'rounded-lg',
                                            'hover:bg-cream-100/50 dark:hover:bg-cream-100/5',
                                            'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500',
                                            'transition-colors duration-200'
                                        )}
                                        onClick={onClose}
                                        tabIndex={0}
                                    >
                                        {link.label}
                                    </a>

                                    {/* Sub-navigation for items with children */}
                                    {'children' in link && link.children && (
                                        <motion.ul
                                            className="mt-2 space-y-1"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            transition={{ delay: 0.1 * index, duration: 0.3 }}
                                        >
                                            {link.children.map((child) => (
                                                <li key={child.href}>
                                                    <a
                                                        href={child.href}
                                                        className={cn(
                                                            'block py-2 px-8',
                                                            'font-sans text-base text-center',
                                                            'text-neutral-600 dark:text-cream-200/80',
                                                            'hover:text-accent-600 dark:hover:text-accent-400',
                                                            'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-inset',
                                                            'transition-colors duration-200'
                                                        )}
                                                        onClick={onClose}
                                                        tabIndex={0}
                                                    >
                                                        {child.label}
                                                    </a>
                                                </li>
                                            ))}
                                        </motion.ul>
                                    )}
                                </motion.li>
                            ))}
                        </motion.ul>

                        {/* CTA Button */}
                        <motion.div
                            className="px-6 pb-8 flex justify-center"
                            variants={linkVariants}
                        >
                            <a
                                href="/contact"
                                className={cn(
                                    'inline-flex items-center justify-center',
                                    'px-8 py-4',
                                    'font-sans text-sm font-medium uppercase tracking-wide',
                                    'bg-gradient-to-br from-accent-500 to-accent-600',
                                    'text-primary-950',
                                    'rounded-md',
                                    'shadow-lg shadow-accent-500/20',
                                    'hover:from-accent-400 hover:to-accent-500',
                                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2',
                                    'transition-all duration-300'
                                )}
                                onClick={onClose}
                            >
                                Book a Visit
                            </a>
                        </motion.div>
                    </motion.nav>
                </>
            )}
        </AnimatePresence>
    );
}

export default NavigationOverlay;
