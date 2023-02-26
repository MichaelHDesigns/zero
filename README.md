# Full stack NFT marketplace built with Polygon, Solidity, IPFS, & Next.js

Local setup

To run this project locally, follow these steps:

1. Start the local Hardhat node

```bash
npx hardhat node
```

2. With the network running, deploy the contracts to the local network in a separate terminal window

```bash
npx hardhat run scripts/deploy.js --network localhost
```

3. Start the app

```bash
yarn run dev
```
