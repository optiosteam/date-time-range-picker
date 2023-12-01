import {Moment} from 'moment'
import {TCalendarLocaleSupport} from './TCalendarLocaleSupport'
import {IMonth} from './DatePicker/interfaces/IMonth'
import {IData} from './DatePicker/interfaces/IData'

interface IProps {
    date?: boolean,
    data?: IData[],
    time?: boolean,
    range?: boolean,
    inline?: boolean,
    fromDate?: Moment,
    untilDate?: Moment,
    initialDate?: Moment
    months?: number,
    onChange?: (fromDateTime: Moment, untilDateTime?: Moment) => void
    onMonthChange?: (month: { month: string; convertedDate: string; momentObject: moment.Moment }[]) => void
    calendarLocale?: TCalendarLocaleSupport
}

export default IProps
