'use client';

import { forwardRef } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { staggerContainer, fadeInUp } from '@/lib/animations';

// Container component for max-width and horizontal padding
export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    as?: 'div' | 'main' | 'section' | 'article' | 'header' | 'footer';
}

const containerSizes = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-none',
};

const Container = forwardRef<HTMLDivElement, ContainerProps>(
    ({ className, size = 'xl', as: Component = 'div', children, ...props }, ref) => {
        return (
            <Component
                ref={ref}
                className={cn(
                    'w-full mx-auto',
                    'px-4 sm:px-6 lg:px-8',
                    containerSizes[size],
                    className
                )}
                {...props}
            >
                {children}
            </Component>
        );
    }
);

Container.displayName = 'Container';

// Section component with consistent vertical spacing
export type SectionBackground = 'default' | 'cream' | 'dark' | 'accent' | 'gradient';

export interface SectionProps extends Omit<HTMLMotionProps<'section'>, 'children'> {
    background?: SectionBackground;
    spacing?: 'sm' | 'md' | 'lg' | 'xl';
    container?: boolean;
    containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    animate?: boolean;
    stagger?: boolean;
    children: React.ReactNode;
}

const backgroundStyles: Record<SectionBackground, string> = {
    default: 'bg-cream-50 dark:bg-primary-950',
    cream: 'bg-cream-100 dark:bg-primary-900',
    dark: 'bg-primary-950 text-cream-50',
    accent: 'bg-accent-50 dark:bg-accent-950/20',
    gradient: 'bg-gradient-to-br from-cream-50 via-cream-100 to-accent-50/30 dark:from-primary-950 dark:via-primary-900 dark:to-accent-950/20',
};

const spacingStyles = {
    sm: 'py-12 md:py-16',
    md: 'py-16 md:py-24',
    lg: 'py-20 md:py-32',
    xl: 'py-24 md:py-40',
};

const Section = forwardRef<HTMLDivElement, SectionProps>(
    (
        {
            background = 'default',
            spacing = 'lg',
            container = true,
            containerSize = 'xl',
            animate = false,
            stagger = false,
            className,
            children,
            ...props
        },
        ref
    ) => {
        const sectionClasses = cn(
            'relative overflow-hidden',
            backgroundStyles[background],
            spacingStyles[spacing],
            className
        );

        const content = container ? (
            <Container size={containerSize}>{children}</Container>
        ) : (
            children
        );

        if (animate || stagger) {
            return (
                <motion.section
                    ref={ref}
                    className={sectionClasses}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px', amount: 0.1 }}
                    variants={stagger ? staggerContainer : fadeInUp}
                    {...props}
                >
                    {content}
                </motion.section>
            );
        }

        return (
            <section ref={ref} className={sectionClasses} {...(props as React.HTMLAttributes<HTMLElement>)}>
                {content}
            </section>
        );
    }
);

Section.displayName = 'Section';

// Flex container for layout
export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
    direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse';
    align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
    justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
    wrap?: boolean;
    gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

const directionClasses = {
    row: 'flex-row',
    col: 'flex-col',
    'row-reverse': 'flex-row-reverse',
    'col-reverse': 'flex-col-reverse',
};

const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
    baseline: 'items-baseline',
};

const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly',
};

const gapClasses = {
    none: 'gap-0',
    sm: 'gap-2 sm:gap-4',
    md: 'gap-4 sm:gap-6',
    lg: 'gap-6 sm:gap-8',
    xl: 'gap-8 sm:gap-12',
};

const Flex = forwardRef<HTMLDivElement, FlexProps>(
    (
        {
            direction = 'row',
            align = 'stretch',
            justify = 'start',
            wrap = false,
            gap = 'md',
            className,
            children,
            ...props
        },
        ref
    ) => {
        return (
            <div
                ref={ref}
                className={cn(
                    'flex',
                    directionClasses[direction],
                    alignClasses[align],
                    justifyClasses[justify],
                    wrap && 'flex-wrap',
                    gapClasses[gap],
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Flex.displayName = 'Flex';

// Grid container
export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    cols?: 1 | 2 | 3 | 4 | 6 | 12;
    gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    responsive?: boolean;
}

const colClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    6: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6',
    12: 'grid-cols-4 sm:grid-cols-6 lg:grid-cols-12',
};

const Grid = forwardRef<HTMLDivElement, GridProps>(
    ({ cols = 3, gap = 'lg', responsive = true, className, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    'grid',
                    responsive ? colClasses[cols] : `grid-cols-${cols}`,
                    gapClasses[gap],
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Grid.displayName = 'Grid';

export { Container, Section, Flex, Grid };
