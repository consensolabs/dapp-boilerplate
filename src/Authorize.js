/* eslint-disable  */
import React from 'react'
import { Button } from '@aragon/ui'
import { API } from './GithubAPI'

function handleClick() {
  API()
}

function Authorize() {
  return (
    <div>
      <Button onClick={handleClick}>Authorize</Button>
    </div>
  )
}

export default Authorize
