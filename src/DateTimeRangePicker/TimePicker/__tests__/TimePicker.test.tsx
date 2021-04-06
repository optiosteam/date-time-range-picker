import React from 'react'
import {shallow} from 'enzyme'

import moment from 'moment'
import TimePicker from '../TimePicker'

describe('Date/time range picker month', () => {
    it('should render correctly', () => {
        const component = shallow(
            <TimePicker step={20} onTimeChanged={() => undefined}/>
        )

        expect(component).toMatchSnapshot()
        expect(component.find('.time-picker-dropdown div').length).toEqual(72)
    })

    it('should trigger onTimeChange', () => {
        const onTimeChangedMock = jest.fn()

        const component = shallow(
            <TimePicker step={20} onTimeChanged={onTimeChangedMock}/>
        )

        component.find('.time-picker-dropdown div').at(8).simulate('click')
        expect(onTimeChangedMock).toBeCalledTimes(1)
    })

    it('opens and closes the dropdown', () => {
        const onTimeChangedMock = jest.fn()

        const component = shallow(
            <TimePicker step={20} onTimeChanged={onTimeChangedMock} isDisabled={false}/>
        )

        component.find('.time-picker-input').simulate('focus')
        expect(component.find('.open').length).toEqual(1)

        component.find('.time-picker-input').simulate('blur', {currentTarget: {value: '14:40'}})

        expect(onTimeChangedMock).toBeCalledTimes(1)
        expect(onTimeChangedMock.mock.calls[0][0].format('HH:mm')).toEqual('14:40')

    })
})
