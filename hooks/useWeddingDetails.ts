"use client";

export function useWeddingDetails() {
  const weddingDate = new Date("2025-04-12T20:00:00");
  const civilWeddingDate = new Date("2025-04-11T19:00:00");
  const location = "Rambla de Canaletes, 133, Ciutat Vella, 08002, Barcelona";
  const civilLocation = "Ayuntamiento de Nou Barris, Barcelona";
  const phoneNumber = "+34617699348";

  const googleMapsUrlWedding =
    "https://www.google.com/maps/place/Rambla+de+Canaletes,+133,+08002+Barcelona";
  const googleMapsUrlCivil =
    "https://maps.app.goo.gl/6rsoKhbF7m1VgXWm7";

  const handleWhatsAppConfirm = () => {
    const message = encodeURIComponent(
      "¡Confirmo mi asistencia a la boda de Militza y Sebastián! 💑"
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const handleAddToCalendar = () => {
    const startDate = weddingDate.toISOString().replace(/[-:]/g, "").slice(0, 15);
    const endDate = new Date(weddingDate.getTime() + 2 * 60 * 60 * 1000) // Duración de 2 horas
      .toISOString()
      .replace(/[-:]/g, "")
      .slice(0, 15);

    const event = {
      text: "Boda de Militza & Sebastián",
      dates: `${startDate}/${endDate}`,
      details: `Nos encantaría contar con tu presencia en nuestra boda.\nLugar: ${location}`,
      location: location,
    };

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      event.text
    )}&dates=${event.dates}&details=${encodeURIComponent(event.details)}&location=${encodeURIComponent(
      event.location
    )}`;

    window.open(googleCalendarUrl, "_blank");
  };

  const handleOpenMapWedding = () => {
    window.open(googleMapsUrlWedding, "_blank");
  };

  const handleOpenMapCivil = () => {
    window.open(googleMapsUrlCivil, "_blank");
  };

  return {
    weddingDate,
    civilWeddingDate,
    location,
    civilLocation,
    phoneNumber,
    handleWhatsAppConfirm,
    handleAddToCalendar,
    handleOpenMapWedding,
    handleOpenMapCivil,
  };
}
