import { motion } from "framer-motion";
import styled from "styled-components";
import { ABOUT_PATH, MY_SKILLS_PATH } from "../../constants";

const BottomBar = styled.div`
  color: ${(props) => props.theme.text};
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;
const MySkillsNavlink = styled(motion.NavLink)`
  color: ${(props) =>
    props.toggled === "closed" ? props.theme.text : props.theme.body};
  text-decoration: none;
  z-index: 1;
`;
const AboutNavlink = styled(motion.NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;

export const BottomBarButtons = ({ toggled }) => {
  return (
    <BottomBar>
      <MySkillsNavlink
        initial={{ y: "10vh" }}
        animate={{ y: "0" }}
        transition={{ type: "spring", duration: 1, delay: 0.8 }}
        toggled={toggled}
        to={MY_SKILLS_PATH}
      >
        <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          My Skills
        </motion.h2>
      </MySkillsNavlink>
      <AboutNavlink
        initial={{ y: "10vh" }}
        animate={{ y: "0" }}
        transition={{ type: "spring", duration: 1, delay: 0.8 }}
        to={ABOUT_PATH}
      >
        <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          About
        </motion.h2>
      </AboutNavlink>
    </BottomBar>
  );
};
