// index.tsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
// Import DAppProvider
import { ChainId, DAppProvider } from "@usedapp/core";


const config = {
  readOnlyChainId: ChainId.Rinkeby,
  readOnlyUrls: {
    [ChainId.Rinkeby]: 'https://rinkeby.infura.io/v3/acda238b8d434de2840394eea3ad6df3',
  },
}


ReactDOM.render(
  <React.StrictMode>
    {/* 
       Wrap our app in the provider, config is required, 
        but can be left as an empty object: 
    */}
    <DAppProvider config={{config}}>
      <App />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

export function ActivateButton() {
  const { activateBrowserWallet, account } = useEthers()
  const etherBalance = useEtherBalance(account)
  return (
    <div>
      <div>
        <button onClick={() => activateBrowserWallet()}>Connect</button>
      </div>
      {account && <p>Account: {account}</p>}
      {etherBalance && <p>Balance: {formatEther(etherBalance)}</p>}
    </div>
  )
}