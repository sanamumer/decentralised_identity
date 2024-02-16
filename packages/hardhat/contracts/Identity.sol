// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity ^0.8.7;

contract DecentralizedIdentity {

    address public admin;

    struct Identity{
        string name;
        address owner;
        mapping(string => string)attributes;
    }
   
    mapping(address => Identity) public identities;

    constructor(address _admin){
        admin = _admin;
    }

    modifier onlyAdmin(){
         require(msg.sender == admin, "Only admin can perform this operation");
        _;
    }

    function ChangeAdmin(address _newAdmin)public onlyAdmin {
        admin = _newAdmin;
    }

    function createIdentity(string memory name) public {
      require(identities[msg.sender].owner == address(0), "Identity already exists");
        Identity storage newIdentity = identities[msg.sender];
        newIdentity.name = name;
        newIdentity.owner = msg.sender;
        }

    function setAttribute(string memory key, string memory value) public {
        identities[msg.sender].attributes[key] = value;
    }

	 function getAttribute(address identityOwner, string memory key) public view returns (string memory) {
        return identities[identityOwner].attributes[key];
    }

}