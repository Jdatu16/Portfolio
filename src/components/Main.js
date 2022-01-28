import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  PowerButton,
  LogoComponent,
  Socials,
  SendMail,
  ToProjectsButton,
  ToAboutButton,
  MainPageContent,
  DarkDiv,
  Intro,
} from "../atoms/";

const MainContainer = styled(motion.div)`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

export const Main = () => {
  const [toggled, setToggled] = useState("closed");
  const [newPage, setNewPage] = useState(false);
  return (
    <MainContainer
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { type: "tween", duration: 1.5, delay: 0.1 },
      }}
      exit={
        newPage
          ? { x: "100vw", transition: { type: "tween", duration: 0.8 } }
          : { x: "-100vw", transition: { type: "tween", duration: 0.8 } }
      }
    >
      <Container>
        <DarkDiv toggled={toggled} />
        <PowerButton />
        <LogoComponent toggled={toggled} />
        <Socials toggled={toggled} />
        <MainPageContent toggled={toggled} setToggled={setToggled} />
        <SendMail />
        <ToProjectsButton />
        <ToAboutButton setNewPage={setNewPage} toggled={toggled} />
        {/* <BottomBarButtons toggled={toggled} /> */}
        {toggled === "active" && <Intro toggled={toggled} />}
      </Container>
    </MainContainer>
  );
};
