import React from 'react'
import ReactDOM from 'react-dom/client'
import { WagmiConfig, configureChains, createConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'

import App from './App.tsx'
import './index.css'
import { vicTestNet } from './libs/chains.ts'

const { publicClient } = configureChains(
  [vicTestNet],
  [publicProvider()],
)

const config = createConfig({
  autoConnect: true,
  publicClient,
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiConfig config={config}>
      <App />
    </WagmiConfig>
  </React.StrictMode>,
)
