import { Button } from '@mui/material';
import './about.css';

function AboutPage() {
  return (
    <div className="about-page page-shell space-y-10 py-10">
      <section className="about-banner rounded-3xl p-8 md:p-14">
        <h1 className="mb-4 text-3xl font-bold md:text-5xl">[Placeholder About Us Heading]</h1>
        <p className="max-w-3xl text-slate-700">[Placeholder overview text for the About Us page.]</p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="about-card">
          <h2 className="mb-3 text-2xl font-semibold">[Placeholder Story Heading]</h2>
          <p>[Placeholder story content text.]</p>
        </div>
        <div className="about-card">
          <h2 className="mb-3 text-2xl font-semibold">[Placeholder Team Heading]</h2>
          <p>[Placeholder team content text.]</p>
        </div>
      </section>

      <div className="text-center">
        <Button variant="contained" sx={{ backgroundColor: '#0284c7' }}>
          [Placeholder Button]
        </Button>
      </div>
    </div>
  );
}

export default AboutPage;
