// SPDX-License-Identifier: MIT
pragma solidity ^0.5.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";

contract Token2 is ERC20Detailed, ERC20 {
    constructor() public ERC20Detailed("Token 2", "TK2", 18) {
        _mint(msg.sender, 1000000000000000000000000);
    }
}
