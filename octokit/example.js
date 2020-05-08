const { Octokit } = require('@octokit/rest')

// replace the token with the dynamically fetched token
const OAUTH_TOKEN = 'edc0722f4cfafe2e8cc0c24270329fa1def019e1'

const octokit = new Octokit({
  auth: OAUTH_TOKEN,
})

async function userInfo() {
  const { data } = await octokit.request('/user')
  return data
}

// eslint-disable-next-line camelcase
async function listUserRepos(per_page) {
  let repoList = []
  const user = await userInfo()
  // eslint-disable-next-line camelcase
  for (let page = 1; page <= Math.ceil(user.public_repos / per_page); page++) {
    const { data } = await octokit.repos.listForAuthenticatedUser({
      per_page,
      page: page,
    })
    repoList = repoList.concat(data)
  }
  return repoList
}

async function listOrgRepos(org, type) {
  const { data } = await octokit.repos.listForOrg({
    org,
    type,
  })
  return data
}

async function listUserOrgs() {
  const user = await userInfo()
  const { data } = await octokit.orgs.listForUser({ username: user.login })
  return data
}

// Lists repos from all the organizations of the user
listUserOrgs().then(orgs => {
  orgs.forEach(org => {
    listOrgRepos(org.login, 'public').then(repos => {
      console.log(`Total repos in ${org.login} is : ${repos.length}`)
    })
  })
})

// Lists user's all repos
listUserRepos(100).then(repos => {
  console.log(`Total repos of the user : ${repos.length}`)
})
