require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();  // Load environment variables from .env file

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,  // Infura URL with project ID
      accounts: [`0x${process.env.PRIVATE_KEY}`],  // List of accounts to use for deployment (private key)
    },
  },
  paths: {
    artifacts: "./client/src/artifacts",
  },
};
