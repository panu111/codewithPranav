import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";
import Container from "../components/Container";
import FadeIn from "../components/FadeIn";
import GlassCard from "../components/GlassCard";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form:", form);

    setSubmitted(true);

    setForm({
      name: "",
      phone: "",
      service: "",
      message: "",
    });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen py-16">
      <Container>

        {/* HERO */}
        <FadeIn>
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
              Contact Pandit Ji
            </h1>

            <p className="text-gray-400">
              Book your pooja or get jyotish guidance easily
            </p>

            <p className="marathi text-yellow-300 mt-2">
              संपर्क करा • मार्गदर्शन घ्या
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT SIDE CONTACT INFO */}
          <FadeIn>
            <div className="space-y-6">

              {/* PHONE */}
              <GlassCard className="p-6 flex items-start gap-4">
                <Phone className="text-yellow-400 mt-1" />
                <div>
                  <p className="font-semibold">Call Us</p>

                  <a
                    href="tel:+918460846342"
                    className="text-gray-400 text-sm hover:text-yellow-400"
                  >
                    +91 8460846342
                  </a>
                </div>
              </GlassCard>

              {/* EMAIL */}
              <GlassCard className="p-6 flex items-start gap-4">
                <Mail className="text-yellow-400 mt-1" />
                <div>
                  <p className="font-semibold">Email</p>

                  <a
                    href="mailto:jangamc369@gmail.com"
                    className="text-gray-400 text-sm hover:text-yellow-400"
                  >
                    jangamc369@gmail.com
                  </a>
                </div>
              </GlassCard>

              {/* LOCATION */}
              <GlassCard className="p-6 flex items-start gap-4">
                <MapPin className="text-yellow-400 mt-1" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-400 text-sm">
                    Pune, Maharashtra
                  </p>
                </div>
              </GlassCard>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/918460846342"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GlassCard className="p-6 flex items-center gap-4 hover:border-green-400">
                  <MessageCircle className="text-green-400" />

                  <div>
                    <p className="font-semibold">Quick WhatsApp</p>

                    <p className="text-gray-400 text-sm">
                      Chat instantly with Pandit Ji
                    </p>
                  </div>
                </GlassCard>
              </a>

            </div>
          </FadeIn>

          {/* RIGHT SIDE FORM */}
          <FadeIn delay={0.1}>
            <GlassCard className="p-8">

              <h2 className="text-2xl font-bold text-yellow-400 mb-6">
                Send Message
              </h2>

              {submitted && (
                <p className="text-green-400 text-sm mb-4 text-center">
                  ✅ Message sent successfully!
                </p>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-black/40 border border-white/10 focus:border-yellow-400 outline-none"
                />

                <input
                  type="tel"
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

                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-black/40 border border-white/10 focus:border-yellow-400 outline-none"
                />

                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-black py-3 rounded-xl font-semibold hover:bg-yellow-300 transition flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </button>

              </form>

            </GlassCard>
          </FadeIn>

        </div>
      </Container>
    </div>
  );
}

