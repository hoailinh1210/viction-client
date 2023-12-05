import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useAccount, useConnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { BlockNumber } from './BlockNumber'

function App() {
  const [count, setCount] = useState(0)
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
         {
            isConnected ? (
                <div>
                    <p>Address: {address}</p>
                    <p>Count: {count}</p>
                    <button onClick={() => setCount(count + 1)}>Add</button>
                </div>
              ) : (
                <button onClick={() => connect()}>Connect</button>
            )
         }
      </div>
      <BlockNumber/>
    </>
  )
}

export default App
