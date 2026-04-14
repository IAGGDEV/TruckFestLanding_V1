"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Flame, Truck, Handshake, Star } from "lucide-react";
import { CountdownTimer } from "@/components/CountdownTimer";

export default function Home() {
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
            icon={<Truck className="w-10 h-10 text-[#c5a977]" />}
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
            <SponsorLogo index={1} cardH={130} src="/logo-1.png" />
          </div>

          {/* Tier 2 – 3 cols */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <SponsorLogo index={2} cardH={110} src="/logo-3.png" />
            <SponsorLogo index={3} cardH={110} src="/logo-4.png" />
            <SponsorLogo index={4} cardH={110} src="/logo-gforza.png" />
          </div>

          {/* Tier 3 – 2→3 cols */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <SponsorLogo index={5}  cardH={100} src="/logo-negritos.png" />
            <SponsorLogo index={6}  cardH={100} src="/logo-6.png" />
            <SponsorLogo index={7}  cardH={100} src="/logo-7.png" />
            <SponsorLogo index={8}  cardH={100} src="/logo-8.png" />
            <SponsorLogo index={9}  cardH={100} src="/logo-9.png" />
            <SponsorLogo index={10} cardH={100} src="/logo-10.png" />
            <SponsorLogo index={11} cardH={100} src="/logo-11.png" />
            <SponsorLogo index={12} cardH={100} src="/logo-12.png" />
            <SponsorLogo index={13} cardH={100} />
            <SponsorLogo index={14} cardH={100} />
            <SponsorLogo index={15} cardH={100} />
            <SponsorLogo index={16} cardH={100} />
            <SponsorLogo index={17} cardH={100} />
            <SponsorLogo index={18} cardH={100} />
            <SponsorLogo index={19} cardH={100} />
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

function SponsorLogo({ index, cardH, src }: { index: number; cardH: number; src?: string }) {
  return (
    <motion.div
      className="rounded-2xl overflow-hidden border border-[#c5a977]/30 hover:border-[#c5a977] transition-colors flex items-center justify-center bg-[#0a0a0a]"
      style={{ height: cardH, width: '100%' }}
      whileHover={{ scale: 1.02 }}
    >
      {src ? (
        <Image
          src={src}
          alt={`Patrocinador ${index}`}
          width={460}
          height={cardH}
          className="w-full h-full object-contain p-3"
        />
      ) : (
        <span className="text-[#c5a977]/20 text-xs font-bold uppercase tracking-widest">#{index}</span>
      )}
    </motion.div>
  );
}
