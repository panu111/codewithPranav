import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

// Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import ProtectedRoute from "./components/ProtectedRoute";
import ParticlesBG from "./components/ParticlesBG";
import PremiumCursor from "./components/PrimiumCursor";

// Public Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import BookAppointment from "./pages/BookAppointment";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";

// Admin Pages
import AdminLogin from "./pages/admin/AdminLogin";
import Dashboard from "./pages/admin/Dashboard";
import BookingCalendar from "./pages/admin/BookingCalendar";
import AdminBookings from "./pages/AdminBookings";

// Reels Viewer
import ReelsViewer from "./pages/ReelsViewer";

function App() {

  const [showReels, setShowReels] = useState(false);

  const reelsVideos = [
    "/videos/pooja-video.mp4",
    "/videos/pooja-video2.mp4",
  ];

  return (
    <BrowserRouter>

      <div className="min-h-screen bg-[#020617] text-white flex flex-col relative overflow-x-hidden">

        {/* Premium Cursor */}
        <PremiumCursor />

        {/* Reels Viewer */}
        {showReels && (
          <ReelsViewer
            videos={reelsVideos}
            onClose={() => setShowReels(false)}
          />
        )}

        {/* Glow Background */}
        <div className="pointer-events-none fixed inset-0 -z-20">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-green-400/10 rounded-full blur-[120px]" />
        </div>

        {/* Particle Background */}
        <div className="fixed inset-0 -z-10">
          <ParticlesBG />
        </div>

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow relative z-10">

          <Routes>

            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/book" element={<BookAppointment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />

            <Route
              path="/gallery"
              element={<Gallery openReels={() => setShowReels(true)} />}
            />

            {/* Admin Login */}
            <Route path="/admin-login" element={<AdminLogin />} />

            {/* Protected Admin Routes */}
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/bookings"
              element={
                <ProtectedRoute>
                  <AdminBookings />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/calendar"
              element={
                <ProtectedRoute>
                  <BookingCalendar />
                </ProtectedRoute>
              }
            />

            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />

          </Routes>

        </main>

        {/* WhatsApp Button */}
        <WhatsAppFloat />

        {/* Footer */}
        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;

