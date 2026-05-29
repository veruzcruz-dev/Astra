import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.symbol}>✦</span>
          <span className={styles.name}>Astral</span>
        </div>
        <p className={styles.tagline}>
          Lecturas astrológicas con alma · Online · Global
        </p>
        <div className={styles.links}>
          <a href="#servicios">Servicios</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#testimonios">Testimonios</a>
          <a href="#contacto">Contacto</a>
        </div>
        <p className={styles.copy}>
          © {new Date().getFullYear()} Astral. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
