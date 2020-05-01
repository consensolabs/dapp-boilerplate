import { useEffect, useState, useCallback } from 'react'
import { useContract } from '../web3-contracts'

import { retryMax } from '../utils/retry-max'
import { useActivity } from '../components/Activity/ActivityProvider'

import disputeManagerAbi from '../contracts/TodoList.json'
import CounterAbi from '../contracts/Counter.json'

const GAS_LIMIT = 1200000

// TodoList contract
function useTodoListContract() {
  return useContract(
    disputeManagerAbi.networks['10'].address,
    disputeManagerAbi.abi
  )
}

// Counter contract
function useCounterContract() {
  return useContract(CounterAbi.networks['10'].address, CounterAbi.abi)
}

export function useCounterActions() {
  const { addActivity } = useActivity()
  const counterContract = useCounterContract()

  const increase = useCallback(
    amount => {
      return addActivity(
        counterContract.increaseCounter(amount, {
          gasLimit: GAS_LIMIT,
        }),
        'increaseCounter',
        {}
      )
    },
    [addActivity, counterContract]
  )

  const decrease = useCallback(
    amount => {
      return addActivity(
        counterContract.decreaseCounter(amount, {
          gasLimit: GAS_LIMIT,
        }),
        'decreaseCounter',
        {}
      )
    },
    [addActivity, counterContract]
  )

  return { increase, decrease }
}

export function useListCount() {
  const [count, setCount] = useState(1)

  const disputeManagerContract = useTodoListContract()

  useEffect(() => {
    let cancelled = false

    const fetchListCount = async () => {
      if (!disputeManagerContract) {
        return
      }

      retryMax(() =>
        disputeManagerContract
          .taskCounter()
          .then(count => {
            if (!cancelled) {
              setCount(count)
            }
          })
          .catch(err => {
            console.log(err)
          })
      )
    }

    fetchListCount()

    return () => {
      cancelled = true
    }
  }, [disputeManagerContract])

  return count
}

export function useCounterCount() {
  const [count, setCount] = useState(0)

  const counterContract = useCounterContract()

  useEffect(() => {
    let cancelled = false

    const fetchCount = async () => {
      if (!counterContract) {
        return
      }

      retryMax(() =>
        counterContract
          .getCounter()
          .then(count => {
            if (!cancelled) {
              setCount(count)
            }
          })
          .catch(err => {
            console.log(err)
          })
      )
    }

    fetchCount()

    return () => {
      cancelled = true
    }
  }, [counterContract])

  return count
}

export function getCounterCount() {
  const [count, setCount] = useState(0)

  const counterContract = useCounterContract()

  const cancelled = false

  const fetchCount = async () => {
    if (!counterContract) {
      return
    }

    retryMax(() =>
      counterContract
        .getCounter()
        .then(count => {
          if (!cancelled) {
            setCount(count)
          }
        })
        .catch(err => {
          console.log(err)
        })
    )
  }

  fetchCount()

  return [count, fetchCount]
}
