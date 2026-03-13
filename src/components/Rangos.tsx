import insignia from '../assets/images/Insignia_de_la_ORDEN.png';
import sello from '../assets/images/sello_de_la_orden.png';
import escudo from '../assets/images/ESCUDO_ORDEN_SAN_LAZARO.png';
import anillo from '../assets/images/anillo_de_la_ORDEN.png';
import copa from '../assets/images/copa.png';

const rangos = [
  { num: 'I', img: insignia, name: 'Gran Cruz' },
  { num: 'II', img: sello, name: 'Comendador\nBailío' },
  { num: 'III', img: escudo, name: 'Comendador' },
  { num: 'IV', img: anillo, name: 'Oficial' },
  { num: 'V', img: copa, name: 'Caballero /\nDama' },
];

export default function Rangos() {
  return (
    <section className="rango section" id="rangos">
      <div className="container">
        <div className="rango__head">
          <span className="label-script">Jerarquía</span>
          <h2 className="heading-display">Rangos de la Orden</h2>
          <span className="gold-line" />
          <p>La estructura de grados que reconoce el mérito, la dedicación y el servicio de cada miembro.</p>
        </div>
        <div className="rango__grid">
          {rangos.map(r => (
            <div className="rango-card" key={r.num}>
              <p className="rango-card__num">{r.num}</p>
              <img src={r.img} alt={r.name} className="rango-card__img" />
              <div className="rango-card__name" dangerouslySetInnerHTML={{ __html: r.name.replace('\n', '<br/>') }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
