/* eslint-disable prettier/prettier */
import React from 'react'
const CLIENT_ID = '69bc88033c4b1bc2b4dc'
const REDIRECT_URI = 'http://localhost:3000/'

class ImportNew extends React.Component {
  state = {
    token: null,
  }

  componentDidMount() {
    const code =
      //   window.location.href.match(/?code=(.*)/) &&
      //   window.location.href.match(/?code=(.*)/)[1]
      window.location.href.match(/(.*)/)
    console.log(code)

    if (code) {
      fetch(`https://gitfund-oauth.herokuapp.com/authenticate/${code}`)
        .then((response) => response.json())
        .then(({ token }) => {
          this.setState({
            token: token,
          })
        })
    }
  }

  render() {
    return (
      <div>
        <a
          href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`}
        >
          <button>Import</button>
        </a>
      </div>
    )
  }
}
export default ImportNew
