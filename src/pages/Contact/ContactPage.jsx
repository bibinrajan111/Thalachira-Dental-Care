import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import RevealOnScroll from '../../components/RevealOnScroll';
import './contact.css';

const CALLMEBOT_BASE = 'https://api.callmebot.com/whatsapp.php';
const PHONE_NUMBER = '[phone_number]';
const API_KEY = '[your_apikey]';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus('Please fill in all fields before sending.');
      return;
    }

    const combined = `New Contact Request%0AName: ${formData.name}%0AEmail: ${formData.email}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`;

    const url = `${CALLMEBOT_BASE}?phone=${PHONE_NUMBER}&text=${combined}&apikey=${API_KEY}`;
    window.open(url, '_blank', 'noopener,noreferrer');

    setStatus('Message prepared successfully. WhatsApp API window opened.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-bg py-10">
      <div className="page-shell grid gap-8 lg:grid-cols-2">
        <RevealOnScroll>
          <section className="contact-info rounded-2xl p-8">
            <h1 className="mb-4 text-3xl font-bold md:text-5xl">Get in Touch</h1>
            <p className="mb-5">Have a question or need an appointment? We are here to help you smile with confidence.</p>
            <div className="space-y-3">
              <p>Phone: +91 XXXXX XXXXX</p>
              <p>Email: hello@thalachiradentalcare.com</p>
              <p>Location: Thalachira, Kerala (replace with full address)</p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80"
              alt="Modern clinic interior"
              className="mt-8 h-48 w-full rounded-xl object-cover"
            />
          </section>
        </RevealOnScroll>

        <RevealOnScroll delay={130}>
          <section className="contact-form rounded-2xl bg-white/90 p-8 shadow-dental">
            <h2 className="mb-4 text-2xl font-semibold">Book via WhatsApp</h2>
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <TextField label="Full Name" variant="outlined" value={formData.name} onChange={handleChange('name')} fullWidth required />
              <TextField label="Email Address" type="email" variant="outlined" value={formData.email} onChange={handleChange('email')} fullWidth required />
              <TextField label="Subject" variant="outlined" value={formData.subject} onChange={handleChange('subject')} fullWidth required />
              <TextField
                label="Message"
                variant="outlined"
                rows={4}
                multiline
                value={formData.message}
                onChange={handleChange('message')}
                fullWidth
                required
              />
              <Button type="submit" variant="contained" sx={{ backgroundColor: '#0369a1' }}>
                Send to WhatsApp
              </Button>
            </form>
            {status && <p className="mt-4 text-sm text-sky-800">{status}</p>}
            <p className="mt-3 text-xs text-slate-500">Replace [phone_number] and [your_apikey] in this page before production use.</p>
          </section>
        </RevealOnScroll>
      </div>
    </div>
  );
}

export default ContactPage;
