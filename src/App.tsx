import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./style.css";
import Dashboard from "./components/dashboard/Dashboard";
import { ChainId, DAppProvider, useEthers, useEtherBalance } from '@usedapp/core'
import ReactDOM from "react-dom";
import { formatEther, formatUnits, useEthers } from '@ethersproject/units';
import ConnectButton from "./components/ConnectButton";
import { Web3ReactProvider } from '@web3-react/core'

import { Page } from './components/base/base'
/*
import { GlobalStyle } from './global/GlobalStyle'
import { Balance } from './pages/Balance'
import { Prices } from './pages/Prices'
import { Block } from './dashboard/dapp/Loan'
import { Tokens } from './pages/Tokens'
import { Transactions } from './pages/Transactions'
import { SendEtherPage } from './pages/SendEtherPage'
import { NotificationsList } from './components/Transactions/History'
*/
const queryClient = new QueryClient();

const config = {
  readOnlyChainId: ChainId.Rinkeby,
  readOnlyUrls: {
    [ChainId.Rinkeby]: 'https://rinkeby.infura.io/v3/acda238b8d434de2840394eea3ad6df3',
  },
}

const App = () => {
  return (
    <div>
      
      
      <Dashboard />
      <Page>
      <GlobalStyle />
      <BrowserRouter>
        <TopBar />
        <Switch>
          <Route exact path="/balance" component={Balance} />
          <Route exact path="/prices" component={Prices} />
          <Route exact path="/block" component={Block} />
          <Route exact path="/tokens" component={Tokens} />
          <Route exact path="/send" component={SendEtherPage} />
          <Route exact path="/transactions" component={Transactions} />
          <Redirect exact from="/" to="/balance" />
        </Switch>
      </BrowserRouter>
      <NotificationsList />
    </Page>
    </div>
  );
}
export default App;




/*
<Page>
      <GlobalStyle />
      <BrowserRouter>
        <TopBar />
        <Switch>
          <Route exact path="/balance" component={Balance} />
          <Route exact path="/prices" component={Prices} />
          <Route exact path="/loan" component={Loan} />
          <Route exact path="/tokens" component={Tokens} />
          <Route exact path="/send" component={SendEtherPage} />
          <Route exact path="/transactions" component={Transactions} />
          <Redirect exact from="/" to="/balance" />
        </Switch>
      </BrowserRouter>
      <NotificationsList />
    </Page>

*/

