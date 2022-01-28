import styled, { keyframes } from "styled-components";
import { YinYang } from "../../constants/";

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.toggled === "closed" ? "50%" : "85%")};
  left: ${(props) => (props.toggled === "closed" ? "50%" : "92%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  & > :last-child {
    padding-top: 1rem;
    display: ${(props) =>
      props.toggled === "closed" ? "iniline-block" : "none"};
  }
  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }

  @media only screen and (max-width: 600px) {
    left: ${(props) => (props.toggled === "closed" ? "50%" : "88%")};
    top: ${(props) => (props.toggled === "closed" ? "50%" : "90%")};
  }
  @media only screen and (max-width: 430px) {
    left: ${(props) => (props.toggled === "closed" ? "50%" : "82%")};
    top: ${(props) => (props.toggled === "closed" ? "50%" : "90%")};
  }
`;

export const MainPageContent = ({ setToggled, toggled }) => {
  return (
    <Center toggled={toggled}>
      <YinYang
        onClick={() =>
          setToggled((prev) => {
            if (prev === "closed") return "active";
            return "closed";
          })
        }
        width={toggled === "closed" ? 150 : 100}
        height={toggled === "closed" ? 150 : 100}
        fill="currentColor"
      />
      <span>Click Here</span>
    </Center>
  );
};
