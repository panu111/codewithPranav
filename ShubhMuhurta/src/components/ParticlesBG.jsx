import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBG() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: { value: 40 },
          color: { value: "#facc15" },
          links: {
            enable: true,
            color: "#facc15",
            opacity: 0.2,
          },
          move: { enable: true, speed: 1 },
          opacity: { value: 0.3 },
          size: { value: 2 },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
}