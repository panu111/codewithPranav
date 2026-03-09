import Container from "../components/Container";
import FadeIn from "../components/FadeIn";
import GlassCard from "../components/GlassCard";
import { Award, Users, Sparkles, BookOpen } from "lucide-react";
import Guruji2Img from "../assets/guruji2img.png";

export default function About() {
  return (
    <div className="min-h-screen py-16">
      <Container>

        {/* 🔱 HERO */}
        <FadeIn>
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
              About Pandit Ji
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Trusted Jyotish & Vedic Ritual Expert serving families with
              authentic traditions and accurate guidance.
            </p>
          </div>
        </FadeIn>

        {/* 👤 PROFILE SECTION */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">

          <FadeIn>
            <img
              src={Guruji2Img}
              alt="Pandit Ji"
              className="w-full max-w-xs mx-auto rounded-3xl border border-yellow-400/30 shadow-2xl hover:scale-105 transition duration-500"
            />
          </FadeIn>

          <FadeIn delay={0.1}>
            <GlassCard className="p-8">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">
                🙏 Pandit [Dr.Chetan Rajaram Jangam]
              </h2>

              <p className="text-gray-300 mb-4 leading-relaxed">
                With more than <span className="text-yellow-400 font-semibold">15+ years</span> of
                experience in Vedic astrology and karmakand, Pandit Ji has helped
                hundreds of families perform rituals with proper विधि and
                spiritual authenticity.
              </p>

              <p className="text-gray-400 text-sm leading-relaxed">
                Special expertise in marriage ceremonies, vastu shanti,
                satyanarayan pooja, grah shanti and personalized jyotish
                consultation.
              </p>

              <p className="marathi text-yellow-300 mt-4">
                विश्वास • परंपरा • अचूक मार्गदर्शन
              </p>
            </GlassCard>
          </FadeIn>
        </div>

        {/* 📊 STATS */}
        <FadeIn>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { icon: Users, label: "Happy Clients", value: "500+" },
              { icon: Award, label: "Years Experience", value: "15+" },
              { icon: Sparkles, label: "Pooja Completed", value: "800+" },
              { icon: BookOpen, label: "Ritual Expertise", value: "20+" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <GlassCard key={i} className="text-center p-6">
                  <Icon className="mx-auto text-yellow-400 mb-2" size={28} />
                  <h3 className="text-2xl font-bold text-yellow-400">
                    {item.value}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.label}</p>
                </GlassCard>
              );
            })}
          </div>
        </FadeIn>

        {/* ⭐ WHY CHOOSE */}
        <FadeIn>
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-10">
            Why Choose Us
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            {
              title: "Authentic Vedic Vidhi",
              desc: "All rituals performed strictly according to traditional Vedic methods.",
            },
            {
              title: "Accurate Jyotish Guidance",
              desc: "Personalized horoscope analysis with practical remedies.",
            },
            {
              title: "Trusted by Families",
              desc: "Serving happy clients across Pune and nearby areas.",
            },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <GlassCard className="p-6 text-center">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>

        {/* 🕉️ MISSION */}
        <FadeIn>
          <GlassCard className="p-10 text-center">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              Our Mission
            </h2>

            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our mission is to preserve the purity of Vedic traditions while
              making authentic Jyotish and Karmakand services easily accessible
              to modern families through trusted guidance and digital booking.
            </p>

            <p className="marathi text-yellow-300 mt-4">
              धर्म • परंपरा • सेवा
            </p>
          </GlassCard>
        </FadeIn>

      </Container>
    </div>
  );
}