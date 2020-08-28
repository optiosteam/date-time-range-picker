import React, {useEffect, useState} from 'react'
import moment, {Moment} from 'moment'

import './DateTimeRangePicker.scss'
import IProps from './IProps'
import TimePicker from './TimePicker/TimePicker'
import DatePicker from './DatePicker/DatePicker'
import Utils from './Utils'

const DateTimeRangePicker: React.FunctionComponent<IProps> = (
    {
        date = true,
        range = false,
        time = false,
        inline = true,
        fromDate,
        untilDate,
        months = 1,
        onChange
    }
) => {
    const [currentFromDate, setCurrentFromDate] = useState<Moment | undefined>(fromDate ? fromDate.clone() : undefined)
    const [currentUntilDate, setCurrentUntilDate] = useState<Moment | undefined>(untilDate ? untilDate.clone() : undefined)
    const [currentFromTime, setCurrentFromTime] = useState<Moment | undefined>(fromDate ? fromDate.clone() : undefined)
    const [currentUntilTime, setCurrentUntilTime] = useState<Moment | undefined>(untilDate ? untilDate.clone() : undefined)
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

    return <div className={'date-time-range-picker'}>
        {date
            ? <DatePicker
                range={range}
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
