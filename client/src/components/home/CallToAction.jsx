import React from 'react';
import Button from '../common/Button.jsx';

export default function CallToAction() {
  return (
    <section className="cta-section">
      <h2>Ready to build something great?</h2>
      <Button label="Contact us" href="/contact" />
    </section>
  );
}
