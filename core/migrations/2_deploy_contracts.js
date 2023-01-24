const Factory = artifacts.require("UniSwapV2Factory.sol");
const Token1 = artifacts.require("Token1.sol");
const Token2 = artifacts.require("Token2.sol");

module.exports = async function (deployer, network, accounts) {
    await deployer.deploy(Factory, accounts[0]);
    const factory = await Factory.deployed();

    await deployer.deploy(Token1);
    const token1 = await Token1.deployed();

    await deployer.deploy(Token2);
    const token2 = await Token2.deployed();

    await factory.createPair(token1.address, token2.address);
}
