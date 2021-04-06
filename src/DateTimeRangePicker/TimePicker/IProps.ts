import {Moment} from 'moment'

interface IProps {
    time?: Moment,
    step: number,
    onTimeChanged: (time: Moment) => void,
    isDisabled?: boolean
}

export default IProps
