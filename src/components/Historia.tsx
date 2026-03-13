import sello3D from '../assets/images/sello_de_la_orden_3D.png';

const timelineData = [
  { year: '1048', period: 'Siglo XI · Orígenes', title: 'Fundación en Jerusalén', text: 'Establecimiento del Hospital de San Lázaro en Tierra Santa para la atención de leprosos, enfermos y peregrinos durante las Cruzadas.' },
  { year: '1255', period: 'Siglo XIII · Consolidación', title: 'Reconocimiento Pontificio', text: 'La Santa Sede otorga reconocimiento oficial a la Orden, consolidando su misión hospitalaria y militar bajo protección eclesiástica.' },
  { year: '1489', period: 'Siglo XV · Expansión', title: 'Presencia Europea', text: 'La Orden consolida su presencia en Francia, Italia y el resto de Europa, estableciendo prioratos y comendaciones bajo la protección de las casas reales.' },
  { year: '1608', period: 'Siglo XVII · Francia', title: 'Unión Real bajo Enrique IV', text: 'El rey Enrique IV de Francia une las órdenes de San Lázaro y Nuestra Señora del Monte Carmelo, expandiendo el alcance de la institución por toda Europa.' },
  { year: '1830', period: 'Siglo XIX · Restauración', title: 'Reconstitución Institucional', text: 'Tras los convulsionados años revolucionarios europeos, la Orden se reconstituye bajo el liderazgo de la Casa de Borbón, reafirmando sus principios fundacionales.' },
  { year: '1910', period: 'Siglo XX · América', title: 'Expansión a América Latina', text: 'La Orden extiende su presencia al continente americano, estableciendo capítulos en múltiples países de América Latina, incluida Venezuela.' },
  { year: 'HOY', period: 'Siglo XXI · Presente', title: 'Capítulo Venezuela Activo', text: 'El capítulo venezolano continúa la misión histórica de la Orden, siendo un referente de caridad, fe y servicio en Venezuela y la región latinoamericana.', dotStyle: { fontSize: '.5rem' } },
];

export default function Historia() {
  return (
    <section className="historia section" id="historia">
      <img src={sello3D} alt="" className="historia__watermark" aria-hidden="true" />

      <div className="container">
        <div className="historia__head">
          <span className="label-script">Nuestra</span>
          <h2 className="heading-display">Historia</h2>
          <span className="gold-line" />
          <p>Más de nueve siglos de fe, servicio y tradición caballeresca que trascienden fronteras y generaciones.</p>
        </div>

        <div className="historia__body">
          <div className="historia__content">
            <p className="historia__intro-text">
              Fundada durante las Cruzadas en los albores del siglo XI, la Orden de San Lázaro nació para cuidar a los leprosos y enfermos que llegaban a Tierra Santa. Su historia es un testimonio de fe inquebrantable, sacrificio y servicio continuo a la humanidad.
            </p>
            <p className="historia__intro-text">
              A lo largo de los siglos, la Orden sobrevivió guerras, persecuciones y profundas transformaciones políticas, adaptando constantemente su misión sin perder jamás su esencia: el cuidado de los más vulnerables bajo el estandarte de la cruz verde.
            </p>
            <p className="historia__intro-text">
              Hoy, sus capítulos en más de 50 países continúan esta tradición de excelencia y caridad, representando una de las instituciones caballerescas con mayor continuidad histórica en el mundo occidental.
            </p>

            <blockquote className="historia__featured">
              "Nuestro escudo no es solo un símbolo heráldico; es el compromiso renovado de cada caballero con los ideales que hicieron grande a esta Orden hace casi mil años."
              <cite>— Tradición de la Orden de San Lázaro</cite>
            </blockquote>

            <div className="historia__vzla">
              <p className="historia__vzla-title">Llegada a Venezuela</p>
              <p className="historia__vzla-text">
                El Capítulo Venezuela fue establecido para llevar los valores milenarios de la Orden a tierras americanas, congregando a caballeros y damas comprometidos con el servicio a la comunidad venezolana. Desde su fundación, el capítulo ha mantenido una activa presencia en obras humanitarias, formación caballeresca y el fomento de los valores de la institución en la región.
              </p>
            </div>

            <div className="historia__cta">
              <a href="#consejo" className="btn btn-gold">Conocer el Gobierno</a>
            </div>
          </div>

          <div className="historia__timeline">
            {timelineData.map((item, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-item__dot" style={item.dotStyle}>{item.year}</div>
                <div className="timeline-item__body">
                  <p className="timeline-item__year">{item.period}</p>
                  <h4 className="timeline-item__title">{item.title}</h4>
                  <p className="timeline-item__text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
