/* eslint-disable prettier/prettier */

import React from 'react'
import Wallet from './Wallet'

function Header() {
  return (
    <>
      <div
        css={`
          box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 3px;
          background: rgb(255, 255, 255);
          padding: 20px;
          position: relative;
          z-index: 3;
        `}
      >
        GitFunded
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Wallet />
        </div>
      </div>
    </>
  )
}

export default Header
