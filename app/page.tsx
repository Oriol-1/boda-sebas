"use client";

import { useState, useEffect } from "react";
import WeddingCard from "@/components/WeddingCard";
import Envelope from "@/components/Envelope";

export default function Home() {
  const [viewportHeight, setViewportHeight] = useState('100vh');

  useEffect(() => {
    const updateHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      setViewportHeight(`${vh * 100}px`);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <div className="relative w-full">
      {/* Imagen de fondo fija */}
      <div
        className="fixed inset-0 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3')",
          zIndex: -1,  // Envía el fondo detrás del contenido
        }}
      ></div>

      {/* Capa Oscura para Escritorio */}
      <div className="absolute inset-0 backdrop-blur-sm"></div>

      {/* Contenido Central Ajustado */}
      <main
        className="relative flex items-center justify-center w-full p-0"
        style={{
          minHeight: 'calc(var(--vh, 1vh) * 100)',  // Altura mínima dinámica
        }}
      >
        <div className="w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
          <Envelope isOpen={true}>
            <WeddingCard />
          </Envelope>
        </div>
      </main>
    </div>
  );
}
