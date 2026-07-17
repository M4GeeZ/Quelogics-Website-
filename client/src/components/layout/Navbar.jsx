import React from 'react';
import { navigation } from '../../data/navigation.js';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">Quelogics</div>
      <nav>
        <ul>
          {navigation.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
