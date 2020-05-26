/* eslint-disable prettier/prettier */

import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Main } from '@aragon/ui'

import theme from './theme-court'

import MainView from './components/MainView'
import ErrorPage from './ErrorPage'

import Dashboard from './components/Dashboard/Dashboard'
/* eslint-disable prettier/prettier */

import Tasks from './components/Tasks/Tasks'
import Sample from './components/Sample/Sample'
import Disputes from './components/Disputes/Disputes'
import { WalletProvider } from './providers/Wallet'
import { ActivityProvider } from './components/Activity/ActivityProvider'

function App() {
  return (
    <WalletProvider>
      <BrowserRouter>
        <ActivityProvider>
        <Main layout={false} theme={theme}>
          <MainView>
            {/* <Redirect from='/' to='/dashboard' /> */}
            <Switch>
              <Route exact path='/profile' component={Dashboard} />
              <Route exact path='/leaderboard' component={Tasks} />
              <Route exact path='/dashboard' component={Disputes} />
              <Route exact path='/sample' component={Sample} />
              <Route component={ErrorPage} />
            </Switch>
          </MainView>
        </Main>
        </ActivityProvider>
      </BrowserRouter>
    </WalletProvider>
  )
}

export default App
