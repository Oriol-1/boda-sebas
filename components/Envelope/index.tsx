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
      className="relative w-full max-w-4xl mx-auto"
    >
      <div className="relative">
        <Flap isOpen={isOpen} />
        
        {/* Envelope body */}
        <div className="relative bg-rose-200 p-8 rounded-lg shadow-xl">
          {/* Decorative edges */}
          <div className="absolute inset-x-0 top-0 h-2 bg-rose-300/50" />
          <div className="absolute inset-y-0 left-0 w-2 bg-rose-300/30" />
          <div className="absolute inset-y-0 right-0 w-2 bg-rose-300/30" />
          <div className="absolute inset-x-0 bottom-0 h-2 bg-rose-300/50" />
          
          <Content isOpen={isOpen}>
            {children}
          </Content>
        </div>
      </div>
    </motion.div>
  );
}