import { useState, useEffect } from 'react';
import { Menu, X, BarChart3 } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo">
          <div className="navbar__logo-icon">
            <BarChart3 size={20} />
          </div>
          <span>Data<strong>Automate</strong></span>
        </a>

        <ul className={`navbar__links${open ? ' navbar__links--open' : ''}`}>
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#contact" className="navbar__cta" onClick={() => setOpen(false)}>
              Get Started
            </a>
          </li>
        </ul>

        <button className="navbar__burger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </nav>
  );
}
