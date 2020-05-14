/* eslint-disable  */
import React, { useState, useEffect } from 'react'
import { SidePanel, Button, DropDown, TextInput, textStyle } from '@aragon/ui'
import { Octokit } from '@octokit/rest'

function Import() {
  const [opened, setOpened] = useState(false)

  const [list, setList] = useState([])

  // const [selected, setSelected] = useState(-1)

  const token = localStorage.getItem('GithubToken')

  async function handleButtonClick() {
    setOpened(true)
    await octokit.repos
      .listForUser({
        username: 'abhinav-anshul',
      })

      .then((details) => {
        let x = 0
        let arr = []
        while (x < details.data.length) {
          arr.push(details.data[x].name)
          x++
        }

        setList([...arr])
      })
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

  const OAUTH_TOKEN = localStorage.getItem('access_token')

  const octokit = new Octokit({
    auth: OAUTH_TOKEN,
  })

  return (
    <>
      <Button mode='strong' onClick={handleButtonClick}>
        Import Project
      </Button>

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
