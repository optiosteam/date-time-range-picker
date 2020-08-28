import React from 'react'
import DateTimeRangePicker from './DateTimeRangePicker';

export default {
    title: 'DateTimeRangePicker',
    component: DateTimeRangePicker
}

export const basic = () => <DateTimeRangePicker onChange={(date, date2) => console.log(date, date2)}/>
export const dateTime = () => <DateTimeRangePicker time onChange={(date, date2) => console.log(date, date2)}/>
export const range  = () => <DateTimeRangePicker range={true} onChange={(date, date2) => console.log(date, date2)} />
export const rangeWithMultipleMonths  = () => <DateTimeRangePicker range={true} months={3} onChange={(date, date2) => console.log(date, date2)}/>