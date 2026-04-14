"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Flame, Truck, Handshake, Star } from "lucide-react";
import { CountdownTimer } from "@/components/CountdownTimer";

// ─── Sponsor sprite data ─────────────────────────────────────────────────────
// Image dimensions (sponsors.jpg): ~770 × 1050 px
const IMG_W = 770;
const IMG_H = 1050;

type Crop = { x: number; y: number; w: number; h: number };

const SPONSORS: { id: string; tier: 1 | 2 | 3; crop: Crop }[] = [
  // Row 1 – main sponsor (full width, two halves combined)
  { id: "mobil-delvac",   tier: 1, crop: { x: 0,   y: 0,   w: 770, h: 210 } },
  // Row 2 – tier 2
  { id: "santinel",       tier: 2, crop: { x: 0,   y: 215, w: 250, h: 175 } },
  { id: "tcc",            tier: 2, crop: { x: 250, y: 215, w: 260, h: 175 } },
  { id: "grupo-forza",    tier: 2, crop: { x: 510, y: 215, w: 260, h: 175 } },
  // Row 3 – tier 3
  { id: "negritos",       tier: 3, crop: { x: 0,   y: 390, w: 230, h: 235 } },
  { id: "autotanques",    tier: 3, crop: { x: 230, y: 390, w: 280, h: 120 } },
  { id: "pepes",          tier: 3, crop: { x: 510, y: 390, w: 260, h: 120 } },
  { id: "cj2",            tier: 3, crop: { x: 230, y: 510, w: 280, h: 115 } },
  { id: "hammer",         tier: 3, crop: { x: 510, y: 510, w: 260, h: 115 } },
  // Row 4 – tier 3
  { id: "taris",          tier: 3, crop: { x: 0,   y: 625, w: 250, h: 135 } },
  { id: "sm",             tier: 3, crop: { x: 250, y: 625, w: 260, h: 135 } },
  { id: "8w",             tier: 3, crop: { x: 510, y: 625, w: 260, h: 135 } },
  // Row 5 – tier 3
  { id: "licencias",      tier: 3, crop: { x: 0,   y: 760, w: 250, h: 130 } },
  { id: "duran",          tier: 3, crop: { x: 250, y: 760, w: 260, h: 130 } },
  { id: "gorras",         tier: 3, crop: { x: 510, y: 760, w: 260, h: 130 } },
  // Row 6 – tier 3
  { id: "yokohama",       tier: 3, crop: { x: 0,   y: 890, w: 250, h: 160 } },
  { id: "grupo-turbo",    tier: 3, crop: { x: 250, y: 890, w: 260, h: 160 } },
  { id: "truck-caps",     tier: 3, crop: { x: 510, y: 890, w: 260, h: 160 } },
];

// ─── Main Page ───────────────────────────────────────────────────────────────
export default function Home() {
  const mainSponsor   = SPONSORS.filter(s => s.tier === 1);
  const tier2Sponsors = SPONSORS.filter(s => s.tier === 2);
  const tier3Sponsors = SPONSORS.filter(s => s.tier === 3);

  return (
    <main className="min-h-screen bg-white">
      {/* Header bar strictly for Timer */}
      <div className="absolute top-0 right-0 w-full flex justify-end px-4 md:px-8 py-6 z-50">
        <CountdownTimer />
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-[100svh] overflow-hidden flex flex-col items-center pt-24 md:pt-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Truck Fest Hero Background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center w-full px-4 mix-blend-difference">
          <motion.p
            className="text-2xl md:text-4xl font-sans font-semibold text-white mb-2 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Gran Premio Mobil Delvac&trade;
          </motion.p>
          <motion.h1
            className="text-7xl md:text-[11rem] font-heading text-white leading-[0.8] tracking-tighter uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            TRUCK FEST <br /> 2026
          </motion.h1>
        </div>
      </section>

      {/* Intro & Video Section */}
      <section className="relative z-30 bg-black pt-32 pb-16 px-4 w-full border-t-4 border-[#c5a977]">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-5xl md:text-7xl font-heading text-white mb-6 tracking-tighter uppercase leading-[0.9]">
            Lo que vas a <br /> vivir
          </h2>
          <p className="text-white/70 font-medium max-w-2xl mx-auto text-lg">
            No es solo una expo… es una experiencia completa donde el poder, el diseño y la competencia se viven en tiempo real.
          </p>
        </div>

        <div className="flex justify-center w-full max-w-[320px] mx-auto">
          <div className="relative w-full aspect-[9/16] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(197,169,119,0.15)] border-8 border-[#111]">
            <iframe
              src="https://www.youtube.com/embed/PGfRixPPGH0?autoplay=1&mute=1&loop=1&playlist=PGfRixPPGH0"
              title="YouTube video player"
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Features Grid + Escala Real + Sponsors */}
      <section className="relative z-30 bg-black pt-24 pb-24 px-4 w-full">

        {/* 6 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          <FeatureCard
            icon={
              <svg viewBox="0 0 56 26" className="w-12 h-6" fill="#c5a977">
                <rect x="0"  y="5"  width="32" height="16" rx="2.5"/>
                <rect x="32" y="9"  width="16" height="12" rx="2"/>
                <rect x="47" y="11" width="6"  height="5"  rx="1" opacity="0.6"/>
                <circle cx="8"  cy="23" r="3"/>
                <circle cx="22" cy="23" r="3"/>
                <circle cx="42" cy="23" r="3"/>
              </svg>
            }
            title="Arrancones de alto nivel"
            description="Con campeones nacionales y estrellas. Tráilers, corredores y portables reconocidos que ya son referencia en la pista."
          />
          <FeatureCard
            icon={<Flame className="w-10 h-10 text-[#c5a977]" />}
            title="Caravana de arranque"
            description="El convoy que marca el inicio del evento y prende el ambiente desde el primer momento."
          />
          <FeatureCard
            icon={<Truck className="w-10 h-10 text-[#c5a977]" />}
            title="Exhibición masiva"
            description="Más de 350 unidades, desde máquinas clásicas hasta builds extremos totalmente personalizados."
          />
          <FeatureCard
            icon={<span className="text-4xl">🎙️</span>}
            title="Música en vivo"
            description="Ambiente activo durante todo el día para disfrutar en familia o con los amigos."
          />
          <FeatureCard
            icon={<Handshake className="w-10 h-10 text-[#c5a977]" />}
            title="Marcas de la industria"
            description="Empresas clave del sector presentes con experiencias, productos y dinámicas."
          />
          <FeatureCard
            icon={<Star className="w-10 h-10 text-[#c5a977]" />}
            title="Invitados especiales"
            description="Referentes del gremio y nuevas figuras que están marcando tendencia en el transporte."
          />
        </div>

        {/* Escala Real Block */}
        <div className="mt-32 max-w-5xl mx-auto bg-[#0a0a0a] text-[#c5a977] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl border border-[#c5a977]">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#c5a977]/10 to-transparent z-0"></div>
          <div className="relative z-10 mt-4 rounded-3xl">
            <h2 className="text-4xl md:text-6xl font-heading mb-8 uppercase text-center leading-[0.9] text-[#c5a977]">Un evento con escala real</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 font-bold text-xl md:text-2xl mb-12">
              <div className="text-white">350+ <span className="text-white/70 block text-sm font-medium mt-1">Unidades</span></div>
              <div className="text-white">50+ <span className="text-white/70 block text-sm font-medium mt-1">En competencia</span></div>
            </div>
            <p className="text-2xl md:text-3xl font-medium text-white/90">
              No existe otra experiencia en México a este nivel dentro del mundo trailero.
            </p>
            <p className="text-xl md:text-2xl mt-4 font-bold text-white opacity-80">Si te gusta este mundo… aquí es donde tienes que estar.</p>

            <div className="mt-16 pt-16 border-t border-[#c5a977]/20 text-left md:text-center grid grid-cols-1 md:grid-cols-2 gap-8 text-white/70">
              <div className="text-sm">
                <span className="block text-[#c5a977] font-bold mb-2 uppercase tracking-widest text-xs">Acceso</span>
                La compra de boletos es directamente en el Centro Dinámico Pegaso, te recomendamos llegar con anticipación o con la caravana.
                <div className="flex gap-4 mt-6 justify-start md:justify-center">
                  <div className="border border-[#c5a977]/30 bg-[#111] rounded-2xl px-6 py-4 flex-1 shadow-lg hover:border-[#c5a977] transition-colors">
                    <div className="text-3xl font-heading text-[#c5a977] leading-none mb-1">$350</div>
                    <div className="uppercase tracking-widest text-[0.65rem] opacity-80 font-bold text-white/80">Adultos</div>
                  </div>
                  <div className="border border-[#c5a977]/30 bg-[#111] rounded-2xl px-6 py-4 flex-1 shadow-lg hover:border-[#c5a977] transition-colors">
                    <div className="text-3xl font-heading text-[#c5a977] leading-none mb-1">$100</div>
                    <div className="uppercase tracking-widest text-[0.65rem] opacity-80 font-bold text-white/80">Niños</div>
                  </div>
                </div>
              </div>
              <div className="text-sm">
                <span className="block text-[#c5a977] font-bold mb-2 uppercase tracking-widest text-xs">Página y diseño presentado por</span>
                Kilómetro Cero — El movimiento musical más viral del momento en la industria del transporte.<br /><br />
                Nirvania — Agencia Consultora en Inteligencia Artificial.
              </div>
            </div>
          </div>
        </div>

        {/* ── Sponsors Section (AFTER Escala Real) ── */}
        <div className="mt-24 max-w-6xl mx-auto px-4">
          <p className="text-center text-[#c5a977]/50 uppercase tracking-[0.3em] text-xs font-bold mb-10">
            Marcas que hacen posible el evento
          </p>

          {/* Tier 1 – Main sponsor full-width */}
          <div className="flex justify-center mb-6">
            {mainSponsor.map(s => (
              <SponsorLogo key={s.id} crop={s.crop} cardW={460} cardH={130} />
            ))}
          </div>

          {/* Tier 2 – 3 cols */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            {tier2Sponsors.map(s => (
              <SponsorLogo key={s.id} crop={s.crop} cardW={220} cardH={110} />
            ))}
          </div>

          {/* Tier 3 – responsive 2→3 cols */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {tier3Sponsors.map(s => (
              <SponsorLogo key={s.id} crop={s.crop} cardW={220} cardH={100} />
            ))}
          </div>
        </div>

      </section>
    </main>
  );
}

// ─── Components ──────────────────────────────────────────────────────────────

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div
      className="bg-[#0a0a0a] rounded-3xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-xl hover:shadow-[#c5a977]/20 transition-all duration-300 border border-[#c5a977]"
      whileHover={{ y: -5 }}
    >
      <div className="bg-[#c5a977]/10 w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-sm border border-[#c5a977]/20">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[#c5a977] mb-3 leading-tight">{title}</h3>
      <p className="text-white/90 text-sm font-medium">{description}</p>
    </motion.div>
  );
}

function SponsorLogo({ crop, cardW, cardH }: { crop: Crop; cardW: number; cardH: number }) {
  const bgSizeX = Math.round((IMG_W / crop.w) * cardW);
  const bgSizeY = Math.round((IMG_H / crop.h) * cardH);
  const bgPosX  = Math.round(-(crop.x / crop.w) * cardW);
  const bgPosY  = Math.round(-(crop.y / crop.h) * cardH);

  return (
    <motion.div
      className="rounded-2xl overflow-hidden border border-[#c5a977]/30 hover:border-[#c5a977] transition-colors cursor-default"
      style={{
        width: "100%",
        height: cardH,
        backgroundImage: "url('/sponsors.jpg')",
        backgroundSize:     `${bgSizeX}px ${bgSizeY}px`,
        backgroundPosition: `${bgPosX}px ${bgPosY}px`,
        backgroundRepeat:   "no-repeat",
      }}
      whileHover={{ scale: 1.02 }}
    />
  );
}
