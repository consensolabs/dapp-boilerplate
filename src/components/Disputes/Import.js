/* eslint-disable  */
import React, { useState, useEffect } from 'react'
import { SidePanel, Button, DropDown, TextInput, textStyle } from '@aragon/ui'
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
    console.log('userinfo', data)
    let num = data.public_repos
    setPublicRepos(num - 1)
    return data
  }
  async function listUserRepos() {
    console.log(localStorage.getItem('ACCESS TOKEN'))
    setOpened(true)

    let repoList = []
    const user = await userInfo()
    for (let page = 1; page <= Math.ceil(user.public_repos / 100); page++) {
      const { data } = await octokit.repos.listForAuthenticatedUser({
        page: page,
      })
      console.log('data', data)
      let x = 0
      let arr = []
      while (x < data.length) {
        arr.push(data[x].name)
        x++
      }
      console.log('arr', arr)
      setList([...arr])
    }

    return repoList
  }

  function handleClose() {
    setOpened(false)
  }

  const [selected, setSelected] = useState(-1)

  function handleOnChange(index, items) {
    console.log('onchangeclick')
    console.log('index', index)
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
        <TextInput placeholder='Provide a Name' />
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
