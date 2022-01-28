import styled from "styled-components";
import avatar from "../../assets/Images/img.png";
import { motion } from "framer-motion";

const Field = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 65vw;
  height: 55vh;
  display: flex;

  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};

  z-index: 1;
`;

const SubField = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  .avatar {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 90%;
    height: auto;
  }
  @media only screen and (max-width: 850px) {
    .avatar {
      width: 120%;
    }
  }
  @media only screen and (max-width: 600px) {
    .avatar {
      width: 150%;
    }
  }
  @media only screen and (max-width: 400px) {
    .avatar {
      width: 180%;
    }
  }
`;

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }

  @media only screen and (max-width: 600px) {
    padding: 1rem;
    h1 {
      font-size: 40px;
    }
    h3 {
      font-size: 25px;
    }
  }
`;

export const Intro = () => {
  return (
    <Field
      initial={{ height: 0 }}
      animate={{ height: "55vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubField>
        <Text>
          <h1>Hi,</h1>
          <h3>My name is Juba.</h3>
          <h6>I am a junior React Developer.</h6>
        </Text>
      </SubField>
      <SubField>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img className="avatar" src={avatar} alt="Avatar" />
        </motion.div>
      </SubField>
    </Field>
  );
};
