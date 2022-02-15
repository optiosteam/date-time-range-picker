import moment, { Moment } from 'moment';
declare class Utils {
    static getDateTime(hasDate: boolean, hasTime: boolean, date?: Moment, time?: Moment): moment.Moment | undefined;
}
export default Utils;
