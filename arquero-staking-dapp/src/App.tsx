import React, { useState, useEffect } from "react";
import Web3 from "web3";
import "./styles.css";
import { Contract, ContractOptions } from "web3-eth-contract";
import { AbiItem } from "web3-utils";
import {
  StakingContractABI,
  StakingContractBytecode,
} from "./contracts/StakingContract";
import {
  TokenContractABI,
  TokenContractBytecode,
} from "./contracts/TokenContract";

const tokenAddress = "0xb92cd46ec411d29668cf618eb45716089eb3f598";
const stakingAddress = "0xf457D0baFF063c3FC3E13d10714Db0664B9895a6";

function App() {
  const [web3, setWeb3] = useState<any>(null);
  const [stakingContract, setStakingContract] = useState<any>(null);
  const [tokenContract, setTokenContract] = useState<any>(null);
  const [account, setAccount] = useState<string>("");
  const [stakeBalance, setStakeBalance] = useState<string>("0");
  const [rewardRate, setRewardRate] = useState(0);

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

        // event listener for account change
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
      console.log(stakingTx);
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
    <div className="container">
      {web3 ? (
        <div className="connected">
          <p>Connected with address: {account}</p>
          <p>Tokens staked: {stakeBalance} AST</p>
          <button onClick={disconnectWallet}>Disconnect</button>
        </div>
      ) : (
        <div className="disconnected">
          <h4>Welcome to AST Pool Staking</h4>
          <button onClick={connectWallet}>Connect Wallet</button>
          <div className="created-by">
            <p>Developed with passion by Mat Ivan Arquero</p>
          </div>
        </div>
      )}
      {web3 && (
        <div className="staking" style={{ marginTop: "20px" }}>
          <h3>Stake AST Tokens</h3>
          <div className="input-container" style={{ marginBottom: "20px" }}>
            <input type="text" id="stake-amount" placeholder="Enter amount" />
            <button
              onClick={() =>
                stakeTokens(
                  (document.getElementById("stake-amount") as HTMLInputElement)
                    .value
                )
              }
            >
              Stake
            </button>
          </div>
          <h3>Unstake Tokens</h3>
          <button onClick={unstakeTokens}>Unstake</button>
        </div>
      )}
    </div>
  );
}

export default App;
