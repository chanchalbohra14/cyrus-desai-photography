import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const images = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    alt: "Wedding Photography by Cyrus Desai",
    category: "Wedding",
    orientation: "portrait",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    alt: "Portrait Photography by Cyrus Desai",
    category: "Portrait",
    orientation: "landscape",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    alt: "Event Photography by Cyrus Desai",
    category: "Event",
    orientation: "portrait",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/935985/pexels-photo-935985.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    alt: "Fashion Photography by Cyrus Desai",
    category: "Fashion",
    orientation: "landscape",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    alt: "Commercial Photography by Cyrus Desai",
    category: "Commercial",
    orientation: "portrait",
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    alt: "Lifestyle Photography by Cyrus Desai",
    category: "Lifestyle",
    orientation: "landscape",
  },
];

const GalleryPage = () => {
  const handleViewFullPortfolio = () => {
    window.location.href = "/services";
  };

  return (
    <div className="gallery-page">
      <section id="gallery" className="py-32 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-serif font-light text-stone-100 mb-6 tracking-tight">
              Featured <span className="italic font-medium">Work</span>
            </h2>
            <p className="text-lg text-stone-400 max-w-2xl mx-auto leading-relaxed font-light">
              A curated selection showcasing the artistry and emotion in every
              frame
            </p>
          </motion.div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true, margin: "-50px" }}
                className={`group relative overflow-hidden bg-stone-900 cursor-pointer ${
                  image.orientation === "portrait"
                    ? "aspect-[3/4]"
                    : "aspect-[4/3]"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-6 left-6 text-stone-100">
                    <p className="text-xs font-medium tracking-widest uppercase text-stone-300 mb-2">
                      {image.category}
                    </p>
                    <p className="text-sm font-light">{image.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <button
              onClick={handleViewFullPortfolio}
              className="px-8 py-4 text-sm font-medium tracking-wide text-stone-100 border border-stone-100 hover:bg-stone-100 hover:text-neutral-950 transition-all duration-500"
            >
              View Complete Portfolio
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
