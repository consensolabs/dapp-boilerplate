/* eslint-disable  */
import React from 'react'
import { Button } from '@aragon/ui'
import { API } from './GithubAPI'

function handleClick() {
  API()
  console.log('clcikkkkkkk')
}

function Authorize() {
  return (
    <React.Fragment>
      {localStorage.getItem('access_token') === undefined ? (
        <Button mode='normal' onClick={handleClick}>
          Authorize
        </Button>
      ) : (
        <Button mode='positive' onClick={handleClick}>
          Authorized
        </Button>
      )}
    </React.Fragment>
  )
}

export default Authorize
