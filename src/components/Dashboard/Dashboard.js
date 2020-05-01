/* eslint-disable prettier/prettier */

import React from 'react'
import { Header, Split } from '@aragon/ui'
import ProfileHeader from './ProfileHeader'
import DashboardStats from './DashboardStats'
import Import from './Import'
// import TaskTable from './TaskTable'
// import { tasks } from '../../mock-data'

function Dashboard() {
  // TODO - only for testing we need to use the  connected account
  // const connectedAccount = useConnectedAccount()
  // const connectedAccount = '0x593e1F9809658d0c92e9f092cF01Aad7D0d734f3'

  return (
    <React.Fragment>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: '1rem',
        }}
      >
        <Import />
      </div>

      <Header primary='Profile' />
      <ProfileHeader active />
      <Split
        // primary={
        //   <TaskTable tasks={tasks} connectedAccount={connectedAccount} />
        // }
        secondary={<DashboardStats />}
      />
    </React.Fragment>
  )
}

export default Dashboard
