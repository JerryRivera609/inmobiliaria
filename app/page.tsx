import Image from "next/image";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import PropertyShowcase from "./components/PropertyShowcase";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Propiedades", href: "#propiedades" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

const featuredListings = [
  {
    title: "Casa familiar en zona residencial",
    location: "Santiago de Surco",
    price: "Desde US$ 285,000",
    details: "4 dorm. · 3 baños · 220 m²",
    image: "/figma-house.jpg",
  },
  {
    title: "Departamento con vista urbana",
    location: "Miraflores",
    price: "Desde US$ 168,000",
    details: "3 dorm. · 2 baños · 118 m²",
    image: "/figma-house.jpg",
  },
  {
    title: "Residencia moderna con terraza",
    location: "La Molina",
    price: "Desde US$ 342,000",
    details: "5 dorm. · 4 baños · 310 m²",
    image: "/figma-house.jpg",
  },
  {
    title: "Proyecto boutique de inversión",
    location: "San Isidro",
    price: "Desde US$ 210,000",
    details: "2 dorm. · 2 baños · 96 m²",
    image: "/figma-house.jpg",
  },
  {
    title: "Casa de estreno con jardín",
    location: "Chacarilla",
    price: "Desde US$ 398,000",
    details: "4 dorm. · 4 baños · 280 m²",
    image: "/figma-house.jpg",
  },
  {
    title: "Penthouse con terraza privada",
    location: "Barranco",
    price: "Desde US$ 255,000",
    details: "3 dorm. · 3 baños · 145 m²",
    image: "/figma-house.jpg",
  },
];

const metrics = [
  { value: "+120", label: "propiedades gestionadas" },
  { value: "24h", label: "tiempo de primera respuesta" },
  { value: "100%", label: "acompañamiento documentario" },
];

const services = [
  "Búsqueda personalizada por zona y presupuesto",
  "Filtro técnico de documentación y antecedentes",
  "Tasación, promoción y estrategia de venta",
  "Agenda de visitas y negociación de condiciones",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f7f4] text-[#0D233A]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-[#3b9c3f]/95 shadow-[0_8px_28px_rgba(31,108,47,0.22)] backdrop-blur">
        <nav
          className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
          aria-label="Navegación principal"
        >
          <a href="#inicio" className="flex items-center">
            <span className="flex h-16 w-[118px] items-center justify-center rounded-md bg-white/96 px-3 shadow-[0_10px_24px_rgba(13,35,58,0.12)]">
              <Image
                src="/logo.png"
                alt="Casa Imagen"
                width={471}
                height={280}
                priority
                className="h-auto max-h-14 w-auto"
              />
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-white/82 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contacto"
            className="rounded-md bg-[#0D233A] px-5 py-3 text-sm font-bold text-white shadow-[0_10px_24px_rgba(13,35,58,0.24)] transition hover:bg-[#17344f]"
          >
            Solicitar asesoría
          </a>
        </nav>
      </header>

      <section
        id="inicio"
        className="relative isolate flex min-h-[86svh] scroll-mt-24 items-center overflow-hidden bg-[#3b9c3f] px-5 pb-16 pt-36 text-white sm:px-8 lg:px-10"
      >
        <div className="absolute inset-0 -z-30 bg-[#3b9c3f]" />
        <div className="absolute left-0 top-24 -z-20 hidden h-80 w-80 opacity-20 md:block [background-image:radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:16px_16px]" />
        <div className="absolute -bottom-36 -left-24 -z-20 h-80 w-80 rounded-full border-[44px] border-white/10" />
        <div className="absolute bottom-0 right-0 top-20 -z-20 hidden w-[58%] lg:block">
          <Image
            src="/figma-house.jpg"
            alt="Residencia moderna de dos niveles con iluminación cálida"
            fill
            priority
            sizes="58vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#3b9c3f_0%,rgba(59,156,63,0.74)_24%,rgba(59,156,63,0.22)_64%,rgba(59,156,63,0.08)_100%)]" />
          <div className="absolute inset-y-0 left-0 w-1/2 bg-[linear-gradient(90deg,#3b9c3f_0%,rgba(59,156,63,0)_100%)]" />
        </div>

        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-5 border-l-4 border-white pl-4 text-sm font-bold uppercase text-white/82">
              Inmobiliaria · compra · venta · inversión
            </p>
            <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-normal sm:text-6xl lg:text-7xl">
              Casa Imagen
            </h1>
            <p className="mt-6 max-w-2xl text-2xl font-semibold leading-tight text-white sm:text-3xl">
              TENEMOS EL HOGAR PERFECTO PARA TI
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">
              Asesoría inmobiliaria profesional para encontrar, vender o
              invertir en propiedades con información clara, procesos ordenados
              y decisiones bien sustentadas.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#propiedades"
                className="inline-flex h-[52px] items-center justify-center rounded-md bg-[#0D233A] px-7 text-base font-bold text-white shadow-[0_14px_30px_rgba(13,35,58,0.22)] transition hover:bg-[#17344f]"
              >
                Explorar opciones
              </a>
              <a
                href="#contacto"
                className="inline-flex h-[52px] items-center justify-center rounded-md border border-white/55 bg-white/[0.12] px-7 text-base font-bold text-white backdrop-blur transition hover:border-white hover:bg-white/[0.18]"
              >
                Agendar evaluación
              </a>
            </div>
          </div>
        </div>
      </section>

      <PropertyShowcase listings={featuredListings} />

      <section className="px-5 py-[72px] sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 border-b border-[#0D233A]/10 pb-14 md:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <p className="text-4xl font-bold text-[#0D233A]">
                {metric.value}
              </p>
              <p className="mt-2 max-w-xs text-sm font-semibold uppercase leading-6 text-[#5d7080]">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="servicios"
        className="scroll-mt-24 bg-[#0D233A] px-5 py-20 text-white sm:px-8 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase text-[#F2741B]">
              Servicios
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              Gestión inmobiliaria con método y seguimiento.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/70">
              Cada operación necesita información verificable, tiempos claros y
              una negociación bien conducida.
            </p>
          </div>

          <div className="grid gap-3">
            {services.map((service, index) => (
              <div
                key={service}
                className="grid grid-cols-[3.5rem_1fr] items-center rounded-lg border border-white/10 bg-white/[0.055]"
              >
                <span className="flex h-full min-h-[72px] items-center justify-center border-r border-white/10 text-sm font-bold text-[#8dd491]">
                  0{index + 1}
                </span>
                <p className="px-5 py-5 text-base font-semibold text-white/88">
                  {service}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
}
