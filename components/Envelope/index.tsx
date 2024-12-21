"use client";

import { motion } from "framer-motion";
import { Flap } from "./Flap";
import { Content } from "./Content";

interface EnvelopeProps {
  children: React.ReactNode;
  isOpen: boolean;
}

export default function Envelope({ children, isOpen }: EnvelopeProps) {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full max-w-none sm:max-w-4xl mx-auto"
    >
      <div className="relative">
        <Flap isOpen={isOpen} />
        <div className="relative bg-rose-200 p-0 sm:p-2 rounded-lg shadow-xl">
          
          {/* Elimina bordes en móvil */}
          <div className="hidden sm:block absolute inset-x-0 top-0 h-2 bg-rose-300/50" />
          <div className="hidden sm:block absolute inset-y-0 left-0 w-2 bg-rose-300/30" />
          <div className="hidden sm:block absolute inset-y-0 right-0 w-2 bg-rose-300/30" />
          <div className="hidden sm:block absolute inset-x-0 bottom-0 h-2 bg-rose-300/50" />

          <Content isOpen={isOpen}>
            {children}
          </Content>
        </div>
      </div>
    </motion.div>
  );
}
