import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const ContactNavlink = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: fixed;
  top: 2rem;
  right: calc(1rem + 3vw);
  text-decoration: none;
  z-index: 1;
  font-size: 1.4rem;

  @media only screen and (max-width: 600px) {
    right: 4vw;
    h2 {
      font-size: calc(0.6rem + 5vw);
    }
  }
`;

export const SendMail = () => {
  return (
    <ContactNavlink
      target="_blank"
      to={{ pathname: "mailto:jubadatunaishvili@gmail.com" }}
    >
      <motion.h2
        initial={{ y: "-10vh" }}
        animate={{
          y: "0",
          transition: { type: "spring", duration: 1, delay: 0.8 },
        }}
        whileHover={{
          scale: 1.1,
          transition: { type: "spring", duration: 0.5 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <i className="fas fa-envelope"></i>
      </motion.h2>
    </ContactNavlink>
  );
};
