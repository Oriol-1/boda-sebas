"use client";

export function useWeddingDetails() {
  const reservationDate = new Date("2025-04-12T20:00:00");  // Reserva restaurante
  const civilWeddingDate = new Date("2025-04-11T19:00:00");  // Ceremonia boda civil
  const restaurantLocation = "Rambla de Canaletes, 133, Ciutat Vella, 08002, Barcelona";
  const civilLocation = "Ayuntamiento de Nou Barris, Barcelona";
  const phoneNumber = "+34617699348";

  // URLs de Google Maps
  const googleMapsUrlRestaurant = "https://maps.app.goo.gl/WhXnLRTFfEagTQJF7";
  const googleMapsUrlCivil = "https://maps.app.goo.gl/GfydYGU3osztGRo7A";

  // Confirmación vía WhatsApp
  const handleWhatsAppConfirm = () => {
    const message = encodeURIComponent(
      "¡Confirmo mi asistencia a la ceremonia de boda y a la cena de celebración! 🎉"
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  // Agregar evento de la reserva al calendario
  const handleAddToCalendar = (eventType: "wedding" | "restaurant") => {
    let startDate, endDate, location, eventText;

    if (eventType === "wedding") {
      startDate = new Date(civilWeddingDate);
      endDate = new Date(civilWeddingDate);
      endDate.setHours(startDate.getHours() + 2);  // Duración estimada de 2 horas
      location = civilLocation;
      eventText = "Ceremonia de boda de Militza & Sebastian";
    } else {
      startDate = new Date(reservationDate);
      endDate = new Date(reservationDate);
      endDate.setHours(startDate.getHours() + 3);  // Termina a las 23:00
      location = restaurantLocation;
      eventText = "Cena de celebración - Militza & Sebastian";
    }

    // Formato correcto para Google Calendar
    const formatCalendarDate = (date: Date) => {
      return `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, "0")}${String(date.getDate()).padStart(2, "0")}T${String(date.getHours()).padStart(2, "0")}${String(date.getMinutes()).padStart(2, "0")}00`;
    };

    const event = {
      text: eventText,
      dates: `${formatCalendarDate(startDate)}/${formatCalendarDate(endDate)}`,
      details: `Te esperamos para celebrar juntos.\nLugar: ${location}`,
      location: location,
    };

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      event.text
    )}&dates=${event.dates}&details=${encodeURIComponent(event.details)}&location=${encodeURIComponent(
      event.location
    )}`;

    window.open(googleCalendarUrl, "_blank");
  };

  // Abrir ubicación de Google Maps
  const handleOpenMap = (mapType: "wedding" | "restaurant") => {
    if (mapType === "wedding") {
      window.open(googleMapsUrlCivil, "_blank");
    } else {
      window.open(googleMapsUrlRestaurant, "_blank");
    }
  };

  return {
    reservationDate,
    civilWeddingDate,
    restaurantLocation,
    civilLocation,
    phoneNumber,
    handleWhatsAppConfirm,
    handleAddToCalendar,
    handleOpenMap,
  };
}
