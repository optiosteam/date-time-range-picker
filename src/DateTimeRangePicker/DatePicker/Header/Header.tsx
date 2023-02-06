import React from 'react'

import IProps from './IProps'

const Header: React.FunctionComponent<IProps> = ({
   date,
   months,
   onPrevMonth,
   onNextMonth,
   calendarMode,
   setCalendarMode,
   onPrevYear,
   onNextYear
}) => {
    const monthsArray = []
    for (let monthIndex = 0; monthIndex < months; monthIndex++) {
        monthsArray.push(monthIndex)
    }

    return <div className={'date-time-range-picker-header'}>
        <button className={'date-time-range-picker-header-prev'} onClick={onPrevMonth} type={'button'}>&laquo;</button>
        {calendarMode === 'normal' ? null : <button className={'date-time-range-picker-header-prev-year'}
                 onClick={onPrevYear} type={'button'}>&#60;</button>}
        {monthsArray.map(
            (monthIndex: number) => {
                return <div className={`date-time-range-picker-header-month ${calendarMode}`}
                            key={`monthHeader${monthIndex}`}
                            onClick={() => setCalendarMode('year')}>
                    {date.clone().add(monthIndex, 'months').format(calendarMode === 'normal' ? 'MMMM YYYY' : 'YYYY')}
                </div>
            }
        )}
        { calendarMode === 'normal'
            ? null
            : <button className={'date-time-range-picker-header-next-year'} onClick={onNextYear}
                 type={'button'}>&#62;</button> }
        <button className={'date-time-range-picker-header-next'} onClick={onNextMonth} type={'button'}>&raquo;</button>
    </div>
}

export default Header
