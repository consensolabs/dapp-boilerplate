/* eslint-disable prettier/prettier */
import React from 'react'
import Test from './Test'
import { Box, GU, textStyle, EthIdenticon } from '@aragon/ui'
import { useWallet } from 'use-wallet'

export default function ProfileHeader({ active }) {
  // const theme = useTheme()
  const wallet = useWallet()
  // console.log(wallet.account)

  return (
    <Box
      padding={50}
      css={`
        border-radius: 0;
        margin-bottom: ${2 * GU}px;
      `}
    >
      {wallet.account ? (
        <div
          css={`
            ${textStyle('title2')};
            text-align: center;
          `}
        >
          Welcome back!
          <div
            css={`
              ${textStyle('label1')};
              text-align: center;
            `}
          >
            {wallet.account}
          </div>
          <div>
            <EthIdenticon
              address={wallet.account}
              scale={3}
              radius={0}
              soften={0}
            />
          </div>
          <Test />
        </div>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <img
            width='50%'
            alt=''
            src={require('../Account/assets/connection-error.png')}
          />
          <div
            css={`
              ${textStyle('label1')};
            `}
          >
            Please connect your wallet
          </div>
        </div>
      )}
    </Box>
  )
}
