import React from 'react';
import SupportersCarousel from './supporters-carousel';

const SupportersSection = () => {
  return (
    <section className="py-20">
      <div className="siteContainer">
        <h2 className="text-4xl font-semibold text-center">Our Supporters</h2>
        <SupportersCarousel />
      </div>
    </section>
  );
};

export default SupportersSection;
