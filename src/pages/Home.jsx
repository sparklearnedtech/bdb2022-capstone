import { useState, useEffect } from "react";
import Welcome from "../components/Welcome";
import Game from "./Game";
import { requestAccounts, accountChange, initializeContracts } from "../web3";

function Home() {
  const [showGuestInput, setShowGuestInput] = useState("");
  const [username, setUserName] = useState("");
  const [isPlayingAsGuest, setIsPlayingAsGuest] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    accountChange(setAccounts);
  }, []);

  const handleGuestLogin = () => {
    setShowGuestInput(true);
  };

  const handleCloseModal = () => {
    setShowGuestInput(false);
  };

  const handleTextInput = (event) => {
    const val = event.target.value;
    setUserName(val);
  };

  const handleSaveGuest = () => {
    if (username === "") {
      alert("Please enter a valid username");
      return;
    }
    if (!isWalletConnected) {
      setIsPlayingAsGuest(true);
    }
    handleCloseModal();
  };

  const disconnectWallet = () => {
    setAccounts([]);
    setIsWalletConnected(false);
    setUserName("");
    setIsPlayingAsGuest(true);
  };

  const startGame = () => {
    setIsGameStarted(true);
  };

  const restartGame = () => {
    setIsGameStarted(false);
    setUserName("");
  };

  const handleConnectWallet = async () => {
    const acc = await requestAccounts();
    if (acc && acc.length > 0) {
      setIsWalletConnected(true);
      setAccounts(acc);
      initializeContracts();
    }
  };

  const renderWelcomeScreen = () => {
    return (
      <Welcome
        showGuestInput={showGuestInput}
        username={username}
        isPlayingAsGuest={isPlayingAsGuest}
        handleGuestLogin={handleGuestLogin}
        handleCloseModal={handleCloseModal}
        handleTextInput={handleTextInput}
        handleSaveGuest={handleSaveGuest}
        disconnectWallet={disconnectWallet}
        startGame={startGame}
        connectWallet={handleConnectWallet}
        isWalletConnected={isWalletConnected}
      />
    );
  };

  const renderGameScreen = () => {
    return (
      <Game
        username={username}
        restartGame={restartGame}
        isWalletConnected={isWalletConnected}
        accounts={accounts}
      />
    );
  };

  const screen = isGameStarted ? renderGameScreen() : renderWelcomeScreen();

  return <>{screen}</>;
}

export default Home;
