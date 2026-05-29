"use client";
import { useState } from "react";
import styles from "./CTA.module.css";

export default function CTA() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const services = [
    "Carta Natal",
    "Tránsitos & Ciclos",
    "Luna Nueva & Llena",
    "Sinastría de Pareja",
    "Revolución Solar",
    "Mentoría Astral",
  ];

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to your email service or API
    console.log("Form submitted:", form);
    setSent(true);
  };

  return (
    <section id="contacto" className={styles.section}>
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.left}>
            <p className={styles.eyebrow}>✦ &nbsp;Reserva tu espacio&nbsp; ✦</p>
            <h2 className={styles.heading}>
              ¿Lista para <em>encontrarte</em> en el mapa?
            </h2>
            <p className={styles.body}>
              Las sesiones son por videollamada y pueden realizarse en español o
              inglés. El pago se confirma al momento de la reserva.
            </p>
            <ul className={styles.details}>
              <li>✦ Respuesta en menos de 48 h</li>
              <li>✦ Agenda flexible (zona horaria AEDT/GMT/ART)</li>
              <li>✦ Grabación de la sesión disponible</li>
            </ul>
          </div>

          <div className={styles.right}>
            {sent ? (
              <div className={styles.success}>
                <span className={styles.successSymbol}>✧</span>
                <p>¡Gracias por tu mensaje! Te escribo pronto para confirmar tu sesión.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.field}>
                  <label htmlFor="name">Nombre</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Tu nombre"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="service">Servicio de interés</label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Seleccioná un servicio…</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={styles.field}>
                  <label htmlFor="message">¿Qué te gustaría explorar?</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Cuéntame brevemente qué te trae aquí…"
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className={styles.submit}>
                  Enviar consulta →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
