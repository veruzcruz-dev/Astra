import styles from "./Testimonials.module.css";

const testimonials = [
  {
    quote:
      "Fue una sesión que me cambió la perspectiva completamente. Por primera vez entendí por qué ciertos patrones se repetían en mi vida. Salí con mucha claridad.",
    name: "Valentina R.",
    sign: "Sol en Escorpio",
  },
  {
    quote:
      "La lectura de tránsitos llegó en el momento exacto en que lo necesitaba. Me ayudó a tomar una decisión importante con confianza y sin miedo.",
    name: "Sofía M.",
    sign: "Sol en Capricornio",
  },
  {
    quote:
      "Nunca había vivido la astrología de esta manera: como una herramienta de autoconocimiento real, no como predicciones. Fue una revelación.",
    name: "Camila O.",
    sign: "Sol en Piscis",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className={styles.section}>
      <div className="container">
        <p className={styles.eyebrow}>✦ &nbsp;Voces del cosmos&nbsp; ✦</p>
        <h2 className={styles.heading}>
          Lo que dicen <em>quienes ya navegaron</em>
        </h2>
        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <blockquote key={i} className={styles.card}>
              <span className={styles.quote}>"</span>
              <p className={styles.text}>{t.quote}</p>
              <footer className={styles.footer}>
                <span className={styles.name}>{t.name}</span>
                <span className={styles.sign}>· {t.sign}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
