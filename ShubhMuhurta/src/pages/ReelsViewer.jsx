import { useState } from "react";

export default function ReelsViewer({ videos }) {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((p) => (p + 1) % videos.length);
  };

  const prev = () => {
    setCurrent((p) => (p - 1 + videos.length) % videos.length);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      {/* video */}
      <video
        key={videos[current]}
        src={videos[current]}
        className="h-full max-h-screen object-contain"
        autoPlay
        controls
      />

      {/* controls */}
      <button
        onClick={prev}
        className="absolute left-4 text-white text-4xl"
      >
        ⬆
      </button>

      <button
        onClick={next}
        className="absolute right-4 text-white text-4xl"
      >
        ⬇
      </button>
    </div>
  );
}