import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Github } from "../../constants";

const ProjectContainer = styled.li`
  width: 16rem;
  height: 40vh;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 1.5rem 2rem;
  margin-right: 3rem;
  border-radius: 0 50px 0 50px;
  border: solid 1px ${(props) => props.theme.body};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.2s ease;
  @media only screen and (max-width: 424px) {
    width: 12rem;
  }
  @media only screen and (max-width: 344px) {
    width: 10rem;
  }
  &:hover {
    color: ${(props) => props.theme.text};
    background-color: transparent;
    border: solid 1px ${(props) => props.theme.text};
  }
`;

const ProjectName = styled.h2`
  font-size: calc(1em + 0.5vw);
`;
const ProjectDescription = styled.h2`
  font-size: calc(0.8em + 0.3vw);
  font-family: "Karla", sans-serif;
  font-weight: 500;
`;
const ProjectStacks = styled.div`
  border-top: 2px solid ${(props) => props.theme.body};
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0 1rem;
  ${ProjectContainer}:hover & {
    border-top: 2px solid ${(props) => props.theme.text};
  }
`;
const SingleStack = styled.span`
  font-size: calc(0.8em + 0.3vw);
`;

const ProjectLinks = styled.div`
  display: flex;
  justify-content: space-between;
`;
const LiveLink = styled(NavLink)`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  text-decoration: none;
  padding: 0.5rem calc(2rem + 2vw);
  border-radius: 0 0 0 50px;
  font-size: calc(1em + 0.5vw);

  ${ProjectContainer}:hover & {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }
`;

const GithubLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  ${ProjectContainer}:hover & {
    & > * {
      fill: ${(props) => props.theme.text};
    }
  }
`;

export const SingleProject = ({ data }) => {
  const { id, name, description, github, live, stacks } = data;

  return (
    <ProjectContainer key={id}>
      <ProjectName>{name}</ProjectName>
      <ProjectDescription>{description}</ProjectDescription>
      <ProjectStacks>
        {stacks.map((stack, id) => {
          return <SingleStack key={id}>#{stack}</SingleStack>;
        })}
      </ProjectStacks>
      <ProjectLinks>
        <LiveLink to={{ pathname: `${live}` }} target="_blank">
          Visit
        </LiveLink>
        <GithubLink to={{ pathname: `${github}` }} target="_blank">
          <Github width={30} height={30} />
        </GithubLink>
      </ProjectLinks>
    </ProjectContainer>
  );
};
