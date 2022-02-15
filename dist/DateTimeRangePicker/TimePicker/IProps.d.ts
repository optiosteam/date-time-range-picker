import { Moment } from 'moment';
interface IProps {
    time?: Moment;
    step: number;
    onTimeChanged: (time: Moment) => void;
}
export default IProps;
