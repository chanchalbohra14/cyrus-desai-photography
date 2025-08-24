import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const handleBookNow = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewWork = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 w-full h-[120%]"
      >
        <div className="relative w-full h-full">
          <img
            src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Cyrus Desai Photography"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/20 via-neutral-950/40 to-neutral-950/80"></div>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 h-full flex items-center justify-center"
      >
        <div className="text-center max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-stone-100 leading-tight tracking-tight">
              Capturing Life's
              <span className="block font-medium italic">Extraordinary Moments</span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1, ease: "easeOut" }}
              className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto leading-relaxed font-light"
            >
              Professional photography that tells your unique story with cinematic artistry, 
              emotional depth, and timeless elegance
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
            >
              <button 
                onClick={handleViewWork}
                className="px-8 py-4 text-sm font-medium tracking-wide text-stone-100 border border-stone-100 hover:bg-stone-100 hover:text-neutral-950 transition-all duration-500 group"
              >
                <span className="relative z-10">View Our Work</span>
              </button>
              <button 
                onClick={handleBookNow}
                className="px-8 py-4 text-sm font-medium tracking-wide text-neutral-950 bg-stone-100 hover:bg-stone-200 transition-all duration-500"
              >
                Book Session
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-stone-300"
      >
        <button 
          onClick={handleScrollDown}
          className="flex flex-col items-center space-y-2 hover:text-stone-100 transition-colors duration-300 group"
        >
          <span className="text-xs tracking-widest uppercase font-medium">Discover</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="group-hover:scale-110 transition-transform duration-300"
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;