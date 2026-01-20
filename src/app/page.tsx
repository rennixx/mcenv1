import { Hero } from '@/components/sections';
import { Section, Container, H2, Lead, Grid, Card, CardContent, FadeIn } from '@/components/ui';

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <Hero />

      {/* Welcome Section - demonstrates smooth transition from hero */}
      <Section background="default" spacing="lg" className="relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <FadeIn>
            <span className="inline-block mb-4 text-accent-600 text-xs sm:text-sm font-sans font-medium uppercase tracking-[0.2em]">
              Welcome to Majestic
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <H2 className="mb-6">A Legacy of Excellence</H2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Lead className="mx-auto">
              For over three decades, Majestic Equestrian Club has been the premier destination
              for those who seek the extraordinary in horsemanship. Our world-class facilities
              and expert trainers create an unparalleled equestrian experience.
            </Lead>
          </FadeIn>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 lg:mt-24">
          <Grid cols={3} gap="lg">
            <FadeIn delay={0.1}>
              <Card variant="elevated" hoverable padding="lg" className="h-full">
                <CardContent>
                  <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-accent-100 to-accent-200 flex items-center justify-center">
                    <svg
                      className="w-7 h-7 text-accent-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <h3 className="font-serif text-xl font-medium text-primary-950 mb-3">
                    Expert Instruction
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Learn from internationally certified trainers with decades of experience
                    in dressage, show jumping, and classical horsemanship.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card variant="elevated" hoverable padding="lg" className="h-full">
                <CardContent>
                  <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-secondary-100 to-secondary-200 flex items-center justify-center">
                    <svg
                      className="w-7 h-7 text-secondary-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 className="font-serif text-xl font-medium text-primary-950 mb-3">
                    Premium Facilities
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    State-of-the-art indoor and outdoor arenas, pristine stables, and
                    luxurious member amenities set against 200 acres of countryside.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Card variant="elevated" hoverable padding="lg" className="h-full">
                <CardContent>
                  <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                    <svg
                      className="w-7 h-7 text-primary-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-serif text-xl font-medium text-primary-950 mb-3">
                    Exclusive Community
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Join a distinguished community of equestrian enthusiasts who share
                    your passion for excellence and the timeless art of riding.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          </Grid>
        </div>
      </Section>

      {/* Visual Break Section */}
      <Section background="cream" spacing="md" container={false}>
        <Container>
          <FadeIn>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-center">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-serif font-medium text-primary-950">200+</span>
                <span className="text-sm text-neutral-600 text-left leading-tight">Acres of<br />Pristine Land</span>
              </div>
              <div className="hidden sm:block w-px h-12 bg-primary-300/50" />
              <div className="flex items-center gap-3">
                <span className="text-4xl font-serif font-medium text-primary-950">35+</span>
                <span className="text-sm text-neutral-600 text-left leading-tight">Years of<br />Excellence</span>
              </div>
              <div className="hidden sm:block w-px h-12 bg-primary-300/50" />
              <div className="flex items-center gap-3">
                <span className="text-4xl font-serif font-medium text-primary-950">500+</span>
                <span className="text-sm text-neutral-600 text-left leading-tight">Satisfied<br />Members</span>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </main>
  );
}
