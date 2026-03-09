import img1 from "../assets/gallery/pooja1.jpg";
import img2 from "../assets/gallery/pooja2.jpg";
import img3 from "../assets/gallery/pooja3.jpg";
import img4 from "../assets/gallery/pooja4.jpg";
import img5 from "../assets/gallery/pooja5.jpg";
import img6 from "../assets/gallery/pooja6.jpg";

import PageWrapper from "../components/PageWrapper";
import { useEffect, useState } from "react";

import VideoCard from "./VideoCard";
import ImageCard from "./ImageCard";
import SkeletonCard from "../components/SkeletonCard";

export default function Gallery({ openReels }) {
  // 🎬 loading state for skeleton
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  // 🖼 images
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
  ];

  // 🎥 videos (from public/videos)
  const videos = [
    {
      src: "/videos/pooja-video.mp4",
      poster: "/gallery1.jpg",
    },
    {
      src: "/videos/pooja-video2.mp4",
      poster: "/gallery2.jpg",
    },
  ];

  return (
    <PageWrapper>
      <section className="min-h-screen bg-[#020617] text-white px-4 py-16">

        {/* 🔶 Title */}
        <h1 className="text-4xl font-bold text-yellow-400 text-center mb-6">
          Pooja Gallery
        </h1>

        {/* ================= IMAGES ================= */}
        <h2 className="text-2xl font-semibold text-yellow-400 text-center mb-8">
          Photo Gallery
        </h2>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {images.map((img, index) => (
            <ImageCard key={index} src={img} />
          ))}
        </div>

        {/* ================= VIDEOS ================= */}
        <h2 className="text-2xl font-semibold text-yellow-400 text-center mb-8">
          Video Gallery
        </h2>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))
            : videos.map((video, index) => (
              <VideoCard
                key={index}
                src={video.src}
                poster={video.poster}
              />
            ))}
        </div>

      </section>
    </PageWrapper>
  );
}