/* eslint-disable prettier/prettier */
import React from 'react'
import { useWallet, UseWalletProvider } from 'use-wallet'

function Wallet() {
  const wallet = useWallet()
  //   const blockNumber = wallet.getBlockNumber()

  return (
    <>
      <h1>Wallet</h1>
      {wallet.connected ? (
        <div>
          <div>Account: {wallet.account}</div>
          <div>Balance: {wallet.balance}</div>
          <button onClick={() => wallet.deactivate()}>disconnect</button>
        </div>
      ) : (
        <div>
          Connect:
          <button onClick={() => wallet.activate()}>MetaMask</button>
          <button onClick={() => wallet.activate('frame')}>Frame</button>
          <button onClick={() => wallet.activate('portis')}>Portis</button>
        </div>
      )}
    </>
  )
}

// Wrap everything in <UseWalletProvider />
export default () => (
  <UseWalletProvider
    chainId={1}
    connectors={{
      // This is how connectors get configured
      portis: { dAppId: 'my-dapp-id-123-xyz' },
    }}
  >
    <Wallet />
  </UseWalletProvider>
)
