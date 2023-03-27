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

contract ArqueroStakingPool {
    ArqueroStakingToken private _stakingToken;
    mapping(address => uint256) private _stakeBalances;
    mapping(address => uint256) private _stakeTimestamps;

    uint256 public constant STAKING_REWARD_PERCENTAGE = 5; // 5% staking rewards
    uint256 public constant STAKING_DURATION = 30 days; // 30 day staking duration
    uint256 public constant EARLY_WITHDRAWAL_PENALTY_PERCENTAGE = 10; // early withdrawal penalty of 10%

    constructor(address stakingTokenAddress) {
        _stakingToken = ArqueroStakingToken(stakingTokenAddress);
    }

    function stake(uint256 amount) external {
        require(amount > 0, "Cannot stake 0 tokens");
        require(_stakingToken.balanceOf(msg.sender) >= amount, "Insufficient balance");

        if (_stakeBalances[msg.sender] == 0) {
            _stakeTimestamps[msg.sender] = block.timestamp;
        } else {
            uint256 reward = calculateReward(msg.sender);
            _stakingToken.transfer(msg.sender, reward);
            _stakeTimestamps[msg.sender] = block.timestamp;
        }

        _stakingToken.transferFrom(msg.sender, address(this), amount);
        _stakeBalances[msg.sender] += amount;
    }

    function unstake() external {
        require(_stakeBalances[msg.sender] > 0, "No staked tokens");

        uint256 reward = calculateReward(msg.sender);
        uint256 penalty = calculatePenalty(msg.sender);

        _stakingToken.transfer(msg.sender, _stakeBalances[msg.sender] + reward - penalty);
        _stakingToken.transfer(address(this), penalty);

        _stakeBalances[msg.sender] = 0;
        _stakeTimestamps[msg.sender] = 0;
    }

    function calculateReward(address account) public view returns (uint256) {
        uint256 stakeDuration = block.timestamp - _stakeTimestamps[account];
        uint256 reward = _stakeBalances[account] * STAKING_REWARD_PERCENTAGE * stakeDuration / STAKING_DURATION / 100;
        return reward;
    }

    function calculatePenalty(address account) public view returns (uint256) {
        uint256 stakeDuration = block.timestamp - _stakeTimestamps[account];
        uint256 penalty = _stakeBalances[account] * EARLY_WITHDRAWAL_PENALTY_PERCENTAGE * stakeDuration / STAKING_DURATION / 100;
        return penalty;
    }

    function stakeBalance(address account) public view returns (uint256) {
        return _stakeBalances[account];
    }

    function stakeTimestamp(address account) public view returns (uint256) {
        return _stakeTimestamps[account];
    }
}
