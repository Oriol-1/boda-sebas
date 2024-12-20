"use client";

import { Calendar, Heart, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useWeddingDetails } from "@/hooks/useWeddingDetails";

export default function WeddingCard() {
  const { handleWhatsAppConfirm, handleAddToCalendar, location } = useWeddingDetails();

  return (
    <Card className="mx-auto bg-white/95 p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 lg:space-y-8 w-full max-w-full">
      {/* Encabezado */}
      <div className="text-center space-y-3 sm:space-y-4">
        <Heart className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto text-rose-500" />
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gray-800">
          Juan & María
        </h1>
        <p className="text-base sm:text-lg text-gray-600 font-light px-2">
          Nos complace invitarte a celebrar nuestra boda
        </p>
      </div>

      {/* Contenido principal */}
      <div className="grid gap-4 sm:gap-6 sm:grid-cols-1 md:grid-cols-2">
        {/* Detalles del evento */}
        <div className="space-y-4 text-center md:text-left">
          {/* Fecha y hora */}
          <div className="flex items-center justify-center md:justify-start gap-2 flex-wrap">
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            <span className="text-sm sm:text-base">Sábado, 15 de Junio 2024</span>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2 flex-wrap">
            <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            <span className="text-sm sm:text-base">18:00 hrs</span>
          </div>
          
          {/* Ubicación */}
          <div className="flex items-center justify-center md:justify-start gap-2 flex-wrap">
            <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            <span className="text-sm sm:text-base">{location}</span>
          </div>
        </div>

        {/* Imagen */}
        <div className="relative aspect-[4/3] w-full max-w-sm mx-auto md:max-w-full">
          <Image
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed"
            alt="Lugar de la ceremonia"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </div>

      {/* Botones */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4">
        <Button 
          onClick={handleWhatsAppConfirm}
          className="w-full sm:w-auto"
        >
          Confirmar Asistencia
        </Button>
        <Button 
          variant="outline" 
          onClick={handleAddToCalendar}
          className="w-full sm:w-auto"
        >
          Agregar al Calendario
        </Button>
      </div>
    </Card>
  );
}