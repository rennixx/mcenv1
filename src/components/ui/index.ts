// UI Components barrel export
// This file provides a single import point for all UI components

// Button
export { Button } from './Button';
export type { ButtonProps, ButtonVariant, ButtonSize } from './Button';

// Card
export {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from './Card';
export type {
    CardProps,
    CardVariant,
    CardHeaderProps,
    CardTitleProps,
    CardDescriptionProps,
    CardContentProps,
    CardFooterProps,
} from './Card';

// Typography
export { H1, H2, H3, Lead, Text, Eyebrow } from './Typography';
export type { H1Props, H2Props, H3Props, LeadProps, TextProps, EyebrowProps } from './Typography';

// Layout / Container
export { Container, Section, Flex, Grid } from './Container';
export type {
    ContainerProps,
    SectionProps,
    SectionBackground,
    FlexProps,
    GridProps,
} from './Container';

// Navigation
export { NavigationOverlay } from './NavigationOverlay';
export type { NavigationOverlayProps } from './NavigationOverlay';

// Page Transitions & Animations
export {
    PageTransition,
    FadeIn,
    StaggerContainer,
    StaggerItem,
    Parallax,
} from './PageTransition';
export type {
    PageTransitionProps,
    FadeInProps,
    StaggerContainerProps,
    StaggerItemProps,
    ParallaxProps,
} from './PageTransition';

// Loading States
export { LoadingSpinner, Skeleton, PageLoader } from './LoadingSpinner';
export type {
    LoadingSpinnerProps,
    SpinnerSize,
    SpinnerVariant,
    SkeletonProps,
    PageLoaderProps,
} from './LoadingSpinner';
