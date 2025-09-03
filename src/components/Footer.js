"use client";

import { useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [showEgg, setShowEgg] = useState(false);

  return (
    <footer className="relative p-4 text-center">
      <p>&copy; 2025 I Ken. Semua Hak Dilindungi.</p>

      {/* Tombol kecil di pojok kanan bawah footer */}
      <button
        onClick={() => setShowEgg(!showEgg)}
        className="absolute right-4 bottom-4 bg-pink-500 text-white px-2 py-1 rounded text-xs hover:bg-pink-600"
      >
        🎁
      </button>

      {/* Gambar muncul kalau tombol diklik */}
      {showEgg && (
        <div className="mt-4 flex justify-center">
          <Image
            src="/budi.jpeg"
            alt="Easter Egg"
            width={200}
            height={200}
            className="rounded-lg shadow-lg"
          />
          <Image
            src="/meng.jpeg"
            alt="Easter Egg"
            width={200}
            height={200}
            className="rounded-lg shadow-lg"
          />
          <Image
            src="/ming.jpeg"
            alt="Easter Egg"
            width={200}
            height={200}
            className="rounded-lg shadow-lg"
          />
        </div>
      )}
    </footer>
  );
}
