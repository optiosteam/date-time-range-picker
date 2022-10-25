import {Moment} from 'moment'

interface IProps {
    range: boolean,
    fromDate?: Moment,
    untilDate?: Moment,
    initialDate?: Moment
    months: number,
    onFromDateChanged: (date: Moment | undefined) => void
    onUntilDateChanged: (date: Moment | undefined) => void
}

export default IProps
