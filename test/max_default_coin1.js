const MaxDefaultCoin = artifacts.require("MaxDefaultCoin");


contract("MaxDefaultCoin", function(accounts) {
    let owner = accounts[0];
    let second_account = accounts[1];
    let token;

    beforeEach(async function() {
        token = await MaxDefaultCoin.deployed();
    });

    it('should return correct contract name', async function() {
        let name = await token.name();
        assert.equal(name, 'MaxDefaultCoin');
    });

    it('should return correct symobol name', async function() {
        let smb = await token.symbol();
        assert.equal(smb, 'MDTC');
    });

    it('should return correct totalSupply', async function() {
        let totalSupply = await token.totalSupply();
        assert.equal(totalSupply, 10001);
    });

    it('transfer updates balance of counterparties', async function() {
        await token.transfer(second_account, 300);
        let owner_balance = await token.balanceOf(owner);
        let second_account_balance = await token.balanceOf(second_account);

        assert.equal(owner_balance, 9701);
        assert.equal(second_account_balance, 300);
    });

    it("should burn one token less", async function () {
        await token.burn(200);
        let owner_balance = await token.balanceOf(owner);
        let totalSupply = await token.totalSupply();

        assert.equal(totalSupply, 9802)
        assert.equal(owner_balance, 9502)  // 300 coins gone for second owner in test above
    })

});
