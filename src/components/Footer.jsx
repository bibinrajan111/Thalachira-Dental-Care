import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';

const services = ['Smile Design', 'Implants', 'Pediatric Dental', 'Laser Gum Care'];

function Footer() {
  return (
    <footer className="mt-20 border-t border-dentalCloud bg-gradient-to-br from-dentalCloud/70 via-white to-dentalMist py-14">
      <div className="page-shell grid gap-10 text-sm lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h4 className="mb-3 text-xl font-semibold">Thalachira Dental Care</h4>
          <p className="mb-4 max-w-md text-dentalInk/75">
            A patient-first dental destination combining modern diagnostics, preventive protocols, and personalized smile aesthetics.
          </p>
          <div className="flex gap-2">
            {[InstagramIcon, FacebookOutlinedIcon, EmailOutlinedIcon].map((Icon, idx) => (
              <span key={idx} className="rounded-full border border-dentalCloud bg-white p-2 text-dentalAccent shadow-sm">
                <Icon fontSize="small" />
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h5 className="mb-3 text-base font-semibold">Quick Links</h5>
          <ul className="space-y-2 text-dentalInk/80">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h5 className="mb-3 text-base font-semibold">Signature Care</h5>
          <ul className="space-y-2 text-dentalInk/80">
            {services.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h5 className="mb-3 text-base font-semibold">Clinic Hours</h5>
          <p className="mb-2 text-dentalInk/80">Mon - Sat · 9:00 AM - 8:00 PM</p>
          <p className="mb-2 text-dentalInk/80">Sunday · By prior appointment</p>
          <p className="mb-2 text-dentalInk/80">Thalachira, Kerala</p>
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-dentalInk shadow-sm">
            <CallOutlinedIcon fontSize="small" /> +91 00000 00000
          </p>
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-dentalInk/60">© {new Date().getFullYear()} Thalachira Dental Care. Crafted for healthy smiles.</p>
    </footer>
  );
}

export default Footer;
