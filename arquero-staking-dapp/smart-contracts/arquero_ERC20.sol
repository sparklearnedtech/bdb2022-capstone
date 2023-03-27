// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ArqueroStakingToken is ERC20 {
    uint256 public constant INITIAL_SUPPLY = 10000 * 10 ** 18;
    uint256 public constant STAKING_REWARD_PERCENTAGE = 5;
    uint256 public constant STAKING_DURATION = 30 days;
    uint256 public constant EARLY_WITHDRAWAL_PENALTY_PERCENTAGE = 10;

    constructor() ERC20("ArqueroStakingToken", "AST") {
        _mint(msg.sender, INITIAL_SUPPLY);
    }
}