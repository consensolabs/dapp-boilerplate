/* eslint-disable  */
import React from 'react'
import { Button } from '@aragon/ui'
import { API } from './GithubAPI'
import GithubAPINew from './GithubAPINew'
// import GithubAPI from './GithubAPI'

function handleClick() {
  API()
}

function Authorize() {
  return (
    <React.Fragment>
      {localStorage.getItem('access_token') === undefined ? (
        <Button mode='normal' onClick={handleClick}>
          Authorize
        </Button>
      ) : (
        <GithubAPINew />
      )}
    </React.Fragment>
  )
}

export default Authorize
