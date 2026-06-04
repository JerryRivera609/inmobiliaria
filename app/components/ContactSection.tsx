"use client";

import { FormEvent, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  AtSign,
  Camera,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  MessageSquare,
  Music2,
  PhoneCall,
  Play,
  Send,
  User,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

const whatsappNumber = "51917741061";

const buildWhatsappUrl = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const contactItems = [
  {
    label: "Direccion",
    value: "Av. Canaval y Moreyra 290, San Isidro",
    icon: MapPin,
    href: buildWhatsappUrl(
      "Hola Casa Imagen, quiero coordinar una visita a la oficina de Canaval y Moreyra 290, San Isidro.",
    ),
  },
  {
    label: "Telefono",
    value: "+51 917 741 061",
    icon: PhoneCall,
    href: buildWhatsappUrl(
      "Hola Casa Imagen, quiero comunicarme con un asesor inmobiliario.",
    ),
  },
  {
    label: "Correo",
    value: "casaimageninmobiliaria@gmail.com",
    icon: Mail,
    href: buildWhatsappUrl(
      "Hola Casa Imagen, quiero recibir informacion inmobiliaria por WhatsApp.",
    ),
  },
];

const socialItems = [
  {
    label: "Facebook",
    icon: UsersRound,
    href: "https://web.facebook.com/profile.php?id=61590651292929&locale=es_LA&_rdc=1&_rdr#",
  },
  {
    label: "TikTok",
    icon: Music2,
    href: "https://www.tiktok.com/@casa.imagen.inmob?_r=1&_t=zs-96wlndcw0ex",
  },
  {
    label: "YouTube",
    icon: Play,
    href: "https://www.youtube.com/channel/UCrdZr0BskqCwTPdu4TEMi7g",
  },
  {
    label: "Instagram",
    icon: Camera,
    href: "https://www.instagram.com/casaimageninmobiliaria",
  },
];

const formFields: Array<{
  label: string;
  name: string;
  placeholder: string;
  type?: "text" | "email" | "tel";
  required?: boolean;
  icon: LucideIcon;
}> = [
  {
    label: "Nombre completo",
    name: "name",
    placeholder: "Nombre completo",
    type: "text",
    required: true,
    icon: User,
  },
  {
    label: "Correo",
    name: "email",
    placeholder: "Correo electronico",
    type: "email",
    icon: AtSign,
  },
  {
    label: "Telefono",
    name: "phone",
    placeholder: "Telefono",
    type: "tel",
    required: true,
    icon: PhoneCall,
  },
];

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
      "Hola Casa Imagen, quiero recibir asesoria inmobiliaria.",
      name ? `Nombre: ${name}` : "",
      email ? `Correo: ${email}` : "",
      phone ? `Telefono: ${phone}` : "",
      message ? `Consulta: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      buildWhatsappUrl(whatsappMessage),
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
          <p className="inline-flex items-center gap-2 text-sm font-bold uppercase text-white/72">
            <MessageCircle className="h-4 w-4 text-[#9ce29f]" />
            Contacto
          </p>
          <h2 className="mt-4 max-w-xl text-4xl font-bold leading-tight sm:text-5xl">
            Necesitas asesoria? Hablemos.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-white/78">
            Cuentanos que buscas y prepararemos una ruta clara de opciones,
            visitas y documentacion para avanzar con seguridad.
          </p>

          <div className="mt-7 space-y-4">
            {contactItems.map((item) => {
              const Icon = item.icon;

              return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 transition hover:translate-x-1"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-white/18 bg-white/12 text-[#9ce29f] transition group-hover:border-[#9ce29f] group-hover:bg-[#3b9c3f] group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase text-[#9ce29f]">
                    {item.label}
                  </span>
                  <span className="mt-1 block text-base font-semibold text-white">
                    {item.value}
                  </span>
                </span>
              </a>
              );
            })}
          </div>

          <div className="mt-7">
            <p className="text-sm font-bold uppercase text-white/72">
              Social media
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              {socialItems.map((item) => {
                const Icon = item.icon;

                return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-white/24 px-4 py-2 text-sm font-semibold text-white transition hover:border-[#9ce29f] hover:bg-[#3b9c3f]"
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                  <ExternalLink className="h-3.5 w-3.5 text-white/68" />
                </a>
                );
              })}
            </div>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="justify-self-stretch rounded-lg bg-white/94 p-6 shadow-[0_24px_70px_rgba(13,35,58,0.22)] backdrop-blur-sm sm:p-8 lg:max-w-[520px] lg:justify-self-end"
        >
          <h3 className="text-center text-3xl font-bold leading-tight text-[#3b9c3f]">
            Tienes una consulta?
          </h3>

          <div className="mt-6 grid gap-4">
            {formFields.map((field) => {
              const Icon = field.icon;

              return (
                <label key={field.name} className="relative block">
                  <span className="sr-only">{field.label}</span>
                  <Icon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#3b9c3f]" />
                  <input
                    name={field.name}
                    type={field.type}
                    required={field.required}
                    placeholder={field.placeholder}
                    className="h-[52px] w-full rounded-none border-0 bg-[#d9d9d9] px-12 text-base font-semibold text-[#0D233A] outline-none transition placeholder:text-[#777] focus:bg-[#ededed]"
                  />
                </label>
              );
            })}
            <label className="relative block">
              <span className="sr-only">Pregunta</span>
              <MessageSquare className="pointer-events-none absolute left-4 mt-4 h-5 w-5 text-[#3b9c3f]" />
              <textarea
                name="message"
                required
                placeholder="Pregunta o mensaje"
                rows={4}
                className="w-full resize-none rounded-none border-0 bg-[#d9d9d9] py-4 pl-12 pr-5 text-base font-semibold text-[#0D233A] outline-none transition placeholder:text-[#777] focus:bg-[#ededed]"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-4 inline-flex h-14 w-full items-center justify-center gap-3 bg-[#3b9c3f] text-lg font-bold text-white transition hover:bg-[#318535]"
          >
            <Send className="h-5 w-5" />
            Enviar por WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
