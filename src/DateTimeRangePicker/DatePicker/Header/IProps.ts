import moment from 'moment'

interface IProps {
    date: moment.Moment,
    months: number,
    onNextMonth: () => void,
    onPrevMonth: () => void
}

export default IProps
