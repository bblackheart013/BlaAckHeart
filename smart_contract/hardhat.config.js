require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/HiQEJMSa-9gw8kBWUwUPCtKSQ5fz1JHu',
      accounts: ['2fdb29217eec3602e0161d241689e54edb1cc61dc713c6937e550ab3c0d180a4'],
    },
  },
};