/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react'
import { Button } from '@aragon/ui'

function Import() {
  const CLIENT_ID = '69bc88033c4b1bc2b4dc'
  const REDIRECT_URI = 'http://localhost:3000/dashboard'

  // const [token, setToken] = useState(null)

  useEffect(() => {
    // console.log('click')
    const code =
      window.location.href.match(/\?code=(.*)/) &&
      window.location.href.match(/\?code=(.*)/)[1]
    console.log(window.location.href)

    console.log(code)

    fetch(`https://gitfund-oauth.herokuapp.com/authenticate/${code}`)
      .then((response) => response.json())
      .then(({ token }) => {
        console.log(token)
      })
  }, [])

  return (
    <>
      <a
        href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`}
      >
        <Button mode='primary'>Import</Button>
      </a>
    </>
  )
}

export default Import
