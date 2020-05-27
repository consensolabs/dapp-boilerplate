/* eslint-disable  */
import React, { useState, useEffect } from 'react'
import {
  SidePanel,
  Button,
  DropDown,
  TextInput,
  textStyle,
  Main,
  GU,
} from '@aragon/ui'
import { Octokit } from '@octokit/rest'
import { useWallet } from 'use-wallet'

function Import() {
  const wallet = useWallet()

  const [USERNAME, SETUSERNAME] = useState(null)

  const [opened, setOpened] = useState(false)

  const [list, setList] = useState([])

  const TOKEN = localStorage.getItem('ACCESS TOKEN')

  const octokit = new Octokit({
    auth: TOKEN,
  })

  const [publicRepos, setPublicRepos] = useState(0)
  async function userInfo() {
    const { data } = await octokit.request('/user')
    let num = data.public_repos
    setPublicRepos(num - 1)
    return data
  }
  async function listUserRepos() {
    setOpened(true)

    let repoList = []
    const user = await userInfo()
    for (let page = 1; page <= Math.ceil(user.public_repos / 100); page++) {
      const { data } = await octokit.repos.listForAuthenticatedUser({
        per_page: 100,
        page: page,
      })
      let repoIndex = 0
      while (repoIndex < data.length) {
        repoList.push(data[repoIndex].name)
        repoIndex++
      }
      setList([...repoList])
    }

    return repoList
  }

  function handleClose() {
    setOpened(false)
  }

  const [selected, setSelected] = useState(-1)

  function handleOnChange(index, items) {
    setSelected(index)
  }

  return (
    <>
      {wallet.account !== null ? (
        <Button mode='strong' onClick={listUserRepos}>
          Import Project
        </Button>
      ) : null}

      <SidePanel onClose={handleClose} title='Repository' opened={opened}>
        <br />
        <br />
        <br />

        <DropDown
          selected={selected}
          onChange={handleOnChange}
          items={[...list]}
        />
        <br />

        <div
          css={`
            padding: ${1 * GU}px;
          `}
        >
          <TextInput placeholder='Provide a Name' />
        </div>

        <br />
        <TextInput placeholder='Budget' />
        <br />
        <br />
        <br />
        <br />
        <Button mode='positive'>Import Project</Button>
      </SidePanel>
    </>
  )
}

export default Import
