import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { PROJECTS_PATH } from "../../constants";

const ProjectsNavlink = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  transform: rotate(90deg) translate(-50%, -50%);
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;

  @media only screen and (max-width: 600px) {
    right: 2vw;
    h2 {
      font-size: calc(0.6rem + 3vw);
    }
  }
`;

export const ToProjectsButton = () => {
  return (
    <ProjectsNavlink to={PROJECTS_PATH}>
      <motion.h2
        initial={{ y: "-12vw" }}
        animate={{
          y: 0,
          transition: { type: "spring", duration: 1, delay: 1 },
        }}
        whileHover={{
          scale: 1.1,
          transition: { type: "spring", duration: 0.6 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        Projects
      </motion.h2>
    </ProjectsNavlink>
  );
};
