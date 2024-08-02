require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
const PrivateKey = "32ebf5509dafba8ed97f2d1b7f6e4905272c52e31622a8c304089b3fff8e0fd2"
module.exports = {
  solidity: "0.8.24",
  networks: {
    polygon: {
      url: "https://polygon-rpc.com",
      accounts: ["32ebf5509dafba8ed97f2d1b7f6e4905272c52e31622a8c304089b3fff8e0fd2"]
    },
    amoy:{
      url:"https://rpc-amoy.polygon.technology",
      accounts: ["32ebf5509dafba8ed97f2d1b7f6e4905272c52e31622a8c304089b3fff8e0fd2"]
    }
  }
};
