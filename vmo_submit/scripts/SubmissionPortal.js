const { ethers } = require('hardhat');

async function main() {
    const SubmissionPortal = await ethers.getContractFactory('SubmissionPortal');
    const submissionPortal = await SubmissionPortal.deploy();

    await submissionPortal.deployed();

    const entries = ['Entry 1', 'Entry 2', 'Entry 3'];

    await submissionPortal.submit(entries[0], entries[1], entries[2]);

    const submission = await submissionPortal.submissions[await ethers.provider.getSigner().getAddress()];
    console.log(submission);
}

main();
