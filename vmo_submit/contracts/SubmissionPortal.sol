// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SubmissionPortal {
    struct Submission {
        string entry1;
        string entry2;
        string entry3;
        bool approvedByReviewer1;
        bool approvedByReviewer2;
        bool approvedByReviewer3;
        bool approvedByVendorManager;
    }

    mapping(address => Submission) public submissions;

    function submit(string memory _entry1, string memory _entry2, string memory _entry3) public payable {
        submissions[msg.sender] = Submission(_entry1, _entry2, _entry3, false, false, false, false);
    }

    function approveByReviewer1() public {
        Submission storage submission = submissions[msg.sender];
        require(bytes(submission.entry1).length != 0, "No submission found for this address");
        submission.approvedByReviewer1 = true;
    }

    function approveByReviewer2() public {
        Submission storage submission = submissions[msg.sender];
        require(bytes(submission.entry1).length != 0, "No submission found for this address");
        submission.approvedByReviewer2 = true;
    }

    function approveByReviewer3() public {
        Submission storage submission = submissions[msg.sender];
        require(bytes(submission.entry1).length != 0, "No submission found for this address");
        submission.approvedByReviewer3 = true;
    }

    function approveByVendorManager() public {
        Submission storage submission = submissions[msg.sender];
        require(bytes(submission.entry1).length != 0, "No submission found for this address");
        submission.approvedByVendorManager = true;
    }

    function withdraw() public {
        payable(msg.sender).transfer(address(this).balance);
    }
}
