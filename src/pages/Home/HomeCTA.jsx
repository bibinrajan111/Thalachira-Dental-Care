import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../../components/RevealOnScroll';

function HomeCTA() {
  return (
    <section className="home-panel flex min-h-[calc(100vh-6rem)] items-center bg-gradient-to-br from-dentalInk via-dentalAccent to-[#a4b5c2]" id="home-cta">
      <div className="page-shell py-12">
        <RevealOnScroll>
          <div className="rounded-[2rem] border border-white/30 bg-white/12 p-8 text-white shadow-soft backdrop-blur md:p-14">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/80">Comprehensive Care Ecosystem</p>
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">Let&apos;s Build Your Personalized Smile Roadmap</h2>
              <p className="mb-8 text-white/85">
                Get a complete oral health assessment, digital smile simulation, and phased treatment options tailored to your timeline and comfort preferences.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button component={Link} to="/contact" variant="contained" color="inherit" className="animate-pulseSoft">
                  Start Consultation
                </Button>
                <Button component={Link} to="/about" variant="outlined" sx={{ color: 'white', borderColor: 'white' }}>
                  Meet Our Team
                </Button>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export default HomeCTA;
