import { useEffect } from "react";

export default function PremiumCursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className =
      "fixed w-4 h-4 bg-yellow-400 rounded-full pointer-events-none z-[9999] mix-blend-difference";
    document.body.appendChild(cursor);

    const move = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      cursor.remove();
    };
  }, []);

  return null;
}