import styled from "styled-components";

const DarkDivision = styled.div`
  position: absolute;
  top: 0;
  background-color: #000;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.toggled === "closed" ? "0%" : "50%")};
  height: ${(props) => (props.toggled === "closed" ? "0%" : "100%")};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;

export const DarkDiv = ({ toggled }) => {
  return <DarkDivision toggled={toggled} />;
};
