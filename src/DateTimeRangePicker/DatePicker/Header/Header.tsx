import React from 'react'

import IProps from './IProps'

const Header: React.FunctionComponent<IProps> = ({date, months, onPrevMonth, onNextMonth}) => {
    const monthsArray = []
    for (let monthIndex = 0; monthIndex < months; monthIndex++) {
        monthsArray.push(monthIndex)
    }

    return <div className={'date-time-range-picker-header'}>
        <button className={'date-time-range-picker-header-prev'} onClick={onPrevMonth}>&laquo;</button>
        {monthsArray.map(
            (monthIndex: number) => {
                return <div className={'date-time-range-picker-header-month'} key={`monthHeader${monthIndex}`}>
                    {date.clone().add(monthIndex, 'months').format('MMMM YYYY')}
                </div>
            }
        )}

        <button className={'date-time-range-picker-header-next'} onClick={onNextMonth}>&raquo;</button>
    </div>
}

export default Header
