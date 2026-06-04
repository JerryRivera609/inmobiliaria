import Image from "next/image";
import {
  Building2,
  Camera,
  Mail,
  MapPin,
  MessageCircle,
  Music2,
  PhoneCall,
  Play,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

const whatsappNumber = "51917741061";

const buildWhatsappUrl = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const footerLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Propiedades", href: "#propiedades" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

const contactItems: Array<{
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
}> = [
  {
    label: "WhatsApp",
    value: "+51 917 741 061",
    href: buildWhatsappUrl(
      "Hola Casa Imagen, quiero conversar con un asesor inmobiliario.",
    ),
    icon: PhoneCall,
  },
  {
    label: "Correo",
    value: "casaimageninmobiliaria@gmail.com",
    href: buildWhatsappUrl(
      "Hola Casa Imagen, quiero recibir informacion inmobiliaria.",
    ),
    icon: Mail,
  },
  {
    label: "Oficina",
    value: "Canaval y Moreyra 290, San Isidro",
    href: buildWhatsappUrl(
      "Hola Casa Imagen, quiero informacion sobre la oficina en Canaval y Moreyra 290, San Isidro.",
    ),
    icon: MapPin,
  },
];

const socialItems: Array<{
  label: string;
  href: string;
  icon: LucideIcon;
}> = [
  {
    label: "Facebook",
    href: "https://web.facebook.com/profile.php?id=61590651292929&locale=es_LA&_rdc=1&_rdr#",
    icon: UsersRound,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@casa.imagen.inmob?_r=1&_t=zs-96wlndcw0ex",
    icon: Music2,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCrdZr0BskqCwTPdu4TEMi7g",
    icon: Play,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/casaimageninmobiliaria",
    icon: Camera,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0b1f33] px-5 pt-14 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.12fr_0.72fr_1fr]">
          <div>
            <a href="#inicio" className="inline-flex items-center">
              <span className="flex h-16 w-[126px] items-center justify-center rounded-md bg-white px-3 shadow-[0_16px_36px_rgba(0,0,0,0.18)]">
                <Image
                  src="/logo.png"
                  alt="Casa Imagen"
                  width={471}
                  height={280}
                  className="h-auto max-h-14 w-auto"
                />
              </span>
            </a>

            <p className="mt-6 max-w-md text-base leading-7 text-white/72">
              Inmobiliaria profesional para compra, venta e inversion de
              propiedades con acompanamiento claro de inicio a cierre.
            </p>

            <a
              href={buildWhatsappUrl(
                "Hola Casa Imagen, quiero recibir asesoria inmobiliaria.",
              )}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex h-12 items-center gap-2 rounded-md bg-[#3b9c3f] px-5 text-sm font-bold text-white transition hover:bg-[#318535]"
            >
              <MessageCircle className="h-5 w-5" />
              Atencion por WhatsApp
            </a>
          </div>

          <div>
            <p className="flex items-center gap-2 text-sm font-bold uppercase text-[#9ce29f]">
              <Building2 className="h-4 w-4" />
              Secciones
            </p>
            <div className="mt-5 grid gap-3">
              {footerLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-semibold text-white/72 transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase text-[#9ce29f]">
              Contacto directo
            </p>
            <div className="mt-5 grid gap-4">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-start gap-3"
                  >
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white/8 text-[#9ce29f] transition group-hover:bg-[#3b9c3f] group-hover:text-white">
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <span>
                      <span className="block text-xs font-bold uppercase text-white/48">
                        {item.label}
                      </span>
                      <span className="mt-1 block text-sm font-semibold leading-5 text-white/82">
                        {item.value}
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 py-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm font-semibold text-white/54">
            2026 Casa Imagen Inmobiliaria. Todos los derechos reservados.
          </p>

          <div className="flex flex-wrap gap-3">
            {socialItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-white/12 text-white/70 transition hover:border-[#3b9c3f] hover:bg-[#3b9c3f] hover:text-white"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
