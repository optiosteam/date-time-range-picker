import React from 'react'
import moment, {Moment} from 'moment'

import './DatePicker.scss'
import IProps from './IProps'
import Month from './Month/Month'
import Header from './Header/Header'

const DatePicker: React.FunctionComponent<IProps> = (
    {
        range = false,
        displayRanges,
        fromDate,
        untilDate,
        months = 1,
        onFromDateChanged,
        onUntilDateChanged,
        assignedColors
    }
) => {
    const [currentDate, setCurrentDate] = React.useState<Moment>(fromDate ? fromDate.clone() : moment())
    const [hoverDate, setHoverDate] = React.useState<Moment>()

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
                               displayRanges={displayRanges}
                               assignedColors={assignedColors}
                        />
                    )
                }
            )}
        </div>
    </div>
}

export default DatePicker
