"use client";

import { useState, useEffect } from "react";
import WeddingCard from "@/components/WeddingCard";
import Envelope from "@/components/Envelope";

export default function Home() {
  const [viewportHeight, setViewportHeight] = useState('100vh');
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);
  const [isIphone5, setIsIphone5] = useState(false);  // Detectar iPhone 5 o similar

  useEffect(() => {
    const updateHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      setViewportHeight(`${vh * 100}px`);
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsSmallMobile(window.innerWidth <= 480);
      setIsIphone5(window.innerWidth <= 320 && window.innerHeight <= 568);  // iPhone 5 o similar
    };

    updateHeight();
    checkMobile();
    window.addEventListener("resize", updateHeight);
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <main
      style={{ height: viewportHeight }}
      className={`relative w-full ${isMobile ? 'bg-none' : "bg-[url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3')] bg-cover bg-center bg-repeat-y"}`}
    >
      {/* Capa Oscura para Escritorio */}
      {!isMobile && <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>}

      {/* Contenido Central con Mucho Padding para iPhone 5 */}
      <div className={`relative flex items-center justify-center min-h-full w-full p-4
        ${isIphone5 ? 'pt-80' : isSmallMobile ? 'pt-60' : isMobile ? 'pt-40' : ''}`}>
        <div className="w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
          <Envelope isOpen={true}>
            <WeddingCard />
          </Envelope>
        </div>
      </div>
    </main>
  );
}
