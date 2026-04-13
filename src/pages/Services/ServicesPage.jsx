import { Button } from '@mui/material';
import './services.css';

function ServicesPage() {
  const services = [1, 2, 3, 4, 5, 6];

  return (
    <div className="page-shell py-10">
      <section className="mb-8 text-center">
        <h1 className="services-title mb-3 text-3xl font-bold md:text-5xl">[Placeholder Services Heading]</h1>
        <p className="text-slate-600">[Placeholder services introduction text.]</p>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article key={service} className="service-item">
            <div className="mb-4 h-36 rounded-xl bg-dentalSky/70" />
            <h3 className="mb-3 text-xl font-semibold">[Placeholder Service Name]</h3>
            <p className="mb-4 text-slate-600">[Placeholder service details.]</p>
            <Button variant="outlined" color="info">
              [Placeholder Button]
            </Button>
          </article>
        ))}
      </section>
    </div>
  );
}

export default ServicesPage;
