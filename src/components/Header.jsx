import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-dentalCloud/80 bg-white/80 backdrop-blur-xl">
      <div className="page-shell flex h-24 items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-dentalBase to-dentalAccent font-bold text-white shadow-soft transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
            TDC
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-dentalAccent">Modern Dental Studio</p>
            <span className="text-base font-semibold md:text-lg">Thalachira Dental Care</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-3 rounded-full border border-dentalCloud bg-white/80 px-3 py-2 shadow-sm md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive ? 'bg-dentalBase text-dentalInk' : 'text-dentalInk/80 hover:bg-dentalCloud/70'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="tel:+910000000000"
            className="inline-flex items-center gap-2 rounded-full border border-dentalCloud bg-white px-4 py-2 text-sm font-medium text-dentalInk transition hover:border-dentalAccent hover:bg-dentalCloud/50"
          >
            <PhoneInTalkIcon fontSize="small" />
            Book Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-xl border border-dentalCloud bg-white p-2 text-dentalInk transition hover:bg-dentalCloud/50 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-dentalCloud/70 bg-white/95 transition-all duration-300 md:hidden ${
          isOpen ? 'max-h-80 py-4' : 'max-h-0 py-0'
        }`}
      >
        <div className="page-shell flex flex-col gap-3">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-medium transition ${
                  isActive ? 'bg-dentalBase text-dentalInk' : 'hover:bg-dentalCloud/70'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a href="tel:+910000000000" className="rounded-lg border border-dentalCloud px-3 py-2 text-sm font-medium text-dentalInk">
            Call Clinic
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
