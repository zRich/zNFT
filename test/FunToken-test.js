const { expect } = require("chai");

describe("FunToken", function () {
  let contract;
  let erc721;
  let _name = "FunToken";
  let _symbol = "RICH";
  let account1, account2;

  beforeEach(async function () {
    contract = await ethers.getContractFactory("FunToken");
    [owner, account1, ...account2] = await ethers.getSigners();

    erc721 = await contract.deploy();
  });
  describe("Deployment", function () {
    it("Shoud has the crrect name and symbol ", async function () {
      expect(await erc721.name()).to.equal(_name);
      expect(await erc721.symbol()).to.equal(_symbol);
    });

    it("Should mint a token with token ID 1 & 2 to account1", async () => {
      const address1 = account1.address;
      await erc721.safeMint(address1);
      console.log("who owns token 0? ", erc721.ownerOf(0));
      console.log("how many tokens your own?", await erc721.balanceOf(address1))
      // expect(await erc721.ownerOf(1)).to.equal(address1);

      // await erc721.safeMint(address1);

      // expect(await erc721.ownerOf(0)).to.equal(address1);

      // expect(await erc721.balanceOf(address1)).to.equal(6);
    });
  });
});
