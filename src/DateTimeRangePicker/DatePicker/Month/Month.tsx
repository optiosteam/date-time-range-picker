import React, {ReactElement, useState} from 'react'
import moment, {Moment} from 'moment'

import IProps from './IProps'

const Month: React.FunctionComponent<IProps> = (
    {
        month,
        year,
        fromDate,
        untilDate,
        hoverDate,
        showDaysPreviousMonth ,
        showDaysNextMonth,
        onDaySelected,
        onDayHover,
        data
    }
) => {
    const date = moment(`${month}-${year}`, 'M-YYYY')

    const getDays = (): ReactElement[] => {
        const currentDate = date.clone().startOf('month').startOf('week')
        const endDate = date.clone().endOf('month').endOf('week')
        const dates: Moment[] = []

        while (currentDate.isBefore(endDate)) {
            dates.push(currentDate.clone())
            currentDate.add(1, 'day')
        }

        return dates.map((buttonDate: Moment) => {
            const classNames = []
            let reason = ''

            if (data) {
                    data.forEach(d => {
                        const startIncomingDataDate = moment(d.starts_at)
                        const endIncomingDataDate = moment(d.ends_at)
                        if (buttonDate.isSame(startIncomingDataDate, 'day') &&
                            !startIncomingDataDate.isSame(endIncomingDataDate, 'day')) {
                            classNames.push('selected', 'selected-active-from-date')
                            reason = d.reason
                        } else if (buttonDate.isSame(endIncomingDataDate, 'day') &&
                            !startIncomingDataDate.isSame(endIncomingDataDate, 'day')) {
                            classNames.push('selected', 'selected-active-until-date')
                            reason = d.reason
                        } else if (buttonDate.isSame(startIncomingDataDate, 'day') &&
                            startIncomingDataDate.isSame(endIncomingDataDate, 'day')) {
                            classNames.push('selected')
                            reason = d.reason
                        } else if (buttonDate.isBetween(startIncomingDataDate, endIncomingDataDate, 'day', '[]')) {
                            classNames.push('selected', 'selected-active-in-range')
                            reason = d.reason
                        }
                    })
                }

            if (! buttonDate.isSame(date, 'month')) {
                if (buttonDate.isBefore(date) && ! showDaysPreviousMonth) {
                    return <span className={'dummy-day'} key={`day${buttonDate.format('YYYYMMDD')}`}/>
                }

                if (buttonDate.isAfter(date) && ! showDaysNextMonth) {
                    return <span className={'dummy-day'} key={`day${buttonDate.format('YYYYMMDD')}`}/>
                }

                classNames.push('other-month')
            }

            if (fromDate && buttonDate.isSame(fromDate, 'day')) {
                classNames.push('active')
                classNames.push('active-from-date')

                if (!untilDate && hoverDate && hoverDate.isBefore(buttonDate, 'day')) {
                    classNames.push('active-from-date-reverse')
                }
            }

            if (untilDate && buttonDate.isSame(untilDate, 'day')) {
                classNames.push('active')
                classNames.push('active-until-date')
            }

            if (fromDate && untilDate && buttonDate.isBetween(fromDate, untilDate, 'day', '[]')) {
                classNames.push('in-range')
            }

            if (
                fromDate
                && ! untilDate
                && hoverDate
                && (
                    buttonDate.isBetween(fromDate, hoverDate, 'day', '[]')
                    || buttonDate.isBetween(hoverDate, fromDate, 'day', '[]')
                )
            ) {
                classNames.push('hover-range')
            }

            if (hoverDate  && buttonDate.isSame(hoverDate, 'day')) {
                classNames.push('hover')

                if (fromDate && !untilDate) {
                    if (fromDate.isAfter(buttonDate, 'day')) {
                        classNames.push('hover-past')
                    }

                    if (fromDate.isBefore(buttonDate, 'day')) {
                        classNames.push('hover-future')
                    }
                }
            }

            return <button
                key={`day${buttonDate.format('YYYYMMDD')}`}
                className={classNames.join(' ')}
                onClick={
                    () => {
                        onDaySelected(buttonDate.clone())
                    }
                }
                onMouseEnter={
                    () => {
                        onDayHover(buttonDate.clone())
                    }
                }
                type={'button'}
                title={`Reason: ${reason}`}
            >
                {buttonDate.format('D')}
            </button>
        })
    }

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
        <div className={'date-time-range-picker-month-days'} onMouseLeave={() => onDayHover(undefined)}>
            {getDays()}
        </div>
    </div>
}

export default Month
