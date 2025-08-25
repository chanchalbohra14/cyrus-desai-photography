import React from "react";
import { motion } from "framer-motion";
import { Heart, Users, User, Building } from "lucide-react";

const Services = () => {
  const handleBookService = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      icon: Heart,
      title: "Wedding Photography",
      description:
        "Capture your special day with cinematic storytelling and timeless elegance. From intimate ceremonies to grand celebrations, we document every precious moment with artistic vision.",
      image:
        "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    },
    {
      icon: Users,
      title: "Event Photography",
      description:
        "Professional coverage for corporate events, celebrations, and special occasions. We blend seamlessly into your event while capturing all the important moments.",
      image:
        "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    },
    {
      icon: User,
      title: "Portrait Sessions",
      description:
        "Individual and family portraits that capture personality and emotion. Perfect for professional headshots, family memories, and personal branding.",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    },
    {
      icon: Building,
      title: "Commercial Photography",
      description:
        "High-quality images for brands, products, and professional marketing. From product shots to corporate photography that tells your business story.",
      image:
        "https://images.pexels.com/photos/935985/pexels-photo-935985.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    },
  ];

  const handleViewFullPortfolio = () => {
    window.location.href = "/services";
  };
  return (
    <section className="py-32 bg-stone-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-light text-stone-100 mb-6 tracking-tight">
            Our <span className="italic font-medium">Services</span>
          </h2>
          <p className="text-lg text-stone-400 max-w-2xl mx-auto leading-relaxed font-light">
            Professional photography services tailored to capture your unique
            story
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 cursor-pointer">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="group"
            >
              <div className="relative overflow-hidden bg-stone-900 mb-8">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <service.icon className="w-6 h-6 text-stone-300" />
                  <h3 className="text-2xl md:text-3xl font-serif font-light text-stone-100 tracking-tight">
                    {service.title}
                  </h3>
                </div>

                <p className="text-stone-400 leading-relaxed font-light text-lg">
                  {service.description}
                </p>

                <button
                  onClick={handleBookService}
                  className="inline-flex items-center text-sm font-medium tracking-wide text-stone-100 border-b border-stone-100 hover:border-stone-300 hover:text-stone-300 transition-all duration-300 pb-1"
                >
                  Book Session
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
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
            View All Services
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
