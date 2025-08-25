import React from "react";
import {
  Camera,
  Instagram,
  Facebook,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavClick = (href: string) => {
    navigate(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:desaicyrus@gmail.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+919916378416";
  };

  const handleWhatsAppClick = () => {
    const message =
      "Hi Cyrus, I found your website and would like to know more about your photography services.";
    const whatsappUrl = `https://wa.me/919916378416?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <footer className="bg-neutral-950 border-t border-stone-800/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              {/* <Camera className="w-7 h-7 text-stone-300" />
              <span className="text-xl font-serif font-medium text-stone-100">
                Cyrus Desai Photography
              </span> */}
              <img
                src="/logo.PNG"
                alt="Logo"
                className="h-20 w-auto object-contain filter invert"
              />
            </div>
            <p className="text-stone-400 leading-relaxed font-light">
              Capturing life's most precious moments with cinematic artistry and
              timeless elegance.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-serif font-medium text-stone-100 mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleNavClick("/")}
                  className="text-stone-400 hover:text-stone-100 transition-colors duration-300 font-light text-left w-full"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("/about")}
                  className="text-stone-400 hover:text-stone-100 transition-colors duration-300 font-light text-left w-full"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("/services")}
                  className="text-stone-400 hover:text-stone-100 transition-colors duration-300 font-light text-left w-full"
                >
                  Services
                </button>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-stone-400 hover:text-stone-100 transition-colors duration-300 font-light"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-serif font-medium text-stone-100 mb-6">
              Contact
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-stone-400" />
                <button
                  onClick={handlePhoneClick}
                  className="text-stone-400 hover:text-stone-100 transition-colors duration-300 font-light"
                >
                  +91 9916378416
                </button>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-stone-400" />
                <button
                  onClick={handleEmailClick}
                  className="text-stone-400 hover:text-stone-100 transition-colors duration-300 font-light"
                >
                  desaicyrus@gmail.com
                </button>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-stone-400" />
                <span className="text-stone-400 font-light">
                  Bangalore, India
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-stone-800/30 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-stone-400 text-sm font-light">
            © 2025 Cyrus Desai Photography. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-6 md:mt-0">
            <a
              href="https://www.instagram.com/cyrusdesai_photography?igsh=enRzaW56NHdib2lp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-stone-100 transition-colors duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/share/1YHzQCtRFW/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-stone-100 transition-colors duration-300"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com/@cyrusdesaiphotography?si=6gJkcM0885WPViYh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-stone-100 transition-colors duration-300"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
