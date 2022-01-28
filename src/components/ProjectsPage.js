import { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
import { darkTheme } from "./";
import {
  BackgroundLetter,
  LogoComponent,
  PowerButton,
  SendMail,
  SingleProject,
} from "../atoms";
import { projects, Wheel } from "../constants";

const ProjectsContainer = styled(motion.div)`
  background-color: ${(props) => props.theme.body};

  height: 220vh;
  position: relative;
  @media only screen and (max-width: 1200px) {
    height: 250vh;
  }
  @media only screen and (max-width: 1000px) {
    height: 300vh;
  }
  @media only screen and (max-width: 600px) {
    height: 320vh;
  }
  @media only screen and (max-width: 415px) {
    height: 280vh;
  }
`;

const ProjectsContent = styled(motion.ul)`
  position: fixed;

  top: 12rem;
  left: 5rem;
  height: 40vw;
  display: flex;

  @media only screen and (max-width: 424px) {
    left: 3rem;
  }
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;

export const ProjectsPage = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;

      return (yinyang.current.style.transform =
        "rotate(" + -window.pageYOffset + "deg)");
    };

    window.addEventListener("scroll", rotate);
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <ProjectsContainer
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { type: "tween", duration: 1.5, delay: 0.1 },
        }}
        exit={{ opacity: 0, transition: { type: "tween", duration: 0.8 } }}
      >
        <BackgroundLetter top="5%" right="30px" text="WORK" side="right" />
        <LogoComponent toggled={"active"} />
        <PowerButton />
        <SendMail />
        <ProjectsContent
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "tween", duration: 1.5, delay: 1 }}
        >
          {projects.map((val) => {
            return <SingleProject key={val.id} data={val} />;
          })}
        </ProjectsContent>
        <Rotate ref={yinyang}>
          <Wheel width={80} height={80} fill="#FCF6F4" />
        </Rotate>
      </ProjectsContainer>
    </ThemeProvider>
  );
};
