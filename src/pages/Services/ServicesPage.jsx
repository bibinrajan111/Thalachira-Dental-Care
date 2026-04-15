import { Button, Chip } from '@mui/material';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import PsychologyAltOutlinedIcon from '@mui/icons-material/PsychologyAltOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import ChildCareOutlinedIcon from '@mui/icons-material/ChildCareOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import RevealOnScroll from '../../components/RevealOnScroll';
import './services.css';

const services = [
  {
    title: 'Preventive Wellness Dentistry',
    icon: <MonitorHeartOutlinedIcon />,
    image: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=900&q=80',
    points: ['Comprehensive oral screening', 'Air polishing & deep cleaning', 'Personalized risk-prevention plan'],
  },
  {
    title: 'Restorative & Root Canal Care',
    icon: <MedicalServicesOutlinedIcon />,
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80',
    points: ['Biocompatible restorations', 'Microscopic endodontics', 'Pain-minimized sessions'],
  },
  {
    title: 'Cosmetic Smile Design',
    icon: <AutoAwesomeOutlinedIcon />,
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=80',
    points: ['Digital smile mock-up', 'Whitening & veneers', 'Photo-guided outcome planning'],
  },
  {
    title: 'Implants & Full Mouth Rehab',
    icon: <PsychologyAltOutlinedIcon />,
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80',
    points: ['3D guided implant surgery', 'Crown and bridge protocols', 'Functional bite correction'],
  },
  {
    title: 'Pediatric Comfort Dentistry',
    icon: <ChildCareOutlinedIcon />,
    image: 'https://images.unsplash.com/photo-1624280157150-0d02de1f4b06?auto=format&fit=crop&w=900&q=80',
    points: ['Child-friendly behavior care', 'Sealants & cavity prevention', 'Parent counseling sessions'],
  },
  {
    title: 'Emergency & Express Slots',
    icon: <MedicalServicesOutlinedIcon />,
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80',
    points: ['Same-day pain management', 'Trauma assessment', 'Rapid stabilizing treatment'],
  },
];

function ServicesPage() {
  return (
    <div className="services-bg py-12">
      <div className="page-shell space-y-10">
        <RevealOnScroll className="text-center">
          <Chip label="Comprehensive Clinical Programs" sx={{ bgcolor: '#dbe4ec', color: '#1f2d3d', fontWeight: 600, mb: 2 }} />
          <h1 className="services-title mb-3 text-3xl font-bold md:text-5xl">Services Engineered for Every Stage of Smile Care</h1>
          <p className="mx-auto max-w-3xl text-dentalInk/75">
            From preventive maintenance to advanced rehabilitation, our care pathways are designed for comfort, precision, and long-term oral health resilience.
          </p>
        </RevealOnScroll>

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <RevealOnScroll key={service.title} delay={i * 70}>
              <article className="service-item">
                <img src={service.image} alt={service.title} className="mb-4 h-44 w-full rounded-xl object-cover" />
                <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-dentalCloud/65 px-3 py-1 text-xs font-medium text-dentalInk">{service.icon} Expert Track</p>
                <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
                <ul className="mb-4 space-y-1 text-sm text-dentalInk/70">
                  {service.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
                <Button variant="outlined" sx={{ borderColor: '#7f99ad', color: '#1f2d3d' }}>
                  Discuss Treatment Plan
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
