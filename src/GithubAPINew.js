/* eslint-disable */
import React from 'react'
import GitHubLogin from 'react-github-login'

function GithubAPINew() {
  const onSuccess = function(details) {
    const code = details.code

    return fetch(
      `https://gitfund-oauth.herokuapp.com/authenticate/${code}`
    ).then((response) => console.log(response))
  }

  const onFailure = (response) => console.error(response)

  let clientId = '69bc88033c4b1bc2b4dc'
  let redirectUri = 'http://localhost:3000/'

  return (
    <div>
      <GitHubLogin
        clientId={clientId}
        redirectUri={redirectUri}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  )
}

export default GithubAPINew
