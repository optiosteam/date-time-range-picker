import React from 'react'
import DateTimeRangePicker from './DateTimeRangePicker';

export default {
    title: 'DateTimeRangePicker',
    component: DateTimeRangePicker
}

export const basic = () => <DateTimeRangePicker/>
export const range  = () => <DateTimeRangePicker range={true} />
