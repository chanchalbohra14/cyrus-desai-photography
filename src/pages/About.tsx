import React from "react";
import { motion } from "framer-motion";
import { Award, Heart, Camera, Users, MapPin, Mail, Phone } from "lucide-react";
import ImageSlider from "../components/ImageSlider";
import ContactForm from "../components/ContactForm";

const About = () => {
  const handleContactClick = (type: string) => {
    switch (type) {
      case "email":
        window.location.href = "mailto:desaicyrus@gmail.com";
        break;
      case "phone":
        window.location.href = "tel:+919916378416";
        break;
      case "whatsapp":
        const message =
          "Hi Cyrus, I found your website and would like to know more about your photography services.";
        const whatsappUrl = `https://wa.me/919916378416?text=${encodeURIComponent(
          message
        )}`;
        window.open(whatsappUrl, "_blank");
        break;
    }
  };

  const sliderImages = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      alt: "Behind the scenes - Wedding preparation",
      caption: "Capturing candid moments during wedding preparations",
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/935985/pexels-photo-935985.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      alt: "Behind the scenes - Portrait session setup",
      caption: "Setting up for a professional portrait session",
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      alt: "Behind the scenes - Event coverage",
      caption: "Creating romantic memories during couple sessions",
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      alt: "Behind the scenes - Couple shoot",
      caption: "Creating memories during new achievements",
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      alt: "Behind the scenes - Commercial shoot",
      caption: "Professional branding photography in action",
    },
  ];

  const teamMembers = [
    {
      name: "Cyrus",
      role: "Founder & Lead Photographer",
      image:
        "https://images.pexels.com/photos/935985/pexels-photo-935985.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      description:
        "Visionary behind the brand with a passion for storytelling through timeless photography.",
    },
    {
      name: "Vishwanath",
      role: "Studio Manager & Photographer",
      image:
        "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",

      description:
        "Manages day-to-day operations while capturing striking moments with precision.",
    },
    {
      name: "Nagraj",
      role: "Photographer & Videographer",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",

      description:
        "Expert in blending cinematic videography with creative photography techniques.",
    },
    {
      name: "Sai",
      role: "Photographer & Videographer",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",

      description:
        "Passionate about capturing raw emotions and dynamic visual stories.",
    },
    {
      name: "Arvind",
      role: "Photographer & Videographer",
      image:
        "https://images.pexels.com/photos/935985/pexels-photo-935985.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",

      description:
        "Combines technical skill with artistic vision to craft memorable visuals.",
    },
    {
      name: "Khadar",
      role: "Photographer & Videographer",
      image:
        "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",

      description:
        "Focused on detail and creativity, ensuring every frame tells a story.",
    },
  ];
  return (
    <div className="bg-neutral-950 text-stone-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="About Cyrus Desai Photography"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950/60 to-neutral-950/80"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-light mb-8 tracking-tight leading-tight"
          >
            Our <span className="italic font-medium">Story</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Crafting visual narratives that capture the essence of life's most
            precious moments
          </motion.p>
        </div>
      </section>
      {/* Story Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image with fade-up */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                alt="Behind the Scenes"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Text with fade-up (slight delay for stagger effect) */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-tight">
                The Vision Behind{" "}
                <span className="italic font-medium">Our Craft</span>
              </h2>
              <div className="space-y-6 text-stone-400 text-lg leading-relaxed font-light">
                <p>
                  Founded in 2016, Cyrus Desai Photography was born from a
                  passion for capturing life's most extraordinary moments. We
                  believe that every photograph should tell a story, evoke
                  emotion, and preserve memories that will be treasured for
                  generations.
                </p>
                <p>
                  Our approach combines technical excellence with artistic
                  vision, creating images that are not just beautiful, but
                  meaningful. We work closely with our clients to understand
                  their unique stories and bring them to life through our lens.
                </p>
                <p>
                  Based in Bangalore, India, we've had the privilege of working
                  with clients across the country, from intimate family
                  portraits to grand wedding celebrations and corporate events.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Slider Section */}
      <section className="py-16 px-4">
        <div className="space-y-8 mt-20">
          {/* Slider */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <ImageSlider
              images={sliderImages}
              autoplay={true}
              interval={4000}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm text-stone-500 uppercase tracking-widest font-medium">
              Behind the Scenes
            </p>
            <p className="text-stone-400 font-light mt-2">
              A glimpse into our creative process and passion for photography
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-stone-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-serif font-light mb-6 tracking-tight">
              Meet Our <span className="italic font-medium">Team</span>
            </h2>
            <p className="text-lg text-stone-400 max-w-2xl mx-auto leading-relaxed font-light">
              Talented professionals dedicated to capturing your most precious
              moments
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center bg-stone-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative overflow-hidden w-56 h-56 mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover  hover:grayscale-0 hover:scale-105 transition-all duration-500 cursor-pointer"
                  />
                </div>

                {/* Info */}
                <div className="space-y-2">
                  <h3 className="text-xl font-serif font-medium text-stone-100">
                    {member.name}
                  </h3>
                  <p className="text-stone-400 font-light">{member.role}</p>
                  <p className="text-stone-500 text-sm leading-relaxed font-light">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-serif font-light mb-6 tracking-tight">
              Visit Our <span className="italic font-medium">Studio</span>
            </h2>
            <p className="text-lg text-stone-400 max-w-2xl mx-auto leading-relaxed font-light">
              Located in the heart of Bangalore, our studio is equipped with
              state-of-the-art equipment
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Get In Touch */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-serif font-medium mb-8">
                Get In Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-stone-400" />
                  <div>
                    <p className="text-sm text-stone-500 uppercase tracking-widest font-medium mb-1">
                      Phone
                    </p>
                    <button
                      onClick={() => handleContactClick("phone")}
                      className="text-stone-200 hover:text-stone-100 transition-colors duration-300 font-light"
                    >
                      +91 9916378416
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-stone-400" />
                  <div>
                    <p className="text-sm text-stone-500 uppercase tracking-widest font-medium mb-1">
                      Email
                    </p>
                    <button
                      onClick={() => handleContactClick("email")}
                      className="text-stone-200 hover:text-stone-100 transition-colors duration-300 font-light"
                    >
                      desaicyrus@gmail.com
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-stone-400" />
                  <div>
                    <p className="text-sm text-stone-500 uppercase tracking-widest font-medium mb-1">
                      Location
                    </p>
                    <p className="text-stone-200 font-light">
                      Bangalore, Karnataka, India
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleContactClick("whatsapp")}
                className="w-full px-8 py-4 text-sm font-medium tracking-wide text-neutral-950 bg-stone-100 hover:bg-stone-200 transition-all duration-500"
              >
                Contact via WhatsApp
              </button>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative overflow-hidden bg-stone-900"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30773064.056845006!2d61.04182762828652!3d19.69228278198373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb711076b2f36c7%3A0x1d6644f4d82b9900!2sCyrus%20Desai%20Photography!5e0!3m2!1sen!2sin!4v1756097793152!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Cyrus Desai Photography Location"
                className="grayscale"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

export default About;
