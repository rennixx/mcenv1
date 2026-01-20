export default function Home() {
  return (
    <main className="flex-1">
      {/* Placeholder for homepage content */}
      <section className="section-padding container-luxury flex min-h-screen flex-col items-center justify-center text-center">
        <h1 className="mb-6 font-serif text-5xl font-medium tracking-tight text-primary-950">
          Majestic Equestrian Club
        </h1>
        <p className="max-w-2xl text-lg text-neutral-600">
          Where elegance meets excellence in the art of horsemanship.
        </p>
        <div className="mt-10 flex gap-4">
          <button className="btn btn-primary">Explore Membership</button>
          <button className="btn btn-outline">Learn More</button>
        </div>
      </section>
    </main>
  );
}
