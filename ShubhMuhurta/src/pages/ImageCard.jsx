import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ImageCard({ src }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="group relative overflow-hidden rounded-2xl cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <img
          src={src}
          loading="lazy"
          alt=""
          className="w-full h-64 object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.img
              src={src}
              className="max-h-[90vh] rounded-xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className="absolute top-6 right-6 text-white"
              onClick={() => setOpen(false)}
            >
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}