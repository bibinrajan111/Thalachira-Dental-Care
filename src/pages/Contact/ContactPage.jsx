import { Button, TextField } from '@mui/material';
import './contact.css';

function ContactPage() {
  return (
    <div className="contact-bg py-10">
      <div className="page-shell grid gap-8 lg:grid-cols-2">
        <section className="contact-info rounded-2xl p-8">
          <h1 className="mb-4 text-3xl font-bold md:text-5xl">[Placeholder Contact Us Heading]</h1>
          <p className="mb-5">[Placeholder contact description text.]</p>
          <div className="space-y-3">
            <p>[Placeholder Phone]</p>
            <p>[Placeholder Email]</p>
            <p>[Placeholder Location]</p>
          </div>
          <div className="mt-8 h-48 rounded-xl bg-dentalSky/60">[Placeholder Map / Image]</div>
        </section>

        <section className="contact-form rounded-2xl bg-white p-8 shadow-dental">
          <h2 className="mb-4 text-2xl font-semibold">[Placeholder Form Heading]</h2>
          <form className="grid gap-4">
            <TextField label="[Placeholder Name]" variant="outlined" fullWidth />
            <TextField label="[Placeholder Email]" variant="outlined" fullWidth />
            <TextField label="[Placeholder Subject]" variant="outlined" fullWidth />
            <TextField label="[Placeholder Message]" variant="outlined" rows={4} multiline fullWidth />
            <Button variant="contained" sx={{ backgroundColor: '#0369a1' }}>
              [Placeholder Submit Button]
            </Button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default ContactPage;
