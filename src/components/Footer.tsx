import escudo from '../assets/images/ESCUDO_ORDEN_SAN_LAZARO.png';
import sello from '../assets/images/sello_de_la_orden.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <div className="footer__logo-wrap">
              <img src={escudo} alt="Escudo" className="footer__logo" />
              <span className="footer__brand-name">Orden Militar y<br />Hospitalaria de<br />San Lázaro · Venezuela</span>
            </div>
            <p className="footer__desc">Guardando la llama de la tradición caballeresca y el servicio humanitario en Venezuela.</p>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="Sitio Web">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="footer__col-title">La Orden</h4>
            <ul className="footer__col-list">
              <li><a href="#quienes-somos">Quiénes Somos</a></li>
              <li><a href="#historia">Historia</a></li>
              <li><a href="#consejo">Consejo de Gobierno</a></li>
              <li><a href="#rangos">Rangos</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer__col-title">Recursos</h4>
            <ul className="footer__col-list">
              <li><a href="#">Estatutos</a></li>
              <li><a href="#actividades">Actividades</a></li>
              <li><a href="#">Galería</a></li>
              <li><a href="#">Comunicados</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer__col-title">Contacto</h4>
            <ul className="footer__col-list">
              <li><a href="#contacto">Solicitar Ingreso</a></li>
              <li><a href="#">www.sanlazarovenezuela.org</a></li>
              <li><a href="#">@sanlazarovzla</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">&copy; 2026 Orden Militar y Hospitalaria de San Lázaro · Capítulo Venezuela. Todos los derechos reservados.</p>
          <img src={sello} alt="Sello de la Orden" className="footer__seal" />
          <nav className="footer__legal">
            <a href="#">Privacidad</a>
            <a href="#">Términos</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
