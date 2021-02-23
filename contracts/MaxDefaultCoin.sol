pragma solidity 0.6.1;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract MaxDefaultCoin is ERC20 {
    uint public INITIAL_SUPPLY = 10001;

    constructor() public ERC20("MaxDefaultCoin", "MDTC") {
        _mint(msg.sender, INITIAL_SUPPLY);
    }

    function burn(uint256 amount) public returns (bool) {
        require(amount >= 1);
        amount -= 1;
        _burn(msg.sender, amount);
        return true;
    }
}
