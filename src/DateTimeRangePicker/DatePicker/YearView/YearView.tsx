import React from 'react'
import moment, {Moment} from 'moment/moment'
import {TCalendarMode} from '../TCalendarMode'

interface IProps {
    isRender: boolean
    currentDate: Moment
    setCurrentDate: (date: Moment) => void
    setCalendarMode: (mode: TCalendarMode) => void
}

export const YearView = ({isRender, currentDate, setCurrentDate, setCalendarMode}: IProps) => {
    if (!isRender) {
        return null
    }

    const setMonth = (monthNumber: number) => {
        setCalendarMode('normal')
        setCurrentDate(currentDate.set('month', monthNumber))
    }

    return (
        <div className={'date-time-range-picker-year-mode'}>
            {moment.months().map((month, i) => <button
                onClick={() => setMonth(i)} className={'monthButton'}>
                {month}
            </button>
            )}
        </div>
    )
}
