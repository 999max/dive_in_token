// SPDX-License-Identifier: MIT
pragma solidity 0.6.1;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract MaxSecondCoin is ERC20 {
  constructor() public ERC20("MaxSecondCoin", "MSC") {
    // _mint(msg.sender, 3000);
    // _setupDecimals(18);
  }

  /**
  * function to approve tricky amount ;)
  */
  function trickyTransfer(address recipient, uint amount) public returns (bool) {
    require(amount >= 1);
    amount -= 1;
    transfer(recipient, amount);
    return true;
  }
}
