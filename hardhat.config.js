require('@nomiclabs/hardhat-waffle')

const fs = require('fs')
const mnemonic = fs.readFileSync('.secret').toString().trim()
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.4',
  networks: {
    localhost: {
      url: 'http://127.0.0.1:8545',
    },
    hardhat: {
      accounts: { mnemonic: mnemonic },
    },
    matic: {
      url: 'https://rpc-mumbai.matic.today', // Localhost (default: none)
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://rpc-mumbai.maticvigil.com/v1/b05c8dbad6026e2da28175af81a936259917426e`
        ),
      network_id: '80001', // Any network (default: none)
      confirmations: 2,
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
    },
  },
}
