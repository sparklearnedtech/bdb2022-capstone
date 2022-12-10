require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
const fs = require("fs");
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";
require("dotenv").config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/h5fMani_CxtpsTrNiVo75PzgfJJLBewS",
      accounts: [
        "daf22f69cc35761902257572a8b9299eb5779697aa7ade69a9bd7eab20c67f04",
      ],
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
