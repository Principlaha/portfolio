import Particles from "react-particles";
import particlesConfig from "./config/particle-config";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  const particlesLoaded = (container) => {};

  return (
    <Particles
      style="position: fixed"
      height="95%"
      width="95%"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      params={particlesConfig}
    />
  );
};

export default ParticleBackground;
