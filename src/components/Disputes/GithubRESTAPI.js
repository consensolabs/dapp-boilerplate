/* eslint-disable prettier/prettier */
const GIHUB_SERVER = 'https://api.github.com/'

export default class GitHubRestApi {
  constructor(accessToken) {
    this.accessTokan = accessToken
  }

  fetchRepoDetails(repoId) {
    return fetch(GIHUB_SERVER + 'repositories/' + repoId, {
      method: 'GET',
      headers: {
        Authorization: this.accessTokan,
      },
    })
      .then((res) => res.json())
      .then(function(response) {
        return response
      })
      .catch(function(error) {
        return { meta: { status: false, message: error } }
      })
  }
}

module.export = GitHubRestApi
