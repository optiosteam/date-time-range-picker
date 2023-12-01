import React from 'react'
import DateTimeRangePicker from './DateTimeRangePicker'
import moment from 'moment'
import {IData} from './DatePicker/interfaces/IData'

export default {
    title: 'DateTimeRangePicker',
    component: DateTimeRangePicker
}
const someDate = moment('2021/06/15')

export const basic = () => <DateTimeRangePicker
    calendarLocale={'fr'}
    initialDate={someDate}
    onChange={(date, date2) => console.log(date, date2)}
    onMonthChange={(newDate) => {
        console.log('Month changed: ', newDate)
    }}
/>
export const dateTime = () => (
    <DateTimeRangePicker
        time
        onChange={(date, date2) => console.log(date, date2)}
    />
)
export const range  = () => (
    <DateTimeRangePicker
        range={true}
        onChange={(date, date2) => console.log(date, date2)}
        />
)

export const onMonthChange = () => (
    <DateTimeRangePicker
        range={true}
        onChange={(date, date2) => console.log(date, date2)}
        onMonthChange={(newDate) => {
            console.log('Month changed: ', newDate)
        }} />
)

export const selectedSingle = () => {
    const data: IData[] = [
        {
            'uuid': '6852416a-bc01-4e4f-9194-99a409ac70d1',
            'starts_at': '2023-12-24 09:00:00',
            'ends_at': '2023-12-24 23:00:30',
            'reason': 'Christmas eve'
        },
        {
            'uuid': '00fac160-082b-493b-953a-feed97d8156f',
            'starts_at': '2023-12-31 00:00:00',
            'ends_at': '2023-12-31 23:00:51',
            'reason': "NEW YEAR'S EVE"
        }
    ]
    return(
        <DateTimeRangePicker
            range={true}
            onChange={(date, date2) => console.log(date, date2)}
            data={data}
        />
    )
}

export const selectedRange = () => {
    const data: IData[] = [
        {
            'uuid': '6777409c-41a7-4652-8038-bd894bb1340b',
            'starts_at': '2023-12-13 09:00:00',
            'ends_at': '2023-12-20 23:00:42',
            'reason': 'holidaayy'
        }
    ]
    return(
        <DateTimeRangePicker
            range={true}
            onChange={(date, date2) => console.log(date, date2)}
            data={data}
        />
        )

}

export const rangeWithMultipleMonths  = () => (
    <DateTimeRangePicker
        range={true}
        months={3}
        onChange={(date, date2) => console.log(date, date2)}
      />
    )
