This is a simple submission portal smart contract that allows users to submit three entries (strings) and then have them approved by three reviewers and a vendor manager. This contract is written in Solidity version 0.8.0.

License
This smart contract is licensed under the MIT License. Please see the LICENSE file for more information.

Usage
To use this contract, you will need to deploy it to the Ethereum blockchain. Once deployed, you can interact with it using a web3-compatible browser like Metamask.

Functions
submit(string memory _entry1, string memory _entry2, string memory _entry3) public payable: Submits three entries to the contract. The sender must attach some ether to the transaction in order to use this function.

approveByReviewer1() public: Approves the submission for the sender by reviewer 1.

approveByReviewer2() public: Approves the submission for the sender by reviewer 2.

approveByReviewer3() public: Approves the submission for the sender by reviewer 3.

approveByVendorManager() public: Approves the submission for the sender by the vendor manager.

withdraw() public: Withdraws any ether that has been sent to the contract.

Data Structures
Submission: A struct that represents a submission to the contract. It has the following fields:

entry1: A string that represents the first entry submitted.

entry2: A string that represents the second entry submitted.

entry3: A string that represents the third entry submitted.

approvedByReviewer1: A boolean that indicates whether the submission has been approved by reviewer 1.

approvedByReviewer2: A boolean that indicates whether the submission has been approved by reviewer 2.

approvedByReviewer3: A boolean that indicates whether the submission has been approved by reviewer 3.

approvedByVendorManager: A boolean that indicates whether the submission has been approved by the vendor manager.

submissions: A mapping that maps Ethereum addresses to Submission structs. This is used to keep track of the submissions made by each user.

Modifiers
onlyReviewer1: A modifier that ensures that the function can only be called by reviewer 1.

onlyReviewer2: A modifier that ensures that the function can only be called by reviewer 2.

onlyReviewer3: A modifier that ensures that the function can only be called by reviewer 3.

onlyVendorManager: A modifier that ensures that the function can only be called by the vendor manager.

Disclaimer
This is a sample smart contract for educational purposes only. It is not intended to be used in a production environment and may not be secure. Use it at your own risk.

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
