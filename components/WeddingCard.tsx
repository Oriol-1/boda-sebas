"use client";

import { Calendar, Heart, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useWeddingDetails } from "@/hooks/useWeddingDetails";
import { motion } from "framer-motion";

export default function WeddingCard() {
  const { 
    handleWhatsAppConfirm, 
    handleAddToCalendar, 
    handleOpenMap, 
    restaurantLocation,
    civilLocation
  } = useWeddingDetails();

  return (
    <div className="w-full h-screen flex justify-center items-center mobile-container">
      <Card 
        className="
          w-full sm:max-w-3xl bg-white/95 p-0 sm:p-8 
          space-y-6 sm:space-y-8 shadow-2xl 
          backdrop-blur-lg rounded-none sm:rounded-xl border-none sm:border-rose-200
          flex flex-col h-auto min-h-0
        "
      >
        {/* Cabecera con corazón animado y título */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 p-6 sm:p-0 flex-shrink-0"
        >
          <Heart className="w-16 h-16 sm:w-20 sm:h-20 text-rose-500 mx-auto animate-pulse" />
          <h1 className="font-serif text-5xl sm:text-6xl text-gray-800 font-bold tracking-wide">
            Militza & Sebastian
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 italic">
            Estamos encantados de invitarte a nuestra boda
          </p>
        </motion.div>

        {/* Información de la ceremonia civil */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center bg-rose-50/70 p-4 sm:p-6 rounded-lg border-l-4 border-rose-300 shadow-md mx-4 sm:mx-0 flex-shrink-0"
        >
          <p className="text-gray-700 text-sm sm:text-base">
            La boda civil tendrá lugar el <strong>11 de abril de 2025</strong>  
            en el <strong>{civilLocation}</strong> a las <strong>19:00 h</strong>.
          </p>
          <Button 
            variant="outline" 
            onClick={() => handleOpenMap("wedding")}
            className="mt-4 w-full text-rose-500 border-rose-500 py-2 px-4 rounded-lg 
              font-medium text-sm sm:text-base shadow-md hover:bg-rose-50 
              hover:border-rose-600 transform hover:scale-105 transition-all duration-300"
          >
            Ver Ubicación de la Ceremonia
          </Button>
        </motion.div>

        {/* Información del Restaurante */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center p-4 sm:p-0 flex-grow"
        >
          <div className="space-y-4 bg-rose-50/60 p-4 rounded-lg">
            <div className="flex items-center gap-4">
              <Calendar className="w-8 h-8 text-rose-500" />
              <span className="text-sm sm:text-base font-medium">
                Sábado, 12 de abril de 2025
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Clock className="w-8 h-8 text-rose-500" />
              <span className="text-sm sm:text-base font-medium">
                20:00 h
              </span>
            </div>
            <div 
              className="flex items-center gap-4 cursor-pointer hover:text-rose-600"
              onClick={() => handleOpenMap("restaurant")}
            >
              <MapPin className="w-8 h-8 text-rose-500" />
              <div className="text-sm sm:text-base font-medium leading-relaxed">
                {restaurantLocation}
              </div>
            </div>
          </div>

          {/* Imagen de los novios */}
          <div className="relative w-full mx-auto rounded-lg overflow-hidden">
            <Image
              src="/images/sebas-3.png"
              alt="Imagen de los novios"
              width={500}
              height={350}
              className="object-cover w-full rounded-lg shadow-lg"
              priority
            />
          </div>
        </motion.div>

        {/* Botones de confirmación y calendario */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 p-4 pt-6 flex-shrink-0"
        >
          <Button 
            onClick={handleWhatsAppConfirm}
            className="w-full sm:w-auto bg-rose-500 text-white py-3 px-6 rounded-lg"
          >
            Confirmar Asistencia
          </Button>
          <Button 
            variant="outline" 
            onClick={() => handleAddToCalendar("restaurant")}
            className="w-full sm:w-auto text-rose-500 border-rose-500 py-3 px-6 rounded-lg"
          >
            Agregar Cena al Calendario
          </Button>
        </motion.div>
      </Card>

      <style jsx>{`
      
        @media (max-width: 640px) {
          .mobile-container {
            padding-top: 120%;  /* Añade espacio superior solo en móviles */
          }
        }
        @media (max-width: 480px) {
          .mobile-container {
            padding-top: 240%;  /* Añade espacio superior solo en móviles */
          }
        }
      
      `}</style>
    </div>
  );
}
