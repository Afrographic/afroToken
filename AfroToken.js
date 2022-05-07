let AfroToken = artifacts.require("./AfroToken.sol");
contract('AfroToken', function(accounts) {

    it('sets the total supply upon deployment', async function() {
        const afroToken = await AfroToken.deployed();
        const totalSupply = await afroToken.totalSupply();
        assert.equal(totalSupply.toNumber(), 1000000, 'sets the total supply to 1.000.000')
    })
})