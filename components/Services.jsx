import styles from "./Services.module.css";

const services = [
  {
    symbol: "☽",
    title: "Carta Natal",
    tagline: "Tu mapa del alma",
    description:
      "Un análisis profundo de tu carta astral al momento de nacer: planetas, casas, aspectos y nodos lunares que revelan tus dones, desafíos y propósito.",
    duration: "90 min",
    price: "$85 USD",
  },
  {
    symbol: "♃",
    title: "Tránsitos & Ciclos",
    tagline: "El clima cósmico actual",
    description:
      "Interpretación de los tránsitos planetarios activos sobre tu carta natal. Ideal para decisiones importantes, cambios de ciclo o momentos de inflexión.",
    duration: "60 min",
    price: "$60 USD",
    featured: true,
  },
  {
    symbol: "◎",
    title: "Luna Nueva & Luna Llena",
    tagline: "Rituales de intención",
    description:
      "Lectura mensual en sintonía con las fases lunares. Recibes por escrito qué activar, soltar y cultivar según tu carta personal.",
    duration: "Entrega escrita",
    price: "$35 USD",
  },
  {
    symbol: "♀",
    title: "Sinastría de Pareja",
    tagline: "El lenguaje entre dos almas",
    description:
      "Comparación de dos cartas natales para explorar la compatibilidad, los nudos kármicos y el potencial de crecimiento en la relación.",
    duration: "90 min",
    price: "$95 USD",
  },
  {
    symbol: "⊕",
    title: "Revolución Solar",
    tagline: "Tu año personal",
    description:
      "Análisis de tu carta para el año que viene a partir de tu cumpleaños. Identifica temas centrales, meses clave y áreas de enfoque.",
    duration: "75 min",
    price: "$70 USD",
  },
  {
    symbol: "✦",
    title: "Mentoría Astral",
    tagline: "Aprendizaje profundo",
    description:
      "Sesiones personalizadas para quienes desean estudiar astrología desde su propia carta. Un camino de autoconocimiento guiado mes a mes.",
    duration: "4 sesiones / mes",
    price: "Desde $200",
  },
];

export default function Services() {
  return (
    <section id="servicios" className={styles.section}>
      <div className="container">
        <p className={styles.eyebrow}>✦ &nbsp;Lo que ofrezco&nbsp; ✦</p>
        <h2 className={styles.heading}>
          Servicios <em>astrológicos</em>
        </h2>
        <p className={styles.intro}>
          Cada lectura es un espacio íntimo y personalizado. Trabajamos con tu carta
          como punto de partida hacia una comprensión más profunda de quién eres y
          hacia dónde vas.
        </p>

        <div className={styles.grid}>
          {services.map((s) => (
            <article
              key={s.title}
              className={`${styles.card} ${s.featured ? styles.featured : ""}`}
            >
              {s.featured && (
                <span className={styles.badge}>Más solicitado</span>
              )}
              <div className={styles.symbol}>{s.symbol}</div>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.tagline}>{s.tagline}</p>
              <p className={styles.description}>{s.description}</p>
              <div className={styles.meta}>
                <span className={styles.duration}>{s.duration}</span>
                <span className={styles.price}>{s.price}</span>
              </div>
              <a href="#contacto" className={styles.btn}>
                Reservar →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
