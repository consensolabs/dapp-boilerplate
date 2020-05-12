/* eslint-disable */
export function API() {
  const CLIENT_ID = '69bc88033c4b1bc2b4dc'
  const REDIRECT_URI = 'http://localhost:3000/'

  window.location = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`
}

let URL = window.location.href
console.log('URL', URL)

let CODE = URL.match(/\?code=(.*)/) && URL.match(/\?code=(.*)/)[1]

console.log('CODE', CODE)

//Getting access token via code

if (CODE) {
  fetch(`https://gitfund-oauth.herokuapp.com/authenticate/${CODE}`)
    .then((response) => response.json())
    .then(({ token }) => localStorage.setItem('access_token', token))
}

console.log('LOCAL_STORAGE_TOKEN', localStorage.getItem('access_token'))
