/* eslint-disable  */
import React, { useState, useEffect } from 'react'
import { SidePanel, Button, DropDown, TextInput } from '@aragon/ui'
import { Octokit } from '@octokit/rest'

function Import() {
  const [opened, setOpened] = useState(false)

  const token = localStorage.getItem('GithubToken')
  // console.log(token)

  function handleButtonClick() {
    setOpened(true)
  }

  function handleClose() {
    setOpened(false)
  }

  const OAUTH_TOKEN = localStorage.getItem('access_token')

  const octokit = new Octokit({
    auth: OAUTH_TOKEN,
  })

  const [isShowDropdown, setDropdown] = useState(false)
  const list = []

  async function fetchRepos() {
    await octokit.repos
      .listForUser({
        username: 'abhinav-anshul',
      })
      .then((details) => list.push(details.data[0].name))

    setDropdown(true)

    console.log('List Array', list)
    console.log([...list])
  }

  return (
    <>
      <Button mode='strong' onClick={handleButtonClick}>
        Import Project
      </Button>

      <SidePanel onClose={handleClose} title='Repository' opened={opened}>
        <br />
        <br />
        <br />
        <Button onClick={fetchRepos}>Fetch</Button>
        {isShowDropdown ? (
          <DropDown items={[...list] || []} placeholder='Select a Repository' />
        ) : null}
        {console.log('?????????', [...list])}
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
