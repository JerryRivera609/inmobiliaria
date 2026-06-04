"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageCircle } from "lucide-react";

type Listing = {
  title: string;
  location: string;
  price: string;
  details: string;
  image: string;
};

type PropertyShowcaseProps = {
  listings: Listing[];
};

const tabs = ["Venta", "Alquiler", "Proyecto nuevo"];
const whatsappNumber = "51917741061";

const buildWhatsappUrl = (listing: Listing) => {
  const message = [
    "Hola Casa Imagen, quiero informacion sobre este inmueble.",
    `Inmueble: ${listing.title}`,
    `Ubicacion: ${listing.location}`,
    `Precio: ${listing.price}`,
    `Detalles: ${listing.details}`,
  ].join("\n");

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export default function PropertyShowcase({ listings }: PropertyShowcaseProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const sectionRef = useRef<HTMLElement>(null);
  const filterRef = useRef<HTMLFormElement>(null);
  const cardsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      return;
    }

    const context = gsap.context(() => {
      gsap.from(filterRef.current, {
        autoAlpha: 0,
        y: 42,
        scale: 0.98,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 84%",
        },
      });

      gsap.from(cardsRef.current, {
        autoAlpha: 0,
        y: 54,
        scale: 0.97,
        duration: 0.78,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".property-grid",
          start: "top 78%",
        },
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  function animateCard(card: HTMLElement, active: boolean) {
    gsap.to(card, {
      y: active ? -8 : 0,
      duration: 0.34,
      ease: "power3.out",
    });
  }

  return (
    <section ref={sectionRef} id="propiedades" className="bg-white">
      <div className="relative z-20 -mt-16 px-5 sm:px-8 lg:px-10">
        <form
          ref={filterRef}
          className="mx-auto max-w-6xl"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="flex flex-wrap items-end gap-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`h-11 rounded-t-md px-6 text-sm font-semibold transition ${
                  activeTab === tab
                    ? "bg-white text-[#3b9c3f]"
                    : "bg-white/78 text-[#0D233A] hover:bg-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid overflow-hidden rounded-r-lg rounded-bl-lg bg-white shadow-[0_28px_80px_rgba(13,35,58,0.16)] lg:grid-cols-[1fr_1fr_1.65fr_auto]">
            <label className="border-b border-[#0D233A]/10 px-5 py-4 lg:border-b-0 lg:border-r">
              <span className="block text-xs font-bold uppercase text-[#6a7b89]">
                Tipo de inmueble
              </span>
              <select className="mt-2 w-full bg-transparent text-base font-semibold text-[#0D233A] outline-none">
                <option>Casa</option>
                <option>Departamento</option>
                <option>Terreno</option>
                <option>Local comercial</option>
              </select>
            </label>

            <label className="border-b border-[#0D233A]/10 px-5 py-4 lg:border-b-0 lg:border-r">
              <span className="block text-xs font-bold uppercase text-[#6a7b89]">
                Rango de precio
              </span>
              <select className="mt-2 w-full bg-transparent text-base font-semibold text-[#0D233A] outline-none">
                <option>US$ 100k - 250k</option>
                <option>US$ 250k - 400k</option>
                <option>US$ 400k a más</option>
              </select>
            </label>

            <label className="border-b border-[#0D233A]/10 px-5 py-4 lg:border-b-0 lg:border-r">
              <span className="block text-xs font-bold uppercase text-[#6a7b89]">
                Búsqueda
              </span>
              <input
                type="search"
                placeholder="Ubicación, ID o nombre de propiedad"
                className="mt-2 w-full bg-transparent text-base font-semibold text-[#0D233A] outline-none placeholder:text-[#8a99a5]"
              />
            </label>

            <button
              type="submit"
              className="min-h-20 bg-[#3b9c3f] px-10 text-2xl font-bold text-white transition hover:bg-[#318535]"
            >
              Buscar
            </button>
          </div>
        </form>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase text-[#3b9c3f]">
              Propiedades destacadas
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-tight text-[#0D233A] sm:text-4xl">
              Oportunidades seleccionadas para tomar una buena decisión.
            </h2>
          </div>
          <p className="max-w-md text-sm font-semibold leading-6 text-[#5d7080]">
            Portafolio inicial para compra, venta e inversión inmobiliaria.
          </p>
        </div>

        <div className="property-grid mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {listings.slice(0, 6).map((listing, index) => (
            <article
              key={listing.title}
              ref={(node) => {
                if (node) {
                  cardsRef.current[index] = node;
                }
              }}
              onMouseEnter={(event) => animateCard(event.currentTarget, true)}
              onMouseLeave={(event) => animateCard(event.currentTarget, false)}
              className="flex flex-col overflow-hidden rounded-lg border border-[#0D233A]/10 bg-white shadow-[0_18px_44px_rgba(13,35,58,0.08)]"
            >
              <div className="relative aspect-[1.42] overflow-hidden bg-[#dfeadf]">
                <Image
                  src={listing.image}
                  alt={listing.title}
                  fill
                  sizes="(min-width: 1280px) 392px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />
                <div className="absolute left-4 top-4 rounded-md bg-[#3b9c3f] px-3 py-2 text-xs font-bold uppercase text-white shadow-[0_10px_22px_rgba(31,108,47,0.24)]">
                  Disponible
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <p className="text-sm font-bold text-[#3b9c3f]">
                  {listing.location}
                </p>
                <h3 className="mt-2 text-xl font-bold leading-snug text-[#0D233A]">
                  {listing.title}
                </h3>
                <div className="mt-5 border-t border-[#0D233A]/10 pt-4">
                  <p className="text-lg font-bold text-[#0D233A]">
                    {listing.price}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#5d7080]">
                    {listing.details}
                  </p>
                </div>

                <a
                  href={buildWhatsappUrl(listing)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#3b9c3f] px-4 text-sm font-bold text-white transition hover:bg-[#318535]"
                >
                  <MessageCircle className="h-5 w-5" />
                  Consultar por WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-9 flex justify-end">
          <a
            href="#contacto"
            className="inline-flex h-[52px] items-center justify-center rounded-md bg-[#0D233A] px-8 text-base font-bold text-white shadow-[0_14px_30px_rgba(13,35,58,0.16)] transition hover:bg-[#17344f]"
          >
            Ver más
          </a>
        </div>
      </div>
    </section>
  );
}
