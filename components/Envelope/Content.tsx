"use client"; // Indica que este es un componente del cliente

import { motion } from "framer-motion"; // Importa la librería de animaciones

interface ContentProps {
  isOpen: boolean; // Propiedad que indica si el contenido está abierto
  children: React.ReactNode; // Los elementos hijos que se renderizarán
}

// Componente Content que muestra su contenido con animaciones
export function Content({ isOpen, children }: ContentProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }} // Estado inicial de la animación
      animate={{ 
        y: isOpen ? 0 : 20, // Si isOpen es true, mueve a y=0, si no, a y=20
        opacity: isOpen ? 1 : 0 // Si isOpen es true, opacidad 1, si no, 0
      }}
      transition={{ 
        duration: 0.8, // Duración de la animación
        ease: "easeOut" // Efecto de transición
      }}
      className="relative z-10" // Clase CSS para posicionamiento
    >
      {children} {/* Renderiza los hijos dentro del componente */}
    </motion.div>
  );
}