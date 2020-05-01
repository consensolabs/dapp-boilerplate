/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { Button, SidePanel } from '@aragon/ui'

function Import() {
  const [opened, setOpened] = useState(false)

  const closePanel = () => {
    setOpened(false)
  }

  const openPanel = () => {
    setOpened(true)
  }

  return (
    <>
      <Button mode='strong' onClick={openPanel}>
        Import
      </Button>

      <SidePanel onClose={closePanel} title='GITHUB' opened={opened}>
        Please select repository
      </SidePanel>
    </>
  )
}

export default Import
