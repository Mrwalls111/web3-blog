require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

const privateKey1 = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337
    },
    polygon: {
      url: "https://polygon-mainnet.infura.io/v3/5e98720d10154ffcaf170dfaf18c94ac",
      accounts: [privateKey1]
    }
  }
};
