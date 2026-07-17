import React from 'react';
import SectionHeading from '../common/SectionHeading.jsx';

export default function Process() {
  return (
    <section className="process-section">
      <SectionHeading title="Our Process" subtitle="How we move from idea to launch" />
      <ol>
        <li>Discover & strategy</li>
        <li>Design & prototyping</li>
        <li>Build & iterate</li>
        <li>Launch & optimize</li>
      </ol>
    </section>
  );
}
