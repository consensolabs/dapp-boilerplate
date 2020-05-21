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

  let USERNAMETEST = localStorage.getItem('USERNAME')

  const octokit = new Octokit({
    auth: TOKEN,
  })

  // async function userInfo() {
  //   const { data } = await octokit.request('/user')
  //   console.log(data.login)
  //   SETUSERNAME(data.login)
  //   return data.login
  // }
  // userInfo()

  async function handleButtonClick() {
    console.log(localStorage.getItem('ACCESS TOKEN'))

    setOpened(true)
    await octokit.repos
      .listForUser({
        // username: 'abhinav-anshul',
        username: USERNAMETEST,
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

  return (
    <>
      {wallet.account !== null ? (
        <Button mode='strong' onClick={handleButtonClick}>
          Import Project
        </Button>
      ) : null}
      {/* 
      <Button mode='strong' onClick={handleButtonClick}>
        Import Project
      </Button> */}

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
