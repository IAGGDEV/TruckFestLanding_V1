"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import { CountdownTimer } from "@/components/CountdownTimer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar segment */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto bg-white z-50">
        <div className="font-heading text-2xl tracking-tighter text-black uppercase">
          TRUCKFEST 2026
        </div>
        <div className="hidden md:flex space-x-8 font-medium text-sm text-gray-800">
          <a href="#" className="hover:text-orange-500 transition-colors">Home</a>
          <a href="#" className="hover:text-orange-500 transition-colors">About</a>
          <a href="#" className="hover:text-orange-500 transition-colors">Tickets</a>
          <a href="#" className="hover:text-orange-500 transition-colors">Mission</a>
          <a href="#" className="hover:text-orange-500 transition-colors">Process</a>
        </div>
        <div className="flex items-center gap-4">
          <CountdownTimer />
          <Button className="bg-[#f07b5a] hover:bg-[#d96645] text-white font-semibold rounded-none px-6 py-6 shadow-md transition-all">
            Join Now
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-[85vh] overflow-hidden flex flex-col items-center pt-16">
        {/* Hero Background Image */}
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
        
        {/* Torn paper effect at the bottom using an SVG mask/clip-path equivalent */}
        <div 
          className="absolute bottom-0 left-0 w-full h-32 bg-white z-20"
          style={{
            clipPath: 'polygon(0% 100%, 100% 100%, 100% 80%, 95% 70%, 90% 75%, 85% 65%, 80% 70%, 75% 60%, 70% 65%, 65% 55%, 60% 60%, 55% 50%, 50% 65%, 45% 55%, 40% 65%, 35% 50%, 30% 60%, 25% 45%, 20% 55%, 15% 45%, 10% 55%, 5% 40%, 0% 55%)'
          }}
        />

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 mt-8">
          <motion.p 
            className="text-lg md:text-xl font-bold text-white/90 uppercase tracking-[0.2em] mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Gran Premio Móvil Delvac
          </motion.p>
          <motion.h1 
            className="text-7xl md:text-[9rem] font-heading text-white leading-[0.9] tracking-tighter drop-shadow-2xl uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            TRUCK FEST <br /> 2026
          </motion.h1>
          

      </section>

      {/* Features Section */}
      <section className="relative z-30 bg-white pt-32 pb-24 px-4 w-full">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-heading text-[#2e1f1a] mb-6 tracking-tighter uppercase leading-[0.9]">
            Lo que vas a <br /> vivir
          </h2>
          <p className="text-gray-600 font-medium max-w-2xl mx-auto text-lg">
            No es solo una expo… es una experiencia completa donde el poder, el diseño y la competencia se viven en tiempo real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          <FeatureCard 
            icon={<span className="text-4xl">🏁</span>}
            title="Arrancones de alto nivel"
            description="Con campeones nacionales y estrellas. Tráilers, corredores y portables reconocidos que ya son referencia en la pista."
            bgColor="bg-[#eaf8fb]"
          />
          <FeatureCard 
            icon={<span className="text-4xl">🔥</span>}
            title="Caravana de arranque"
            description="El convoy que marca el inicio del evento y prende el ambiente desde el primer momento."
            bgColor="bg-[#fff9ea]"
          />
          <FeatureCard 
            icon={<span className="text-4xl">🚛</span>}
            title="Exhibición masiva"
            description="Más de 350 unidades, desde máquinas clásicas hasta builds extremos totalmente personalizados."
            bgColor="bg-[#eefbee]"
          />
          <FeatureCard 
            icon={<span className="text-4xl">🎤</span>}
            title="Música en vivo"
            description="Ambiente activo durante todo el día para disfrutar en familia o con los amigos."
            bgColor="bg-[#fcedf3]"
          />
          <FeatureCard 
            icon={<span className="text-4xl">🤝</span>}
            title="Marcas de la industria"
            description="Empresas clave del sector presentes con experiencias, productos y dinámicas."
            bgColor="bg-[#fdf4e9]"
          />
          <FeatureCard 
            icon={<span className="text-4xl">⭐</span>}
            title="Invitados especiales"
            description="Referentes del gremio y nuevas figuras que están marcando tendencia en el transporte."
            bgColor="bg-[#eef0fc]"
          />
        </div>

        <div className="mt-32 max-w-5xl mx-auto bg-black text-white rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#c66c3c]/20 to-transparent z-0"></div>
          <div className="relative z-10 mt-4 rounded-3xl">
            <h2 className="text-4xl md:text-6xl font-heading mb-8 uppercase text-center leading-[0.9]">Un evento con escala real</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 font-bold text-xl md:text-2xl mb-12">
              <div className="text-[#f07b5a]">350+ <span className="text-white block text-sm font-medium mt-1">Unidades</span></div>
              <div className="text-[#3ba2cd]">50+ <span className="text-white block text-sm font-medium mt-1">En competencia</span></div>
              <div className="text-[#abdfec]">100% <span className="text-white block text-sm font-medium mt-1">Nacional e Internacional</span></div>
            </div>
            <p className="text-2xl md:text-3xl font-medium text-white/90">
              No existe otra experiencia en México a este nivel dentro del mundo trailero. 
            </p>
            <p className="text-xl md:text-2xl mt-4 font-bold text-[#f07b5a]">Si te gusta este mundo… aquí es donde tienes que estar.</p>
            
            <div className="mt-16 pt-16 border-t border-white/20 text-left md:text-center grid grid-cols-1 md:grid-cols-2 gap-8 text-white/70">
              <div className="text-sm">
                <span className="block text-white font-bold mb-2 uppercase tracking-widest text-xs">Acceso</span>
                La compra de boletos es directamente en el Centro Dinámico Pegaso, te recomendamos llegar con anticipación o con la caravana.
              </div>
              <div className="text-sm">
                <span className="block text-white font-bold mb-2 uppercase tracking-widest text-xs">Presentado por</span>
                Kilómetro Cero — El movimiento musical más viral del momento en la industria del transporte.<br/>
                Nirvania — AI Agency.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ icon, title, description, bgColor }: { icon: React.ReactNode, title: string, description: string, bgColor: string }) {
  return (
    <motion.div 
      className={`${bgColor} rounded-3xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-shadow duration-300 border border-white`}
      whileHover={{ y: -5 }}
    >
      <div className="bg-white/50 w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-sm">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[#2e1f1a] mb-3 leading-tight">{title}</h3>
      <p className="text-gray-600 text-sm font-medium">{description}</p>
    </motion.div>
  );
}
