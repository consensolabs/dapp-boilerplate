import iconAnj from './assets/activity-icon-anj.svg'
import execute from './assets/activity-icon-execute-ruling.svg'

// The different types of activity
const ACTIVITY_TYPES = new Map(
  Object.entries({
    increaseCount({ amount }) {
      return {
        icon: execute,
        title: 'Increment Counter',
        description: `
          Counter incremented by ${amount}
        `,
      }
    },
    decreaseCount({ amount }) {
      return {
        icon: execute,
        title: 'Decrement Counter',
        description: `
      Counter decremented by ${amount}
    `,
      }
    },
    transaction({ transactionHash }) {
      return {
        title: 'Transaction',
        icon: iconAnj,
        description: `
          Transaction: ${transactionHash}
        `,
      }
    },
  })
)

export function getActivityData(activityType, activityParams) {
  const activity =
    ACTIVITY_TYPES.get(activityType) || ACTIVITY_TYPES.get('transaction')
  return activity(activityParams || {})
}
