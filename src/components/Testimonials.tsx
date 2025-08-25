import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya & Arjun",
      role: "Wedding Clients",
      content:
        "Cyrus captured our wedding day perfectly. Every emotion, every moment was beautifully preserved. The photos are absolutely stunning and we'll treasure them forever.",
      image:
        "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Corporate Client",
      content:
        "Professional, creative, and incredibly talented. Cyrus delivered exceptional results for our corporate event. His ability to capture candid moments is remarkable.",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    },
    {
      id: 3,
      name: "Meera Sharma",
      role: "Portrait Client",
      content:
        "The portrait session was comfortable and fun. Cyrus has an amazing ability to capture genuine expressions. The final photos were beyond what I imagined.",
      image:
        "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    },
  ];

  return (
    <section className="py-32 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-light text-stone-100 mb-6 tracking-tight">
            Client <span className="italic font-medium">Stories</span>
          </h2>
          <p className="text-lg text-stone-400 max-w-2xl mx-auto leading-relaxed font-light">
            Hear from those who trusted us to capture their most precious
            moments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
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
              <div className="space-y-8">
                <blockquote className="text-stone-300 text-lg leading-relaxed font-light italic">
                  "{testimonial.content}"
                </blockquote>

                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 object-cover grayscale group-hover:grayscale-0 transition-all duration-500 cursor-pointer"
                  />
                  <div>
                    <h4 className="text-stone-100 font-medium">
                      {testimonial.name}
                    </h4>
                    <p className="text-stone-400 text-sm font-light">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
