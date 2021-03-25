import React, {useEffect, useState} from 'react'
import moment, {Moment} from 'moment'

import './DateTimeRangePicker.scss'
import IProps from './IProps'
import TimePicker from './TimePicker/TimePicker'
import DatePicker from './DatePicker/DatePicker'
import Utils from './Utils'
import {Simulate} from 'react-dom/test-utils'

const DateTimeRangePicker: React.FunctionComponent<IProps> = (
    {
        date = true,
        range = false,
        displayRanges = [],
        time = false,
        inline = true,
        fromDate,
        untilDate,
        months = 1,
        onChange
    }
) => {

    // dummyData
    const startDate1 = moment()
    const endDate1 = startDate1.clone().add(7, 'days')

    const startDate2 = startDate1.clone().day(-14)
    const endDate2 = startDate2.clone().add(2, 'days')

    const startDate3 = startDate1.clone().set('year', 2021).set('month', 3).set('date', 10)
    const endDate3 = startDate3.clone().add(40, 'days')

    const dummyDates1 = []
    const dummyDates2 = []
    const dummyDates3 = []
    while (startDate1.isBefore(endDate1)) {
        dummyDates1.push(startDate1.clone())
        startDate1.add(1, 'day')
    }
    while (startDate2.isBefore(endDate2)) {
        dummyDates2.push(startDate2.clone())
        startDate2.add(1, 'day')
    }
    while (startDate3.isBefore(endDate3)) {
        dummyDates3.push(startDate3.clone())
        startDate3.add(1, 'day')
    }

    displayRanges = [dummyDates1, dummyDates2, dummyDates3]

    let assignedColors = []
    displayRanges.forEach(displayRange => {
        const allowedColors = ['red', 'green', 'yellow', 'orange', 'purple']
        const randomIndex = Math.floor(Math.random() * (allowedColors.length))
        const indexOf = displayRanges.indexOf(displayRange)
        assignedColors[indexOf] = allowedColors[randomIndex]
    })
    console.log(assignedColors)

    const [currentFromDate, setCurrentFromDate] = useState<Moment | undefined>(fromDate ? fromDate.clone() : undefined)
    const [currentUntilDate, setCurrentUntilDate] = useState<Moment | undefined>(
        untilDate ? untilDate.clone() : undefined
    )
    const [currentFromTime, setCurrentFromTime] = useState<Moment | undefined>(fromDate ? fromDate.clone() : undefined)
    const [currentUntilTime, setCurrentUntilTime] = useState<Moment | undefined>
    (untilDate ? untilDate.clone() : undefined
    )
    const [isMounted, setIsMounted] = useState<boolean>(false)

    useEffect(
        () => {
            if (! isMounted) {
                setIsMounted(true)

                return
            }

            if (! onChange) {
                return
            }

            const newFromDate = Utils.getDateTime(date, time, currentFromDate, currentFromTime)
            if (! newFromDate) {
                return
            }

            const newUntilDate = Utils.getDateTime(date, time, currentUntilDate, currentUntilTime)
            if (! newUntilDate) {
                onChange(newFromDate, newFromDate)
                return
            }
            onChange(newFromDate, newUntilDate)
        },
        [currentFromDate, currentFromTime, currentUntilDate, currentUntilTime]
    )

    // return <p>test</p>
    return <div className={'date-time-range-picker'}>
        {date
            ? <DatePicker
                range={range}
                displayRanges={displayRanges}
                assignedColors={assignedColors}
                months={months}
                fromDate={currentFromDate}
                untilDate={currentUntilDate}
                onFromDateChanged={
                    (changedDate: Moment | undefined) => {
                        setCurrentFromDate(changedDate)
                    }
                }
                onUntilDateChanged={
                    (changedDate: Moment | undefined) => {
                        setCurrentUntilDate(changedDate)
                    }
                }
            />
            : null
        }

        {
            time
                ? <div className={'date-time-range-picker-times'}>
                    <div>
                        <label>{range ? 'From' : 'Time'}</label>
                        <TimePicker
                            step={15}
                            time={currentFromTime}
                            onTimeChanged={
                                (changedTime: Moment) => {
                                    setCurrentFromTime(changedTime)
                                    if (! range) {
                                        setCurrentUntilTime(changedTime)
                                    }
                                }
                            }
                        />
                    </div>
                    {
                        range
                            ? <div>
                                <label>To</label>
                                <TimePicker
                                    step={15}
                                    time={currentUntilTime}
                                    onTimeChanged={
                                        (changedTime: Moment) => {
                                            setCurrentUntilTime(changedTime)
                                        }
                                    }
                                />
                            </div>
                            : null
                    }
                </div>
                : null
        }
    </div>
}

export default DateTimeRangePicker
