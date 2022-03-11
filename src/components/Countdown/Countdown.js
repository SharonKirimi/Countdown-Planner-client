import { useState, React } from 'react'
import { add } from 'date-fns'

import { Timer } from 'components/Timer'

import style from './Countdown.scss'

// Defaults to 6 days, 22 hours, 40 minutes and 0 seconds from now in your timezone.
const futureDate = add(new Date(), {
  weeks: 7,
  days: 6,
  hours: 22,
  minutes: 40
})

function Countdown () {
  const [TimerVisible, setTimerVisible] = useState(false)
  const TimerEl = TimerVisible ? <Timer futureDate={futureDate} /> : null
  const toggleText = TimerVisible ? 'Hide Countdown' : 'Show Countdown'

  return (
    <div className={ style.pageContainer }>
      <h1>Time remaining to the end of the year</h1>
      <p>See the time </p>
      { TimerEl }
      <button
        className={ style.toggleButton }
        onClick={() => setTimerVisible(prev => !prev) }
      >
        { toggleText }
      </button>
    </div>
  )
}

export default Countdown
