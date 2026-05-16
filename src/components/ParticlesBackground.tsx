import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

function ParticlesBackground() {

  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}

      options={{
        fullScreen: false,

        background: {
          color: {
            value: "#020617",
          },
        },

        fpsLimit: 60,

        particles: {

          color: {
            value: "#00d9ff",
          },

          links: {
            color: "#00d9ff",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },

          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "bounce",
            },
          },

          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 60,
          },

          opacity: {
            value: 0.3,
          },

          shape: {
            type: "circle",
          },

          size: {
            value: {
              min: 1,
              max: 3,
            },
          },

        },

        detectRetina: true,
      }}

      className="absolute inset-0"
    />
  );
}

export default ParticlesBackground;