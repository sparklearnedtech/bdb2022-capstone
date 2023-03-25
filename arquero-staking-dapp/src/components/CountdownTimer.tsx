import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { theme } from './theme';

const CountdownTimerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  color: ${theme.black};
  background-color: ${theme.gold};
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  margin-bottom: 20px;
`;

const TimeLeft = styled.span`
  display: inline-block;
  margin: 0 10px;
`;

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<number>(
    Math.floor((new Date("2023-04-22T03:35:36Z").getTime() - Date.now()) / 1000)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const daysLeft = Math.floor(timeLeft / (3600 * 24));
  const hoursLeft = Math.floor((timeLeft % (3600 * 24)) / 3600);
  const minutesLeft = Math.floor((timeLeft % 3600) / 60);
  const secondsLeft = Math.floor(timeLeft % 60);

  return (
    <CountdownTimerContainer>
       Staking ending in:
      <TimeLeft>{daysLeft} days,</TimeLeft>
      <TimeLeft>{hoursLeft} hours,</TimeLeft>
      <TimeLeft>{minutesLeft} minutes,</TimeLeft>
      <TimeLeft>{secondsLeft} seconds</TimeLeft>
    </CountdownTimerContainer>
  );
};

export default CountdownTimer;
