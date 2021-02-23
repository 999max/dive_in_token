const MaxSecondCoin = artifacts.require("MaxSecondCoin");


contract("MaxSecondCoin", function (accounts) {
  let owner = accounts[0];
  let second_account = accounts[1];
  let third_account = accounts[2];


  beforeEach(async function() {
    token = await MaxSecondCoin.deployed();
    //await token.mint(owner, 3000);
    //await token._mint(msg.sender, 3000);
    //await token._setupDecimals(18);
  });

  it('should return correct token name', async function() {
    const name = await token.name();
    assert.equal(name, 'MaxSecondCoin');
  });

  it('should return correct token symbol name', async function() {
    const symbolName = await token.symbol();
    assert.equal(symbolName, 'MSC');
  });

  // it("should return correct totalSupply", async function() {
  //   const totalSupply = await token.totalSupply();
  //   assert.equal(totalSupply, 3000);
  // });

  // it("should make correct transfer for trickyTransfer", async function() {
  //   await token.trickyTransfer(second_account, 100);
  //   await token.trickyTransfer(third_account, 50);
  //   const owner_balance = await token.balanceOf(owner);
  //   const second_account_balance = await token.balanceOf(second_account);
  //   const third_account_balance = await token.balanceOf(third_account);

  //   assert.equal(owner_balance, 2852);
  //   assert.equal(second_account_balance, 99);
  //   assert.equal(third_account_balance, 49);
  // });
});
