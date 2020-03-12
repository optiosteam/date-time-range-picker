import React, {useEffect} from 'react'
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
    const [currentFromDate, setCurrentFromDate] = React.useState<Moment>(fromDate ? fromDate.clone() : undefined)
    const [currentUntilDate, setCurrentUntilDate] = React.useState<Moment>(untilDate ? untilDate.clone() : undefined)
    const [currentFromTime, setCurrentFromTime] = React.useState<Moment>(fromDate ? fromDate.clone() : undefined)
    const [currentUntilTime, setCurrentUntilTime] = React.useState<Moment>(untilDate ? untilDate.clone() : undefined)

    useEffect(
        () => {
            if (! onChange) {
                return
            }

            const newFromDate = Utils.getDateTime(date, time, currentFromDate, currentFromTime)
            if (! newFromDate) {
                return
            }

            if (! range) {
                onChange(newFromDate)

                return
            }

            const newUntilDate = Utils.getDateTime(date, time, currentUntilDate, currentUntilTime)
            if (! newUntilDate) {
                return
            }

            onChange(newFromDate, newUntilDate)
        }
    )

    return <div className={'date-time-range-picker'}>
        {date
            ? <DatePicker
                range={range}
                months={months}
                fromDate={currentFromDate}
                untilDate={currentUntilDate}
                onFromDateChanged={
                    (changedDate: Moment) => {
                        setCurrentFromDate(changedDate)
                    }
                }
                onUntilDateChanged={
                    (changedDate: Moment) => {
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
