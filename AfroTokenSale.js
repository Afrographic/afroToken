const { assert } = require("chai");

let AfroTokenSale = artifacts.require("./AfroTokenSale.sol");

contract('AfroToken', function(accounts) {
    const tokenPriceWei = 1000000000000000; // in wei
    it("initializes the contract with the correct values", async function() {
        const afroTokenSale = await AfroTokenSale.deployed();
        const address = afroTokenSale.address;
        assert.notEqual(address, 0x0, 'Has contract address');
        const tokenContractAddress = afroTokenSale.tokenContract();
        assert.notEqual(tokenContractAddress, 0x0, 'Has contract address');
        const price = await afroTokenSale.tokenPrice();
        console.log(price);
        // assert.equal(tokenPrice, tokenPriceWei, "Token price is correct")
    })


});