"use client"; // Indica que este componente se renderiza en el cliente

import { motion } from "framer-motion"; // Importa la biblioteca framer-motion para animaciones

interface FlapProps {
  isOpen: boolean; // Define una propiedad isOpen de tipo booleano
}

export function Flap({ isOpen }: FlapProps) {
  return (
    <motion.div
      initial={{ rotateX: 0 }} // Estado inicial sin rotación en el eje X
      animate={{ rotateX: isOpen ? -180 : 0 }} // Anima la rotación en X si isOpen es true
      transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }} // Configuración de la transición
      className="absolute -top-24 left-0 right-0 h-24" // Clases de Tailwind CSS para posicionamiento y tamaño
      style={{
        transformOrigin: "bottom", // Establece el origen de la transformación en la parte inferior
        zIndex: 20, // Define la prioridad de apilamiento
      }}
    >
      <div className="absolute inset-0 bg-rose-200"> {/* Fondo de color rosa */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-rose-300 to-rose-100" // Gradiente de color
          style={{
            clipPath: "polygon(0 100%, 50% 0, 100% 100%)", // ...estilos adicionales
          }}
        ></div>
      </div>
    </motion.div>
  );
}