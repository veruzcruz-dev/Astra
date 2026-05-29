import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.stars} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <p className={styles.eyebrow}>✦ &nbsp;Astrología Consciente&nbsp; ✦</p>
        <h1 className={styles.title}>
          Los astros hablan.<br />
          <em>¿Estás lista para escuchar?</em>
        </h1>
        <p className={styles.subtitle}>
          Lecturas personalizadas de carta natal, tránsitos y ciclos lunares
          para guiarte en los momentos que más importan.
        </p>
        <div className={styles.actions}>
          <a href="#servicios" className={styles.btnPrimary}>
            Explorar servicios
          </a>
          <a href="#sobre-mi" className={styles.btnGhost}>
            Conoce mi enfoque
          </a>
        </div>
      </div>

      <div className={styles.scroll} aria-hidden="true">
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
}
