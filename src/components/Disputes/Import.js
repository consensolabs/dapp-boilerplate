/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { SidePanel, Button } from '@aragon/ui'

function Import() {
  const [opened, setOpened] = useState(false)

  const token = localStorage.getItem('GithubToken')

  function handleButtonClick() {
    setOpened(true)
  }

  function handleClose() {
    setOpened(false)
  }
  function test() {
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then((response) => response.json())
    //   .then((json) => console.log(json))

    fetch('https://api.github.com/users', {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    }).then((res) => console.log(res.json()))
  }

  return (
    <>
      <Button mode='strong' onClick={handleButtonClick}>
        Import Project
      </Button>

      <SidePanel onClose={handleClose} title='Repository' opened={opened}>
        <Button onClick={test} mode='wide'>
          Fetch Repos from GitHub
        </Button>
      </SidePanel>
    </>
  )
}

export default Import
