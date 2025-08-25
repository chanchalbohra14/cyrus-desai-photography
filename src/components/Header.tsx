import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// custom hook: scrolls to top after route change
function useScrollToTopOnRouteChange() {
  const location = useLocation();

  useEffect(() => {
    // slight delay ensures new page renders before scroll
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);

    return () => clearTimeout(timeout);
  }, [location.pathname]);
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useScrollToTopOnRouteChange(); // always run scroll-to-top after navigation

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
  ];

  const handleBookNow = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-neutral-950/95 backdrop-blur-md border-b border-stone-800/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="/logo.PNG"
              alt="Logo"
              className="h-20 w-auto object-contain filter invert"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium tracking-wide transition-all duration-300 relative group ${
                  location.pathname === item.href
                    ? "text-stone-100"
                    : "text-stone-300 hover:text-stone-100"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-px bg-stone-100 transition-all duration-300 group-hover:w-full ${
                    location.pathname === item.href ? "w-full" : ""
                  }`}
                ></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={handleBookNow}
              className="px-6 py-2.5 text-sm font-medium tracking-wide text-neutral-950 bg-stone-100 hover:bg-stone-200 transition-all duration-300 border border-stone-100 hover:border-stone-200"
            >
              Book Session
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-stone-100 hover:text-stone-300 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-neutral-950/98 backdrop-blur-md border-t border-stone-800/30"
          >
            <div className="px-6 py-8 space-y-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block text-lg font-medium tracking-wide transition-colors duration-300 ${
                    location.pathname === item.href
                      ? "text-stone-100"
                      : "text-stone-300 hover:text-stone-100"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-neutral-950 bg-stone-100 hover:bg-stone-200 transition-all duration-300"
              >
                Book Session
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
