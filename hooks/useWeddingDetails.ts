"use client";

export function useWeddingDetails() {
  const weddingDate = new Date("2025-04-20T20:00:00");
  const location = "La Esquinica";
  const phoneNumber = "+34617699348";

  const googleMapsUrl =
    "https://www.google.com/maps/place/La+Esquinica/@41.4303327,2.172944,1087m/data=!3m2!1e3!5s0x12a4bd3098b3f9a9:0xa25f3de6a5cec98b!4m6!3m5!1s0x12a4bd308497ea59:0x67a00f278df3721c!8m2!3d41.4304886!4d2.1713057!16s%2Fg%2F1thpb0qb";

  const handleWhatsAppConfirm = () => {
    const message = encodeURIComponent("¡Confirmo mi asistencia a su boda! 💑");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const handleAddToCalendar = () => {
    const event = {
      text: "Boda de Militza & Sebastian",
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

  const handleOpenMap = () => {
    window.open(googleMapsUrl, "_blank");
  };

  return {
    weddingDate,
    location,
    phoneNumber,
    handleWhatsAppConfirm,
    handleAddToCalendar,
    handleOpenMap,
  };
}
