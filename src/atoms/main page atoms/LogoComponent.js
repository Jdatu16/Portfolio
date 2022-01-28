import { motion } from "framer-motion";
import styled from "styled-components";

const Logo = styled(motion.h1)`
  display: inline-block;
  color: ${(props) => (props.toggled === "closed" ? "#000000" : "#FCF6F4")};
  font-family: "Pacifico", cursive;

  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;

  cursor: default;

  @media only screen and (max-width: 600px) {
    left: 1rem;
    font-size: calc(0.6rem + 3vw);
  }
`;

export const LogoComponent = ({ toggled }) => {
  return (
    <Logo
      initial={{ y: "-10vh" }}
      animate={{ y: "0" }}
      transition={{ type: "spring", duration: 1, delay: 0.8 }}
      toggled={toggled}
    >
      JD
    </Logo>
  );
};
