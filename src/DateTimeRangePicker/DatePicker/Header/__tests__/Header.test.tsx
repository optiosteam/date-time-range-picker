 import React from 'react'
 import { shallow } from 'enzyme'
 import toJson from 'enzyme-to-json'

 import Header from '../Header'
 import moment from 'moment'

 describe('Date/time range picker header', () => {
    it('should render correctly', () => {
        const component = shallow(
            <Header date={moment('2019-10-15 18:23:15', 'YYYY-MM-DD HH:mm:ss')}
                    months={1}
                    onPrevMonth={() => { return }}
                    onNextMonth={() => { return }}
                    onNextYear={() => { return }}
                    onPrevYear={() => { return }}
                    calendarMode={'normal'}
                    setCalendarMode={() => { return }}
            />
        )

        expect(toJson(component)).toMatchSnapshot()
    })

    it('should call function on month navigation', () => {
        const onPrevMonthHandler = jest.fn()
        const onNextMonthHandler = jest.fn()

        const component = shallow(
            <Header date={moment('2019-10-15 18:23:15', 'YYYY-MM-DD HH:mm:ss')}
                    months={1}
                    onPrevMonth={onPrevMonthHandler}
                    onNextMonth={onNextMonthHandler}
                    onNextYear={() => { return }}
                    onPrevYear={() => { return }}
                    calendarMode={'normal'}
                    setCalendarMode={() => { return }}
            />
        )
        component.find('.date-time-range-picker-header-prev').simulate('click')
        component.find('.date-time-range-picker-header-next').simulate('click')
        component.find('.date-time-range-picker-header-next').simulate('click')
        expect(onPrevMonthHandler).toBeCalledTimes(1)
        expect(onNextMonthHandler).toBeCalledTimes(2)
    })
})
