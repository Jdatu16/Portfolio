import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { HOME_PATH } from "../../constants";
import { useLocation } from "react-router-dom";

const Power = styled(motion.button)`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);

  background-color: #fcf6f4;
  padding: 0.3rem;
  border-radius: 50%;
  border: 1px solid #000;
  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  cursor: pointer;
  &:hover {
    background-color: rgba(245, 230, 66, 0.4);
    box-shadow: 0 0 8px 6px rgba(245, 230, 66, 0.2);
  }

  & > *:first-child {
    text-decoration: none;
    color: inherit;
  }
  .home-button {
    font-size: 25px;
  }
  @media only screen and (max-width: 600px) {
    width: calc(1.5rem + 3vw);
    height: calc(1.5rem + 3vw);
    .home-button {
      font-size: calc(0.6rem + 3vw);
    }
  }
`;

export const PowerButton = () => {
  const { pathname: place } = useLocation();

  return (
    <Power
      initial={{ y: "-12vh", x: "-50%" }}
      animate={{ y: "-0.2rem", x: "-50%" }}
      transition={{ type: "spring", duration: 1, delay: 0.8 }}
    >
      <NavLink
        onClick={(e) => (place === "/" ? e.preventDefault() : null)}
        to={HOME_PATH}
      >
        <i className="home-button fas fa-home"></i>
      </NavLink>
    </Power>
  );
};
