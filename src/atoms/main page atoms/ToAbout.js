import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ABOUT_PATH } from "../../constants";

const ContactNavlink = styled(NavLink)`
  color: ${(props) =>
    props.toggled === "closed" ? props.theme.text : props.theme.body};
  position: absolute;
  top: 47%;
  left: 3.4rem;
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;

  @media only screen and (max-width: 600px) {
    left: 2rem;
    h2 {
      font-size: calc(0.6rem + 3vw);
    }
  }
`;

export const ToAboutButton = ({ setNewPage, toggled }) => {
  return (
    <ContactNavlink
      onClick={() => setNewPage(true)}
      toggled={toggled}
      to={ABOUT_PATH}
    >
      <motion.h2
        initial={{ y: "-10vh" }}
        animate={{
          y: "0",
          transition: { type: "spring", duration: 1, delay: 1 },
        }}
        whileHover={{
          scale: 1.1,
          transition: { type: "spring", duration: 0.6 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        About
      </motion.h2>
    </ContactNavlink>
  );
};
