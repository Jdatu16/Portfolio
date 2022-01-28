import styled from "styled-components";

export const BackgroundLetterContainer = styled.h1`
  opacity: 0.1;
  position: fixed;
  font-size: calc(1rem + 20vw);
  color: white;
  z-index: 0;
  top: ${(props) => props.top};
  ${(props) => props.side}: ${(props) => props.right};
  @media only screen and (min-width: 1024px) {
    font-size: 13rem;
  }
  text-shadow: 1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191,
    1px 4px 1px #919191, 1px 5px 1px #919191, 1px 6px 1px #919191,
    1px 7px 1px #919191, 1px 8px 1px #919191, 1px 9px 1px #919191,
    1px 10px 1px #919191, 1px 18px 6px rgba(16, 16, 16, 0.4),
    1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgba(16, 16, 16, 0.2),
    1px 30px 60px rgba(16, 16, 16, 0.4);
`;
export const BackgroundLetter = ({ top, side, right, text }) => {
  return (
    <BackgroundLetterContainer side={side} top={top} right={right}>
      {text}
    </BackgroundLetterContainer>
  );
};
