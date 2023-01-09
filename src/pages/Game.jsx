import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Questions from "../components/Questions";
import { DIFFICULTY_LEVEL } from "../models/quiz-model";

const STEP_1_TEXT = `This app will test your knowledge about the Bible.
  You will be given a set of questions in three levels of difficulty:
  Easy, Average and Hard. If you manage to pass each level, you will be
  able to unlock the next level and claim some tokens and NFTs.`;

const STEP_2_TEXT = `You will start with 5 hearts, and if you consume all your hearts, then you will have to start again from the beginning. You will also need to connect your MetaMask wallet in order to claim the tokens and NFTs. You can still play without connecting your wallet but you will not be able to claim anything.`;

const STEP_3_TEXT = `Once you are ready, click the Start button to begin. Good luck!`;

let tokens = 0;

function Game({ username, restartGame, isWalletConnected, accounts }) {
  const [step, setNextStep] = useState(1);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [points, setPoints] = useState(0);
  const [tokenCount, setTokenCount] = useState(0);
  const [heartCounter, setHeartCounter] = useState(5);
  const [difficulty, setDifficulty] = useState(
    DIFFICULTY_LEVEL.easy.difficulty
  );
  const [instructionText, setInstructionText] = useState(
    `Hello ${username}! ${STEP_1_TEXT}`
  );

  useEffect(() => {
    if (step === 1) {
      setInstructionText(`Hello ${username}! ${STEP_1_TEXT}`);
    } else if (step === 2) {
      setInstructionText(STEP_2_TEXT);
    } else {
      setInstructionText(STEP_3_TEXT);
    }
  }, [username, step, instructionText]);

  useEffect(() => {
    if (points < 50) {
      tokens = 100;
    } else if (points > 50 && points < 95) {
      tokens = 500;
    } else if (points >= 95) {
      tokens = 1000;
    }
    setTokenCount(tokens);
  }, [points]);

  const handleClickNextStep = () => {
    setNextStep(step + 1);
  };

  const handleGameStart = () => {
    setIsGameStarted(true);
  };

  const renderInstructionsScreen = () => {
    return (
      <div className="instructions-container">
        <div className="instructions-text text-center">
          <p>{instructionText}</p>
        </div>
        {step !== 3 && (
          <div className="next-button-container">
            <Button size="lg" onClick={handleClickNextStep}>
              Next
            </Button>
          </div>
        )}
        {step === 3 && renderStartButton()}
      </div>
    );
  };

  const renderStartButton = () => {
    return (
      <div className="start-game-container">
        <div className="button-container d-grid gap-2">
          <Button variant="primary" size="lg" onClick={handleGameStart}>
            Start
          </Button>
        </div>
      </div>
    );
  };

  const handleGameOver = () => {
    setHeartCounter(5);
    setPoints(0);
    setTokenCount(0);
    setDifficulty(DIFFICULTY_LEVEL.easy.difficulty);
    restartGame();
  };

  const renderQuestions = () => {
    return (
      <Questions
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        setPoints={setPoints}
        points={points}
        heartCounter={heartCounter}
        setHeartCounter={setHeartCounter}
        restartGame={restartGame}
        isWalletConnected={isWalletConnected}
        handleGameOver={handleGameOver}
        accounts={accounts}
        tokenCount={tokenCount}
      />
    );
  };

  const screen = isGameStarted ? renderQuestions() : renderInstructionsScreen();

  return (
    <Container id="game" fluid className="full-height">
      <div className="game-screen">{screen}</div>
    </Container>
  );
}

export default Game;
