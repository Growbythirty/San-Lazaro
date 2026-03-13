import ornamento from '../assets/images/ornamento.png';
import cristo from '../assets/images/cristo_inri.png';
import copa from '../assets/images/copa.png';
import llave from '../assets/images/llave.png';

const pillars = [
  {
    num: '01',
    icon: cristo,
    title: 'Fe & Espiritualidad',
    text: 'Enraizados en la tradición cristiana, los miembros de la Orden cultivan una vida de fe profunda y compromiso espiritual como fundamento de todo servicio.',
  },
  {
    num: '02',
    icon: copa,
    title: 'Servicio & Caridad',
    text: 'Siguiendo el ejemplo de San Lázaro, la Orden dedica sus esfuerzos a la asistencia de los enfermos, vulnerables y necesitados en Venezuela y el mundo.',
  },
  {
    num: '03',
    icon: llave,
    title: 'Honor & Tradición',
    text: 'La herencia caballeresca de casi mil años se preserva y transmite a través de ceremonias, investiduras y el código de honor que rige la conducta de cada miembro.',
  },
];

export default function Pillars() {
  return (
    <section className="pillars section">
      <div className="pillars__bg-ornament" style={{ backgroundImage: `url(${ornamento})` }} />
      <div className="container">
        <div className="pillars__head">
          <span className="label-script">Nuestros</span>
          <h2 className="heading-display">Pilares Fundamentales</h2>
          <span className="gold-line" />
          <p>Los valores que definen el espíritu y la misión de la Orden a través de los siglos.</p>
        </div>
        <div className="pillars__grid">
          {pillars.map(p => (
            <div className="pillar-card" key={p.num}>
              <span className="pillar-card__num">{p.num}</span>
              <img src={p.icon} alt={p.title} className="pillar-card__icon" />
              <h3 className="pillar-card__title">{p.title}</h3>
              <p className="pillar-card__text">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
