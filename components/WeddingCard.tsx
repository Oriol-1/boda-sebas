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
    handleOpenMapWedding, 
    handleOpenMapCivil, 
    location, 
    civilLocation 
  } = useWeddingDetails();

  return (
    <Card 
      className="
        w-full bg-white/95 p-6 sm:p-10 
        space-y-8 shadow-2xl border-rose-200 
        backdrop-blur-lg rounded-xl
      "
    >
      {/* Cabecera con corazón animado y título */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <Heart className="w-10 h-10 sm:w-16 sm:h-16 text-rose-500 mx-auto animate-pulse" />
        <h1 className="font-serif text-4xl sm:text-6xl text-gray-800 font-bold tracking-wide">
          Sebastián & Militza
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
        className="text-center bg-rose-50/70 p-5 rounded-lg border-l-4 border-rose-300 shadow-md"
      >
        <p className="text-gray-700 text-sm sm:text-base">
          La boda civil tendrá lugar el <strong>11 de abril de 2025</strong>  
          en el <strong>Ayuntamiento de Nou Barris</strong> a las <strong>19:00 h</strong>.
        </p>
        <Button 
          variant="outline" 
          onClick={handleOpenMapCivil}
          className="
            mt-4 w-full sm:w-auto text-rose-500 border-rose-500 
            py-2 px-4 rounded-lg font-medium text-sm shadow-md
            hover:bg-rose-50 hover:border-rose-600 transform hover:scale-105 
            transition-all duration-300
          "
        >
          Ver Ubicación Civil
        </Button>
      </motion.div>

      {/* Sección de fecha, hora y lugar con iconos a la izquierda */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="grid sm:grid-cols-2 gap-6 items-center"
      >
        <div className="space-y-6 bg-rose-50/60 p-6 rounded-lg">
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
            onClick={handleOpenMapWedding}
          >
            <MapPin className="w-8 h-8 text-rose-500" />
            <div className="text-sm sm:text-base font-medium leading-relaxed">
              {location}
            </div>
          </div>
        </div>

        {/* Imagen reducida con marco */}
        <div className="relative w-full max-w-sm mx-auto rounded-lg overflow-hidden">
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
        className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8"
      >
        <Button 
          onClick={handleWhatsAppConfirm}
          className="
            w-full sm:w-auto bg-rose-500 text-white py-3 px-6 rounded-lg
            font-semibold text-lg shadow-lg 
            hover:bg-rose-600 transform hover:scale-105 
            transition-all duration-300
          "
        >
          Confirmar Asistencia
        </Button>
        <Button 
          variant="outline" 
          onClick={handleAddToCalendar}
          className="
            w-full sm:w-auto text-rose-500 border-rose-500 
            py-3 px-6 rounded-lg font-semibold text-lg shadow-lg
            hover:bg-rose-50 hover:border-rose-600 
            transform hover:scale-105 transition-all duration-300
          "
        >
          Agregar al Calendario
        </Button>
      </motion.div>
    </Card>
  );
}
