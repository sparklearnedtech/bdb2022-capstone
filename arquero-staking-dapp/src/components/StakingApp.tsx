import React, { useState, useEffect } from "react";
import Web3 from "web3";
import "./styles.css";
import { Contract, ContractOptions } from "web3-eth-contract";
import { AbiItem } from "web3-utils";
import {
  StakingContractABI,
  StakingContractBytecode,
} from "../contracts/StakingContract";
import {
  TokenContractABI,
  TokenContractBytecode,
} from "../contracts/TokenContract";
import styled from "styled-components";
import StakeSuccessModal from "./StakeSuccessModal";
import CountdownTimer from "./CountdownTimer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 80px);
  background-image: url(${process.env.PUBLIC_URL}/images/bg3.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const ConnectedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid ${(props) => props.theme.gold};
  border-radius: 8px;
  background-color: ${(props) => props.theme.white};
`;

const ConnectedText = styled.p`
  font-size: 16px;
  margin-bottom: 8px;
`;

const DisconnectedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid ${(props) => props.theme.yellow};
  border-radius: 8px;
  background-color: ${(props) => props.theme.white};
`;

const DisconnectedText = styled.h4`
  font-size: 24px;
  margin-bottom: 16px;
`;

const Button = styled.button`
  padding: 12px 24px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.gold};
  color: ${(props) => props.theme.white};
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.yellow};
  }
`;

const CreatedByText = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.black};
  margin-top: 16px;
`;

const StakingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid ${(props) => props.theme.gold};
  border-radius: 8px;
  background-color: ${(props) => props.theme.white};
  margin-top: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.black};
  font-size: 16px;
  margin-right: 16px;
`;

const StakeButton = styled(Button)`
  background-color: ${(props) => props.theme.yellow};

  &:hover {
    background-color: ${(props) => props.theme.gold};
  }
`;

const UnstakeButton = styled(Button)`
  margin-top: 20px;
  background-color: ${(props) => props.theme.black};

  &:hover {
    background-color: ${(props) => props.theme.gold};
  }
`;

const WelcomeText = styled.h1`
  font-size: 36px;
  margin-bottom: 24px;
  color: ${(props) => props.theme.black};
`;

const Tooltip = styled.div`
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 5px;
  padding: 16px;
  max-width: 300px;
  text-align: center;
  z-index: 9999;
`;

const tokenAddress = "0xb92cd46ec411d29668cf618eb45716089eb3f598";
const stakingAddress = "0xf457D0baFF063c3FC3E13d10714Db0664B9895a6";

function StakingApp() {
  const [web3, setWeb3] = useState<any>(null);
  const [stakingContract, setStakingContract] = useState<any>(null);
  const [tokenContract, setTokenContract] = useState<any>(null);
  const [account, setAccount] = useState<string>("");
  const [stakeBalance, setStakeBalance] = useState<string>("0");
  const [rewardRate, setRewardRate] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [txHash, setTxHash] = useState("");
  const [amountStaked, setAmountStaked] = useState("");
  const [APY, setAPY] = useState<number>(0);

  const [showTooltip, setShowTooltip] = useState(false);

  const handleTooltip = () => {
    setShowTooltip(!showTooltip);
  };

  useEffect(() => {
    async function getRewardRate() {
      if (stakingContract) {
        const rewardRate = await stakingContract.methods.rewardRate().call();
        setRewardRate(Number(rewardRate));
      }
    }
    getRewardRate();
  }, [stakingContract]);

  async function connectWallet() {
    if ((window as any).ethereum) {
      try {
        const accounts = await (window as any).ethereum.request({
          method: "eth_requestAccounts",
        });
        const web3 = new Web3((window as any).ethereum);
        setWeb3(web3);
        const stakingContract = new web3.eth.Contract(
          StakingContractABI as unknown as AbiItem[],
          stakingAddress
        );
        setStakingContract(stakingContract);
        const tokenContract = new web3.eth.Contract(
          TokenContractABI as unknown as AbiItem[],
          tokenAddress
        );
        setTokenContract(tokenContract);
        setAccount(accounts[0]);
        const balance = await stakingContract.methods
          .stakeBalance(accounts[0])
          .call();
        const convertedBalance = web3.utils.fromWei(balance, "ether");
        setStakeBalance(convertedBalance);

        // acc change custom listener - can be refactored
        (window as any).ethereum.on("accountsChanged", async function () {
          const accounts = await (window as any).ethereum.request({
            method: "eth_requestAccounts",
          });
          setAccount(accounts[0]);
          const balance = await stakingContract.methods
            .stakeBalance(accounts[0])
            .call();
          const convertedBalance = web3.utils.fromWei(balance, "ether");
          setStakeBalance(convertedBalance);
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  }

  async function disconnectWallet() {
    try {
      await (window as any).ethereum.request({
        method: "wallet_requestPermissions",
        params: [{ eth_accounts: {} }],
        eth_accounts: null,
      });
      setAccount("");
    } catch (error) {
      console.log(error);
    }
  }

  async function stakeTokens(amount: string) {
    try {
      const tokens = web3.utils.toWei(amount, "ether");
      const allowance = await tokenContract.methods
        .allowance(account, stakingAddress)
        .call();
      if (allowance < tokens) {
        const tx = await tokenContract.methods
          .approve(stakingAddress, tokens)
          .send({ from: account });
        console.log(tx);
      }
      const stakingTx = await stakingContract.methods
        .stake(tokens)
        .send({ from: account });
      setTxHash(stakingTx.transactionHash);
      setAmountStaked(amount);
      setShowModal(true);
      console.log(stakingTx);

      // success modal disp
      setShowModal(true);
      setTxHash(stakingTx.transactionHash);
      setAmountStaked(amount);
    } catch (error) {
      console.log(error);
    }
  }

  async function unstakeTokens() {
    try {
      const stakingTx = await stakingContract.methods
        .unstake()
        .send({ from: account, gas: 500000 });

      console.log(stakingTx);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      {web3 ? (
        <ConnectedContainer>
          <ConnectedText>Connected with address: {account}</ConnectedText>
          <ConnectedText>Tokens staked: {stakeBalance} AST</ConnectedText>
          <Button onClick={disconnectWallet}>Disconnect</Button>
        </ConnectedContainer>
      ) : (
        <DisconnectedContainer>
          <WelcomeText>Welcome to AST Pool Staking</WelcomeText>
          <Button onClick={connectWallet}>Connect Wallet</Button>
          <CreatedByText>
            <p>Developed with passion by Mat Ivan Arquero</p>
          </CreatedByText>
        </DisconnectedContainer>
      )}
      {web3 && (
        <StakingContainer>
          {showModal && (
            <StakeSuccessModal
              txHash={txHash}
              amountStaked={amountStaked}
              onClose={() => setShowModal(false)}
            />
          )}

          <WelcomeText>Stake AST Tokens</WelcomeText>
          <CountdownTimer />
          <InputContainer>
            <Input type="number" id="stake-amount" placeholder="Enter amount" />
            <StakeButton
              onClick={() =>
                stakeTokens(
                  (document.getElementById("stake-amount") as HTMLInputElement)
                    .value
                )
              }
            >
              Stake
            </StakeButton>
          </InputContainer>

          <WelcomeText>Unstake Tokens</WelcomeText>
          <UnstakeButton
            onClick={unstakeTokens}
            onMouseEnter={handleTooltip}
            onMouseLeave={handleTooltip}
          >
            Unstake
          </UnstakeButton>
          {showTooltip && (
            <Tooltip>
              Unstaking your tokens before the end of the staking period may
              result in a penalty of 10% of your staked tokens.
            </Tooltip>
          )}
        </StakingContainer>
      )}
    </Container>
  );
}

export default StakingApp;
