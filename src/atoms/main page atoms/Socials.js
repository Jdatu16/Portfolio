import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { darkTheme } from "../../components/Themes";
import { Facebook, Github } from "../../constants";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2.7rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }

  @media only screen and (max-width: 600px) {
    left: 1rem;
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.toggled === "closed" ? "#000000" : "#FCF6F4"};
`;

const SocialNavlink = styled(NavLink)`
  & > :first-child {
    transition: ease 0.3s;
    color: ${(props) => (props.toggled === "closed" ? "#000000" : "#FCF6F4")};
  }
  &:hover :first-child {
    transform: translateX(10px);
  }
`;

export const Socials = ({ toggled, theme }) => {
  return (
    <Icons>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <SocialNavlink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://github.com/Jdatu16" }}
        >
          <Github
            width={25}
            height={25}
            fill={toggled === "closed" ? darkTheme.body : darkTheme.text}
          />
        </SocialNavlink>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <SocialNavlink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://www.facebook.com/juba.datunashvili" }}
        >
          <Facebook
            width={25}
            height={25}
            fill={toggled === "closed" ? darkTheme.body : darkTheme.text}
          />
        </SocialNavlink>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <SocialNavlink
          toggled={toggled}
          style={{ color: "inherit", fontSize: "25px" }}
          target="_blank"
          to={{
            pathname:
              "https://www.linkedin.com/in/juba-datunaishvili-301093207/",
          }}
        >
          <i className="fab fa-linkedin" />
        </SocialNavlink>
      </motion.div>
      <Line
        theme={theme}
        initial={{ height: 0 }}
        animate={{ height: "8rem" }}
        transition={{ type: "spring", duration: 1, delay: 0.8 }}
        toggled={toggled}
      />
    </Icons>
  );
};
