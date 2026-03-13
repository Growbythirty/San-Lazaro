import armadura from '../assets/images/pecho_armadura.jpg';
import ornamentoCentral from '../assets/images/ornamento_central.png';
import insignia from '../assets/images/Insignia_de_la_ORDEN.png';

export default function About() {
  return (
    <section className="about section" id="quienes-somos">
      <div className="container about__inner">
        <div className="about__media">
          <img src={armadura} alt="Caballero de la Orden" className="about__frame" />
          <img src={ornamentoCentral} alt="" className="about__ornament" aria-hidden="true" />
          <img src={insignia} alt="Insignia de la Orden" className="about__badge" />
        </div>
        <div className="about__content">
          <p className="about__tag">— Quiénes Somos</p>
          <h2 className="heading-display about__heading">Una Orden de<br />Caballería Milenaria</h2>
          <span className="gold-line" style={{ margin: '0 0 0' }} />
          <p className="about__text">
            La Orden Militar y Hospitalaria de San Lázaro de Jerusalén es una de las órdenes de caballería más antiguas del mundo, con orígenes que se remontan al siglo XI durante las Cruzadas. Su misión original de atender a los enfermos y necesitados sigue siendo la piedra angular de su actividad hoy en día.
          </p>
          <p className="about__text">
            El Capítulo Venezuela congrega a caballeros y damas comprometidos con la excelencia moral, el servicio a los más vulnerables y la preservación de los valores de la caballería cristiana, siendo un referente de caridad e integridad institucional en la región.
          </p>
          <blockquote className="about__quote">
            "La estrella verde ilumina el camino del servicio y la caridad, principios sobre los que se funda esta noble institución desde sus orígenes en Tierra Santa."
          </blockquote>
        </div>
      </div>
    </section>
  );
}
