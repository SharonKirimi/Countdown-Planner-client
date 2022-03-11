import React from 'react'
import style from './TimerCell.scss'

export const TimerCell = ({ label, value }) => {
  const formattedValue = value < 10 ? `0${value}` : value.toString()

  return (
    <div className={ style.TimerCell }>
      <span className={ style.TimerCellValue }>{ formattedValue }</span>
      <span className={ style.TimerCellLabel }>{ label }</span>
    </div>
  )
}
