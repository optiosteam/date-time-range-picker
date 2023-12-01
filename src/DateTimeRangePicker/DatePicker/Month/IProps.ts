import {Moment} from 'moment'
import {IData} from '../interfaces/IData'

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
    data?: IData[]
}

export default IProps
