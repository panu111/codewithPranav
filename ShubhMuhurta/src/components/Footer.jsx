import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-white/5 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
        
        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            🔱 ShubhMuhurta
          </h2>
          <p className="text-gray-400 text-sm">
            Trusted Jyotish services for marriage muhurat, grah shanti,
            kundli matching and Vedic rituals.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">
            Quick Links
          </h3>
          <div className="flex flex-col gap-2 text-gray-300">
            <Link to="/" className="hover:text-yellow-400">Home</Link>
            <Link to="/about" className="hover:text-yellow-400">About</Link>
            <Link to="/services" className="hover:text-yellow-400">Services</Link>
            <Link to="/gallery" className="hover:text-yellow-400">Gallery</Link>
            <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
          </div>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">
            Contact Info
          </h3>

          <div className="space-y-3 text-gray-300 text-sm">
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-yellow-400" />
              <span>+91 8460846342</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} className="text-yellow-400" />
              <span>jangamc369@gmail.com</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-yellow-400" />
              <span>Vadodara, Gujarat</span>
            </div>
          </div>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">
            Follow Us
          </h3>

          <div className="flex gap-4">
            <div className="p-2 rounded-lg bg-[#0f172a] hover:bg-yellow-400 hover:text-black transition cursor-pointer">
              <Facebook size={18} />
            </div>

            <div className="p-2 rounded-lg bg-[#0f172a] hover:bg-yellow-400 hover:text-black transition cursor-pointer">
              <Instagram size={18} />
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/5 text-center py-4 text-gray-400 text-sm">
        © {new Date().getFullYear()} ShubhMuhurta. All rights reserved.
      </div>
    </footer>
  );
}