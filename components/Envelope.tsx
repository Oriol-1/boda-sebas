"use client";

import { motion } from "framer-motion";

interface EnvelopeProps {
  children: React.ReactNode;
  isOpen: boolean;
}

export default function Envelope({ children, isOpen }: EnvelopeProps) {
  return (
    <div className="relative w-full min-h-screen flex justify-center items-center p-4">
      <div className="relative w-full max-w-[800px] mx-auto">
        {/* Cuerpo del sobre sin animaciones */}
        <div className="relative w-full aspect-[8/5] bg-amber-100 border-2 border-amber-200 rounded-lg overflow-hidden">
          {/* Solapa superior estática (sin movimiento) */}
          <div
            className="absolute -top-[30%] left-0 right-0 h-[30%] origin-bottom bg-amber-50 border-2 border-amber-200"
            style={{
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
              clipPath: "polygon(0 100%, 50% 0, 100% 100%)",
            }}
          />
          
          {/* Solapas laterales estáticas */}
          <div 
            className="absolute top-0 left-0 w-[30%] h-full bg-amber-50 border-r-2 border-amber-200"
            style={{ clipPath: "polygon(0 0, 100% 20%, 100% 80%, 0 100%)" }} 
          />
          <div 
            className="absolute top-0 right-0 w-[30%] h-full bg-amber-50 border-l-2 border-amber-200"
            style={{ clipPath: "polygon(0 20%, 100% 0, 100% 100%, 0 80%)" }} 
          />
          
          {/* Solapa inferior estática */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-[30%] bg-amber-50 border-t-2 border-amber-200"
            style={{ 
              clipPath: "polygon(0 100%, 50% 0, 100% 100%)", 
              transform: "rotateX(180deg)" 
            }} 
          />
        </div>

        {/* Tarjeta animada únicamente (sin afectar el sobre) */}
        <motion.div
          initial={{ y: 0, opacity: 1 }}
          animate={{ 
            y: isOpen ? `-15%` : 0,
            opacity: 1
          }}
          transition={{ 
            duration: 1.5,
            type: "spring",
            stiffness: 100
          }}
          className="absolute inset-0 flex justify-center items-center p-4 sm:p-6"
        >
          <div className="bg-white rounded-lg shadow-xl w-full max-w-[90%] max-h-[80%] flex items-center justify-center">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
