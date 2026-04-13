import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../../components/RevealOnScroll';

function HomeHero() {
  return (
    <section className="home-panel page-bg flex min-h-[calc(100vh-5rem)] items-center bg-gradient-to-br from-cyan-100 via-blue-50 to-white" id="home-hero">
      <div className="page-shell grid items-center gap-10 py-10 lg:grid-cols-2">
        <RevealOnScroll className="space-y-6">
          <p className="inline-block rounded-full bg-sky-200 px-4 py-1 text-sm font-medium text-sky-900">Your Smile, Our Signature Care</p>
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            Advanced Dental Care for Confident,
            <span className="bg-gradient-to-r from-sky-700 to-blue-900 bg-clip-text text-transparent"> Healthier Smiles</span>
          </h1>
          <p className="max-w-xl text-slate-700">
            At Thalachira Dental Care, we combine technology, comfort, and compassionate treatment to deliver the best oral health experience for children, adults, and seniors.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button component={Link} to="/contact" variant="contained" size="large" sx={{ backgroundColor: '#0369a1' }}>
              Book Appointment
            </Button>
            <Button component={Link} to="/services" variant="outlined" size="large" color="info">
              Explore Services
            </Button>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={120} className="animate-floaty">
          <div className="glass-panel overflow-hidden rounded-3xl shadow-dental">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
              alt="Dentist treating patient"
              className="h-72 w-full object-cover md:h-[30rem]"
            />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export default HomeHero;
