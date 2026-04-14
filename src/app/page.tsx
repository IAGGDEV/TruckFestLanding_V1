"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Globe, Fuel } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar segment */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto bg-white z-50">
        <div className="font-extrabold text-2xl tracking-tighter text-black">
          TRUCKFEST
        </div>
        <div className="hidden md:flex space-x-8 font-medium text-sm text-gray-800">
          <a href="#" className="hover:text-orange-500 transition-colors">Home</a>
          <a href="#" className="hover:text-orange-500 transition-colors">About</a>
          <a href="#" className="hover:text-orange-500 transition-colors">Tickets</a>
          <a href="#" className="hover:text-orange-500 transition-colors">Mission</a>
          <a href="#" className="hover:text-orange-500 transition-colors">Process</a>
        </div>
        <div>
          <Button className="bg-[#f07b5a] hover:bg-[#d96645] text-white font-semibold rounded-none px-6 py-6 shadow-md transition-all">
            Join Now
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-[85vh] overflow-hidden flex flex-col items-center pt-16">
        {/* Background Gradient to emulate sky and desert */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#3ba2cd] via-[#43a1c8] to-[#c66c3c] z-0" />
        
        {/* Torn paper effect at the bottom using an SVG mask/clip-path equivalent */}
        <div 
          className="absolute bottom-0 left-0 w-full h-32 bg-white z-20"
          style={{
            clipPath: 'polygon(0% 100%, 100% 100%, 100% 80%, 95% 70%, 90% 75%, 85% 65%, 80% 70%, 75% 60%, 70% 65%, 65% 55%, 60% 60%, 55% 50%, 50% 65%, 45% 55%, 40% 65%, 35% 50%, 30% 60%, 25% 45%, 20% 55%, 15% 45%, 10% 55%, 5% 40%, 0% 55%)'
          }}
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 mt-8">
          <motion.p 
            className="text-sm font-medium text-white/90 uppercase tracking-widest mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get your pre-sale tickets today
          </motion.p>
          <motion.h1 
            className="text-6xl md:text-8xl font-black text-white leading-[1.1] tracking-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Make your rally <br /> more exciting
          </motion.h1>
          
          <motion.p 
            className="text-white/80 max-w-sm text-left absolute top-48 left-0 hidden lg:block text-sm font-medium"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Experience the most thrilling truck racing event of the year. 
            Join thousands of enthusiasts worldwide.
          </motion.p>
        </div>

        {/* Floating CTA Button */}
        <motion.div 
          className="absolute z-30 right-10 lg:right-32 top-1/2 mt-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
        >
          <Button className="bg-[#abdfec] hover:bg-[#8ecee1] text-gray-800 rounded-full pl-6 pr-2 py-6 text-sm font-bold shadow-xl flex items-center gap-4">
            Experience now
            <span className="bg-white p-2 rounded-full">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m10 8 4 4-4 4"/></svg>
            </span>
          </Button>
        </motion.div>

        {/* Center Main Truck Image */}
        <motion.div 
           className="absolute bottom-10 z-10 w-full max-w-[1200px]"
           initial={{ opacity: 0, y: 100 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image 
            src="/hero-truck.png" 
            alt="Truck Fest Hero" 
            width={1200} 
            height={600} 
            className="object-contain w-full h-auto object-bottom mix-blend-normal drop-shadow-2xl scale-[1.1] origin-bottom mask-image-bottom"
          />
        </motion.div>

        {/* Glassmorphism Circle */}
        <motion.div 
          className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 mt-16 w-32 h-32 md:w-40 md:h-40 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center shadow-2xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <span className="text-white font-bold tracking-widest text-lg">TF20 - XX</span>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative z-30 bg-white py-24 px-4 w-full">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#2e1f1a] mb-4 tracking-tighter">
            Extra features you <br /> will experience
          </h2>
          <p className="text-gray-500 font-medium max-w-2xl mx-auto">
            Discover a world of adrenaline, highly customized trucks and non-stop action.
            Get ready to experience the ultimate festival customized for true motor lovers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          <FeatureCard 
            icon={<MapPin className="w-10 h-10 text-[#f07b5a]" />}
            title="Find the track easily"
            description="Our interactive maps guide you straight to the best viewing spots and paddocks."
            bgColor="bg-[#eaf8fb]"
          />
          <FeatureCard 
            icon={<Globe className="w-10 h-10 text-[#43a1c8]" />}
            title="Set your desired location"
            description="Access exclusive camping zones, VIP areas and live stages across the desert."
            bgColor="bg-[#fff9ea]"
          />
          <FeatureCard 
            icon={<Fuel className="w-10 h-10 text-[#ec555a]" />}
            title="Find nearest amenities"
            description="Locate food trucks, merchandise, and rest areas dynamically around the venue."
            bgColor="bg-[#eefbee]"
          />
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
