import React, {useState} from 'react'
import moment, {Moment} from 'moment'

import './DatePicker.scss'
import Month from './Month/Month'
import Header from './Header/Header'
import {YearView} from './YearView/YearView'
import {TCalendarMode} from './TCalendarMode'

interface IProps {
    range: boolean,
    fromDate?: Moment,
    untilDate?: Moment,
    initialDate?: Moment
    months: number,
    onFromDateChanged: (date: Moment | undefined) => void
    onUntilDateChanged: (date: Moment | undefined) => void
}

const DatePicker = (
    {
        range = false,
        fromDate,
        untilDate,
        initialDate,
        months = 1,
        onFromDateChanged,
        onUntilDateChanged
    }: IProps
) => {
    const [calendarMode, setCalendarMode] = useState<TCalendarMode>('normal')
    const [currentDate, setCurrentDate] = useState<Moment>(fromDate
        ? fromDate.clone()
        : initialDate ?  initialDate : moment())
    const [hoverDate, setHoverDate] = useState<Moment | undefined>(initialDate || undefined)

    const monthsArray = []
    for (let monthIndex = 0; monthIndex < months; monthIndex++) {
        monthsArray.push(monthIndex)
    }

    const width = (18.9 * months) + (months - 1)

    return <div className={'date-time-range-picker-dates'} style={{width: `${width}em`}}>
        <Header date={currentDate}
                months={months}
                onPrevMonth={() => setCurrentDate(currentDate.clone().subtract(1, 'month'))}
                onNextMonth={() => setCurrentDate(currentDate.clone().add(1, 'month'))}
                onPrevYear={() => setCurrentDate(currentDate.clone().subtract(1, 'year'))}
                onNextYear={() => setCurrentDate(currentDate.clone().add(1, 'year'))}
                calendarMode={calendarMode}
                setCalendarMode={setCalendarMode}
        />
        <YearView
            isRender={calendarMode === 'year'}
            setCalendarMode={setCalendarMode}
            currentDate={currentDate}
            setCurrentDate={setCurrentDate}
        />
        <div className={'date-time-range-picker-months'}>
            {monthsArray.map(
                (monthIndex: number) => {
                    return (
                        <Month month={Number(currentDate.clone().add(monthIndex, 'month').format('M'))}
                               year={Number(currentDate.clone().add(monthIndex, 'month').format('YYYY'))}
                               key={`month${monthIndex}`}
                               showDaysPreviousMonth={monthIndex === 0}
                               showDaysNextMonth={monthIndex === (months - 1)}
                               fromDate={fromDate}
                               untilDate={untilDate}
                               hoverDate={hoverDate}
                               onDaySelected={
                                   (selectedDate: Moment) => {
                                       if (!fromDate || (fromDate && untilDate)) {
                                           onFromDateChanged(selectedDate.clone())
                                           onUntilDateChanged(range ? undefined : selectedDate.clone())
                                           return
                                       }

                                       if (selectedDate.isBefore(fromDate)) {
                                           onFromDateChanged(selectedDate.clone())
                                           onUntilDateChanged(fromDate)

                                           return
                                       }

                                       onUntilDateChanged(selectedDate.clone())
                                   }
                               }
                               onDayHover={
                                   (onHoverDate: Moment | undefined) => {
                                       setHoverDate(onHoverDate)
                                   }
                               }
                        />
                    )
                }
            )}
        </div>
    </div>
}

export default DatePicker
