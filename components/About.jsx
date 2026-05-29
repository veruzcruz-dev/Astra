import styles from "./About.module.css";

const values = [
  { symbol: "☿", label: "Perspectiva psicológica" },
  { symbol: "♄", label: "Astrología evolutiva" },
  { symbol: "♅", label: "Ciclos y propósito de vida" },
  { symbol: "⚸", label: "Nodos lunares & karma" },
];

export default function About() {
  return (
    <section id="sobre-mi" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.visual}>
          <div className={styles.circle}>
            <span className={styles.bigSymbol}>⊙</span>
          </div>
        </div>

        <div className={styles.text}>
          <p className={styles.eyebrow}>✦ &nbsp;Mi enfoque&nbsp; ✦</p>
          <h2 className={styles.heading}>
            Astrología como <em>lenguaje del alma</em>
          </h2>
          <p className={styles.body}>
            Llevo más de ocho años estudiando el cielo y sus resonancias con la
            experiencia humana. Mi práctica integra la astrología psicológica con
            la tradición evolutiva: no predigo, acompaño.
          </p>
          <p className={styles.body}>
            Cada sesión es un espacio de escucha activa donde el mapa celeste se
            convierte en espejo de tu mundo interior. Juntas exploramos tus ciclos,
            tus patrones y tus posibilidades.
          </p>

          <ul className={styles.values}>
            {values.map((v) => (
              <li key={v.label} className={styles.value}>
                <span className={styles.vSymbol}>{v.symbol}</span>
                <span>{v.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
