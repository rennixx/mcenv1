'use client';

import { forwardRef } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { fadeInUp } from '@/lib/animations';

// Shared typography props
interface BaseTypographyProps {
    animate?: boolean;
    gradient?: boolean;
    balance?: boolean;
}

// H1 Component
export interface H1Props extends Omit<HTMLMotionProps<'h1'>, 'children'>, BaseTypographyProps {
    children: React.ReactNode;
}

const H1 = forwardRef<HTMLHeadingElement, H1Props>(
    ({ className, children, animate = false, gradient = false, balance = true, ...props }, ref) => {
        const classes = cn(
            'font-serif font-medium tracking-tight',
            'text-4xl sm:text-5xl lg:text-6xl xl:text-7xl',
            'leading-[1.1]',
            'text-primary-950 dark:text-cream-50',
            gradient && 'bg-gradient-to-r from-accent-500 via-accent-600 to-accent-700 bg-clip-text text-transparent',
            balance && 'text-balance',
            className
        );

        if (animate) {
            return (
                <motion.h1
                    ref={ref}
                    className={classes}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={fadeInUp}
                    {...props}
                >
                    {children}
                </motion.h1>
            );
        }

        return (
            <h1 ref={ref} className={classes} {...(props as React.HTMLAttributes<HTMLHeadingElement>)}>
                {children}
            </h1>
        );
    }
);

H1.displayName = 'H1';

// H2 Component
export interface H2Props extends Omit<HTMLMotionProps<'h2'>, 'children'>, BaseTypographyProps {
    children: React.ReactNode;
}

const H2 = forwardRef<HTMLHeadingElement, H2Props>(
    ({ className, children, animate = false, gradient = false, balance = true, ...props }, ref) => {
        const classes = cn(
            'font-serif font-medium tracking-tight',
            'text-3xl sm:text-4xl lg:text-5xl',
            'leading-[1.15]',
            'text-primary-950 dark:text-cream-50',
            gradient && 'bg-gradient-to-r from-accent-500 via-accent-600 to-accent-700 bg-clip-text text-transparent',
            balance && 'text-balance',
            className
        );

        if (animate) {
            return (
                <motion.h2
                    ref={ref}
                    className={classes}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={fadeInUp}
                    {...props}
                >
                    {children}
                </motion.h2>
            );
        }

        return (
            <h2 ref={ref} className={classes} {...(props as React.HTMLAttributes<HTMLHeadingElement>)}>
                {children}
            </h2>
        );
    }
);

H2.displayName = 'H2';

// H3 Component
export interface H3Props extends Omit<HTMLMotionProps<'h3'>, 'children'>, BaseTypographyProps {
    children: React.ReactNode;
}

const H3 = forwardRef<HTMLHeadingElement, H3Props>(
    ({ className, children, animate = false, gradient = false, balance = true, ...props }, ref) => {
        const classes = cn(
            'font-serif font-medium tracking-tight',
            'text-2xl sm:text-3xl lg:text-4xl',
            'leading-[1.2]',
            'text-primary-950 dark:text-cream-50',
            gradient && 'bg-gradient-to-r from-accent-500 via-accent-600 to-accent-700 bg-clip-text text-transparent',
            balance && 'text-balance',
            className
        );

        if (animate) {
            return (
                <motion.h3
                    ref={ref}
                    className={classes}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={fadeInUp}
                    {...props}
                >
                    {children}
                </motion.h3>
            );
        }

        return (
            <h3 ref={ref} className={classes} {...(props as React.HTMLAttributes<HTMLHeadingElement>)}>
                {children}
            </h3>
        );
    }
);

H3.displayName = 'H3';

// Lead paragraph
export interface LeadProps extends Omit<HTMLMotionProps<'p'>, 'children'> {
    children: React.ReactNode;
    animate?: boolean;
}

const Lead = forwardRef<HTMLParagraphElement, LeadProps>(
    ({ className, children, animate = false, ...props }, ref) => {
        const classes = cn(
            'font-sans text-lg sm:text-xl lg:text-2xl',
            'leading-relaxed',
            'text-neutral-600 dark:text-cream-200/90',
            'max-w-3xl',
            className
        );

        if (animate) {
            return (
                <motion.p
                    ref={ref}
                    className={classes}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={fadeInUp}
                    {...props}
                >
                    {children}
                </motion.p>
            );
        }

        return (
            <p ref={ref} className={classes} {...(props as React.HTMLAttributes<HTMLParagraphElement>)}>
                {children}
            </p>
        );
    }
);

Lead.displayName = 'Lead';

// Body text
export interface TextProps extends Omit<HTMLMotionProps<'p'>, 'children'> {
    children: React.ReactNode;
    size?: 'sm' | 'base' | 'lg';
    muted?: boolean;
    animate?: boolean;
}

const Text = forwardRef<HTMLParagraphElement, TextProps>(
    ({ className, children, size = 'base', muted = false, animate = false, ...props }, ref) => {
        const sizeClasses = {
            sm: 'text-sm',
            base: 'text-base',
            lg: 'text-lg',
        };

        const classes = cn(
            'font-sans leading-relaxed',
            sizeClasses[size],
            muted ? 'text-neutral-500 dark:text-cream-300/70' : 'text-neutral-700 dark:text-cream-100/90',
            className
        );

        if (animate) {
            return (
                <motion.p
                    ref={ref}
                    className={classes}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={fadeInUp}
                    {...props}
                >
                    {children}
                </motion.p>
            );
        }

        return (
            <p ref={ref} className={classes} {...(props as React.HTMLAttributes<HTMLParagraphElement>)}>
                {children}
            </p>
        );
    }
);

Text.displayName = 'Text';

// Eyebrow/Label text
export interface EyebrowProps extends Omit<HTMLMotionProps<'span'>, 'children'> {
    children: React.ReactNode;
    animate?: boolean;
}

const Eyebrow = forwardRef<HTMLSpanElement, EyebrowProps>(
    ({ className, children, animate = false, ...props }, ref) => {
        const classes = cn(
            'inline-block font-sans text-xs sm:text-sm font-semibold',
            'uppercase tracking-widest',
            'text-accent-600 dark:text-accent-400',
            className
        );

        if (animate) {
            return (
                <motion.span
                    ref={ref}
                    className={classes}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={fadeInUp}
                    {...props}
                >
                    {children}
                </motion.span>
            );
        }

        return (
            <span ref={ref} className={classes} {...(props as React.HTMLAttributes<HTMLSpanElement>)}>
                {children}
            </span>
        );
    }
);

Eyebrow.displayName = 'Eyebrow';

export { H1, H2, H3, Lead, Text, Eyebrow };
