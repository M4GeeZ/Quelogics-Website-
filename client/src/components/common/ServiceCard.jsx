import React from 'react';

export default function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </article>
  );
}
