import { ChainMap, ChainMetadata, ExplorerFamily } from '@hyperlane-xyz/sdk';
import { ProtocolType } from '@hyperlane-xyz/utils';

// A map of chain names to ChainMetadata
// Chains can be defined here, in chains.json, or in chains.yaml
// Chains already in the SDK need not be included here unless you want to override some fields
// Schema here: https://github.com/hyperlane-xyz/hyperlane-monorepo/blob/main/typescript/sdk/src/metadata/chainMetadataTypes.ts
export const chains: ChainMap<ChainMetadata & { mailbox?: Address }> = {
  dchaintestnet: {
    protocol: ProtocolType.Ethereum,
    chainId: 123123,
    domainId: 123123,
    name: 'dchaintestnet',
    displayName: 'DchainTestnet',
    nativeToken: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: [{ http: 'https://dchaintestnet-2713017997578000-1.jsonrpc.testnet.sagarpc.io' }],
    blockExplorers: [
      {
        name: 'Block Explorer',
        url: 'https://dchaintestnet-2713017997578000-1.testnet.sagaexplorer.io',
        apiUrl: 'https://api.mycustomchain-scan.com/api',
        family: ExplorerFamily.Blockscout,
      },
    ],
    blocks: {
      confirmations: 1,
      reorgPeriod: 1,
      estimateBlockTime: 10,
    },
    logoURI: '/dchain.png',
  },
  sepolia : {
    protocol: ProtocolType.Ethereum,
    chainId: 11155111,
    domainId: 11155111,
    name: 'sepolia',
    displayName: 'Sepolia',
    nativeToken: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: [{ http: 'https://rpc.sepolia.org' }],
    blockExplorers: [
      {
        name: 'Block Explorer',
        url: 'https://sepolia.etherscan.io',
        apiUrl: 'https://api.mycustomchain-scan.com/api',
        family: ExplorerFamily.Etherscan,
      },
    ],
    blocks: {
      confirmations: 1,
      reorgPeriod: 1,
      estimateBlockTime: 10,
    },
    logoURI: 'https://raw.githubusercontent.com/hyperlane-xyz/hyperlane-registry/main/chains/ethereum/logo.svg',
  }
};
