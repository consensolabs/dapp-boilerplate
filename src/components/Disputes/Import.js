/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { SidePanel, Button, DropDown, TextInput } from '@aragon/ui'
// import GitHub from 'github-api'
// import GithubAPI from '../../GithubAPI'

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
          items={['Wandering Thunder', 'Black Wildflower', 'Ancient Paper']}
          placeholder='Select a Repository'
        />
        <br />
        <TextInput placeholder='Provide a Name' />
        <br />
        <TextInput placeholder='Budget' />
      </SidePanel>
    </>
  )
}

export default Import
