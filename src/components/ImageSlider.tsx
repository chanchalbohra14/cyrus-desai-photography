import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageSliderProps {
  images: Array<{
    id: number;
    src: string;
    alt: string;
    caption?: string;
  }>;
  autoplay?: boolean;
  interval?: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  autoplay = true,
  interval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!autoplay || isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [autoplay, interval, isHovered, images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touchStartX = e.touches[0].clientX;

    const handleTouchEnd = (endEvent: TouchEvent) => {
      const touchEndX = endEvent.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          goToNext();
        } else {
          goToPrevious();
        }
      }

      document.removeEventListener("touchend", handleTouchEnd);
    };

    document.addEventListener("touchend", handleTouchEnd);
  };

  return (
    <div
      className="relative w-full h-96 lg:h-[500px] overflow-hidden bg-stone-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent" />

          {images[currentIndex].caption && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute bottom-8 left-8 text-stone-100"
            >
              <p className="text-sm font-light">
                {images[currentIndex].caption}
              </p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-stone-100/20 backdrop-blur-sm border border-stone-100/30 text-stone-100 hover:bg-stone-100/30 transition-all duration-300 flex items-center justify-center"
      >
        <ChevronLeft className="w-5 h-5" />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-stone-100/20 backdrop-blur-sm border border-stone-100/30 text-stone-100 hover:bg-stone-100/30 transition-all duration-300 flex items-center justify-center"
      >
        <ChevronRight className="w-5 h-5" />
      </motion.button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.2 }}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 transition-all duration-300 ${
              index === currentIndex
                ? "bg-stone-100 w-8"
                : "bg-stone-100/50 hover:bg-stone-100/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
