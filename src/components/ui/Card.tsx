'use client';

import { forwardRef } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

export type CardVariant = 'glass' | 'solid' | 'outline' | 'elevated';

export interface CardProps extends HTMLMotionProps<'div'> {
    variant?: CardVariant;
    padding?: 'none' | 'sm' | 'md' | 'lg';
    hoverable?: boolean;
    clickable?: boolean;
    as?: 'div' | 'article' | 'section';
}

const variantStyles: Record<CardVariant, string> = {
    glass: `
    bg-white/70 dark:bg-primary-950/60
    backdrop-blur-xl
    border border-white/30 dark:border-cream-100/10
    shadow-lg shadow-black/5
  `,
    solid: `
    bg-cream-50 dark:bg-primary-900
    border border-cream-200 dark:border-primary-700
    shadow-md
  `,
    outline: `
    bg-transparent
    border-2 border-cream-300 dark:border-cream-100/20
  `,
    elevated: `
    bg-gradient-to-br from-cream-50 to-cream-100 dark:from-primary-900 dark:to-primary-950
    border border-cream-200/50 dark:border-primary-700/50
    shadow-xl shadow-black/10
  `,
};

const paddingStyles = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8 lg:p-10',
};

const Card = forwardRef<HTMLDivElement, CardProps>(
    (
        {
            variant = 'glass',
            padding = 'md',
            hoverable = false,
            clickable = false,
            as = 'div',
            className,
            children,
            ...props
        },
        ref
    ) => {
        const cardClasses = cn(
            // Base styles
            'rounded-xl overflow-hidden',
            'transition-all duration-300',
            // Ensure WCAG AA contrast for text
            'text-primary-900 dark:text-cream-100',
            // Variant styles
            variantStyles[variant],
            // Padding
            paddingStyles[padding],
            // Interactive states
            hoverable && 'hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-1',
            clickable && 'cursor-pointer',
            // Focus styles for keyboard navigation
            clickable && 'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2',
            className
        );

        const MotionComponent = motion[as] as typeof motion.div;

        return (
            <MotionComponent
                ref={ref}
                className={cardClasses}
                whileHover={hoverable ? { y: -4, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } } : undefined}
                whileTap={clickable ? { scale: 0.98 } : undefined}
                tabIndex={clickable ? 0 : undefined}
                role={clickable ? 'button' : undefined}
                {...props}
            >
                {children}
            </MotionComponent>
        );
    }
);

Card.displayName = 'Card';

// Card sub-components for composition
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
    ({ className, children, ...props }, ref) => (
        <div
            ref={ref}
            className={cn('mb-4 border-b border-cream-200/50 dark:border-cream-100/10 pb-4', className)}
            {...props}
        >
            {children}
        </div>
    )
);

CardHeader.displayName = 'CardHeader';

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
}

const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
    ({ className, children, ...props }, ref) => (
        <h3
            ref={ref}
            className={cn(
                'font-serif text-xl font-medium text-primary-950 dark:text-cream-50',
                className
            )}
            {...props}
        >
            {children}
        </h3>
    )
);

CardTitle.displayName = 'CardTitle';

export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
}

const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
    ({ className, children, ...props }, ref) => (
        <p
            ref={ref}
            className={cn('text-sm text-neutral-600 dark:text-cream-200/80', className)}
            {...props}
        >
            {children}
        </p>
    )
);

CardDescription.displayName = 'CardDescription';

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
    ({ className, children, ...props }, ref) => (
        <div ref={ref} className={cn('', className)} {...props}>
            {children}
        </div>
    )
);

CardContent.displayName = 'CardContent';

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
    ({ className, children, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                'mt-6 border-t border-cream-200/50 dark:border-cream-100/10 pt-4 flex items-center gap-4',
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
);

CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
