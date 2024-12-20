"use client";

import { useState, useEffect } from "react";
import WeddingCard from "@/components/WeddingCard";
import Envelope from "@/components/Envelope";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3')] bg-cover bg-center bg-fixed">
      <div className="min-h-screen bg-black/40 backdrop-blur-sm flex items-center justify-center p-8">
        <Envelope isOpen={isOpen}>
          <WeddingCard />
        </Envelope>
      </div>
    </main>
  );
}