"use client";

import { Calendar, Heart, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useWeddingDetails } from "@/hooks/useWeddingDetails";
import { motion } from "framer-motion";

export default function WeddingCard() {
  const { handleWhatsAppConfirm, handleAddToCalendar, location, handleOpenMap } = useWeddingDetails();

  return (
    <Card 
      className="
        mx-auto bg-white/95 p-3 sm:p-0 md:p-6 lg:p-8 
        space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 
        w-full max-w-full shadow-xl border-2 border-rose-100 
        backdrop-blur-sm overflow-hidden
      "
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-2 sm:space-y-3 md:space-y-4"
      >
        <Heart className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mx-auto text-rose-500 animate-pulse" />
        <div className="relative">
          <h1 
            className="
              font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
              text-gray-800 tracking-wide leading-relaxed
            "
          >
            Militza & Sebastian
          </h1>
          <div className="absolute -top-4 -left-2 w-full h-full border-t-2 border-rose-200 opacity-30" />
          <div className="absolute -bottom-4 -right-2 w-full h-full border-b-2 border-rose-200 opacity-30" />
        </div>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 font-light px-2 italic">
          Nos complace invitarte a celebrar nuestra boda
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-1 md:grid-cols-2 items-center"
      >
        <div className="space-y-4 md:space-y-6 text-center md:text-left bg-rose-50/50 p-3 sm:p-4 md:p-6 rounded-lg">
          <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 hover:text-rose-600 transition-colors">
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-rose-400" />
            <span className="text-sm sm:text-base md:text-lg font-medium">Sábado, 15 de Junio 2025</span>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 hover:text-rose-600 transition-colors">
            <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-rose-400" />
            <span className="text-sm sm:text-base md:text-lg font-medium">16:00 hrs</span>
          </div>
          {/* Aquí hacemos el div clickable y llamamos a handleOpenMap */}
          <div 
  className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 hover:text-rose-600 transition-colors cursor-pointer"
  onClick={handleOpenMap}
>
  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-rose-400" />
  <span className="text-sm sm:text-base md:text-lg font-medium">
    {location}
  </span>
</div>
        </div>

        <div className="relative aspect-[4/3] w-full max-w-sm mx-auto md:max-w-full">
          <div className="absolute inset-0 bg-rose-100 rounded-lg transform rotate-3 -z-10" />
          <Image
            src="/images/sebas.jpg"
            alt="Imagen de los novios"
            width={800}
            height={600}
            className="
              rounded-lg w-full h-auto object-cover shadow-lg 
              hover:transform hover:scale-[1.02] transition-transform duration-300
            "
            priority
          />
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 sm:pt-6"
      >
        <Button 
          onClick={handleWhatsAppConfirm}
          className="
            w-full sm:w-auto bg-rose-500 hover:bg-rose-600 transform hover:scale-105 
            transition-all duration-300 shadow-md text-sm sm:text-base
          "
        >
          Confirmar Asistencia
        </Button>
        <Button 
          variant="outline" 
          onClick={handleAddToCalendar}
          className="
            w-full sm:w-auto border-rose-300 text-rose-500 hover:bg-rose-50 
            transform hover:scale-105 transition-all duration-300 shadow-md text-sm sm:text-base
          "
        >
          Agregar al Calendario
        </Button>
      </motion.div>
    </Card>
  );
}
