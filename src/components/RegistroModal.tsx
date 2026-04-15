"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck } from "lucide-react";

const COUNTRY_CODES = [
  { code: "+52", flag: "🇲🇽", name: "México" },
  { code: "+1",  flag: "🇺🇸", name: "EE.UU." },
  { code: "+1",  flag: "🇨🇦", name: "Canadá" },
  { code: "+502",flag: "🇬🇹", name: "Guatemala" },
  { code: "+503",flag: "🇸🇻", name: "El Salvador" },
  { code: "+504",flag: "🇭🇳", name: "Honduras" },
  { code: "+34", flag: "🇪🇸", name: "España" },
];

const OCUPACIONES = [
  "Trailero Operador",
  "Familia de Trailero",
  "Empresario del Transporte",
  "Apasionado por los Trailers",
];

interface RegistroModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RegistroModal({ isOpen, onClose }: RegistroModalProps) {
  const [form, setForm] = useState({ nombre: "", lada: "+52", whatsapp: "", ocupacion: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: connect to backend / webhook
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const close = () => { setSubmitted(false); onClose(); };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="backdrop"
          className="fixed inset-0 z-[999] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            key="modal"
            className="relative z-10 w-full max-w-lg bg-[#0a0a0a] border border-[#c5a977]/50 rounded-3xl p-8 shadow-[0_0_60px_rgba(197,169,119,0.2)]"
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={close}
              className="absolute top-5 right-5 text-white/40 hover:text-[#c5a977] transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🏁</div>
                <h3 className="text-2xl font-heading text-[#c5a977] uppercase mb-3">¡Registro exitoso!</h3>
                <p className="text-white/70 text-sm">Te avisaremos con los detalles del evento. ¡Nos vemos en el asfalto!</p>
                <button
                  onClick={close}
                  className="mt-8 px-10 py-3 bg-[#c5a977] text-black font-bold uppercase tracking-widest rounded-xl hover:bg-[#d4bc94] transition-colors"
                >
                  Cerrar
                </button>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="mb-7 text-center">
                  <span className="inline-block text-[#c5a977] text-xs font-bold uppercase tracking-[0.3em] mb-3">TruckFest 2026</span>
                  <h2 className="text-2xl md:text-3xl font-heading text-white uppercase leading-tight mb-4">
                    Quiero <span className="text-[#c5a977]">Asistir</span>
                  </h2>
                  <p className="text-white/60 text-sm leading-relaxed border-t border-[#c5a977]/20 pt-4">
                    La venta de boletos será únicamente en las taquillas del Centro Dinámico Pegaso.
                    Regístrate aquí para recibir recordatorios y anuncios importantes referentes al evento,
                    como el programa de actividades y contenidos de interés.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Nombre */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#c5a977] text-xs font-bold uppercase tracking-widest">Nombre</label>
                    <input
                      type="text"
                      name="nombre"
                      required
                      placeholder="Tu nombre completo"
                      value={form.nombre}
                      onChange={handleChange}
                      className="bg-[#111] border border-[#c5a977]/30 focus:border-[#c5a977] text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                    />
                  </div>

                  {/* WhatsApp + Lada */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#c5a977] text-xs font-bold uppercase tracking-widest">WhatsApp</label>
                    <div className="flex gap-2">
                      <select
                        name="lada"
                        value={form.lada}
                        onChange={handleChange}
                        className="bg-[#111] border border-[#c5a977]/30 focus:border-[#c5a977] text-white rounded-xl px-3 py-3 text-sm outline-none transition-colors appearance-none cursor-pointer min-w-[90px]"
                      >
                        {COUNTRY_CODES.map((c, i) => (
                          <option key={i} value={c.code}>
                            {c.flag} {c.code}
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        name="whatsapp"
                        required
                        placeholder="Número de teléfono"
                        value={form.whatsapp}
                        onChange={handleChange}
                        className="flex-1 bg-[#111] border border-[#c5a977]/30 focus:border-[#c5a977] text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Ocupación */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#c5a977] text-xs font-bold uppercase tracking-widest">Ocupación</label>
                    <select
                      name="ocupacion"
                      required
                      value={form.ocupacion}
                      onChange={handleChange}
                      className="bg-[#111] border border-[#c5a977]/30 focus:border-[#c5a977] text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Selecciona tu ocupación</option>
                      {OCUPACIONES.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="mt-2 w-full py-4 bg-[#c5a977] text-black font-bold text-base uppercase tracking-widest rounded-xl shadow-[0_0_25px_rgba(197,169,119,0.35)] hover:bg-[#d4bc94] hover:shadow-[0_0_35px_rgba(197,169,119,0.5)] transition-all duration-300 active:scale-95"
                  >
                    Registrarme
                  </button>
                </form>

                {/* Footer privacy */}
                <div className="mt-5 flex items-center justify-center gap-2 text-white/25 text-xs">
                  <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                  <span>Tus datos están completamente protegidos.</span>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
