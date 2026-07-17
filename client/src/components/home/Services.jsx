import React from 'react';
import SectionHeading from '../common/SectionHeading.jsx';
import ServiceCard from '../common/ServiceCard.jsx';
import { services } from '../../data/services.js';

export default function Services() {
  return (
    <section className="services-section">
      <SectionHeading title="Our Services" subtitle="What we deliver for clients" />
      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </section>
  );
}
