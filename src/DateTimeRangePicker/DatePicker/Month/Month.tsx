import React, {ReactElement} from 'react'
import moment, {Moment} from 'moment'

interface IProps {
    month: number,
    year: number,
    fromDate?: Moment,
    untilDate?: Moment,
    hoverDate?: Moment,
    showDaysPreviousMonth: boolean,
    showDaysNextMonth: boolean,
    onDaySelected: (date: Moment) => void,
    onDayHover: (date?: Moment | undefined) => void
}

const Month = (
    {
        month,
        year,
        fromDate,
        untilDate,
        hoverDate,
        showDaysPreviousMonth ,
        showDaysNextMonth,
        onDaySelected,
        onDayHover
    }: IProps
) => {
    const date = moment(`${month}-${year}`, 'M-YYYY')

    const getDays = (): ReactElement[] => {
        const currentDate = date.clone().startOf('month').startOf('week')
        const endDate = date.clone().endOf('month').endOf('week')
        const dates: Moment[] = []
        while (currentDate.isBefore(endDate)) {
            dates.push(currentDate.clone())
            currentDate.add(1, 'day')
        }

        return dates.map((buttonDate: Moment) => {
            const classNames = []
            if (! buttonDate.isSame(date, 'month')) {
                if (buttonDate.isBefore(date) && ! showDaysPreviousMonth) {
                    return <span className={'dummy-day'} key={`day${buttonDate.format('YYYYMMDD')}`}/>
                }

                if (buttonDate.isAfter(date) && ! showDaysNextMonth) {
                    return <span className={'dummy-day'} key={`day${buttonDate.format('YYYYMMDD')}`}/>
                }

                classNames.push('other-month')
            }

            if (fromDate && buttonDate.isSame(fromDate, 'day')) {
                classNames.push('active')
                classNames.push('active-from-date')

                if (!untilDate && hoverDate && hoverDate.isBefore(buttonDate, 'day')) {
                    classNames.push('active-from-date-reverse')
                }
            }

            if (untilDate && buttonDate.isSame(untilDate, 'day')) {
                classNames.push('active')
                classNames.push('active-until-date')
            }

            if (fromDate && untilDate && buttonDate.isBetween(fromDate, untilDate, 'day', '[]')) {
                classNames.push('in-range')
            }

            if (
                fromDate
                && ! untilDate
                && hoverDate
                && (
                    buttonDate.isBetween(fromDate, hoverDate, 'day', '[]')
                    || buttonDate.isBetween(hoverDate, fromDate, 'day', '[]')
                )
            ) {
                classNames.push('hover-range')
            }

            if (hoverDate  && buttonDate.isSame(hoverDate, 'day')) {
                classNames.push('hover')

                if (fromDate && !untilDate) {
                    if (fromDate.isAfter(buttonDate, 'day')) {
                        classNames.push('hover-past')
                    }

                    if (fromDate.isBefore(buttonDate, 'day')) {
                        classNames.push('hover-future')
                    }
                }
            }

            return <button
                key={`day${buttonDate.format('YYYYMMDD')}`}
                className={classNames.join(' ')}
                onClick={
                    () => {
                        onDaySelected(buttonDate.clone())
                    }
                }
                onMouseEnter={
                    () => {
                        onDayHover(buttonDate.clone())
                    }
                }
                type={'button'}
            >
                {buttonDate.format('D')}
            </button>
        })
    }

    return <div className={'date-time-range-picker-month'}>
        <div className={'date-time-range-picker-month-daynames'}>
            <div>{date.startOf('week').format('dd')}</div>
            <div>{date.startOf('week').add(1, 'days').format('dd')}</div>
            <div>{date.startOf('week').add(2, 'days').format('dd')}</div>
            <div>{date.startOf('week').add(3, 'days').format('dd')}</div>
            <div>{date.startOf('week').add(4, 'days').format('dd')}</div>
            <div>{date.startOf('week').add(5, 'days').format('dd')}</div>
            <div>{date.startOf('week').add(6, 'days').format('dd')}</div>
        </div>
        <div className={'date-time-range-picker-month-days'} onMouseLeave={() => onDayHover(undefined)}>
            {getDays()}
        </div>
    </div>
}

export default Month
