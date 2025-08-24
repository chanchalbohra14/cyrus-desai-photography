import React from 'react';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <div>
      <Hero />
      <Gallery />
      <Services />
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default Home;