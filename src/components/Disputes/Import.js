/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { SidePanel, Button, DropDown } from '@aragon/ui'
// import GitHub from 'github-api'

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
        <DropDown
          items={['Wandering Thunder', 'Black Wildflower', 'Ancient Paper']}
          placeholder='Select a Repository'
        />
      </SidePanel>
    </>
  )
}

export default Import
