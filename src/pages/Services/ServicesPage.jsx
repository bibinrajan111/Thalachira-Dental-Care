import { Button } from '@mui/material';
import RevealOnScroll from '../../components/RevealOnScroll';
import './services.css';

const services = [
  'General Check-up & Cleaning',
  'Tooth Filling & Restoration',
  'Root Canal Treatment',
  'Teeth Whitening',
  'Orthodontic Smile Alignment',
  'Dental Implants & Crowns',
];

function ServicesPage() {
  return (
    <div className="services-bg py-10">
      <div className="page-shell">
        <RevealOnScroll className="mb-8 text-center">
          <h1 className="services-title mb-3 text-3xl font-bold md:text-5xl">Our Dental Services</h1>
          <p className="text-slate-700">Complete oral care solutions powered by modern diagnostics and gentle procedures.</p>
        </RevealOnScroll>

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <RevealOnScroll key={service} delay={i * 70}>
              <article className="service-item">
                <img
                  src={`https://picsum.photos/seed/service-${i + 1}/700/450`}
                  alt={service}
                  className="mb-4 h-36 w-full rounded-xl object-cover"
                />
                <h3 className="mb-3 text-xl font-semibold">{service}</h3>
                <p className="mb-4 text-slate-600">
                  Personalized consultation, clear treatment options, and quality care by experienced dental professionals.
                </p>
                <Button variant="outlined" color="info">
                  Learn More
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
