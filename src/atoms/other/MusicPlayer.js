import { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

import music from "../../assets/audio/audio.mp3";

const MusicContainer = styled.div`
  display: flex;
  cursor: pointer;
  position: fixed;
  left: 8rem;
  top: 3rem;
  z-index: 10;
  /* music animation */
  & > *:nth-child(1) {
    animation-delay: 0.2s;
  }
  & > *:nth-child(2) {
    animation-delay: 0.3s;
  }
  & > *:nth-child(3) {
    animation-delay: 0.4s;
  }
  & > *:nth-child(4) {
    animation-delay: 0.5s;
  }
  & > *:nth-child(5) {
    animation-delay: 0.8s;
  }

  @media only screen and (max-width: 600px) {
    top: 6rem;
    left: 1rem;
  } ;
`;

const play = keyframes`
0%{
    transform:scaleY(1);
}
50%{
    transform:scaleY(2);
}
100%{
    transform:scaleY(1);
}
`;

const Line = styled.span`
  background: ${(props) => props.theme.text};
  border: 1px solid ${(props) => props.theme.body};
  animation: ${play} 1s ease infinite;
  animation-play-state: ${(props) => (props.playMusic ? "running" : "paused")};
  height: 1rem;
  width: 2px;
  margin: 0 0.1rem;
  @media only screen and (max-width: 600px) {
    height: 0.5rem;
    width: 1.5px;
  } ;
`;

export const MusicPlayer = () => {
  const [playMusic, setPlayMusic] = useState(false);
  const ref = useRef(null);

  const handleClick = () => {
    setPlayMusic((prev) => !prev);

    if (!playMusic) return ref.current.play();

    ref.current.pause();
  };

  return (
    <MusicContainer onClick={() => handleClick()}>
      <Line playMusic={playMusic} />
      <Line playMusic={playMusic} />
      <Line playMusic={playMusic} />
      <Line playMusic={playMusic} />
      <Line playMusic={playMusic} />
      <audio src={music} ref={ref} loop></audio>
    </MusicContainer>
  );
};
