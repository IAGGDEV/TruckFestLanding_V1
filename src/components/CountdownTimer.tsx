"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Truck } from "lucide-react";

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
        <span className="flex items-center gap-0.5 ml-1">
          <span className="flex flex-col gap-[2px] mx-0.5">
            <span className="block w-4 h-[1.5px] bg-[#c5a977]/70 rounded-full"></span>
            <span className="block w-3 h-[1.5px] bg-[#c5a977]/45 rounded-full"></span>
            <span className="block w-2 h-[1.5px] bg-[#c5a977]/25 rounded-full"></span>
          </span>
          <Truck className="w-5 h-5 text-[#c5a977]" />
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
