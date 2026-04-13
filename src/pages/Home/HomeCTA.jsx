import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../../components/RevealOnScroll';

function HomeCTA() {
  return (
    <section className="home-panel flex min-h-[calc(100vh-5rem)] items-center bg-gradient-to-br from-blue-900 via-sky-800 to-cyan-700" id="home-cta">
      <div className="page-shell py-10">
        <RevealOnScroll>
          <div className="rounded-3xl border border-white/30 bg-white/10 p-8 text-white shadow-dental backdrop-blur md:p-14">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready for a Brighter Smile?</h2>
              <p className="mb-6 text-slate-100">
                Schedule your consultation today and experience a modern dental clinic built around comfort, precision, and long-term oral health.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button component={Link} to="/contact" variant="contained" color="inherit" className="animate-pulseSoft">
                  Start Consultation
                </Button>
                <a href="#home-hero" className="rounded-lg border border-white px-5 py-2 transition hover:bg-white hover:text-sky-700">
                  Back to Top
                </a>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export default HomeCTA;
