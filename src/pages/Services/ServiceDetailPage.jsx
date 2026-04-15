import { Button, Chip } from '@mui/material';
import { Link, Navigate, useParams } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RevealOnScroll from '../../components/RevealOnScroll';
import servicesData from '../../data/servicesData';
import './serviceDetail.css';

function ServiceDetailPage() {
  const { slug } = useParams();
  const service = servicesData.find((item) => item.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  return (
    <div className="service-detail-bg py-12">
      <div className="page-shell space-y-12">
        <RevealOnScroll>
          <section className="service-hero rounded-[2rem] border border-dentalCloud/80 bg-white p-8 shadow-soft lg:p-12">
            <div className="floating-orb orb-one" />
            <div className="floating-orb orb-two" />
            <div className="relative z-10 grid items-center gap-8 lg:grid-cols-2">
              <div>
                <Chip label="Explanatory Care Page" sx={{ bgcolor: '#daf3e0', color: '#0f2f17', fontWeight: 600, mb: 2 }} />
                <h1 className="mb-3 text-3xl font-bold text-dentalInk md:text-5xl">{service.title}</h1>
                <p className="mb-5 text-dentalInk/80">{service.short}</p>
                <div className="flex flex-wrap gap-2">
                  {service.highlights.map((item) => (
                    <span key={item} className="rounded-full border border-dentalCloud bg-dentalMint px-3 py-1 text-sm font-medium text-dentalInk">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <img src={service.heroImage} alt={service.title} className="h-72 w-full rounded-2xl object-cover shadow-dental" />
            </div>
          </section>
        </RevealOnScroll>

        <section className="grid gap-6 lg:grid-cols-2">
          <RevealOnScroll>
            <article className="service-card">
              <h2 className="mb-4 text-2xl font-semibold text-dentalInk">Why patients choose this</h2>
              <ul className="space-y-3 text-dentalInk/80">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <CheckCircleOutlineIcon sx={{ color: '#12AD2B', marginTop: '2px' }} /> {benefit}
                  </li>
                ))}
              </ul>
            </article>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <article className="service-card">
              <h2 className="mb-4 text-2xl font-semibold text-dentalInk">How the treatment journey works</h2>
              <ol className="space-y-3 text-dentalInk/80">
                {service.process.map((step, i) => (
                  <li key={step} className="rounded-xl border border-dentalCloud bg-white p-3">
                    <span className="mr-2 inline-grid h-6 w-6 place-items-center rounded-full bg-dentalBase text-xs font-semibold text-white">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </article>
          </RevealOnScroll>
        </section>

        <RevealOnScroll>
          <section className="service-card">
            <h2 className="mb-4 text-2xl font-semibold text-dentalInk">Frequently asked questions</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {service.faq.map((item) => (
                <article key={item.q} className="rounded-xl border border-dentalCloud bg-white p-4">
                  <h3 className="mb-2 font-semibold text-dentalInk">{item.q}</h3>
                  <p className="text-sm text-dentalInk/75">{item.a}</p>
                </article>
              ))}
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll>
          <section className="rounded-[1.6rem] bg-gradient-to-r from-dentalAccent to-dentalBase p-8 text-white shadow-soft md:p-10">
            <h2 className="mb-3 text-3xl font-bold">Ready to discuss your personalized treatment plan?</h2>
            <p className="mb-5 max-w-3xl text-white/90">
              Book a consultation and get clinical clarity, budget transparency, and an outcomes-focused roadmap designed specifically for your smile goals.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button component={Link} to="/contact" variant="contained" color="inherit" endIcon={<ArrowForwardIcon />}>
                Book Consultation
              </Button>
              <Button component={Link} to="/services" variant="outlined" sx={{ color: '#fff', borderColor: '#fff' }}>
                View All Services
              </Button>
            </div>
          </section>
        </RevealOnScroll>
      </div>
    </div>
  );
}

export default ServiceDetailPage;
