import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Users,
  User,
  Building,
  Clock,
  DollarSign,
  Package,
  Baby,
  Cake,
  Utensils,
  Home,
  Shirt,
  Trophy,
  MapPin,
  PawPrint,
} from "lucide-react";
import ContactForm from "../components/ContactForm";

const services = [
  {
    id: "weddings",
    icon: Heart,
    title: "Wedding Photography",
    description:
      "Capture your special day with cinematic storytelling and timeless elegance. From intimate ceremonies to grand celebrations, we document every precious moment with artistic vision and emotional depth that will be treasured for generations.",
    image:
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    duration: "8-12 hours",
    pricing: "Starting at ₹75,000",
    deliverables: "500+ edited photos, online gallery, print release",
  },
  {
    id: "pre-wedding",
    icon: Heart,
    title: "Pre-Wedding Shoots",
    description:
      "Romantic and intimate pre-wedding photography sessions that capture your love story before the big day. Perfect for save-the-date cards, wedding invitations, or simply celebrating your engagement with beautiful, timeless photographs.",
    image:
      "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    duration: "2-4 hours",
    pricing: "Starting at ₹35,000",
    deliverables: "150+ edited photos, online gallery, print release",
  },
  {
    id: "events",
    icon: Users,
    title: "Event Photography",
    description:
      "Professional coverage for corporate events, celebrations, and special occasions. We blend seamlessly into your event while capturing all the important moments, candid interactions, and the atmosphere that makes your event unique.",
    image:
      "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    duration: "2-8 hours",
    pricing: "Starting at ₹25,000",
    deliverables: "200+ edited photos, online gallery, same-day preview",
  },
  {
    id: "portraits",
    icon: User,
    title: "Portrait Sessions",
    description:
      "Individual and family portraits that capture personality and emotion. Perfect for professional headshots, family memories, personal branding, or special milestone celebrations. Each session is tailored to reflect your unique story.",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    duration: "1-2 hours",
    pricing: "Starting at ₹15,000",
    deliverables: "50+ edited photos, online gallery, print options",
  },
  {
    id: "baby-shower",
    icon: Heart,
    title: "Baby Shower Photography",
    description:
      "Celebrate the upcoming arrival of your little one with beautiful baby shower photography. We capture the joy, excitement, and precious moments shared with family and friends during this special celebration.",
    image:
      "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    duration: "2-3 hours",
    pricing: "Starting at ₹18,000",
    deliverables: "100+ edited photos, online gallery, print options",
  },
  {
    id: "couple-shoots",
    icon: Heart,
    title: "Couple Shoots",
    description:
      "Romantic couple photography sessions that capture your unique bond and chemistry. Whether it's an anniversary, engagement, or just because, we create beautiful memories that celebrate your relationship.",
    image:
      "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    duration: "1-2 hours",
    pricing: "Starting at ₹12,000",
    deliverables: "75+ edited photos, online gallery, print release",
  },
  {
    id: "housewarming",
    icon: Building,
    title: "Housewarming Photography",
    description:
      "Document the joy and celebration of your new home with professional housewarming photography. We capture the special moments, family gatherings, and the warmth of your new beginning.",
    image:
      "https://images.pexels.com/photos/935985/pexels-photo-935985.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    duration: "2-3 hours",
    pricing: "Starting at ₹15,000",
    deliverables: "80+ edited photos, online gallery, print options",
  },
  {
    id: "branding",
    icon: Building,
    title: "Branding Shoots",
    description:
      "Professional branding photography that tells your business story and connects with your audience. From headshots to lifestyle images, we help create compelling visual content for your brand.",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    duration: "2-4 hours",
    pricing: "Starting at ₹25,000",
    deliverables: "120+ edited photos, commercial license, multiple formats",
  },
  {
    id: "graduation",
    icon: User,
    title: "Graduation Photography",
    description:
      "Celebrate academic achievements with professional graduation photography. We capture the pride, joy, and milestone moments of your educational journey with family and friends.",
    image:
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    duration: "1-2 hours",
    pricing: "Starting at ₹10,000",
    deliverables: "60+ edited photos, online gallery, print options",
  },
  {
    id: "commercial",
    icon: Building,
    title: "Commercial Photography",
    description:
      "High-quality images for brands, products, and professional marketing. From product shots to corporate headshots, we help your business shine with compelling visual content that tells your brand story and connects with your audience.",
    image:
      "https://images.pexels.com/photos/935985/pexels-photo-935985.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    duration: "2-4 hours",
    pricing: "Starting at ₹20,000",
    deliverables: "100+ edited photos, commercial license, multiple formats",
  },
  {
    id: "maternity",
    icon: Baby,
    title: "Maternity Photography",
    description:
      "Celebrate the beauty of motherhood with elegant maternity portraits that capture this special chapter in your life.",
    image:
      "https://images.pexels.com/photos/935985/pexels-photo-935985.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    duration: "1-2 hours",
    pricing: "Starting at ₹18,000",
    deliverables: "60+ edited photos, online gallery, print options",
  },
  {
    id: "newborn",
    icon: Baby,
    title: "Newborn Photography",
    description:
      "Tender and artistic newborn sessions to capture your baby's first days with love and care.",
    image:
      "https://images.pexels.com/photos/3933274/pexels-photo-3933274.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    duration: "1-2 hours",
    pricing: "Starting at ₹20,000",
    deliverables: "40+ edited photos, online gallery, print options",
  },
  {
    id: "kids",
    icon: Cake,
    title: "Kids Photography",
    description:
      "Fun and lively kids photography sessions to capture childhood memories and milestones.",
    image:
      "https://images.pexels.com/photos/3662665/pexels-photo-3662665.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    duration: "1-2 hours",
    pricing: "Starting at ₹15,000",
    deliverables: "50+ edited photos, online gallery, print options",
  },
  {
    id: "food",
    icon: Utensils,
    title: "Food Photography",
    description:
      "Mouthwatering food photography for restaurants, chefs, and brands to showcase culinary creations.",
    image:
      "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    duration: "2-4 hours",
    pricing: "Starting at ₹18,000",
    deliverables: "40+ edited photos, commercial license, multiple formats",
  },
  {
    id: "real-estate",
    icon: Home,
    title: "Real Estate Photography",
    description:
      "Professional real estate photography to highlight properties and attract buyers with stunning visuals.",
    image:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    duration: "1-3 hours",
    pricing: "Starting at ₹20,000",
    deliverables: "30+ edited photos, online gallery, commercial license",
  },
  {
    id: "fashion",
    icon: Shirt,
    title: "Fashion Photography",
    description:
      "Creative fashion shoots for designers, models, and brands to showcase style and personality.",
    image:
      "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    duration: "2-4 hours",
    pricing: "Starting at ₹30,000",
    deliverables: "80+ edited photos, commercial license, multiple formats",
  },
  {
    id: "sports",
    icon: Trophy,
    title: "Sports Photography",
    description:
      "Dynamic sports photography capturing action, emotion, and memorable moments from sporting events.",
    image:
      "https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    duration: "2-6 hours",
    pricing: "Starting at ₹25,000",
    deliverables: "100+ edited photos, online gallery, print options",
  },
  {
    id: "street",
    icon: MapPin,
    title: "Street Photography",
    description:
      "Authentic street photography capturing life, culture, and stories from the urban landscape.",
    image:
      "https://images.pexels.com/photos/167964/pexels-photo-167964.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    duration: "2-4 hours",
    pricing: "Starting at ₹15,000",
    deliverables: "60+ edited photos, online gallery, print options",
  },
  {
    id: "wildlife",
    icon: PawPrint,
    title: "Wildlife Photography",
    description:
      "Stunning wildlife photography capturing the beauty and majesty of nature and animals.",
    image:
      "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    duration: "Varies",
    pricing: "Starting at ₹35,000",
    deliverables: "80+ edited photos, online gallery, print options",
  },
];

// Helper to generate 30 images per service (replace with your own images if needed)
const getServiceImages = (serviceId: string) =>
  Array.from(
    { length: 30 },
    (_, i) => `https://source.unsplash.com/800x600/?${serviceId}&sig=${i}`
  );

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleImageClick = (serviceId: string) => {
    setSelectedService(serviceId);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  const handleBookService = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleGetQuote = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleExploreMore = () => {
    document
      .getElementById("services-grid")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-neutral-950 text-stone-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Cyrus Desai Photography Services"
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
            Our <span className="italic font-medium">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Professional photography services tailored to your unique needs and
            vision
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-grid" className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 ">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden bg-stone-900 cursor-pointer ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-96 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div
                  className={`space-y-8 ${
                    index % 2 === 1 ? "lg:col-start-1" : ""
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <service.icon className="w-8 h-8 text-stone-300" />
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-tight">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-stone-400 text-lg leading-relaxed font-light">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 gap-6">
                    <div className="flex items-start space-x-4">
                      <Clock className="w-5 h-5 text-stone-400 mt-1" />
                      <div>
                        <p className="text-sm text-stone-500 uppercase tracking-widest font-medium mb-1">
                          Duration
                        </p>
                        <p className="text-stone-200 font-light">
                          {service.duration}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <DollarSign className="w-5 h-5 text-stone-400 mt-1" />
                      <div>
                        <p className="text-sm text-stone-500 uppercase tracking-widest font-medium mb-1">
                          Pricing
                        </p>
                        <p className="text-stone-200 font-light">
                          {service.pricing}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Package className="w-5 h-5 text-stone-400 mt-1" />
                      <div>
                        <p className="text-sm text-stone-500 uppercase tracking-widest font-medium mb-1">
                          Deliverables
                        </p>
                        <p className="text-stone-200 font-light">
                          {service.deliverables}
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleBookService}
                    className="inline-flex items-center px-8 py-4 text-sm font-medium tracking-wide text-stone-100 border border-stone-100 hover:bg-stone-100 hover:text-neutral-950 transition-all duration-500 group"
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
        </div>
      </section>

      {/* Image Gallery Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50">
          <button
            className="absolute top-8 right-8 text-white text-3xl font-bold"
            onClick={() => setSelectedService(null)}
          >
            &times;
          </button>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-8 max-h-[80vh] overflow-y-auto">
            {getServiceImages(selectedService).map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-40 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      )}

      <ContactForm />
    </div>
  );
};

export default ServicesPage;
