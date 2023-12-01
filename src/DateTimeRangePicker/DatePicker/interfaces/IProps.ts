import {Moment} from 'moment'
import {IMonth} from './IMonth'

interface IProps {
    range: boolean,
    fromDate?: Moment,
    untilDate?: Moment,
    initialDate?: Moment
    months: number,
    onFromDateChanged: (date: Moment | undefined) => void
    onUntilDateChanged: (date: Moment | undefined) => void
    onMonthChange?: (month: { month: string; convertedDate: string; momentObject: moment.Moment }[]) => void
}

export default IProps
