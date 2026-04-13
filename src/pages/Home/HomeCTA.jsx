import { Button } from '@mui/material';

function HomeCTA() {
  return (
    <section className="home-panel flex min-h-[calc(100vh-5rem)] items-center" id="home-cta">
      <div className="page-shell">
        <div className="rounded-3xl bg-gradient-to-r from-sky-800 to-sky-500 p-8 text-white shadow-dental md:p-14">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">[Placeholder CTA Heading]</h2>
            <p className="mb-6 text-slate-100">[Placeholder CTA text inviting visitors to contact the clinic.]</p>
            <div className="flex justify-center gap-4">
              <Button variant="contained" color="inherit" className="animate-pulseSoft">
                [Placeholder Button]
              </Button>
              <a href="#home-hero" className="rounded-lg border border-white px-5 py-2 transition hover:bg-white hover:text-sky-700">
                [Placeholder Link]
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeCTA;
