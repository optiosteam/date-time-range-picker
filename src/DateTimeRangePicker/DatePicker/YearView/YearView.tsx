import React, {FunctionComponent} from 'react'
import {IProps} from './IProps'
import moment from 'moment/moment'

export const YearView: FunctionComponent<IProps> = ({isRender, currentDate, setCurrentDate, setCalendarMode}) => {
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
