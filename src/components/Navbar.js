"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link href="/About">Tentang</Link></li>
        <li><Link href="/Projects">Proyek</Link></li>
        <li><Link href="/Skills">Keahlian</Link></li>
        <li><Link href="/Contact">Kontak</Link></li>
      </ul>
    </nav>
  );
}
