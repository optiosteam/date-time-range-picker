import React, {useEffect, useState} from 'react'
import moment, {Moment} from 'moment'
import 'moment/locale/nl'
import 'moment/locale/fr'
import 'moment/locale/de'

import './DateTimeRangePicker.scss'
import TimePicker from './TimePicker/TimePicker'
import DatePicker from './DatePicker/DatePicker'
import Utils from './Utils'

type TCalendarLocaleSupport = 'nl' | 'en' | 'de' | 'fr'

interface IProps {
    date?: boolean,
    time?: boolean,
    range?: boolean,
    inline?: boolean,
    fromDate?: Moment,
    untilDate?: Moment,
    initialDate?: Moment
    months?: number,
    onChange?: (fromDateTime: Moment, untilDateTime?: Moment) => void
    calendarLocale?: TCalendarLocaleSupport
}

const DateTimeRangePicker = (
    {
        date = true,
        range = false,
        time = false,
        inline = true,
        fromDate,
        untilDate,
        initialDate,
        months = 1,
        onChange,
        calendarLocale = 'en'
    }: IProps
) => {
    const [currentFromDate, setCurrentFromDate] = useState<Moment | undefined>(fromDate ? fromDate.clone() : undefined)
    const [currentUntilDate, setCurrentUntilDate] = useState<Moment | undefined>(
        untilDate ? untilDate.clone() : undefined
    )
    const [currentFromTime, setCurrentFromTime] = useState<Moment | undefined>(fromDate ? fromDate.clone() : undefined)
    const [currentUntilTime, setCurrentUntilTime] = useState<Moment | undefined>
    (untilDate ? untilDate.clone() : undefined
    )
    const [isMounted, setIsMounted] = useState<boolean>(false)
    moment.locale(calendarLocale)

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
        [currentFromDate, currentFromTime, currentUntilDate, currentUntilTime, date, isMounted, onChange, time]
    )

    return <div className={'date-time-range-picker'}>
        {date
            ? <DatePicker
                range={range}
                months={months}
                fromDate={currentFromDate}
                untilDate={currentUntilDate}
                initialDate={initialDate}
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
