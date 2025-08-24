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
      caption: "Documenting special moments at corporate events",
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      alt: "Behind the scenes - Couple shoot",
      caption: "Creating romantic memories during couple sessions",
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      alt: "Behind the scenes - Commercial shoot",
      caption: "Professional branding photography in action",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion",
      description:
        "We pour our heart into every shot, ensuring each image tells a meaningful and emotional story that resonates for years to come.",
    },
    {
      icon: Camera,
      title: "Excellence",
      description:
        "We strive for perfection in every frame, using the latest techniques and professional equipment to deliver exceptional results.",
    },
    {
      icon: Users,
      title: "Connection",
      description:
        "We build genuine relationships with our clients to capture their most authentic moments and true personalities.",
    },
    {
      icon: Award,
      title: "Quality",
      description:
        "We deliver exceptional results that exceed expectations and stand the test of time with timeless elegance.",
    },
  ];

  const teamMembers = [
    {
      name: "Cyrus Desai",
      role: "Lead Photographer & Founder",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      description:
        "With over 8 years of experience, Cyrus brings artistic vision and technical expertise to every project, creating timeless memories.",
    },
    {
      name: "Priya Sharma",
      role: "Associate Photographer",
      image:
        "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      description:
        "Specializing in portrait and lifestyle photography, Priya captures authentic emotions and genuine connections with artistic flair.",
    },
    {
      name: "Arjun Patel",
      role: "Event Specialist",
      image:
        "https://images.pexels.com/photos/935985/pexels-photo-935985.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      description:
        "Expert in event and wedding photography, Arjun ensures no precious moment goes uncaptured with his keen eye for detail.",
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
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <ImageSlider
                images={sliderImages}
                autoplay={true}
                interval={4000}
              />
              <div className="text-center">
                <p className="text-sm text-stone-500 uppercase tracking-widest font-medium">
                  Behind the Scenes
                </p>
                <p className="text-stone-400 font-light mt-2">
                  A glimpse into our creative process and passion for
                  photography
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
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
      {/* Values Section */}
      <section className="py-32 bg-stone-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-serif font-light mb-6 tracking-tight">
              Our <span className="italic font-medium">Values</span>
            </h2>
            <p className="text-lg text-stone-400 max-w-2xl mx-auto leading-relaxed font-light">
              The principles that guide every aspect of our work and
              relationships
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="text-center space-y-6"
              >
                <div className="flex justify-center">
                  <value.icon className="w-12 h-12 text-stone-300" />
                </div>
                <h3 className="text-xl font-serif font-medium">
                  {value.title}
                </h3>
                <p className="text-stone-400 leading-relaxed font-light">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-32 bg-stone-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
                className="text-center space-y-6"
              >
                <div className="relative overflow-hidden bg-stone-900 mx-auto w-64 h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-serif font-medium">
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
      {/* Call to Action */}
      {/* <section className="py-32 bg-stone-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif font-light mb-8 tracking-tight"
          >
            Let's Create Something{" "}
            <span className="italic font-medium">Beautiful</span> Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-stone-400 mb-12 leading-relaxed font-light"
          >
            Ready to tell your story? We'd love to hear from you and discuss how
            we can bring your vision to life.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            onClick={() => handleContactClick("whatsapp")}
            className="px-8 py-4 text-sm font-medium tracking-wide text-neutral-950 bg-stone-100 hover:bg-stone-200 transition-all duration-500"
          >
            Get In Touch
          </motion.button>
        </div>
      </section> */}
      {/* Location & Contact Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
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

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative overflow-hidden bg-stone-900"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886539092!2d77.49085452148437!3d12.953945614117647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1703123456789!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cyrus Desai Photography Location"
                className="grayscale"
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
