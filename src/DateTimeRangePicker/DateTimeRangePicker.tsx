import React from 'react'
import moment from 'moment'

import './DateTimeRangePicker.scss'
import IProps from './IProps'
import Month from './Month/Month'
import Header from './Header/Header'

const DateTimeRangePicker: React.FunctionComponent<IProps> = (
    {
        range = false,
        time = false,
        inline = true,
        fromDate = moment(),
        untilDate = moment(),
        months = 1
    }
) => {
    const monthsArray = []
    for (let monthIndex = 0; monthIndex < months; monthIndex++) {
        monthsArray.push(monthIndex)
    }

    const width = (18.9 * months) + (months - 1)

    return <div className={'date-time-range-picker'} style={{width: `${width}em`}}>
        <Header date={fromDate} months={months}/>
        <div className={'date-time-range-picker-months'}>
            {monthsArray.map(
                (monthIndex: number) => {
                    return (
                        <Month date={fromDate.clone().add(monthIndex, 'months')}
                               key={`month${monthIndex}`}
                               showDaysPreviousMonth={monthIndex === 0}
                               showDaysNextMonth={monthIndex === (months - 1)}
                        />
                    )
                }
            )}
        </div>
    </div>
}

export default DateTimeRangePicker
