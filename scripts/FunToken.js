const hardhat = require("hardhat")

async function main() {
  const FunToken = await hardhat.ethers.getContractFactory("FunToken")
  console.log("Deploy FunToken......")

  const erc721 = await FunToken.deploy()

  await erc721.deployed();
  console.log("Deployed to :", erc721.address)
}

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});
