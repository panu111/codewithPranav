import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, Suspense, lazy } from "react";

// Layout Components (NO lazy for these)
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import ProtectedRoute from "./components/ProtectedRoute";
import ParticlesBG from "./components/ParticlesBG";
import PremiumCursor from "./components/PrimiumCursor";

// Lazy Loaded Pages
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const BookAppointment = lazy(() => import("./pages/BookAppointment"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const Gallery = lazy(() => import("./pages/Gallery"));
const NotFound = lazy(() => import("./pages/NotFound"));

const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const BookingCalendar = lazy(() => import("./pages/admin/BookingCalendar"));
const AdminBookings = lazy(() => import("./pages/AdminBookings"));

const ReelsViewer = lazy(() => import("./pages/ReelsViewer"));

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
          <Suspense fallback={null}>
            <ReelsViewer
              videos={reelsVideos}
              onClose={() => setShowReels(false)}
            />
          </Suspense>
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

          <Suspense
            fallback={
              <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-yellow-400"></div>
              </div>
            }
          >
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
          </Suspense>

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