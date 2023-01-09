const BibleQuizClaimContract = {
  contractAddress: "0x6050a52078eA5A05147e66B1Ef8aAE99a40a8309",
  abi: [
    { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "TransferReceived",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "_destAddr",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "TransferSent",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "balance",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "contract IERC20", "name": "token", "type": "address" },
        { "internalType": "address", "name": "to", "type": "address" }
      ],
      "name": "claimFiveHundred",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "contract IERC20", "name": "token", "type": "address" },
        { "internalType": "address", "name": "to", "type": "address" }
      ],
      "name": "claimOneHundred",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "contract IERC20", "name": "token", "type": "address" },
        { "internalType": "address", "name": "to", "type": "address" }
      ],
      "name": "claimOneThousand",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
      "stateMutability": "view",
      "type": "function"
    },
    { "stateMutability": "payable", "type": "receive" }
  ]
};

export default BibleQuizClaimContract;
