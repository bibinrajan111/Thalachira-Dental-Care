import { useState } from 'react';
import { Button, Chip, TextField } from '@mui/material';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import RevealOnScroll from '../../components/RevealOnScroll';
import './contact.css';

const CALLMEBOT_BASE = 'https://api.callmebot.com/whatsapp.php';
const PHONE_NUMBER = '[phone_number]';
const API_KEY = '[your_apikey]';

const channels = [
  { icon: <CallOutlinedIcon />, title: 'Phone Support', detail: '+91 00000 00000' },
  { icon: <PlaceOutlinedIcon />, title: 'Visit Clinic', detail: 'Thalachira, Kerala' },
  { icon: <AccessTimeOutlinedIcon />, title: 'Open Hours', detail: 'Mon-Sat · 9:00 AM - 8:00 PM' },
];

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

    const combined = `New Contact Request\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`;
    const encodedText = encodeURIComponent(combined);

    const url = `${CALLMEBOT_BASE}?phone=${PHONE_NUMBER}&text=${encodedText}&apikey=${API_KEY}`;
    const popup = window.open(url, '_blank', 'noopener,noreferrer');

    if (!popup) {
      setStatus('Popup was blocked. Please enable popups and try again.');
      return;
    }

    setStatus('Message prepared successfully. WhatsApp API window opened.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-bg py-12">
      <div className="page-shell grid gap-8 lg:grid-cols-2">
        <RevealOnScroll>
          <section className="contact-info rounded-[1.6rem] p-8">
            <Chip label="Let’s Connect" sx={{ bgcolor: '#dbe4ec', color: '#1f2d3d', fontWeight: 600, mb: 2 }} />
            <h1 className="mb-4 text-3xl font-bold md:text-5xl">Plan Your Visit with a Digital-First Dental Team</h1>
            <p className="mb-6 text-dentalInk/75">
              Share your concern and preferred time slot. Our care coordinator will guide you through consultation, diagnostics, and treatment planning.
            </p>

            <div className="grid gap-3">
              {channels.map((item) => (
                <article key={item.title} className="contact-chip">
                  <span className="text-dentalAccent">{item.icon}</span>
                  <div>
                    <p className="text-sm text-dentalInk/60">{item.title}</p>
                    <p className="font-medium text-dentalInk">{item.detail}</p>
                  </div>
                </article>
              ))}
            </div>

            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80"
              alt="Modern clinic interior"
              className="mt-8 h-52 w-full rounded-2xl object-cover"
            />
          </section>
        </RevealOnScroll>

        <RevealOnScroll delay={130}>
          <section className="contact-form rounded-[1.6rem] bg-white/90 p-8 shadow-soft">
            <h2 className="mb-3 text-2xl font-semibold">Book via WhatsApp</h2>
            <p className="mb-5 text-sm text-dentalInk/65">Fast response for appointments, emergency pain, and treatment clarifications.</p>
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
              <Button type="submit" variant="contained" sx={{ backgroundColor: '#7f99ad' }}>
                Send to WhatsApp
              </Button>
            </form>
            {status && <p className="mt-4 text-sm text-dentalInk">{status}</p>}
            <p className="mt-3 text-xs text-dentalInk/55">Replace [phone_number] and [your_apikey] in this page before production use.</p>
          </section>
        </RevealOnScroll>
      </div>
    </div>
  );
}

export default ContactPage;
