import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const phoneNumber = "8460846342"; // ⭐ replace with your father's number
  const message =
    "Namaste Pandit Ji, mujhe jyotish consultation chahiye.";

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition duration-300"
    >
      <MessageCircle size={28} />
    </a>
  );
}
