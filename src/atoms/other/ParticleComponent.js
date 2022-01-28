import styled from "styled-components";
import Particles from "react-tsparticles";

// particle file

import configDark from "../../config/particlesjs-config.json";

const ParticleContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`;

export const ParticleComponent = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <ParticleContainer>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={configDark}
      />
      );
    </ParticleContainer>
  );
};
