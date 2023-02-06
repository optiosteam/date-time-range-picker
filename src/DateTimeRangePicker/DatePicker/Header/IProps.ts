import moment from 'moment'
import {TCalendarMode} from '../TCalendarMode'

interface IProps {
    date: moment.Moment,
    months: number,
    onNextMonth: () => void,
    onPrevMonth: () => void
    onNextYear: () => void
    onPrevYear: () => void
    calendarMode: TCalendarMode
    setCalendarMode: (mode: TCalendarMode) => void
}

export default IProps
