import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-[#020617]/70 border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link
          to="/"
          className="text-xl md:text-2xl font-bold text-yellow-400"
        >
          🔱 ShubhMuhurta
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium transition ${
                isActive(link.path)
                  ? "text-yellow-400"
                  : "text-gray-300 hover:text-yellow-400"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* CTA BUTTON */}
          <Link
            to="/book"
            className="bg-yellow-400 text-black px-5 py-2 rounded-xl font-semibold hover:bg-yellow-300 transition"
          >
            Book Now
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#020617] border-t border-white/5 px-4 pb-6">
          <div className="flex flex-col gap-4 mt-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`font-medium ${
                  isActive(link.path)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/book"
              onClick={() => setOpen(false)}
              className="bg-yellow-400 text-black px-5 py-2 rounded-xl font-semibold text-center"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}