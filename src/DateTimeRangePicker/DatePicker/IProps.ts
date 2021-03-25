import moment, {Moment} from 'moment'

interface IProps {
    range: boolean,
    fromDate?: moment.Moment,
    untilDate?: moment.Moment,
    months: number,
    onFromDateChanged: (date: Moment | undefined) => void
    onUntilDateChanged: (date: Moment | undefined) => void,
    displayRanges: []
}

export default IProps
