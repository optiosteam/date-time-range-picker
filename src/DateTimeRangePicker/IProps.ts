import {Moment} from 'moment'

interface IProps {
    date?: boolean,
    time?: boolean,
    range?: boolean,
    inline?: boolean,
    fromDate?: Moment,
    untilDate?: Moment,
    months?: number,
    onChange?: (fromDateTime: Moment, untilDateTime?: Moment) => void
    displayRanges?: [],
    isDisabled?: boolean
}

export default IProps
