import armadura from '../assets/images/pecho_armadura.jpg';
import escudo from '../assets/images/ESCUDO_ORDEN_SAN_LAZARO.png';
import ornamentoCentral from '../assets/images/ornamento_central.png';
import sanLazaro from '../assets/images/SAN_LAZARO.png';
import marco from '../assets/images/marco.png';
import anillo from '../assets/images/anillo_de_la_ORDEN.png';

const activities = [
  {
    wide: true,
    bg: armadura,
    icon: escudo,
    tag: 'Ceremonia',
    title: 'Investidura 2026',
    desc: 'Solemne ceremonia de admisión de nuevos caballeros y damas en los rangos de la Orden, celebrada bajo los rituales de la tradición milenaria.',
  },
  {
    bg: ornamentoCentral,
    bgStyle: { opacity: 0.25, objectFit: 'contain' as const, background: '#1a3d2a' },
    tag: 'Educación',
    title: 'Ciclo de Conferencias',
    desc: 'Serie de conferencias sobre historia de la caballería, valores humanitarios y tradición de la Orden.',
  },
  {
    bg: sanLazaro,
    bgStyle: { opacity: 0.4 },
    tag: 'Litúrgico',
    title: 'Celebración del Santoral',
    desc: 'Festividad en honor a San Lázaro con actos litúrgicos y comunitarios de gran devoción.',
  },
  {
    bg: marco,
    bgStyle: { opacity: 0.2, objectFit: 'contain' as const, background: '#1a3d2a' },
    tag: 'Institucional',
    title: 'Comunicados Oficiales',
    desc: 'Información y documentos oficiales del Capítulo Venezuela de la Orden.',
  },
  {
    bg: anillo,
    bgStyle: { opacity: 0.45, objectFit: 'contain' as const, background: '#0d1e0f' },
    tag: 'Distinción',
    title: 'Anillo de la Orden',
    desc: 'Reconocimiento de méritos excepcionales en servicio, honor y caballería.',
  },
];

export default function Actividades() {
  return (
    <section className="actividades section" id="actividades">
      <div className="container">
        <div className="actividades__head">
          <span className="label-script">Nuestras</span>
          <h2 className="heading-display">Actividades &amp; Eventos</h2>
          <span className="gold-line" />
          <p>Ceremonias, conferencias e iniciativas que dan vida a los valores de la Orden en Venezuela.</p>
        </div>
        <div className="actividades__grid">
          {activities.map((a, i) => (
            <div className={`act-card${a.wide ? ' act-card--wide' : ''}`} key={i}>
              <img src={a.bg} alt={a.title} className="act-card__bg" style={a.bgStyle} />
              <div className="act-card__overlay" />
              {a.icon && <img src={a.icon} alt="" className="act-card__icon" aria-hidden="true" />}
              <div className="act-card__body">
                <span className="act-card__tag">{a.tag}</span>
                <h3 className="act-card__title">{a.title}</h3>
                <p className="act-card__desc">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
