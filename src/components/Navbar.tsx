import { useState, useEffect, useCallback } from 'react';
import escudo from '../assets/images/ESCUDO_ORDEN_SAN_LAZARO.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { href: '#quienes-somos', label: 'Quiénes Somos' },
    { href: '#historia', label: 'Historia' },
    { href: '#consejo', label: 'Consejo de Gobierno' },
    { href: '#actividades', label: 'Actividades' },
    { href: '#contacto', label: 'Contacto' },
  ];

  const handleScroll = useCallback(() => {
    const sectionIds = navLinks.map(l => l.href.slice(1));
    let current = '';
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 110) {
        current = id;
      }
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <nav className="navbar" id="navbar">
      <div className="container navbar__inner">
        <a href="#inicio" className="navbar__brand">
          <img src={escudo} alt="Escudo Orden San Lázaro" className="navbar__logo" />
          <span className="navbar__name">Orden Militar y<br />Hospitalaria de<br />San Lázaro</span>
        </a>

        <ul className={`navbar__nav${menuOpen ? ' is-open' : ''}`} id="navMenu">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={activeSection === link.href.slice(1) ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a href="#contacto" className="btn btn-gold" style={{ fontSize: '.68rem', padding: '11px 24px' }}>
            Solicitar Ingreso
          </a>
          <button
            className="hamburger"
            aria-label="Menú"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
