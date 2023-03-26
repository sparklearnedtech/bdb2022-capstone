import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { theme } from "./theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  background-color: ${theme.gold};
`;

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-image: url(${process.env.PUBLIC_URL}/images/bg1.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 2px;
  color: ${(props) =>
    props.color === theme.white ? theme.black : theme.white};
  background-color: ${(props) => props.color || theme.white};
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
  color: ${theme.black};
  text-shadow: 2px 2px 2px rgba(27, 27, 27, 0.5);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  text-align: center;
  margin-bottom: 50px;
  color: ${theme.black};
  font-size: 24px;
  line-height: 1.5;
  /* text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); */
`;

const LaunchButton = styled.button`
  background-color: ${theme.black};
  color: ${theme.white};
  border: none;
  border-radius: 20px;
  font-size: 24px;
  font-weight: bold;
  padding: 15px 30px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${theme.gold};
    color: ${theme.white};
    transform: scale(1.05);
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  color: ${theme.black};
  min-height: 40vh;
`;

const EmailLink = styled.a`
  color: ${theme.black};
  text-decoration: none;
  font-weight: bold;
  margin-top: 20px;
  transition: all 0.3s ease;

  &:hover {
    color: ${theme.gold};
    text-decoration: underline;
  }
`;

const Footer = styled.footer`
  background-color: ${theme.black};
  color: ${theme.white};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100%;
`;

const AboutUs = styled(Section)`
  background-color: ${theme.white};
  color: ${theme.black};
  background-image: url(${process.env.PUBLIC_URL}/images/bg2.jpg);
`;

const AboutUsTitle = styled(Title)`
  font-size: 48px;
  color: ${theme.black};
`;

const AboutUsDescription = styled.p`
  font-size: 24px;
  line-height: 1.5;
  margin-bottom: 40px;
  color: ${theme.black};
  text-align: center;
`;

// const StyledLink = styled.a`
//   color: ${theme.gold};
//   text-decoration: underline;

//   &:hover {
//     text-decoration: none;
//   }
// `;

const AboutStyledLink = styled.a`
  color: ${theme.black};
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;

const LearnMoreButton = styled.a`
  background-color: ${theme.gold};
  color: ${theme.black};
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${theme.yellow};
    color: ${theme.black};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const AboutUsImage = styled.img`
  border-radius: 50%;
  border: 4px solid ${theme.gold};
  width: 250px;
  height: 250px;
  object-fit: cover;
  margin: 0 auto;
  display: block;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const GithubButton = styled.a`
  background-color: ${theme.black};
  color: ${theme.white};
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${theme.yellow};
    color: ${theme.white};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const Homepage = () => {
  const history = useHistory();

  const handleLaunchAppClick = () => {
    history.push("/staking");
  };

  return (
    <Container>
      <Section>
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d12b1342-53e0-46b4-a64b-b420efb1d9d3/d6kpuve-c97567cf-518b-4b86-a271-5c89d88d22f7.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi9kMTJiMTM0Mi01M2UwLTQ2YjQtYTY0Yi1iNDIwZWZiMWQ5ZDMvZDZrcHV2ZS1jOTc1NjdjZi01MThiLTRiODYtYTI3MS01Yzg5ZDg4ZDIyZjcuZ2lmIn1dXX0.EzwtBSE7r22wILXInG4zh2jKGc2xPNzj3NFr5KJu0Ew"
          alt="Staking image"
          width="300"
          height="300"
        />

        <Title>Start staking your AST tokens today!</Title>
        <Content>
          Start earning rewards today by staking your AST tokens in my
          easy-to-use staking app. With high APY, regular rewards, and complete
          control over your tokens, you won't want to miss out on this
          opportunity to support this project while earning rewards. Simply
          click the "Launch App" button and begin staking now.
        </Content>
        <LaunchButton onClick={handleLaunchAppClick}>Launch App</LaunchButton>
      </Section>
      <AboutUs>
        <AboutUsTitle>About Me</AboutUsTitle>
        <AboutUsDescription>
          My name is Mat Ivan Arquero, and I am the creator of the AST staking
          app. I am a software engineer with experience in full-stack web
          development and blockchain technology. I am passionate about creating
          innovative solutions to complex problems.
        </AboutUsDescription>
        <AboutUsImage
          src="https://sparkswap.finance/images/Website/Team/Mat.jpg"
          alt="Mat Ivan Arquero"
        />
        <LearnMoreButton
          style={{ marginTop: "20px" }}
          href="https://www.linkedin.com/in/mat-ivan-arquero-311b15211/"
        >
          Learn more about me
        </LearnMoreButton>
        <GithubButton
          href="https://github.com/mativanarquero"
          style={{ marginTop: "20px" }}
        >
          View my GitHub profile
        </GithubButton>
      </AboutUs>
      <Contact>
        <h2>Got issues? I'm here to help</h2>
        <AboutUsDescription>
          If you have any questions about the AST staking app, please do not
          hesitate to contact me at{" "}
          <AboutStyledLink href="mailto:mativanarquero@gmail.com">
            mativanarquero@gmail.com.
          </AboutStyledLink>
        </AboutUsDescription>
      </Contact>
      <Footer>
        <p>&copy; 2023 AST Staking App. All rights reserved.</p>
      </Footer>
    </Container>
  );
};

export default Homepage;
