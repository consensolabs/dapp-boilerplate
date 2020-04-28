/* eslint-disable prettier/prettier */
import React from 'react'
import { Header } from '@aragon/ui'

// import TaskBox from './TasksBox'
import TaskTable from './TasksTable'
import { tasks } from '../../mock-data'

const Tasks = () => {
  return (
    <>
      <Header primary='Leaderboard' />
      {/* <TaskBox /> */}
      <TaskTable tasks={tasks} />
    </>
  )
}

export default Tasks
