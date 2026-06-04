"use client";

import { FormEvent, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const contactItems = [
  {
    label: "Dirección",
    value: "Av. Javier Prado Este 560, Lima, Perú",
    href: "https://maps.google.com/?q=Av.%20Javier%20Prado%20Este%20560%20Lima%20Peru",
  },
  {
    label: "Teléfono",
    value: "+51 922 654 520",
    href: "tel:+51922654520",
  },
  {
    label: "Correo",
    value: "hola@casaimagen.pe",
    href: "mailto:hola@casaimagen.pe",
  },
];

const socialItems = ["Facebook", "Instagram", "LinkedIn"];
const whatsappNumber = "51922654520";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      return;
    }

    const context = gsap.context(() => {
      gsap.from([leftRef.current, formRef.current], {
        autoAlpha: 0,
        y: 34,
        duration: 0.75,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 74%",
        },
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = form.get("name")?.toString().trim();
    const email = form.get("email")?.toString().trim();
    const phone = form.get("phone")?.toString().trim();
    const message = form.get("message")?.toString().trim();

    const whatsappMessage = [
      "Hola Casa Imagen, quiero recibir asesoría inmobiliaria.",
      name ? `Nombre: ${name}` : "",
      email ? `Correo: ${email}` : "",
      phone ? `Teléfono: ${phone}` : "",
      message ? `Consulta: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <section
      ref={sectionRef}
      id="contacto"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#0D233A] px-5 py-16 sm:px-8 lg:px-10"
    >
      <div
        className="absolute inset-0 -z-30 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/contactanos.jpg'), url('/figma-house.jpg')",
        }}
      />
      <div className="absolute inset-0 -z-20 bg-[#0D233A]/58" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(13,35,58,0.66)_0%,rgba(13,35,58,0.48)_48%,rgba(255,255,255,0.08)_100%)]" />

      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_0.9fr] lg:items-center">
        <div ref={leftRef} className="text-white">
          <p className="text-sm font-bold uppercase text-white/72">Contacto</p>
          <h2 className="mt-4 max-w-xl text-4xl font-bold leading-tight sm:text-5xl">
            ¿Necesitas asesoría? Hablemos.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-white/78">
            Cuéntanos qué buscas y prepararemos una ruta clara de opciones,
            visitas y documentación para avanzar con seguridad.
          </p>

          <div className="mt-7 space-y-4">
            {contactItems.map((item) => (
              <a key={item.label} href={item.href} className="block">
                <span className="block text-xs font-bold uppercase text-[#9ce29f]">
                  {item.label}
                </span>
                <span className="mt-1 block text-base font-semibold text-white">
                  {item.value}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-7">
            <p className="text-sm font-bold uppercase text-white/72">
              Social media
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              {socialItems.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-white/24 px-4 py-2 text-sm font-semibold text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="justify-self-stretch rounded-lg bg-white/94 p-6 shadow-[0_24px_70px_rgba(13,35,58,0.22)] backdrop-blur-sm sm:p-8 lg:max-w-[520px] lg:justify-self-end"
        >
          <h3 className="text-center text-3xl font-bold leading-tight text-[#3b9c3f]">
            ¿Tienes una consulta?
          </h3>

          <div className="mt-6 grid gap-4">
            <label>
              <span className="sr-only">Nombre completo</span>
              <input
                name="name"
                type="text"
                required
                placeholder="Nombre completo"
                className="h-[52px] w-full rounded-none border-0 bg-[#d9d9d9] px-5 text-base font-semibold text-[#0D233A] outline-none transition placeholder:text-[#777] focus:bg-[#ededed]"
              />
            </label>
            <label>
              <span className="sr-only">Correo</span>
              <input
                name="email"
                type="email"
                placeholder="Correo electrónico"
                className="h-[52px] w-full rounded-none border-0 bg-[#d9d9d9] px-5 text-base font-semibold text-[#0D233A] outline-none transition placeholder:text-[#777] focus:bg-[#ededed]"
              />
            </label>
            <label>
              <span className="sr-only">Teléfono</span>
              <input
                name="phone"
                type="tel"
                required
                placeholder="Teléfono"
                className="h-[52px] w-full rounded-none border-0 bg-[#d9d9d9] px-5 text-base font-semibold text-[#0D233A] outline-none transition placeholder:text-[#777] focus:bg-[#ededed]"
              />
            </label>
            <label>
              <span className="sr-only">Pregunta</span>
              <textarea
                name="message"
                required
                placeholder="Pregunta o mensaje"
                rows={4}
                className="w-full resize-none rounded-none border-0 bg-[#d9d9d9] px-5 py-4 text-base font-semibold text-[#0D233A] outline-none transition placeholder:text-[#777] focus:bg-[#ededed]"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-4 h-14 w-full bg-[#3b9c3f] text-lg font-bold text-white transition hover:bg-[#318535]"
          >
            Enviar por WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
