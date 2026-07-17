import React from 'react';

export default function SectionHeading({ title, subtitle }) {
  return (
    <header className="section-heading">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </header>
  );
}
