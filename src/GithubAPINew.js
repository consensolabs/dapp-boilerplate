/* eslint-disable */
/* eslint-disable  */
import React from 'react'
import GitHubLogin from 'react-github-login'

function GithubAPINew() {
  const onSuccess = function(details) {
    const code = details.code
    console.log(code)

    return fetch(
      `https://gitfund-oauth.herokuapp.com/authenticate/${code}`
    ).then((response) => console.log(response))
    // fetch(
    //   `https://gitfund-oauth.herokuapp.com/authenticate/${code}`
    // ).then((response) => console.log(response))
    //   .then(({ token }) =>
    //     console.log(localStorage.setItem('access_token', token))
    //   )
  }

  const onFailure = (response) => console.error(response)

  return (
    <div>
      <GitHubLogin
        clientId='69bc88033c4b1bc2b4dc'
        redirectUri='http://localhost:3000/'
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  )
}

export default GithubAPINew
