import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../../components/RevealOnScroll';
import './about.css';

function AboutPage() {
  return (
    <div className="about-page py-10">
      <div className="page-shell space-y-10">
        <RevealOnScroll>
          <section className="about-banner rounded-3xl p-8 md:p-14">
            <h1 className="mb-4 text-3xl font-bold md:text-5xl">About Thalachira Dental Care</h1>
            <p className="max-w-3xl text-slate-700">
              We are a patient-centered dental clinic focused on prevention, precision treatment, and smile confidence. Our team blends compassionate care with modern equipment to ensure every visit is smooth and stress-free.
            </p>
          </section>
        </RevealOnScroll>

        <section className="grid gap-6 md:grid-cols-2">
          <RevealOnScroll>
            <div className="about-card">
              <img
                src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=1000&q=80"
                alt="Dental consultation"
                className="mb-4 h-56 w-full rounded-xl object-cover"
              />
              <h2 className="mb-3 text-2xl font-semibold">Our Story</h2>
              <p>
                Founded with a mission to bring trusted oral care to families, we continue to deliver ethical treatment plans, transparent communication, and consistently high standards.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <div className="about-card">
              <img
                src="https://images.unsplash.com/photo-1624280157150-0d02de1f4b06?auto=format&fit=crop&w=1000&q=80"
                alt="Dental team"
                className="mb-4 h-56 w-full rounded-xl object-cover"
              />
              <h2 className="mb-3 text-2xl font-semibold">Our Team & Promise</h2>
              <p>
                Our dentists and support staff are committed to painless care, clean protocols, and long-term dental wellness through personalized guidance and follow-up.
              </p>
            </div>
          </RevealOnScroll>
        </section>

        <RevealOnScroll className="text-center">
          <Button component={Link} to="/contact" variant="contained" sx={{ backgroundColor: '#0284c7' }}>
            Meet Us in Clinic
          </Button>
        </RevealOnScroll>
      </div>
    </div>
  );
}

export default AboutPage;
