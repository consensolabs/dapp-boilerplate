/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { SidePanel, Button, DropDown, TextInput } from '@aragon/ui'
import { Octokit } from '@octokit/rest'

function Import() {
  const [opened, setOpened] = useState(false)

  const token = localStorage.getItem('GithubToken')
  console.log(token)

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

  // async function userInfo() {
  //   const { data } = await octokit.request('/user')
  //   console.log(data)
  //   return data
  // }
  const list = []
  function fetchRepos() {
    octokit.repos
      .listForUser({
        username: 'abhinav-anshul',
      })
      .then((details) => console.log(list.push(details.data)))
    console.log(list)
  }

  return (
    <>
      <Button mode='strong' onClick={handleButtonClick}>
        Import Project
      </Button>
      <Button onClick={fetchRepos}>Fetch</Button>

      <SidePanel onClose={handleClose} title='Repository' opened={opened}>
        <br />
        <br />
        <br />
        <DropDown
          items={[
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
            'list',
          ]}
          placeholder='Select a Repository'
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
