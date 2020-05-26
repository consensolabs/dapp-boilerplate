/* eslint-disable */
import React, { useState } from 'react'
import GitHubLogin from 'react-github-login'
import { Button } from '@aragon/ui'
import './test.css'
import { Octokit } from '@octokit/rest'

function APIcall() {
  const [boolButtonText, setBoolButtonText] = useState('CONNECT')

  const [boolSwitch, setboolSwitch] = useState(false)

  const onSuccess = function(details) {
    const code = details.code

    fetch(`https://gitfund-oauth.herokuapp.com/authenticate/${code}`)
      .then((response) => response.json())
      .then(({ token }) => localStorage.setItem('ACCESS TOKEN', token))

    if (boolButtonText === 'CONNECT') {
      setBoolButtonText('DISCONNECT')
    } else {
      setBoolButtonText('CONNECT')
    }

    setboolSwitch(true)
  }

  const onFailure = (response) => console.error(response)

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button mode='normal'>
        <GitHubLogin
          clientId='69bc88033c4b1bc2b4dc'
          redirectUri='http://localhost:3000/'
          onSuccess={onSuccess}
          onFailure={onFailure}
          buttonText={boolButtonText}
          className='testcss'
        />
      </Button>
    </div>
  )
}

export default APIcall
