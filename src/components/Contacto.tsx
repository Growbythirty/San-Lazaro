export default function Contacto() {
  return (
    <section className="contacto section" id="contacto">
      <div className="container contacto__inner">
        <div>
          <p className="contacto__tag">— Contacto</p>
          <h2 className="heading-display contacto__heading">¿Desea Unirse<br />a la Orden?</h2>
          <span className="gold-line" style={{ margin: '0 0 0' }} />
          <p className="contacto__text">
            Si está interesado en ser parte de esta noble institución, lo invitamos a contactarnos. El proceso de admisión considera el compromiso con los valores de la Orden y el servicio a la comunidad.
          </p>
          <ul className="contact-list">
            <li>
              <div className="contact-list__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <div>
                <p className="contact-list__label">Ubicación</p>
                <p className="contact-list__value">Caracas, Venezuela</p>
              </div>
            </li>
            <li>
              <div className="contact-list__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
              <div>
                <p className="contact-list__label">Instagram</p>
                <p className="contact-list__value">@sanlazarovzla</p>
              </div>
            </li>
            <li>
              <div className="contact-list__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                </svg>
              </div>
              <div>
                <p className="contact-list__label">Sitio Web</p>
                <p className="contact-list__value">www.sanlazarovenezuela.org</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
