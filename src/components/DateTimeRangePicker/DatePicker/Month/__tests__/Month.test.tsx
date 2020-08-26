import React from 'react'
import { shallow } from 'enzyme'

import Month from '../Month'
import moment from 'moment'

describe('Date/time range picker month', () => {
    it('should render correctly', () => {
        const component = shallow(
            <Month
                month={5}
                year={2020}
                showDaysPreviousMonth={true}
                showDaysNextMonth={true}
                onDaySelected={() => undefined}
                onDayHover={() => undefined}
            />
        )

        expect(component).toMatchSnapshot()
    })

    it('should call selected callback', () => {
        const onDaySelectedMock = jest.fn()

        const component = shallow(
            <Month
                month={5}
                year={2020}
                showDaysPreviousMonth={true}
                showDaysNextMonth={true}
                onDaySelected={onDaySelectedMock}
                onDayHover={() => undefined}
            />
        )

        component.find('.date-time-range-picker-month-days button').at(10).simulate('click')
        expect(onDaySelectedMock).toBeCalledTimes(1)
        expect(onDaySelectedMock.mock.calls[0][0].format('YYYY-MM-DD')).toEqual('2020-05-06')
    })

    it('should call hover callback', () => {
        const onHoverMock = jest.fn()

        const component = shallow(
            <Month
                month={5}
                year={2020}
                showDaysPreviousMonth={true}
                showDaysNextMonth={true}
                onDaySelected={() => undefined}
                onDayHover={onHoverMock}
            />
        )

        component.find('.date-time-range-picker-month-days button').at(10).simulate('mouseenter')
        expect(onHoverMock).toBeCalledTimes(1)
        expect(onHoverMock.mock.calls[0][0].format('YYYY-MM-DD')).toEqual('2020-05-06')
    })

    it ('renders hover', () => {
        const component = shallow(
            <Month
                month={5}
                year={2020}
                showDaysPreviousMonth={true}
                showDaysNextMonth={true}
                fromDate={moment('2020-05-15')}
                hoverDate={moment('2020-05-10')}
                onDaySelected={() => undefined}
                onDayHover={() => undefined}
            />
        )

        expect(component).toMatchSnapshot()
    })

    it ('renders range', () => {
        const component = shallow(
            <Month
                month={5}
                year={2020}
                showDaysPreviousMonth={true}
                showDaysNextMonth={true}
                fromDate={moment('2020-05-10')}
                untilDate={moment('2020-05-15')}
                onDaySelected={() => undefined}
                onDayHover={() => undefined}
            />
        )

        expect(component).toMatchSnapshot()
    })
})
