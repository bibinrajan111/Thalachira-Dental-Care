import { Button, Chip } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../../components/RevealOnScroll';
import servicesData from '../../data/servicesData';
import './services.css';

function ServicesPage() {
  return (
    <div className="services-bg py-12">
      <div className="page-shell space-y-10">
        <RevealOnScroll className="text-center">
          <Chip label="Comprehensive Clinical Programs" sx={{ bgcolor: '#daf3e0', color: '#0f2f17', fontWeight: 600, mb: 2 }} />
          <h1 className="services-title mb-3 text-3xl font-bold md:text-5xl">Explore Every Service in Detail</h1>
          <p className="mx-auto max-w-3xl text-dentalInk/80">
            Click any service to open its full explanatory page with procedures, benefits, FAQs, and expected treatment journey.
          </p>
        </RevealOnScroll>

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, i) => (
            <RevealOnScroll key={service.slug} delay={i * 70}>
              <article className="service-item">
                <img src={service.heroImage} alt={service.title} className="mb-4 h-44 w-full rounded-xl object-cover" />
                <h3 className="mb-3 text-xl font-semibold text-dentalInk">{service.title}</h3>
                <p className="mb-4 text-sm text-dentalInk/75">{service.short}</p>
                <ul className="mb-4 space-y-1 text-sm text-dentalInk/70">
                  {service.highlights.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
                <Button component={Link} to={`/services/${service.slug}`} variant="outlined" endIcon={<ArrowOutwardIcon />} sx={{ borderColor: '#12AD2B', color: '#0f2f17' }}>
                  Read full explanation
                </Button>
              </article>
            </RevealOnScroll>
          ))}
        </section>
      </div>
    </div>
  );
}

export default ServicesPage;
