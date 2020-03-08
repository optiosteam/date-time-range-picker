import moment from 'moment'

interface IProps {
    range: boolean,
    time: boolean,
    inline: boolean,
    fromDate: moment.Moment,
    untilDate: moment.Moment,
    months: number
}

export default IProps
