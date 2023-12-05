import { defineChain } from 'viem'

export const vicTestNet = defineChain({
  id: 89,
  name: 'Viction Testnet',
  network: 'viction',
  nativeCurrency: {
    decimals: 18,
    name: 'Viction',
    symbol: 'VIC',
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.testnet.tomochain.com'],
    },
    public: {
      http: ['https://rpc.testnet.tomochain.com'],
    },
  },
  blockExplorers: {
    default: { name: 'Explorer', url: 'https://www.vicscan.xyz' },
  },
})