import React from 'react';

export default function Button({ label, href }) {
  return (
    <a className="button" href={href}>
      {label}
    </a>
  );
}
