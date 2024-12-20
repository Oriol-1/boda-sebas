"use client";

export function useWeddingDetails() {
  const weddingDate = new Date("2024-12-31T16:00:00");
  const location = "Jardín Las Rosas, Ciudad de México";
  const phoneNumber = "+525512345678"; // Replace with actual phone number

  const handleWhatsAppConfirm = () => {
    const message = encodeURIComponent("¡Confirmo mi asistencia a su boda! 💑");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const handleAddToCalendar = () => {
    const event = {
      text: "Boda de Juan & María",
      dates: weddingDate.toISOString(),
      details: `Te esperamos en nuestra boda.\nLugar: ${location}`,
      location: location,
    };

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      event.text
    )}&dates=${event.dates.replace(/[-:]/g, "")}/${event.dates.replace(
      /[-:]/g,
      ""
    )}&details=${encodeURIComponent(event.details)}&location=${encodeURIComponent(
      event.location
    )}`;

    window.open(googleCalendarUrl, "_blank");
  };

  return {
    weddingDate,
    location,
    phoneNumber,
    handleWhatsAppConfirm,
    handleAddToCalendar,
  };
}