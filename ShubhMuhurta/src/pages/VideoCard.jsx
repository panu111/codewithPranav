import { useRef, useState } from "react";
import { Volume2, VolumeX, Maximize, Play, Pause, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoCard({ src, poster }) {
  const videoRef = useRef(null);
  const modalVideoRef = useRef(null);

  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [open, setOpen] = useState(false);

  // ▶️ Play / Pause
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(() => {});
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  // 🔇 Toggle mute
  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  // 🔊 Volume
  const handleVolumeChange = (e) => {
    const vol = Number(e.target.value);
    const video = videoRef.current;
    if (!video) return;

    video.volume = vol;
    setVolume(vol);

    if (vol > 0) {
      video.muted = false;
      setIsMuted(false);
    }
  };

  // ⛶ Fullscreen
  const handleFullscreen = () => {
    const video = videoRef.current;
    video?.requestFullscreen?.();
  };

  // 🎬 Hover autoplay
  const handleMouseEnter = () => {
    videoRef.current?.play().catch(() => {});
    setIsPlaying(true);
  };

  const handleMouseLeave = () => {
    videoRef.current?.pause();
    setIsPlaying(false);
  };

  return (
    <>
      {/* 🎥 Card */}
      <div
        className="group relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-xl transition duration-500 hover:scale-[1.03] hover:shadow-yellow-400/20 hover:shadow-2xl cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => setOpen(true)}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          preload="none"
          playsInline
          muted={isMuted}
          poster={poster}
        >
          <source src={src} type="video/mp4" />
        </video>

        {/* gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition" />

        {/* play icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/60 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition">
            {isPlaying ? (
              <Pause className="text-white" size={30} />
            ) : (
              <Play className="text-white" size={30} />
            )}
          </div>
        </div>
      </div>

      {/* 🪟 Lightbox */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-4xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute -top-10 right-0 text-white"
              >
                <X size={28} />
              </button>

              <video
                ref={modalVideoRef}
                className="w-full rounded-xl"
                controls
                autoPlay
                playsInline
              >
                <source src={src} type="video/mp4" />
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}