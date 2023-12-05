import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useAccount, useConnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { BlockNumber } from './BlockNumber'

function App() {
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
      <h1>Viction</h1>
      <div className="card">
         {
            isConnected ? (
                <div>
                    <p>Address: {address}</p>
                </div>
              ) : (
                <button onClick={() => connect()}>Connect</button>
            )
         }
      </div>
      <BlockNumber/>
      <p className="read-the-docs">
        Open console log to view pending transactions
      </p>
    </>
  )
}

export default App
