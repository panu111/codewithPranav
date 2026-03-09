import { useState } from "react";
import {
  Search,
  Sparkles,
  Home,
  HeartHandshake,
  Flame,
  Baby,
  Landmark,
  Orbit,
  Skull,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import FadeIn from "../components/FadeIn";
import GlassCard from "../components/GlassCard";
import lakshmiImg from "../assets/lakshmi-poojan.png";
import UdakshantiImg from "../assets/udak-shanti.jpeg";
import VastushantiImg from "../assets/vastu-shanti.png";
import SatynarayanImg from "../assets/satynarayan.png";
import PitrudoshImg from "../assets/pitrudosh-shanti.png";
import MuratiImg from "../assets/murati.png";
import ShardhImg from "../assets/shardh.png";
import DurgaImg from "../assets/durga.png";
import KalsarpImg from "../assets/kalsarpimg.jpeg"
import GaneshPoojaImg from "../assets/ganeshpoojaimg.png";
import NavgrahImg from "../assets/navgrahimg.png";
import LaganImg from "../assets/laganimg.png";
import JapImg from "../assets/japimg.png";
import NamkaranImg from "../assets/namkaranimg.png";


/* 🪔 SERVICES DATA — FULL WITH IMAGES */
const services = [
  {
    name: "Ganesh Pooja",
    marathi: "श्री गणेश पूजा",
    price: "₹700 /साहित्यासह",
    category: "Pooja",
    icon: Sparkles,
    image: GaneshPoojaImg,
    desc: "Removes obstacles and brings success & positive energy.",
  },
  {
    name: "Griha Pravesh",
    marathi: "गृह प्रवेश",
    price: "₹2100 /साहित्यासह",
    category: "Pooja",
    icon: Home,
    image: GaneshPoojaImg,
    desc: "Auspicious home entry ceremony with full Vedic vidhi.",
  },
  {
    name: "Satyanarayan Pooja",
    marathi: "सत्यनारायण पूजा",
    price: "₹800 /साहित्यासह",
    category: "Pooja",
    icon: Sparkles,
    image: SatynarayanImg,
    desc: "Sacred Vishnu puja for peace and prosperity.",
  },
  {
    name: "Vastu Shanti",
    marathi: "वास्तु शांती",
    price: "₹1500 /साहित्यासह",
    category: "Shanti",
    icon: Flame,
    image: VastushantiImg,
    desc: "Removes vastu dosh and brings positive energy.",
  },
  {
    name: "Lagan Vidhi",
    marathi: "लग्न विधी",
    price: "₹5000 /साहित्यासह",
    category: "Marriage",
    icon: HeartHandshake,
    image: LaganImg,
    desc: "Complete Vedic wedding ceremony with proper mantras.",
  },
  {
    name: "Naamkaran",
    marathi: "नामकरण विधी",
    price: "₹700 /साहित्यासह",
    category: "Pooja",
    icon: Baby,
    image: NamkaranImg,
    desc: "Traditional naming ceremony for newborn baby.",
  },
  {
    name: "Murti Pran Pratishtha",
    marathi: "मूर्ती प्राणप्रतिष्ठा",
    price: "₹2500 /साहित्यासह",
    category: "Pooja",
    icon: Landmark,
    image: MuratiImg,
    desc: "Sacred idol energizing and consecration ritual.",
  },
  {
    name: "Navgraha Shanti",
    marathi: "नवग्रह शांती",
    price: "₹1800 /साहित्यासह",
    category: "Shanti",
    icon: Orbit,
    image: NavgrahImg,
    desc: "Reduces planetary dosh and improves stability.",
  },
  {
    name: "Mahamrityunjay Jap",
    marathi: "महामृत्युंजय जप",
    price: "₹1100 /साहित्यासह",
    category: "Jap",
    icon: Sparkles,
    image: JapImg,
    desc: "Powerful mantra jap for health and long life.",
  },
  {
    name: "Pitru Dosh Shanti",
    marathi: "पितृ दोष शांती",
    price: "₹2200 /साहित्यासह",
    category: "Shraddha",
    icon: Skull,
    image: PitrudoshImg,
    desc: "Removes pitru dosh and brings ancestral peace.",
  },
  {
    name: "Kalsarp Shanti",
    marathi: "कालसर्प शांती",
    price: "₹2500 /साहित्यासह",
    category: "Shanti",
    icon: Orbit,
    image: KalsarpImg,
    desc: "Effective Kalsarp dosh nivaran puja.",
  },
  {
    name: "Shraddha Vidhi",
    marathi: "दहावा / वर्षश्राद्ध",
    price: "₹1500 /साहित्यासह",
    category: "Shraddha",
    icon: Skull,
    image: ShardhImg,
    desc: "Traditional Shraddha rituals with full vidhi.",
  },
  {
    name: "Durga Saptashati Path",
    marathi: "दुर्गा सप्तशती पाठ",
    price: "₹1300 /साहित्यासह",
    category: "Jap",
    icon: Flame,
    image: DurgaImg,
    desc: "Sacred Durga path for protection and strength.",
  },
{
  name: "Udak Shanti",
  marathi: "उदक शांती",
  price: "₹1200 /साहित्यासह",
  category: "Shanti",
  icon: Flame,
  image: UdakshantiImg,
  desc: "Traditional Udak Shanti ritual performed for purification, peace and removal of negative energies.",
},
{
  name: "Lakshmi Poojan",
  marathi: "लक्ष्मी पूजन",
  price: "₹3500  /साहित्यासह",
  category: "Pooja",
  icon: Sparkles,
  image: lakshmiImg,

  desc: "Auspicious Lakshmi Poojan for wealth, prosperity and positive energy in home or business.",
},
];

/* 🎯 CATEGORY LIST */
const categories = ["All", "Pooja", "Marriage", "Shanti", "Jap", "Shraddha"];

export default function Services() {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = services.filter((service) => {
    const matchCategory =
      active === "All" ||
      service.category.toLowerCase() === active.toLowerCase();

    const matchSearch =
      service.name.toLowerCase().includes(search.toLowerCase()) ||
      service.marathi.includes(search);

    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen py-20">
      <Container>
        {/* 🔱 Heading */}
        <FadeIn>
          <h1 className="text-4xl font-bold text-yellow-400 text-center mb-10">
            Our Jyotish Services
          </h1>
        </FadeIn>

        {/* 🔍 Search */}
        <FadeIn>
          <GlassCard className="mb-8">
            <div className="flex items-center gap-3">
              <Search size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search service / सेवा शोधा..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent outline-none text-white"
              />
            </div>
          </GlassCard>
        </FadeIn>

        {/* 🧭 Category Tabs */}
        <FadeIn>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                  active === cat
                    ? "bg-yellow-400 text-black"
                    : "bg-[#0f172a] text-gray-300 hover:bg-yellow-400 hover:text-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* 🪔 SMALL PREMIUM GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map((service, i) => {
            const Icon = service.icon;
            return (
              <FadeIn key={i} delay={i * 0.03}>
                <GlassCard className="p-4">
                  {/* image */}
                  <img
                    src={service.image}
                    alt={service.name}
className="w-full h-28 object-cover rounded-lg mb-3 transition-transform duration-500 group-hover:scale-110"                  />

                  {/* title */}
                  <div className="flex items-center gap-2 mb-1">
                    <Icon size={16} className="text-yellow-400" />
                    <h3 className="text-sm font-semibold">
                      {service.name}
                    </h3>
                  </div>

                  {/* marathi */}
                  <p className="marathi text-yellow-300 text-xs mb-2">
                    {service.marathi}
                  </p>

                  {/* desc */}
                  <p className="text-gray-400 text-xs mb-2 line-clamp-2">
                    {service.desc}
                  </p>

                  {/* price */}
                  <p className="text-yellow-400 font-bold text-sm mb-2">
                    {service.price}
                  </p>

                  {/* button */}
                  <Link
                    to="/book"
                    className="block text-center bg-yellow-400 text-black py-1.5 rounded-lg text-sm font-semibold hover:bg-yellow-300 transition"
                  >
                    Book
                  </Link>
                </GlassCard>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </div>
  );
}