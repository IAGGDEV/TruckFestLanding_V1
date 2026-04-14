"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TARGET_DATE = new Date("2026-04-26T10:00:00").getTime();

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = TARGET_DATE - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return <div className="h-[40px] w-[200px]" />; // Skeleton placeholder for layout shift

  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center gap-2"
    >
      <div className="flex items-center space-x-1.5 bg-black/80 px-5 py-2.5 rounded-2xl border border-[#c5a977]/40 shadow-[0_0_15px_rgba(197,169,119,0.25)] backdrop-blur-md">
        <TimeUnit value={timeLeft.days} label="d" accent />
        <span className="text-white/50 text-2xl font-black mb-3">:</span>
        <TimeUnit value={timeLeft.hours} label="h" />
        <span className="text-white/50 text-2xl font-black mb-3">:</span>
        <TimeUnit value={timeLeft.minutes} label="m" />
        <span className="text-white/50 text-2xl font-black mb-3">:</span>
        <TimeUnit value={timeLeft.seconds} label="s" />
      </div>
      <div className="flex items-center gap-2 text-[#c5a977] text-[0.7rem] font-bold uppercase tracking-wider">
        <span>El Truck Fest está por llegar</span>
        {/* Speed lines + trailer */}
        <span className="flex items-center gap-0.5">
          <span className="flex flex-col gap-[2px]">
            <span className="block w-3 h-[1.5px] bg-[#c5a977]/60 rounded-full"></span>
            <span className="block w-4 h-[1.5px] bg-[#c5a977]/40 rounded-full"></span>
            <span className="block w-2 h-[1.5px] bg-[#c5a977]/30 rounded-full"></span>
          </span>
          <svg viewBox="0 0 56 26" className="w-10 h-5" fill="#c5a977" style={{ transform: 'scaleX(-1)' }}>
            <rect x="0"  y="5"  width="32" height="16" rx="2.5"/>
            <rect x="32" y="9"  width="16" height="12" rx="2"/>
            <rect x="47" y="11" width="6"  height="5"  rx="1" opacity="0.6"/>
            <circle cx="8"  cy="23" r="3"/>
            <circle cx="22" cy="23" r="3"/>
            <circle cx="42" cy="23" r="3"/>
          </svg>
        </span>
      </div>
    </motion.div>
  );
}

function TimeUnit({ value, label, accent = false }: { value: number; label: string; accent?: boolean }) {
  return (
    <div className="flex flex-col items-center justify-center min-w-[36px]">
      <span className={`text-3xl font-black tracking-tighter tabular-nums leading-none ${accent ? 'text-[#c5a977]' : 'text-white'}`}>
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-[0.6rem] font-bold uppercase text-white/50 mt-1">
        {label}
      </span>
    </div>
  );
}
