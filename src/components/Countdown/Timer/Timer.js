import React from 'react'
import { TimerCell } from 'components/TimerCell'
import { TimerSeparator } from 'components/TimerSeparator'
import { useTimer } from 'hooks'

import style from './Timer.module.scss'

export const Timer = ({ futureDate }) => {
  const { weeks, days, hours, minutes, seconds, isTimeUp } = useTimer(futureDate)
  const TimerContents = isTimeUp
    ? (
      <div className={ style.timeIsUp }>Time is up!!!</div>
    )
    : (
      <>
        <TimerCell value={weeks} label="Weeks" />
        <TimerSeparator />
        <TimerCell value={days} label="Days" />
        <TimerSeparator />
        <TimerCell value={hours} label="Hours" />
        <TimerSeparator />
        <TimerCell value={minutes} label="Minutes" />
        <TimerSeparator />
        <TimerCell value={seconds} label="Seconds" />
      </>
    )

  return (
    <div className={ style.TimerShell }>
      { TimerContents }
    </div>
  )
}
