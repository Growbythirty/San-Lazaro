import ornamento from '../assets/images/ornamento.png';
import estrellas from '../assets/images/estrellas.png';
import sello3D from '../assets/images/sello_de_la_orden_3D_2.png';
import escudoVzla from '../assets/images/ESCUDO_ORDEN_SAN_LAZARO_VZLA.png';

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__bg" />
      <img src={ornamento} alt="" className="hero__ornament hero__ornament--tl" aria-hidden="true" />
      <img src={ornamento} alt="" className="hero__ornament hero__ornament--br" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__text">
          <p className="hero__eyebrow">Capítulo Venezuela · Est. 1048</p>
          <p className="hero__supertitle">Orden Militar y Hospitalaria de</p>
          <h1 className="hero__name">San<br />Lázaro</h1>
          <span className="hero__tagline">La Estrella Verde</span>
          <p className="hero__desc">
            Una orden de caballería de tradición milenaria, comprometida con los valores de la fe, el honor y el servicio humanitario. Guardianes de una herencia que trasciende el tiempo.
          </p>
          <div className="hero__actions">
            <a href="#quienes-somos" className="btn btn-gold">Conocer la Orden</a>
            <a href="#contacto" className="btn btn-outline">Solicitar Ingreso</a>
          </div>
        </div>

        <div className="hero__visual">
          <img src={estrellas} alt="" className="hero__stars" aria-hidden="true" />
          <div className="hero__seal-wrap">
            <div className="hero__seal-glow" />
            <img src={sello3D} alt="Sello de la Orden de San Lázaro" className="hero__seal" />
          </div>
          <div className="hero__escudo-row">
            <img src={escudoVzla} alt="Escudo Venezuela" className="hero__escudo" />
          </div>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span>Descubrir</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 5v14m0 0l-5-5m5 5l5-5" />
        </svg>
      </div>
    </section>
  );
}
