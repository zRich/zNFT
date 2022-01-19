const Migrations = artifacts.require("Migrations");
// const ERC721PresetMinterPauserAutoId = artifacts.require("ERC721PresetMinterPauserAutoId");


module.exports = function (deployer) {
  deployer.deploy(Migrations);
  // deployer.deploy(ERC721PresetMinterPauserAutoId, "Rich NFT","NFT", "https://www.ibm.com");
};
