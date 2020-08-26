import moment, {Moment} from 'moment'

interface IProps {
    range: boolean,
    fromDate?: moment.Moment,
    untilDate?: moment.Moment,
    months: number,
    onFromDateChanged: (date: Moment) => void
    onUntilDateChanged: (date: Moment) => void
}

export default IProps
