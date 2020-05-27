/* eslint-disable prettier/prettier */
import React from 'react'
import { Header, Split } from '@aragon/ui'
import ProfileHeader from './ProfileHeader'
import DashboardStats from './DashboardStats'

function Dashboard() {
  return (
    <React.Fragment>
      <Header primary='Profile' />
      <ProfileHeader active />
      <Split secondary={<DashboardStats />} />
    </React.Fragment>
  )
}

export default Dashboard
