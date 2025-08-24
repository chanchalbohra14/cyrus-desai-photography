import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    eventDate: '',
    guestCount: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const serviceOptions = [
    'Wedding Photography',
    'Pre-Wedding Shoot',
    'Event Photography',
    'Portrait Session',
    'Baby Shower',
    'Couple Shoot',
    'Housewarming',
    'Branding Shoot',
    'Graduation',
    'Commercial Photography',
    'Other'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration - replace with your actual service details
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service_type: formData.serviceType,
        event_date: formData.eventDate,
        guest_count: formData.guestCount,
        message: formData.message,
        to_email: 'desaicyrus@gmail.com'
      };

      // For demo purposes, we'll simulate the email sending
      // Replace this with actual EmailJS configuration:
      // await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_PUBLIC_KEY');
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        eventDate: '',
        guestCount: '',
        message: ''
      });

      // Also send WhatsApp message as backup
      const whatsappMessage = `New inquiry from ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.serviceType}
Event Date: ${formData.eventDate}
Guest Count: ${formData.guestCount}
Message: ${formData.message}`;
      
      const whatsappUrl = `https://wa.me/919916378416?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');

    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-stone-950">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-light mb-6 tracking-tight text-stone-100">
            Let's Create Something <span className="italic font-medium">Beautiful</span>
          </h2>
          <p className="text-lg text-stone-400 max-w-2xl mx-auto leading-relaxed font-light">
            Ready to capture your special moments? Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-stone-300 mb-3">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-neutral-950 border border-stone-800 text-stone-100 placeholder-stone-500 focus:border-stone-100 focus:outline-none transition-colors duration-300"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-stone-300 mb-3">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-neutral-950 border border-stone-800 text-stone-100 placeholder-stone-500 focus:border-stone-100 focus:outline-none transition-colors duration-300"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-stone-300 mb-3">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-neutral-950 border border-stone-800 text-stone-100 placeholder-stone-500 focus:border-stone-100 focus:outline-none transition-colors duration-300"
                placeholder="+91 9876543210"
              />
            </div>

            <div>
              <label htmlFor="serviceType" className="block text-sm font-medium text-stone-300 mb-3">
                Service Type *
              </label>
              <select
                id="serviceType"
                name="serviceType"
                required
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-neutral-950 border border-stone-800 text-stone-100 focus:border-stone-100 focus:outline-none transition-colors duration-300"
              >
                <option value="">Select a service</option>
                {serviceOptions.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="eventDate" className="block text-sm font-medium text-stone-300 mb-3">
                Event Date
              </label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-neutral-950 border border-stone-800 text-stone-100 focus:border-stone-100 focus:outline-none transition-colors duration-300"
              />
            </div>

            <div>
              <label htmlFor="guestCount" className="block text-sm font-medium text-stone-300 mb-3">
                Guest Count (if applicable)
              </label>
              <input
                type="number"
                id="guestCount"
                name="guestCount"
                value={formData.guestCount}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-neutral-950 border border-stone-800 text-stone-100 placeholder-stone-500 focus:border-stone-100 focus:outline-none transition-colors duration-300"
                placeholder="Approximate number of guests"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-stone-300 mb-3">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-neutral-950 border border-stone-800 text-stone-100 placeholder-stone-500 focus:border-stone-100 focus:outline-none transition-colors duration-300 resize-none"
              placeholder="Tell us more about your vision, special requirements, or any questions you have..."
            />
          </div>

          <div className="text-center">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-8 py-4 text-sm font-medium tracking-wide text-neutral-950 bg-stone-100 hover:bg-stone-200 disabled:bg-stone-400 disabled:cursor-not-allowed transition-all duration-500"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-neutral-950 mr-3"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-3" />
                  Send Message
                </>
              )}
            </motion.button>
          </div>

          {/* Status Messages */}
          <AnimatePresence>
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex items-center justify-center space-x-3 text-green-400 bg-green-400/10 border border-green-400/20 px-6 py-4"
              >
                <CheckCircle className="w-5 h-5" />
                <span>Thank you! Your message has been sent successfully. We'll get back to you soon.</span>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex items-center justify-center space-x-3 text-red-400 bg-red-400/10 border border-red-400/20 px-6 py-4"
              >
                <AlertCircle className="w-5 h-5" />
                <span>Sorry, there was an error sending your message. Please try again or contact us directly.</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;