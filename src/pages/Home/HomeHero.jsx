import { Button, Chip } from '@mui/material';
import { Link } from 'react-router-dom';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import RevealOnScroll from '../../components/RevealOnScroll';

const metrics = [
  { value: '12+', label: 'Years of clinical excellence' },
  { value: '18k+', label: 'Successful smile transformations' },
  { value: '4.9/5', label: 'Average patient satisfaction' },
];

function HomeHero() {
  return (
    <section className="home-panel page-bg soft-grid flex min-h-[calc(100vh-6rem)] items-center bg-gradient-to-br from-white via-dentalMist to-dentalCloud/55" id="home-hero">
      <div className="page-shell grid items-center gap-12 py-10 lg:grid-cols-2">
        <RevealOnScroll className="space-y-6">
          <Chip label="Next-Gen Digital Dental Studio" sx={{ bgcolor: '#dce6ee', color: '#1f2d3d', fontWeight: 600 }} />
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Premium Dentistry,
            <span className="block bg-gradient-to-r from-dentalAccent to-dentalInk bg-clip-text text-transparent">Designed Around Comfort.</span>
          </h1>
          <p className="max-w-xl text-lg text-dentalInk/75">
            We combine AI-assisted diagnostics, minimally invasive procedures, and hospitality-inspired care to help families maintain confident, healthy smiles for life.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button component={Link} to="/contact" variant="contained" size="large" sx={{ backgroundColor: '#7f99ad' }}>
              Book Your Visit
            </Button>
            <Button component={Link} to="/services" variant="outlined" size="large" sx={{ borderColor: '#7f99ad', color: '#1f2d3d' }}>
              View Signature Services
            </Button>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="glass-panel rounded-2xl p-4 shadow-sm">
                <p className="text-2xl font-bold text-dentalInk">{metric.value}</p>
                <p className="text-xs text-dentalInk/70">{metric.label}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={120} className="animate-floaty">
          <div className="glass-panel animated-shimmer overflow-hidden rounded-[2rem] p-3 shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=80"
              alt="Dental team with patient"
              className="h-[26rem] w-full rounded-[1.4rem] object-cover"
            />
          </div>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-dentalCloud bg-white/80 p-3 text-sm text-dentalInk/80"><HealthAndSafetyOutlinedIcon fontSize="small" /> Sterile international protocol</div>
            <div className="rounded-xl border border-dentalCloud bg-white/80 p-3 text-sm text-dentalInk/80"><BoltOutlinedIcon fontSize="small" /> Same-day emergency slots</div>
            <div className="rounded-xl border border-dentalCloud bg-white/80 p-3 text-sm text-dentalInk/80"><VerifiedUserOutlinedIcon fontSize="small" /> Transparent treatment plans</div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export default HomeHero;
