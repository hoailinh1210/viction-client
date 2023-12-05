import { Chain } from '@wagmi/core'

export const vicTestNet = {
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
      webSocket: ['wss://ws.testnet.tomochain.com']
    },
    public: {
      http: ['https://rpc.testnet.tomochain.com'],
      webSocket: ['wss://ws.testnet.tomochain.com']
    },
  },
  blockExplorers: {
    default: { name: 'Explorer', url: 'https://www.vicscan.xyz' },
  },
} as const satisfies Chain