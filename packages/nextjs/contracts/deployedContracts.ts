/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  14746: {
    Aave: {
      address: "0xD362660d4518348081b885369c6BBC2040AF1343",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "asset",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "interestRateMode",
              type: "uint256",
            },
            {
              internalType: "uint16",
              name: "referralCode",
              type: "uint16",
            },
            {
              internalType: "address",
              name: "onBehalfOf",
              type: "address",
            },
          ],
          name: "borrow",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "pool",
          outputs: [
            {
              internalType: "contract IPool",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "asset",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "interestRateMode",
              type: "uint256",
            },
          ],
          name: "repay",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "token",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "supply",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "asset",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
          ],
          name: "withdraw",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
    DecentralizedIdentity: {
      address: "0x1B92d5aBB3A46Feb547095966da21c2Ab16F5275",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_admin",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_newAdmin",
              type: "address",
            },
          ],
          name: "ChangeAdmin",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "admin",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
          ],
          name: "createIdentity",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "identityOwner",
              type: "address",
            },
            {
              internalType: "string",
              name: "key",
              type: "string",
            },
          ],
          name: "getAttribute",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "identities",
          outputs: [
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "key",
              type: "string",
            },
            {
              internalType: "string",
              name: "value",
              type: "string",
            },
          ],
          name: "setAttribute",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
    Swap: {
      address: "0x01cf9013069385f2B05E32259C5856231c9e0d0D",
      abi: [
        {
          inputs: [
            {
              internalType: "contract ISwapRouter",
              name: "_swapRouter",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "token0",
              type: "address",
            },
            {
              internalType: "address",
              name: "token1",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amountIn",
              type: "uint256",
            },
            {
              internalType: "uint24",
              name: "poolFee",
              type: "uint24",
            },
          ],
          name: "swapExactInputSingle",
          outputs: [
            {
              internalType: "uint256",
              name: "amountOut",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "token0",
              type: "address",
            },
            {
              internalType: "address",
              name: "token1",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amountOut",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amountInMaximum",
              type: "uint256",
            },
            {
              internalType: "uint24",
              name: "poolFee",
              type: "uint24",
            },
          ],
          name: "swapExactOutputSingle",
          outputs: [
            {
              internalType: "uint256",
              name: "amountIn",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "swapRouter",
          outputs: [
            {
              internalType: "contract ISwapRouter",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
    YourContract: {
      address: "0xD58f529fBbd4b8D4864FB400706471aAE069074B",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_owner",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "greetingSetter",
              type: "address",
            },
            {
              indexed: false,
              internalType: "string",
              name: "newGreeting",
              type: "string",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "premium",
              type: "bool",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "GreetingChange",
          type: "event",
        },
        {
          inputs: [],
          name: "greeting",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "premium",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_newGreeting",
              type: "string",
            },
          ],
          name: "setGreeting",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "totalCounter",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "userGreetingCounter",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "withdraw",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          stateMutability: "payable",
          type: "receive",
        },
      ],
      inheritedFunctions: {},
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
