import { useState } from "react";
import Container from "../components/Container";
import FadeIn from "../components/FadeIn";
import GlassCard from "../components/GlassCard";

export default function BookAppointment() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
const handleSubmit = async (e) => {
  e.preventDefault();

  try {

    const response = await fetch("http://localhost:5000/api/bookings/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    setSuccess(true);

    // open WhatsApp confirmation
    if (data.whatsappURL) {
      window.open(data.whatsappURL, "_blank");
    }

    setForm({
      name: "",
      phone: "",
      service: "",
      date: "",
    });

  } catch (error) {
    console.error("Error:", error);
  }
};


  return (
    <div className="min-h-screen py-16">
      <Container>
        <FadeIn>
          <h1 className="text-4xl font-bold text-yellow-400 text-center mb-10">
            Book Appointment
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <GlassCard className="max-w-xl mx-auto p-8">
            {success && (
              <p className="text-green-400 text-center mb-4">
                ✅ Booking submitted!
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-black/40 border border-white/10 focus:border-yellow-400 outline-none"
              />

              <input
                name="phone"
                placeholder="Mobile Number"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-black/40 border border-white/10 focus:border-yellow-400 outline-none"
              />

              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-black/40 border border-white/10 focus:border-yellow-400 outline-none"
              >
                <option value="">Select Service</option>
                <option>Satyanarayan Pooja</option>
                <option>Vastu Shanti</option>
                <option>Lagan Vidhi</option>
                <option>Kundli Matching</option>
              </select>

              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-black/40 border border-white/10 focus:border-yellow-400 outline-none"
              />

              <button className="w-full bg-yellow-400 text-black py-3 rounded-xl font-semibold hover:bg-yellow-300 transition">
                Book Now
              </button>
            </form>
          </GlassCard>
        </FadeIn>
      </Container>
    </div>
  );
}