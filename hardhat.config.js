/** @type import('hardhat/config').HardhatUserConfig */
require('@nomicfoundation/hardhat-ethers');
require('@nomicfoundation/hardhat-ignition-ethers');

const privateKey = '私钥';

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  defaultNetwork: "inksepolia",
  networks: {
    inksepolia: {
      url: "https://rpc-gel-sepolia.inkonchain.com/",
      accounts: [privateKey]
    },
  },

};
