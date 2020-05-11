/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react'
import { Button } from '@aragon/ui'

function Connect() {
  const CLIENT_ID = '69bc88033c4b1bc2b4dc'
  const REDIRECT_URI = 'http://localhost:3000/dashboard'

  useEffect(() => {
    const code =
      window.location.href.match(/\?code=(.*)/) &&
      window.location.href.match(/\?code=(.*)/)[1]
    console.log(window.location.href)

    console.log(code)
    // console.log(screen.id)

    fetch(`https://gitfund-oauth.herokuapp.com/authenticate/${code}`)
      .then((response) => response.json())
      .then(({ token }) => {
        console.log(token)
        console.log(token)
        localStorage.setItem('GithubToken', token)
      })
  }, [])

  return (
    <>
      <a
        style={{ textDecoration: 'none' }}
        href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`}
      >
        {localStorage.getItem('GithubToken') === 'undefined' ? (
          <Button mode='normal' label='CONNECT' />
        ) : (
          <Button mode='positive' label='CONNECTED' />
        )}
      </a>
    </>
  )
}

export default Connect
