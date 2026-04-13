import { Button } from '@mui/material';

function HomeHero() {
  return (
    <section className="home-panel flex min-h-[calc(100vh-5rem)] items-center" id="home-hero">
      <div className="page-shell grid items-center gap-10 lg:grid-cols-2">
        <div className="space-y-6 animate-fadeSlide">
          <p className="inline-block rounded-full bg-dentalSky px-4 py-1 text-sm font-medium">
            [Placeholder Tagline]
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            [Placeholder Home Hero Heading]
          </h1>
          <p className="max-w-xl text-slate-600">[Placeholder description text for home hero section.]</p>
          <div className="flex flex-wrap gap-3">
            <Button variant="contained" size="large" sx={{ backgroundColor: '#0369a1' }}>
              [Placeholder Button]
            </Button>
            <Button variant="outlined" size="large" color="info">
              [Placeholder Button]
            </Button>
          </div>
        </div>

        <div className="animate-floaty">
          <div className="glass-panel flex h-72 items-center justify-center rounded-3xl p-8 shadow-dental md:h-96">
            <p className="text-lg font-semibold">[Placeholder Hero Image]</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
