import { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Modal from "react-bootstrap/Modal";
import QuizProgressBar from "./QuizProgressBar";
import AnswerCard from "./AnswerCard";
import { FaHeart, FaEthereum } from "react-icons/fa";
import CustomIcons from "./CustomIcons";
import { QUESTIONS } from "../data/quiz-data";
import { DIFFICULTY_LEVEL } from "../models/quiz-model";
import Images from "../assets/images";
import { mintToken, claimToken } from "../web3";

const LEVEL_LIMIT = {
  easy: 20,
  medium: 15,
  difficult: 10,
  expert: 25,
};
const MODAL_TYPES = {
  checkAnswer: "checkAnswer",
  gameOver: "gameOver",
  nextLevel: "nextLevel",
  gameCompleted: "gameCompleted",
};

const CORRECT_ANSWER_MESSAGES = [
  "Great!",
  "Good job!",
  "Amazing!",
  "Nice!",
  "You're nailing it!",
  "Keep it up!",
  "Wonderful!",
  "Splendid!",
  "Perfect!",
  "Yay!",
  "Fantastic!",
];

const WRONG_ANSWER_MESSAGES = [
  "Oops!",
  "I'm sorry, that's not the right answer",
  "That's wrong!",
  "Try harder.",
  "You can get it next time.",
  "Uh-oh, wrong answer.",
  "Try again.",
  "Better luck next time.",
  "You could do better than that.",
  "That was close.",
];

const renderHearts = (heartCounter) => {
  const hearts = [];
  for (let i = 0; i < heartCounter; i++) {
    hearts.push(renderHeart(i));
  }

  const displayHearts = hearts.map((heart) => {
    return heart;
  });

  return displayHearts;
};

const renderHeart = (index) => (
  <CustomIcons color="red" key={index}>
    <FaHeart />
  </CustomIcons>
);

const renderEthIcon = () => (
  <CustomIcons color="blue">
    <FaEthereum />
  </CustomIcons>
);

const getQuestionsData = (difficulty = "easy", limit = LEVEL_LIMIT.easy) => {
  const questions = QUESTIONS.filter((question) => {
    return question.difficulty === difficulty;
  });
  return randomizeArray(questions).slice(0, limit);
};

const randomizeArray = (questions) => {
  return questions.sort(() => Math.random() - 0.5);
};

const renderGameOverImage = () => {
  return (
    <div className="badge-container">
      <img
        src={Images.wordLamp}
        className="nft-badge"
        alt="Your word is a lamp unto my feet and a light unto my path."
      />
    </div>
  );
};

function Questions({
  difficulty = "easy",
  points,
  setPoints,
  heartCounter,
  setHeartCounter,
  setDifficulty,
  restartGame,
  isWalletConnected,
  handleGameOver,
  accounts,
  tokenCount,
}) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizData, setQuizData] = useState([]);
  const [itemCounter, setItemCounter] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(MODAL_TYPES.checkAnswer);
  const [isClaiming, setIsClaiming] = useState(false);
  const [isNftClaimed, setIsNftClaimed] = useState(false);
  const [nftClaimButtonText, setNftClaimButtonText] = useState("Claim NFT");
  const [isTokenClaiming, setIsTokenClaiming] = useState(false);
  const [isTokenClaimed, setIsTokenClaimed] = useState(false);
  const [tokenClaimButtonText, setTokenClaimButtonText] = useState(
    `Claim ${tokenCount} BIBLE Tokens`
  );

  const isLevelFinished = useCallback(() => {
    return itemCounter + 1 > LEVEL_LIMIT[difficulty];
  }, [itemCounter, difficulty]);

  const showNextLevelModal = useCallback(() => {
    if (difficulty !== DIFFICULTY_LEVEL.difficult.difficulty) {
      setModalType(MODAL_TYPES.nextLevel);
    } else {
      setModalType(MODAL_TYPES.gameCompleted);
    }
    setShowModal(true);
  }, [difficulty]);

  useEffect(() => {
    const questions = getQuestionsData(difficulty, LEVEL_LIMIT[difficulty]);
    setQuizData(questions);
  }, [difficulty]);

  useEffect(() => {
    if (isLevelFinished()) {
      showNextLevelModal();
    }
  }, [isLevelFinished, difficulty, showNextLevelModal]);

  useEffect(() => {
    if (heartCounter === 0) {
      setModalType(MODAL_TYPES.gameOver);
    }
  }, [heartCounter]);

  useEffect(() => {
    setTokenClaimButtonText(`Claim ${tokenCount} BIBLE Tokens`);
  }, [tokenCount]);

  const selectAnswer = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNftClaim =
    (difficulty = "easy") =>
    () => {
      setIsClaiming(true);
      setNftClaimButtonText("Claiming...");
      mintToken(difficulty, accounts[0])
        .then((tx) => {
          setIsNftClaimed(true);
          setIsClaiming(false);
          setNftClaimButtonText("NFT Claimed");
        })
        .catch((error) => {
          console.error("Claim NFT error", error);
          setIsNftClaimed(false);
          setIsClaiming(false);
          setNftClaimButtonText(`Claim NFT`);
        });
    };

  const handleClaimToken = () => {
    setIsTokenClaiming(true);
    setTokenClaimButtonText("Claiming...");
    claimToken(tokenCount, accounts[0])
      .then((tx) => {
        setIsTokenClaimed(true);
        setIsTokenClaiming(false);
        setTokenClaimButtonText(`${tokenCount} BIBLE Claimed`);
      })
      .catch((error) => {
        console.error("Claim token error", error);
        setIsTokenClaimed(false);
        setIsTokenClaiming(false);
        setTokenClaimButtonText(`Claim ${tokenCount} BIBLE Tokens`);
      });
  };

  const handleNextQuestion = () => {
    handleClose();
    setIsCorrect(false);
    setSelectedAnswer(null);
    if (!isLevelFinished()) {
      setItemCounter(itemCounter + 1);
    }
  };

  const startNextLevel = () => {
    let difficultySetting = DIFFICULTY_LEVEL.easy.difficulty;
    if (difficulty === DIFFICULTY_LEVEL.easy.difficulty) {
      difficultySetting = DIFFICULTY_LEVEL.medium.difficulty;
    } else if (difficulty === DIFFICULTY_LEVEL.medium.difficulty) {
      difficultySetting = DIFFICULTY_LEVEL.difficult.difficulty;
    }
    handleClose();
    setModalType("checkAnswer");
    setIsCorrect(false);
    setSelectedAnswer(null);
    setItemCounter(0);
    setDifficulty(difficultySetting);
    setIsTokenClaimed(false);
    setIsTokenClaimed(false);
    setIsNftClaimed(false);
    setIsClaiming(false);
    setNftClaimButtonText("Claim NFT");
  };

  const handleCheckAnswer = () => {
    if (isLevelFinished()) {
      alert("Level finished!");
    } else {
      if (selectedAnswer) {
        handleShow();
        if (selectedAnswer === quizData[getItemIndex()].getAnswer()) {
          setIsCorrect(true);
          setPoints(points + quizData[getItemIndex()].getPoints());
        } else {
          setIsCorrect(false);
          setHeartCounter(heartCounter - 1);
        }
      } else {
        alert("Please select an answer");
      }
    }
  };

  const getItemIndex = () => {
    return !isLevelFinished() ? itemCounter : itemCounter - 1;
  };

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const renderOptions = () => {
    return quizData[getItemIndex()].getOptions().map((option, index) => {
      return (
        <Col key={option} xs={6} className="d-flex justify-content-center py-1">
          <AnswerCard
            answer={option}
            index={index}
            handleClick={selectAnswer}
            selectedAnswer={selectedAnswer}
          />
        </Col>
      );
    });
  };

  const renderModal = () => {
    let msg = "";
    let clickAction = handleNextQuestion;
    let buttonVariant = "info";
    let buttonText = "Continue";
    let claimNFTScreen = null;
    let title = "";
    let titleColor = "black";
    const correctAnswerMsg = randomizeArray(CORRECT_ANSWER_MESSAGES)[0];
    const wrongAnswerMsg = randomizeArray(WRONG_ANSWER_MESSAGES)[0];

    if (modalType === MODAL_TYPES.checkAnswer) {
      msg = isCorrect ? correctAnswerMsg : wrongAnswerMsg;
      title = isCorrect ? "Correct!" : "Incorrect!";
      buttonVariant = isCorrect ? "success" : "danger";
      buttonText = "Continue";
      clickAction = handleNextQuestion;
      titleColor = isCorrect ? "correct" : "incorrect";
    } else if (modalType === MODAL_TYPES.nextLevel) {
      msg = `Congratulations! You've made it to the next level.`;
      title = "Level up!";
      buttonVariant = "primary";
      buttonText = "Start next level";
      clickAction = startNextLevel;
      claimNFTScreen = renderNftClaim();
      titleColor = "level-up";
    } else if (modalType === MODAL_TYPES.gameCompleted) {
      title = "You've made it!";
      msg =
        "Congratulations! You've completed the Quiz. Please claim your NFT and tokens.";
      buttonVariant = "success";
      buttonText = "Back to Home";
      claimNFTScreen = renderNftClaim();
      clickAction = restartGame;
      titleColor = "level-up";
    } else if (modalType === MODAL_TYPES.gameOver) {
      msg =
        "Your word is a lamp for my feet, a light on my path. Psalm 119:105";
      title = "Game over";
      buttonVariant = "danger";
      buttonText = "Try again";
      clickAction = handleGameOver;
      titleColor = "incorrect";
      claimNFTScreen = renderGameOverImage();
    }

    return (
      <Modal
        show={showModal}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        animation={false}
      >
        <Modal.Header>
          <Modal.Title className={`modal-title game ${titleColor}`}>
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-text text-center">{msg}</div>
          {claimNFTScreen}
        </Modal.Body>
        <Modal.Footer>
          <Button variant={buttonVariant} onClick={clickAction}>
            {buttonText}
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  const renderNftClaim = () => {
    let badge = "";
    let alt = "";
    let canClaimToken = false;
    if (difficulty === DIFFICULTY_LEVEL.easy.difficulty) {
      badge = Images.bibleRookie;
      canClaimToken = points > 0;
      alt = "Bible Rookie";
    } else if (difficulty === DIFFICULTY_LEVEL.medium.difficulty) {
      badge = Images.bibleAdept;
      canClaimToken = points >= 50;
      alt = "Bible Adept";
    } else if (difficulty === DIFFICULTY_LEVEL.difficult.difficulty) {
      badge = Images.bibleGuru;
      alt = "Bible Guru";
      canClaimToken = points >= 95;
    }

    return (
      <div className="badge-container">
        <img src={badge} className="nft-badge" alt={alt} />
        {isWalletConnected && (
          <div className="claim-button-container">
            <Button
              variant={"warning"}
              disabled={!isWalletConnected || isClaiming || isNftClaimed}
              onClick={handleNftClaim(difficulty)}
            >
              <div className="claim-container">
                {isClaiming && (
                  <div className="claim-spinner">
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  </div>
                )}
                <div className="claim-button-text-container">
                  {nftClaimButtonText}
                </div>
              </div>
            </Button>
          </div>
        )}

        {isWalletConnected && canClaimToken && (
          <div className="token-claim-container">
            <Button
              variant="info"
              disabled={!isWalletConnected || isTokenClaiming || isTokenClaimed}
              onClick={handleClaimToken}
            >
              <div className="claim-container">
                {isTokenClaiming && (
                  <div className="claim-spinner">
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  </div>
                )}
                <div className="claim-button-text-container">
                  {tokenClaimButtonText}
                </div>
              </div>
            </Button>
          </div>
        )}
        {isWalletConnected && (
          <div className="wallet-warning">
            Please make sure your MetaMask wallet is connected in order claim
            tokens and this NFT. (Also have some ETH for tx fees)
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="question-container">
      {isWalletConnected && accounts.length > 0 && (
        <div className="status-bar-container">
          <div className="address-container">{accounts[0]}</div>
          <div className="network-container d-flex justify-content-end">
            {renderEthIcon()} Goerli
          </div>
        </div>
      )}

      {quizData && quizData.length > 0 && (
        <>
          <Container fluid>
            <Row className="py-1">
              <Col
                xs={12}
                className="d-flex justify-content-center align-content-center"
              >
                <div className="difficulty-level-text">
                  {difficulty.toUpperCase()} ROUND
                </div>
              </Col>
            </Row>
            <Row className="p-0">
              <Col xs={6} md={8} className="pt-1">
                <QuizProgressBar
                  now={getItemIndex() + 1}
                  max={LEVEL_LIMIT[difficulty]}
                />
              </Col>
              <Col
                xs={4}
                md={2}
                className="px-0 d-flex justify-content-center align-content-center"
              >
                {renderHearts(heartCounter)}
              </Col>
              <Col
                xs={2}
                md={2}
                className="pt-1 d-flex justify-content-end align-content-end available-points"
              >
                {points} pts.
              </Col>
            </Row>
            <Row>
              <Col className="text-center py-2">
                <div className="question-text">
                  {quizData[getItemIndex()].getQuestion()}
                </div>
              </Col>
            </Row>
            <Row className="py-2">{renderOptions()}</Row>
            <Row className="mt-2 mt-md-5">
              <Col className="px-0">
                <div className="check-answer-button-container d-grid gap-2">
                  <Button variant="info" size="lg" onClick={handleCheckAnswer}>
                    Check Answer
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
          {renderModal()}
        </>
      )}
    </div>
  );
}

export default Questions;
