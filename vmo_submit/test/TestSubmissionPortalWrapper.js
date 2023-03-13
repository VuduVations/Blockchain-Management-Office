const { expect } = require("chai");

describe("SubmissionPortal", function () {
  let submissionPortal;
  let vendorAddress;

  beforeEach(async function () {
    const SubmissionPortal = await ethers.getContractFactory("SubmissionPortal");
    submissionPortal = await SubmissionPortal.deploy();
    await submissionPortal.deployed();

    vendorAddress = await ethers.provider.getSigner().getAddress();
  });

  it("should allow a vendor to submit an entry", async function () {
    const entry1 = "Entry 1";
    const entry2 = "Entry 2";
    const entry3 = "Entry 3";
    await submissionPortal.submit(entry1, entry2, entry3);
    
    const submission = await submissionPortal.submissions(vendorAddress);

    expect(submission.entry1).to.equal(entry1);
    expect(submission.entry2).to.equal(entry2);
    expect(submission.entry3).to.equal(entry3);
  });

  it("should approve a submission by all reviewers and vendor manager", async function () {
    const entry1 = "Entry 1";
    const entry2 = "Entry 2";
    const entry3 = "Entry 3";
    await submissionPortal.submit(entry1, entry2, entry3);

    await submissionPortal.approveByReviewer1();
    await submissionPortal.approveByReviewer2();
    await submissionPortal.approveByReviewer3();
    await submissionPortal.approveByVendorManager();

    const submission = await submissionPortal.submissions(vendorAddress);

    expect(submission.approvedByReviewer1).to.be.true;
    expect(submission.approvedByReviewer2).to.be.true;
    expect(submission.approvedByReviewer3).to.be.true;
    expect(submission.approvedByVendorManager).to.be.true;
  });
});
