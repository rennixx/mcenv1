'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export type SpinnerSize = 'sm' | 'md' | 'lg' | 'xl';
export type SpinnerVariant = 'default' | 'gold' | 'dark' | 'light';

export interface LoadingSpinnerProps {
    size?: SpinnerSize;
    variant?: SpinnerVariant;
    className?: string;
    label?: string;
    fullScreen?: boolean;
}

const sizeClasses: Record<SpinnerSize, { container: string; icon: string; text: string }> = {
    sm: { container: 'w-8 h-8', icon: 'w-6 h-6', text: 'text-xs' },
    md: { container: 'w-12 h-12', icon: 'w-10 h-10', text: 'text-sm' },
    lg: { container: 'w-16 h-16', icon: 'w-14 h-14', text: 'text-base' },
    xl: { container: 'w-24 h-24', icon: 'w-20 h-20', text: 'text-lg' },
};

const variantColors: Record<SpinnerVariant, { primary: string; secondary: string; text: string }> = {
    default: {
        primary: 'stroke-primary-800',
        secondary: 'stroke-primary-200',
        text: 'text-primary-800',
    },
    gold: {
        primary: 'stroke-accent-500',
        secondary: 'stroke-accent-200',
        text: 'text-accent-600',
    },
    dark: {
        primary: 'stroke-primary-950',
        secondary: 'stroke-primary-400',
        text: 'text-primary-950',
    },
    light: {
        primary: 'stroke-cream-50',
        secondary: 'stroke-cream-50/30',
        text: 'text-cream-50',
    },
};

export function LoadingSpinner({
    size = 'md',
    variant = 'default',
    className,
    label,
    fullScreen = false,
}: LoadingSpinnerProps) {
    const { container, icon, text } = sizeClasses[size];
    const { primary, secondary, text: textColor } = variantColors[variant];

    const spinner = (
        <div className={cn('flex flex-col items-center justify-center gap-4', className)}>
            {/* Elegant circular spinner with horseshoe-inspired design */}
            <div className={cn('relative', container)}>
                {/* Background circle */}
                <svg
                    className={cn('absolute inset-0', icon)}
                    viewBox="0 0 50 50"
                    fill="none"
                    aria-hidden="true"
                >
                    <circle
                        cx="25"
                        cy="25"
                        r="20"
                        className={cn(secondary, 'opacity-40')}
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                </svg>

                {/* Animated spinning arc */}
                <motion.svg
                    className={cn('absolute inset-0', icon)}
                    viewBox="0 0 50 50"
                    fill="none"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 1.5,
                        ease: 'linear',
                        repeat: Infinity,
                    }}
                    aria-hidden="true"
                >
                    <circle
                        cx="25"
                        cy="25"
                        r="20"
                        className={primary}
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray="80 45"
                    />
                </motion.svg>

                {/* Inner decorative element - elegant diamond */}
                <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{
                        duration: 2,
                        ease: 'easeInOut',
                        repeat: Infinity,
                    }}
                >
                    <svg
                        className={cn('w-1/3 h-1/3', primary)}
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                    >
                        <path
                            d="M12 2L15 9H21L16 14L18 21L12 17L6 21L8 14L3 9H9L12 2Z"
                            fill="currentColor"
                            className="text-accent-500/20"
                        />
                    </svg>
                </motion.div>
            </div>

            {/* Loading text */}
            {label && (
                <motion.p
                    className={cn('font-sans font-medium tracking-wide', text, textColor)}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{
                        duration: 1.5,
                        ease: 'easeInOut',
                        repeat: Infinity,
                    }}
                >
                    {label}
                </motion.p>
            )}
        </div>
    );

    if (fullScreen) {
        return (
            <div
                className={cn(
                    'fixed inset-0 z-50',
                    'flex items-center justify-center',
                    'bg-cream-50/90 dark:bg-primary-950/90',
                    'backdrop-blur-sm'
                )}
                role="status"
                aria-label={label || 'Loading'}
            >
                {spinner}
            </div>
        );
    }

    return (
        <div role="status" aria-label={label || 'Loading'}>
            {spinner}
            <span className="sr-only">{label || 'Loading...'}</span>
        </div>
    );
}

// Skeleton loader for content placeholders
export interface SkeletonProps {
    className?: string;
    variant?: 'text' | 'circular' | 'rectangular';
    width?: string | number;
    height?: string | number;
    lines?: number;
}

export function Skeleton({
    className,
    variant = 'text',
    width,
    height,
    lines = 1,
}: SkeletonProps) {
    const baseClasses = cn(
        'animate-pulse',
        'bg-gradient-to-r from-cream-200 via-cream-100 to-cream-200',
        'dark:from-primary-800 dark:via-primary-700 dark:to-primary-800',
        'bg-[length:200%_100%]'
    );

    const variantClasses = {
        text: 'h-4 rounded',
        circular: 'rounded-full',
        rectangular: 'rounded-lg',
    };

    const style = {
        width: width || (variant === 'circular' ? height : '100%'),
        height: height || (variant === 'text' ? undefined : '100px'),
    };

    if (variant === 'text' && lines > 1) {
        return (
            <div className={cn('space-y-2', className)}>
                {Array.from({ length: lines }).map((_, i) => (
                    <motion.div
                        key={i}
                        className={cn(baseClasses, variantClasses.text)}
                        style={{
                            ...style,
                            width: i === lines - 1 ? '75%' : '100%', // Last line shorter
                        }}
                        animate={{
                            backgroundPosition: ['200% 0', '-200% 0'],
                        }}
                        transition={{
                            duration: 1.5,
                            ease: 'linear',
                            repeat: Infinity,
                            delay: i * 0.1,
                        }}
                    />
                ))}
            </div>
        );
    }

    return (
        <motion.div
            className={cn(baseClasses, variantClasses[variant], className)}
            style={style}
            animate={{
                backgroundPosition: ['200% 0', '-200% 0'],
            }}
            transition={{
                duration: 1.5,
                ease: 'linear',
                repeat: Infinity,
            }}
        />
    );
}

// Page loading overlay with luxury branding
export interface PageLoaderProps {
    message?: string;
}

export function PageLoader({ message = 'Loading...' }: PageLoaderProps) {
    return (
        <motion.div
            className={cn(
                'fixed inset-0 z-50',
                'flex flex-col items-center justify-center gap-8',
                'bg-cream-50 dark:bg-primary-950'
            )}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
            {/* Logo placeholder */}
            <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
                <h1 className="font-serif text-3xl font-medium text-primary-950 dark:text-cream-50 mb-2">
                    Majestic
                </h1>
                <p className="font-sans text-sm uppercase tracking-widest text-accent-600 dark:text-accent-400">
                    Equestrian Club
                </p>
            </motion.div>

            {/* Spinner */}
            <LoadingSpinner size="lg" variant="gold" label={message} />

            {/* Decorative elements */}
            <motion.div
                className="absolute inset-0 pointer-events-none overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-200/20 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-200/10 rounded-full blur-3xl" />
            </motion.div>
        </motion.div>
    );
}

export default LoadingSpinner;
