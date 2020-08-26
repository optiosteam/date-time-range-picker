import moment, {Moment} from 'moment'

class Utils {
    static getDateTime (hasDate: boolean, hasTime: boolean, date?: Moment, time?: Moment) {
        const newDateTime = moment()
        if (hasDate) {
            if (! date) {
                return
            }

            newDateTime.year(date.year()).month(date.month()).date(date.date())
        }

        if (hasTime) {
            if (! time) {
                return
            }

            newDateTime.hours(time.hours()).minutes(time.minutes())
        }

        return newDateTime
    }
}

export default Utils
