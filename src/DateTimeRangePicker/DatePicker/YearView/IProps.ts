import {TCalendarMode} from '../TCalendarMode'
import {Moment} from 'moment'

export interface IProps {
    isRender: boolean
    currentDate: Moment
    setCurrentDate: (date: Moment) => void
    setCalendarMode: (mode: TCalendarMode) => void
}
