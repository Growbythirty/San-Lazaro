import { useEffect, useRef } from 'react';
import escudo from '../assets/images/ESCUDO_ORDEN_SAN_LAZARO.png';
import sello3D from '../assets/images/sello_de_la_orden_3D_2.png';
import marco from '../assets/images/marco.png';
import llave from '../assets/images/llave.png';
import copa from '../assets/images/copa.png';
import ornamentoCentral from '../assets/images/ornamento_central.png';
import insignia from '../assets/images/Insignia_de_la_ORDEN.png';
import cristo from '../assets/images/cristo_inri.png';

const officers = [
  { img: llave, role: 'Cargo Institucional', title: 'Gran\nCanciller', desc: 'Gestión administrativa y representación protocolar de la Orden' },
  { img: copa, role: 'Cargo Institucional', title: 'Gran\nTesorero', desc: 'Administración financiera y gestión del patrimonio del Capítulo' },
  { img: ornamentoCentral, role: 'Cargo Institucional', title: 'Gran\nSecretario', desc: 'Correspondencia oficial, archivos y registros del Capítulo' },
  { img: insignia, role: 'Cargo Institucional', title: 'Maestro de\nCeremonias', desc: 'Dirección de protocolos, investiduras y actos solemnes' },
  { img: cristo, role: 'Cargo Institucional', title: 'Capellán\ndel Capítulo', desc: 'Guía espiritual y conducción de la vida litúrgica de la Orden' },
];

export default function Consejo() {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = chartRef.current?.querySelectorAll('.org-card, .org-prior');
    if (!cards) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = '1';
            (entry.target as HTMLElement).style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((card, i) => {
      const el = card as HTMLElement;
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = `opacity .5s ease ${i * 0.08}s, transform .5s ease ${i * 0.08}s`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="consejo section" id="consejo">
      <div className="consejo__bg-pattern" style={{ backgroundImage: `url(${marco})` }} />
      <div className="container">
        <div className="consejo__head">
          <span className="label-script">Consejo de</span>
          <h2 className="heading-display">Gobierno</h2>
          <span className="gold-line" />
          <p>
            La estructura de autoridad y liderazgo del Capítulo Venezuela de la Orden Militar y Hospitalaria de San Lázaro,
            organizada en una línea de mando que garantiza la integridad institucional y el cumplimiento de su misión milenaria.
          </p>
        </div>

        <div className="org-chart" ref={chartRef}>
          <div className="org-context">
            <div className="org-card--context">
              <img src={escudo} alt="Escudo Internacional" className="org-img" />
              <div>
                <p className="org-role">Autoridad Suprema</p>
                <p className="org-title">Gran Maestre Internacional</p>
              </div>
            </div>
          </div>

          <div className="org-trunk" />

          <div className="org-prior">
            <img src={sello3D} alt="Sello de la Orden" className="org-prior__img" />
            <p className="org-prior__role">Máxima Autoridad · Capítulo Venezuela</p>
            <h3 className="org-prior__title">Gran Prior</h3>
            <p className="org-prior__subtitle">del Capítulo Venezuela</p>
          </div>

          <div className="org-trunk" />

          <div className="org-officers">
            {officers.map((o, i) => (
              <div className="org-col" key={i}>
                <div className="org-stem" />
                <div className="org-card">
                  <img src={o.img} alt={o.title} className="org-card__img" />
                  <p className="org-card__role">{o.role}</p>
                  <h4 className="org-card__title" dangerouslySetInnerHTML={{ __html: o.title.replace('\n', '<br/>') }} />
                  <p className="org-card__desc">{o.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '48px', textAlign: 'center' }}>
            <p style={{
              fontFamily: 'var(--ff-display)',
              fontSize: '.6rem',
              letterSpacing: '.2em',
              textTransform: 'uppercase',
              color: 'rgba(214,182,80,.5)',
            }}>
              Estructura oficial del Capítulo Venezuela · Orden Militar y Hospitalaria de San Lázaro
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
