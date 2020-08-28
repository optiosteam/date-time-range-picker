import {Moment} from 'moment'

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

export default IProps
