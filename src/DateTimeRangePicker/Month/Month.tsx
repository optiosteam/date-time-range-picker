import React, {ReactElement} from 'react'
import moment from 'moment'

import IProps from './IProps'

const Month: React.FunctionComponent<IProps> = (
    {
        date,
        showDaysPreviousMonth ,
        showDaysNextMonth
    }
) => {
    return <div className={'date-time-range-picker-month'}>
        <div className={'date-time-range-picker-month-daynames'}>
            <div>{date.startOf('week').format('dd')}</div>
            <div>{date.startOf('week').add(1, 'days').format('dd')}</div>
            <div>{date.startOf('week').add(2, 'days').format('dd')}</div>
            <div>{date.startOf('week').add(3, 'days').format('dd')}</div>
            <div>{date.startOf('week').add(4, 'days').format('dd')}</div>
            <div>{date.startOf('week').add(5, 'days').format('dd')}</div>
            <div>{date.startOf('week').add(6, 'days').format('dd')}</div>
        </div>
        <div className={'date-time-range-picker-month-days'}>
            {getDays(date, showDaysPreviousMonth, showDaysNextMonth)}
        </div>
    </div>
}

const getDays = (date: moment.Moment, showDaysPreviousMonth: boolean, showDaysNextMonth: boolean): ReactElement[] => {
    const days = []
    const currentDate = date.clone().startOf('month').startOf('week')
    const endDate = date.clone().endOf('month').endOf('week')
    while (currentDate.isBefore(endDate)) {
        const classNames = []
        if (! currentDate.isSame(date, 'month')) {
            if (currentDate.isBefore(date) && ! showDaysPreviousMonth) {
                days.push(<span className={'dummy-day'}/>)
                currentDate.add(1, 'day')
                continue
            }
            if (currentDate.isAfter(date) && ! showDaysNextMonth) {
                days.push(<span className={'dummy-day'}/>)
                currentDate.add(1, 'day')
                continue
            }

            classNames.push('other-month')
        }

        days.push(
            <button key={`day${currentDate.format('YMD')}`} className={classNames.join(' ')}>
                {currentDate.format('D')}
            </button>
        )
        currentDate.add(1, 'day')
    }

    return days
}

export default Month
