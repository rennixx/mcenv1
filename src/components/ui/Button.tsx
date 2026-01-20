'use client';

import { forwardRef } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

export type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    fullWidth?: boolean;
    children: React.ReactNode;
    href?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
    primary: `
    bg-gradient-to-br from-primary-800 to-primary-950 
    text-cream-50 
    shadow-md
    hover:from-primary-700 hover:to-primary-900
    hover:shadow-lg
    focus-visible:ring-primary-500
  `,
    secondary: `
    bg-gradient-to-br from-secondary-600 to-secondary-800
    text-cream-50
    shadow-md
    hover:from-secondary-500 hover:to-secondary-700
    hover:shadow-lg
    focus-visible:ring-secondary-500
  `,
    accent: `
    bg-gradient-to-br from-accent-500 to-accent-600
    text-primary-950
    shadow-md shadow-accent-500/20
    hover:from-accent-400 hover:to-accent-500
    hover:shadow-lg hover:shadow-accent-500/30
    focus-visible:ring-accent-500
  `,
    ghost: `
    bg-transparent
    text-primary-800
    hover:bg-primary-100/50
    dark:text-cream-100
    dark:hover:bg-cream-100/10
    focus-visible:ring-primary-500
  `,
    outline: `
    bg-transparent
    text-primary-800
    border-2 border-primary-800
    hover:bg-primary-800 hover:text-cream-50
    dark:text-cream-100 dark:border-cream-100
    dark:hover:bg-cream-100 dark:hover:text-primary-950
    focus-visible:ring-primary-500
  `,
};

const sizeStyles: Record<ButtonSize, string> = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-8 py-4 text-base gap-2.5',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = 'primary',
            size = 'md',
            isLoading = false,
            leftIcon,
            rightIcon,
            fullWidth = false,
            children,
            className,
            disabled,
            href,
            ...props
        },
        ref
    ) => {
        const isDisabled = disabled || isLoading;

        const buttonClasses = cn(
            // Base styles
            'relative inline-flex items-center justify-center',
            'font-sans font-medium tracking-wide uppercase',
            'rounded-md',
            'transition-colors duration-300',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
            'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
            // Variant styles
            variantStyles[variant],
            // Size styles
            sizeStyles[size],
            // Full width
            fullWidth && 'w-full',
            className
        );

        const content = (
            <>
                {/* Loading spinner */}
                {isLoading && (
                    <motion.span
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <svg
                            className="h-5 w-5 animate-spin"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="3"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                        </svg>
                    </motion.span>
                )}

                {/* Button content */}
                <span
                    className={cn(
                        'inline-flex items-center justify-center gap-inherit',
                        isLoading && 'invisible'
                    )}
                >
                    {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
                    {children}
                    {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
                </span>
            </>
        );

        // If href is provided, render as a link styled as button
        if (href && !isDisabled) {
            return (
                <motion.a
                    href={href}
                    className={buttonClasses}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    {content}
                </motion.a>
            );
        }

        return (
            <motion.button
                ref={ref}
                className={buttonClasses}
                disabled={isDisabled}
                whileHover={!isDisabled ? { scale: 1.02, y: -2 } : undefined}
                whileTap={!isDisabled ? { scale: 0.98 } : undefined}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                {...props}
            >
                {content}
            </motion.button>
        );
    }
);

Button.displayName = 'Button';

export { Button };
