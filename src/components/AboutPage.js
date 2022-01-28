import styled, { keyframes, ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
import { darkTheme } from "./";
import {
  BackgroundLetter,
  LogoComponent,
  ParticleComponent,
  PowerButton,
  SendMail,
  Socials,
} from "../atoms";
import astronaut from "../assets/Images/spaceman.png";

const AboutContainer = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const float = keyframes`
0%{transform: translateY(-10px)}
50%{transform: translateY(15px) translateX(15px) rotate(1deg)}
100%{transform: translateY(-10px)}
`;

const Spaceman = styled(motion.div)`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  animation-delay: 5.3s;

  img {
    width: 100%;
    height: auto;
  }
`;

const AboutContent = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;

  display: flex;
  justtify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;

  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
  @media only screen and (max-width: 600px) {
    left: 50%;
    transform: translate(-50%, 0);
    height: 50vh;
  }
  @media only screen and (max-width: 400px) {
    font-size: calc(0.6rem + 0.8vw);
    padding: 1rem;
    height: 60vh;
  }
`;

export const AboutPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <AboutContainer
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { type: "tween", duration: 1.5, delay: 0.1 },
        }}
        exit={{ opacity: 0, transition: { type: "tween", duration: 0.8 } }}
      >
        <BackgroundLetter top="10%" right="50px" side="left" text="ABOUT" />
        <LogoComponent toggled={"active"} />
        <PowerButton />
        <SendMail />
        <Socials toggled={"active"} />
        <ParticleComponent theme="dark" />
        <AboutContent
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "tween", duration: 1.5, delay: 1 }}
        >
          I'm a hardworking and ambitious front-end (React) developer located in
          Georgia, who wants to learn as much as possible to enhance his skills
          as an individual and also as a team worker. I always welcome new
          challenges and opportunities, that help me overcome my limits.
          <br />
          <br />I think, that developing web designs is a new generation of arts
          and every developer should strive to create products they will be
          proud of later.
        </AboutContent>
        <Spaceman
          initial={{ y: "200vh", x: "60vw" }}
          animate={{ x: 0, y: "-10px" }}
          transition={{ type: "spring", duration: 5, delay: 1 }}
        >
          <img src={astronaut} alt="spaceman" />
        </Spaceman>
      </AboutContainer>
    </ThemeProvider>
  );
};
