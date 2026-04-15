import { Button, Chip } from '@mui/material';
import { Link } from 'react-router-dom';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import BiotechOutlinedIcon from '@mui/icons-material/BiotechOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import RevealOnScroll from '../../components/RevealOnScroll';
import './about.css';

const values = [
  {
    icon: <BiotechOutlinedIcon />,
    title: 'Technology with Purpose',
    text: 'Digital radiography, precision diagnostics, and evidence-based protocols for predictable outcomes.',
  },
  {
    icon: <FavoriteOutlinedIcon />,
    title: 'Human-Centered Experience',
    text: 'Calm interiors, transparent guidance, and personalized pain-management options at every step.',
  },
  {
    icon: <Diversity3OutlinedIcon />,
    title: 'Community Dental Wellness',
    text: 'Preventive education, family plans, and long-term follow-up to keep every generation smiling.',
  },
];

function AboutPage() {
  return (
    <div className="about-page py-12">
      <div className="page-shell space-y-12">
        <RevealOnScroll>
          <section className="about-banner rounded-[2rem] p-8 md:p-14">
            <Chip label="Who We Are" sx={{ bgcolor: '#dbe4ec', color: '#1f2d3d', mb: 2, fontWeight: 600 }} />
            <h1 className="mb-4 text-3xl font-bold md:text-5xl">Compassionate Experts. Future-Ready Dentistry.</h1>
            <p className="max-w-3xl text-dentalInk/80">
              Thalachira Dental Care was founded to deliver world-class oral healthcare with a warm local touch. Our multidisciplinary team blends modern technology and empathetic communication so patients understand every step and feel confident throughout treatment.
            </p>
          </section>
        </RevealOnScroll>

        <section className="grid gap-6 md:grid-cols-2">
          <RevealOnScroll>
            <div className="about-card">
              <img
                src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=1200&q=80"
                alt="Dentist discussing treatment plan"
                className="mb-5 h-64 w-full rounded-2xl object-cover"
              />
              <h2 className="mb-3 text-2xl font-semibold">Our Vision</h2>
              <p className="text-dentalInk/75">
                To become the most trusted family dental destination in the region by combining preventive science, aesthetic excellence, and ethical treatment planning.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={120}>
            <div className="about-card">
              <img
                src="https://images.unsplash.com/photo-1624280157150-0d02de1f4b06?auto=format&fit=crop&w=1200&q=80"
                alt="Modern dental specialists"
                className="mb-5 h-64 w-full rounded-2xl object-cover"
              />
              <h2 className="mb-3 text-2xl font-semibold">Our Promise</h2>
              <p className="text-dentalInk/75">
                Every recommendation we make is personalized, transparent, and aligned with your comfort, budget, and long-term health goals.
              </p>
            </div>
          </RevealOnScroll>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          {values.map((value, idx) => (
            <RevealOnScroll key={value.title} delay={idx * 100}>
              <article className="about-value">
                <span className="about-icon">{value.icon}</span>
                <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                <p className="text-dentalInk/75">{value.text}</p>
              </article>
            </RevealOnScroll>
          ))}
        </section>

        <RevealOnScroll className="text-center">
          <Button component={Link} to="/contact" variant="contained" sx={{ backgroundColor: '#7f99ad' }}>
            Schedule a Clinic Tour
          </Button>
        </RevealOnScroll>
      </div>
    </div>
  );
}

export default AboutPage;
