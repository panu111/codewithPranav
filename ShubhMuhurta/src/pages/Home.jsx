import { Link } from "react-router-dom";
import { CalendarCheck, ShieldCheck, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import Container from "../components/Container";
import FadeIn from "../components/FadeIn";
import gurujiImg from "../assets/guruji.jpeg";

/* 🔢 Counter */
function Counter({ end, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center">
      <h3 className="text-3xl font-bold text-yellow-400">{count}+</h3>
      <p className="text-gray-400">{label}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative">

      {/* 🔱 HERO */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            
            <FadeIn>
              <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-6 leading-tight">
                🔱 Trusted Jyotish & Gemstone Guidance
              </h1>

              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Accurate astrology consultation, marriage muhurat,
                kundli analysis and lucky gemstone recommendation by
                experienced Pandit Ji.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/book"
                  className="bg-yellow-400 text-black px-8 py-3 rounded-xl font-bold hover:bg-yellow-300 transition"
                >
                  Book Appointment
                </Link>

                <Link
                  to="/services"
                  className="border border-yellow-400 text-yellow-400 px-8 py-3 rounded-xl font-semibold hover:bg-yellow-400 hover:text-black transition"
                >
                  View Services
                </Link>
              </div>

              {/* trust icons */}
              <div className="flex gap-6 mt-10 flex-wrap">
                <div className="flex items-center gap-2 text-gray-300">
                  <CalendarCheck className="text-yellow-400" />
                  <span>Easy Booking</span>
                </div>

                <div className="flex items-center gap-2 text-gray-300">
                  <ShieldCheck className="text-yellow-400" />
                  <span>Trusted Service</span>
                </div>

                <div className="flex items-center gap-2 text-gray-300">
                  <Sparkles className="text-yellow-400" />
                  <span>Accurate Guidance</span>
                </div>
              </div>
            </FadeIn>

            {/* image */}
            <FadeIn delay={0.2} className="flex justify-center">
             <img
  src={gurujiImg}
  alt="Pandit Ji"
  className="w-[200px] md:w-[350px] rounded-3xl shadow-2xl border border-yellow-400/30 hover:scale-105 transition duration-500"
/>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* 📊 STATS */}
      <section className="py-16 border-t border-white/5">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Counter end={500} label="Pooja Completed" />
            <Counter end={300} label="Happy Clients" />
            <Counter end={15} label="Years Experience" />
            <Counter end={24} label="Support Available" />
          </div>
        </Container>
      </section>

      {/* ⭐ WHY CHOOSE */}
      <section className="py-20 border-t border-white/5">
        <Container>
          <FadeIn>
            <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
              Why Choose Pandit Ji?
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "15+ Years Experience",
              "Accurate Future Prediction",
              "Trusted by 500+ Families",
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-[#0f172a] p-6 rounded-2xl text-center border border-white/5 hover:border-yellow-400/30 transition">
                  <p className="font-semibold">{item}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* 🪔 SERVICES PREVIEW */}
      <section className="py-20 border-t border-white/5">
        <Container>
          <FadeIn>
            <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
              Popular Services
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Marriage Muhurat",
              "Grah Shanti Puja",
              "Gemstone Recommendation",
            ].map((service, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-[#0f172a] p-6 rounded-2xl border border-yellow-400/10 hover:border-yellow-400/40 hover:scale-105 transition">
                  <h3 className="text-lg font-semibold mb-2">{service}</h3>
                  <p className="text-gray-400 text-sm">
                    Professional Vedic guidance with full विधि.
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* 💬 TESTIMONIALS */}
      <section className="py-20 border-t border-white/5">
        <Container>
          <FadeIn>
            <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
              What Clients Say
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Very accurate guidance. Highly recommended!",
              "Best pandit ji in Pune. Very helpful.",
              "Gemstone suggestion worked very well.",
            ].map((text, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-[#0f172a] p-6 rounded-2xl border border-white/5">
                  <p className="text-gray-300">“{text}”</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ❓ FAQ */}
      <section className="py-20 border-t border-white/5">
        <Container>
          <FadeIn>
            <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
              Frequently Asked Questions
            </h2>
          </FadeIn>

          <FadeIn>
            <div className="max-w-4xl mx-auto bg-[#0f172a] p-6 rounded-xl">
              <h4 className="font-semibold mb-2">
                How accurate is the prediction?
              </h4>
              <p className="text-gray-400 text-sm">
                Predictions are based on authentic Vedic astrology
                principles and years of experience.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* 🚀 FINAL CTA */}
      <section className="py-20 border-t border-white/5 text-center">
        <Container>
          <FadeIn>
            <h2 className="text-4xl font-bold text-yellow-400 mb-6">
              Ready to Get Guidance?
            </h2>

            <Link
              to="/book"
              className="inline-block bg-yellow-400 text-black px-10 py-4 rounded-xl font-bold hover:bg-yellow-300 transition"
            >
              Book Your Consultation
            </Link>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}