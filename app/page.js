"use client";
import { useState } from "react";
import {
  Menu, X, MessageCircle, Star, Clock, ArrowRight, Bike, ShieldCheck, Handshake,
  ShoppingCart, Package, Receipt, UtensilsCrossed, GlassWater, Plus, Minus,
  Users, Wallet, Zap, CheckCircle2, Send, MapPin, Phone, Sparkles,
} from "lucide-react";

// ===== CONFIG =====
const BRAND = "Duo Delivery";
const CITY = "Tapachula";
const PHONES = [
  { label: "Línea 1", display: "960 112 1078", wa: "529601121078" },
  { label: "Línea 2", display: "962 426 5625", wa: "529624265625" },
];
const PRIMARY_PHONE = PHONES[0];
const HOURS = "9:00 AM a 11:00 PM, todos los días";
const waLink = (text, phone = PRIMARY_PHONE.wa) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
// Imágenes: guarda este logo como logo.jpg y tu flyer como flyer.jpg dentro de /public

const GRAD = "bg-gradient-to-r from-pink-500 via-fuchsia-400 to-sky-400 bg-clip-text text-transparent";
const BTN = "rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 font-semibold shadow-lg shadow-pink-500/30 transition hover:scale-105 active:scale-95";
const BTN_SKY = "rounded-full bg-gradient-to-r from-sky-500 to-blue-600 font-semibold shadow-lg shadow-sky-500/30 transition hover:scale-105 active:scale-95";

// ===== DATOS =====
const links = [
  { href: "#beneficios", label: "Por qué elegirnos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#unete", label: "Únete al equipo" },
  { href: "#faq", label: "Preguntas" },
  { href: "#contacto", label: "Contacto" },
];
const benefits = [
  { icon: Bike, title: "Rápidos", text: "Tu pedido sale en cuanto lo confirmamos y te avisamos en cada paso por WhatsApp.", span: "md:col-span-2" },
  { icon: ShieldCheck, title: "Seguros", text: "Tu dinero y tus paquetes viajan cuidados de principio a fin.", span: "" },
  { icon: Handshake, title: "Confiables", text: "Atención directa en nuestras dos líneas, clara y sin letra chiquita.", span: "" },
  { icon: Clock, title: "9 AM a 11 PM, todos los días", text: "Sin importar si es domingo o día festivo, aquí estamos para tu mandadito.", span: "md:col-span-2" },
];
const services = [
  { icon: ShoppingCart, title: "Compras", text: "Supermercados y tiendas sin salir de casa.", tags: ["City Club", "Walmart", "Chedraui", "OXXO", "Soriana", "Bodega Aurrerá", "Sam's Club", "Neto"] },
  { icon: UtensilsCrossed, title: "Comida y Bebidas", text: "Antojos, restaurantes y bebidas bien frías.", tags: ["Restaurantes", "Antojitos", "Refrescos", "Agua"] },
  { icon: Receipt, title: "Pagos y Trámites", text: "Paga tus recibos sin hacer fila.", tags: ["COAPATAP", "CFE Luz", "Trámites"] },
  { icon: Package, title: "Envíos y Paquetería", text: "Recogemos y entregamos tus paquetes y sobres.", tags: ["Recoger", "Entregar"] },
  { icon: GlassWater, title: "Mandados exprés", text: "Lo que se te olvidó o te urge en el momento.", tags: ["Rápido", "Seguro"] },
  { icon: Plus, title: "Y más...", text: "Cuéntanos tu mandadito y lo resolvemos.", tags: ["Tú pides"] },
];
const perks = [
  { icon: Wallet, title: "Gana por tu esfuerzo", text: "Pedidos constantes todos los días del horario de servicio." },
  { icon: Zap, title: "Trabaja a tu ritmo", text: "Elige cuándo conectarte dentro del horario de 9 AM a 11 PM." },
  { icon: Users, title: "Forma parte del grupo", text: "Un equipo de repartidores que se apoya y crece junto." },
];
const reqs = ["Moto o bici en buen estado", "Celular con WhatsApp", "Ganas de trabajar y buen trato al cliente"];
const reviews = [
  { name: "María G.", text: "Me hicieron la compra de Walmart en menos de una hora. Muy amables y todo llegó completo." },
  { name: "Carlos R.", text: "Les encargué recoger un paquete y pagar la luz. Cero filas, cero estrés. Los recomiendo." },
  { name: "Lupita H.", text: "Siempre contestan rápido en sus WhatsApp y avisan cuando van en camino. Súper confiables." },
];
const faqs = [
  { q: "¿Cómo hago un pedido?", a: "Escríbenos por WhatsApp al 960 112 1078 o al 962 426 5625, dinos qué necesitas y dónde te lo entregamos." },
  { q: "¿En qué horario trabajan?", a: "Todos los días de 9:00 AM a 11:00 PM." },
  { q: "¿En qué tiendas pueden comprar?", a: "City Club, Walmart, Chedraui, OXXO, Soriana, Bodega Aurrerá, Sam's Club y Neto, entre otras." },
  { q: "¿Pueden pagar servicios o hacer trámites por mí?", a: "Sí, pagamos servicios como agua (COAPATAP) y luz (CFE), además de trámites locales. Te enviamos tu comprobante." },
  { q: "¿Cómo me uno como repartidor?", a: "Mándanos un mensaje a cualquiera de nuestros WhatsApp con tu nombre y el vehículo que tienes, y te contactamos." },
];

// ===== COMPONENTES =====
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#07060d]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" className="flex items-center gap-2.5">
          <img
            src="/logo.jpg"
            alt={`Logo ${BRAND}`}
            className="h-10 w-10 rounded-full border border-pink-500/50 object-cover shadow-md shadow-pink-500/30"
          />
          <span className={`${GRAD} text-xl font-extrabold italic`}>{BRAND}</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-white/70 transition hover:text-white">{l.label}</a>
          ))}
          <a href={waLink("Hola, quiero hacer un pedido")} className={`${BTN} flex items-center gap-2 px-4 py-2 text-sm`}>
            <MessageCircle size={16} /> Haz tu pedido
          </a>
        </nav>
        <button aria-label="Menú" className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="space-y-1 border-t border-white/10 bg-[#07060d]/95 px-4 pb-4 md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-white/80">{l.label}</a>
          ))}
          <div className="mt-2 grid grid-cols-2 gap-2">
            {PHONES.map((p, idx) => (
              <a
                key={p.wa}
                href={waLink("Hola, quiero hacer un pedido", p.wa)}
                className={`${idx === 0 ? "bg-pink-600" : "bg-sky-600"} rounded-full py-2 text-center text-xs font-semibold`}
              >
                WA {p.display}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-32">
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-pink-600/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-40 h-96 w-96 rounded-full bg-sky-500/25 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-pink-500/40 bg-pink-500/10 px-3 py-1 text-xs text-pink-200">
            <Clock size={14} /> {HOURS}
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Tu mandadito <span className={GRAD}>en las mejores manos</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg text-white/70">
            Rápidos, seguros y confiables en {CITY}. Compras, comida y bebidas, pagos y trámites, envíos y paquetería directo hasta tu puerta.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waLink("Hola, quiero hacer un pedido", PHONES[0].wa)} className={`${BTN} flex items-center gap-2 px-5 py-3 text-sm sm:text-base`}>
              <MessageCircle size={18} /> {PHONES[0].display}
            </a>
            <a href={waLink("Hola, quiero hacer un pedido", PHONES[1].wa)} className={`${BTN_SKY} flex items-center gap-2 px-5 py-3 text-sm sm:text-base`}>
              <MessageCircle size={18} /> {PHONES[1].display}
            </a>
          </div>
          <div className="mt-4">
            <a href="#unete" className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-pink-300">
              ¿Tienes moto o bici? Únete como repartidor <ArrowRight size={16} />
            </a>
          </div>
          <div className="mt-7 flex items-center gap-3 text-sm text-white/70">
            <div className="flex text-yellow-400">
              {[0, 1, 2, 3, 4].map((i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <span>Rápidos · Seguros · Confiables</span>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-pink-500/50 via-fuchsia-500/30 to-sky-500/40 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-pink-400/30 bg-black p-2 shadow-2xl shadow-pink-500/20">
            <img src="/logo.jpg" alt="Duo Delivery" className="w-full rounded-2xl object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section id="beneficios" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">Por qué elegir {BRAND}</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-white/60">Hacemos tus mandados fáciles para que tú aproveches tu tiempo.</p>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {benefits.map(({ icon: Icon, title, text, span }) => (
            <div key={title} className={`${span} rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-pink-500/50 hover:bg-white/10`}>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-sky-500"><Icon size={24} /></div>
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-white/60">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicios" className="bg-white/[0.03] px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">Todo lo que hacemos por ti</h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text, tags }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-6 transition hover:-translate-y-1 hover:border-sky-400/50">
              <Icon className="text-pink-400" size={30} />
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-white/60">{text}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-14 max-w-sm">
          <div className="relative overflow-hidden rounded-3xl border border-sky-400/30 bg-white/5 p-2 shadow-2xl shadow-sky-500/20">
            <img src="/flyer.jpg" alt={`Servicios de ${BRAND}`} className="w-full rounded-2xl object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Join() {
  return (
    <section id="unete" className="px-4 py-20">
      <div className="mx-auto max-w-6xl rounded-3xl border border-pink-500/30 bg-gradient-to-br from-pink-600/20 via-black to-sky-600/20 p-8 md:p-12">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-xs text-sky-200">
          <Sparkles size={14} /> Vacantes abiertas en {CITY}
        </span>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Únete al equipo de repartidores</h2>
        <p className="mt-3 max-w-2xl text-white/70">Estamos creciendo y buscamos más repartidores para llegar a más clientes.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {perks.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-black/40 p-5">
              <Icon className="text-sky-400" />
              <h3 className="mt-3 font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-white/60">{text}</p>
            </div>
          ))}
        </div>
        <ul className="mt-8 space-y-2">
          {reqs.map((r) => (
            <li key={r} className="flex items-center gap-2 text-white/80"><CheckCircle2 size={18} className="text-pink-400" /> {r}</li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          {PHONES.map((p, idx) => (
            <a
              key={p.wa}
              href={waLink("Hola, quiero unirme al equipo de repartidores", p.wa)}
              className={`${idx === 0 ? BTN : BTN_SKY} inline-flex items-center gap-2 px-6 py-3 text-sm`}
            >
              <MessageCircle size={16} /> Postularme ({p.display})
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-white/[0.03] px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">Lo que dicen nuestros clientes</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex text-yellow-400">
                {[0, 1, 2, 3, 4].map((i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <blockquote className="mt-4 text-white/80">{r.text}</blockquote>
              <figcaption className="mt-4 font-semibold text-pink-300">{r.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">Preguntas frecuentes</h2>
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="rounded-2xl border border-white/10 bg-white/5">
              <button className="flex w-full items-center justify-between p-5 text-left font-semibold" onClick={() => setOpen(open === i ? null : i)}>
                {f.q}
                {open === i ? <Minus size={18} className="text-pink-400" /> : <Plus size={18} className="text-pink-400" />}
              </button>
              {open === i && <p className="px-5 pb-5 text-white/70">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [name, setName] = useState("");
  const [phoneTarget, setPhoneTarget] = useState(PRIMARY_PHONE.wa);
  const [type, setType] = useState("pedido");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (name.trim().length < 2 || msg.trim().length < 5) {
      setError("Escribe tu nombre y un mensaje de al menos 5 letras.");
      return;
    }
    setError("");
    setSent(true);
    const intro = type === "pedido" ? "Quiero hacer un pedido" : "Quiero ser repartidor";
    window.open(waLink(`Hola, soy ${name}. ${intro}: ${msg}`, phoneTarget), "_blank");
  };

  const field = "w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none transition focus:border-pink-500";

  return (
    <section id="contacto" className="bg-white/[0.03] px-4 py-20">
      <div className="mx-auto max-w-xl">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">¡Haz tu pedido!</h2>
        <p className="mt-3 text-center text-white/60">Llena el formulario o elige una de nuestras dos líneas de WhatsApp.</p>
        {sent ? (
          <div className="mt-8 rounded-2xl border border-green-500/40 bg-green-500/10 p-8 text-center">
            <CheckCircle2 className="mx-auto text-green-400" size={40} />
            <p className="mt-3 text-lg font-semibold">¡Mensaje enviado!</p>
            <button className="mt-3 text-sm text-white/60 underline" onClick={() => setSent(false)}>Enviar otro</button>
          </div>
        ) : (
          <form onSubmit={submit} className="mt-8 space-y-4">
            <input className={field} placeholder="Tu nombre" value={name} onChange={(e) => setName(e.target.value)} />
            <select className={field} value={type} onChange={(e) => setType(e.target.value)}>
              <option value="pedido">Quiero hacer un pedido</option>
              <option value="repartidor">Quiero ser repartidor</option>
            </select>
            <select className={field} value={phoneTarget} onChange={(e) => setPhoneTarget(e.target.value)}>
              {PHONES.map((p) => (
                <option key={p.wa} value={p.wa}>{p.label} WhatsApp: {p.display}</option>
              ))}
            </select>
            <textarea className={field} rows={4} placeholder="Cuéntanos qué necesitas" value={msg} onChange={(e) => setMsg(e.target.value)} />
            {error && <p className="text-sm text-pink-400">{error}</p>}
            <button type="submit" className={`${BTN} flex w-full items-center justify-center gap-2 py-3`}>
              <Send size={18} /> Enviar por WhatsApp
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        <div className="flex items-start gap-3">
          <img
            src="/logo.jpg"
            alt={`Logo ${BRAND}`}
            className="h-12 w-12 rounded-2xl border border-pink-500/40 object-cover"
          />
          <div>
            <p className={`${GRAD} text-2xl font-extrabold italic`}>{BRAND}</p>
            <p className="mt-1 text-sm text-white/60">Rápidos · Seguros · Confiables. Tu mandadito en las mejores manos.</p>
          </div>
        </div>
        <div>
          <p className="font-semibold">Enlaces</p>
          <ul className="mt-3 space-y-2 text-sm text-white/60">
            <li><a href="#servicios" className="hover:text-white">Servicios</a></li>
            <li><a href="#unete" className="hover:text-white">Únete al equipo</a></li>
            <li><a href="#faq" className="hover:text-white">Preguntas</a></li>
            <li><a href="#contacto" className="hover:text-white">Contacto</a></li>
          </ul>
        </div>
        <div className="space-y-2 text-sm text-white/60">
          <p className="font-semibold text-white">Contacto</p>
          {PHONES.map((p) => (
            <p key={p.wa} className="flex items-center gap-2">
              <Phone size={16} className="text-pink-400" />
              <a href={waLink("Hola, quiero hacer un pedido", p.wa)} className="hover:text-white">{p.display}</a>
            </p>
          ))}
          <p className="flex items-center gap-2"><MapPin size={16} /> {CITY}</p>
          <p className="flex items-center gap-2"><Clock size={16} /> {HOURS}</p>
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-white/40">© 2026 {BRAND}. Todos los derechos reservados.</p>
    </footer>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#07060d] text-white" style={{ scrollBehavior: "smooth" }}>
      <Navbar />
      <Hero />
      <Benefits />
      <Services />
      <Join />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
