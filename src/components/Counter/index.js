/* eslint-disable prettier/prettier */

import React, { useState } from 'react'
import { Button, Loader } from 'rimble-ui'

import styles from './Counter.module.scss'
import {
  useCounterCount,
  useCounterActions,
  useCounterFetch,
} from '../../hooks/useSampleContracts'

export default function Counter(props) {
  // eslint-disable-next-line no-unused-vars
  const countInit = useCounterCount()
  const { fetch, count } = useCounterFetch()
  const [sending, setSending] = useState(false)
  const { increase, decrease } = useCounterActions()
  const increaseCounter = async (number) => {
    try {
      if (!sending) {
        setSending(true)
        await increase(number)
        setSending(false)
        fetch()
      }
    } catch (e) {
      setSending(false)
      console.log(e)
    }
  }

  const decreaseCounter = async (number) => {
    try {
      if (!sending) {
        setSending(true)
        //       await instance.methods.increaseCounter(number).send({ from: accounts[0] });
        await decrease(number)
        setSending(false)
        fetch()
      }
    } catch (e) {
      setSending(false)
      console.log(e)
    }
  }

  return (
    <div className={styles.counter}>
      <h3> Counter Instance </h3>
      <React.Fragment>
        <div className={styles.dataPoint}>
          <div className={styles.label}>Counter Value:</div>
          <div className={styles.value}>
            {parseInt(count) || parseInt(countInit)}
          </div>
        </div>

        <React.Fragment>
          <div className={styles.label}>
            <strong>Counter Actions</strong>
          </div>
          <div className={styles.buttons}>
            <Button onClick={() => increaseCounter(1)} size='small'>
              {sending ? (
                <Loader className={styles.loader} color='white' />
              ) : (
                <span> Increase Counter by 1</span>
              )}
            </Button>
            <Button onClick={() => decreaseCounter(1)} size='small'>
              {sending ? (
                <Loader className={styles.loader} color='white' />
              ) : (
                <span> Decrease Counter by 1</span>
              )}
            </Button>
          </div>
        </React.Fragment>
      </React.Fragment>
      {/* )} */}
    </div>
  )
}
