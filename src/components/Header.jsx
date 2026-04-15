import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact Us', to: '/contact' },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-sky-200 bg-gradient-to-r from-sky-50/95 via-white/90 to-blue-50/95 backdrop-blur-md">
      <div className="page-shell flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-700 font-bold text-white shadow-dental">
            TDC
          </div>
          <span className="text-base font-semibold md:text-lg">Thalachira Dental Care</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-3 py-1 text-sm font-medium transition ${
                  isActive ? 'bg-sky-100 text-sky-800' : 'text-dentalDark hover:bg-sky-50 hover:text-sky-700'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-lg border border-sky-200 p-2 text-dentalDark transition hover:bg-sky-100 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-sky-100 bg-white/95 transition-all duration-300 md:hidden ${
          isOpen ? 'max-h-72 py-3' : 'max-h-0 py-0'
        }`}
      >
        <div className="page-shell flex flex-col gap-3">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm font-medium transition ${
                  isActive ? 'bg-sky-100 text-sky-700' : 'hover:bg-slate-100'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
