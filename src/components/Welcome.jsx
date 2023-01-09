import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import HowToConnect from "./HowToConnect";
import HowToPlay from "./HowToPlay";
import LearnAndEarn from "./LearnAndEarn";
import "../css/common.css";
import "../css/game.css";

function Welcome({
  showGuestInput,
  username,
  isPlayingAsGuest,
  handleGuestLogin,
  handleCloseModal,
  handleTextInput,
  handleSaveGuest,
  startGame,
  connectWallet,
  disconnectWallet,
  isWalletConnected,
}) {
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [helpModalType, setHelpModalType] = useState("");

  const toggleHelpModal =
    (type = "how-to-connect") =>
    () => {
      setHelpModalType(type);
      setShowHelpModal(!showHelpModal);
    };

  const renderModal = () => {
    return (
      <Modal
        show={showGuestInput}
        onHide={handleCloseModal}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>What shall I call you?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            placeholder="username"
            value={username}
            className="textfield"
            onChange={handleTextInput}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveGuest}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  const renderHelpModal = () => {
    let modalTitle = "";
    let helpScreen = null;
    if (helpModalType === "how-to-connect") {
      modalTitle = "How to Connect to MetaMetamask";
      helpScreen = <HowToConnect />;
    } else if (helpModalType === "how-to-play") {
      modalTitle = "How to Play";
      helpScreen = <HowToPlay />;
    } else if (helpModalType === "learn-and-earn") {
      modalTitle = "Learn and Earn";
      helpScreen = <LearnAndEarn />;
    }

    return (
      <Modal
        show={showHelpModal}
        onHide={toggleHelpModal("")}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="modal-90w"
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{helpScreen}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleHelpModal("")}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  const renderTitleScreen = () => {
    let loginButtonText = "Login as Guest";

    if (username !== "") {
      loginButtonText = `Hello, ${username}!`;
    } else {
      if (isWalletConnected) {
        loginButtonText = "Enter username";
      }
    }

    return (
      <div className="main-container">
        <div className="text-center title-screen-container">
          <h1 className="main-title">Bible Adventures</h1>
        </div>
        <>
          <Container fluid>
            <Row className="title-buttons-container">
              <Col
                className="d-flex justify-content-center mb-2"
                md={{ span: 4 }}
                lg={{ span: 3 }}
                xs={12}
              >
                <Button
                  variant="info"
                  size="lg"
                  onClick={isWalletConnected ? disconnectWallet : connectWallet}
                >
                  {isWalletConnected ? "Disconnect" : "Connect Wallet"}
                </Button>
              </Col>
              <Col
                className="d-flex justify-content-center mb-2"
                md={{ span: 4 }}
                lg={{ span: 3 }}
                xs={12}
              >
                <Button
                  variant="info justify-content-center align-content-center"
                  onClick={handleGuestLogin}
                  size="lg"
                >
                  {loginButtonText}
                </Button>
              </Col>
            </Row>
            {((isPlayingAsGuest && username !== "") ||
              (isWalletConnected && username !== "")) && (
              <Row className="pt-3 pt-md-5">
                <Col>{renderStart()}</Col>
              </Row>
            )}
          </Container>
        </>
      </div>
    );
  };

  const renderStart = () => {
    return (
      <div className="d-grid gap-2">
        <Button variant="primary" size="lg" onClick={startGame}>
          Start Game
        </Button>
      </div>
    );
  };

  return (
    <Container id="game" fluid className="full-height">
      <div className="welcome-screen-container">
        <div className="welcome">{renderTitleScreen()}</div>
        <div className="info-container">
          <div className="info-buttons-container">
            <Button
              variant="secondary"
              size="sm"
              onClick={toggleHelpModal("how-to-connect")}
            >
              How to Connect Wallet
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={toggleHelpModal("how-to-play")}
            >
              How to Play
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={toggleHelpModal("learn-and-earn")}
            >
              Learn and Earn
            </Button>
          </div>
        </div>
        <div className="copyright-container">© 2022 Clowreed</div>
      </div>
      {renderModal()}
      {renderHelpModal()}
    </Container>
  );
}

export default Welcome;
