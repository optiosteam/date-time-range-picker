import React from 'react'
import DateTimeRangePicker from './DateTimeRangePicker'
import moment from 'moment'

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
        onMonthChange={(newDate) => {
    console.log('Month changed: ', newDate)
}}/>
)
export const range  = () => (
    <DateTimeRangePicker
        range={true}
        onChange={(date, date2) => console.log(date, date2)}
        onMonthChange={(newDate) => {
    console.log('Month changed: ', newDate)
}} />
)
export const rangeWithMultipleMonths  = () => (
    <DateTimeRangePicker
        range={true}
        months={3}
        onChange={(date, date2) => console.log(date, date2)}
        onMonthChange={(newDate) => {
        console.log('Month changed: ', newDate)
    }} />
    )
