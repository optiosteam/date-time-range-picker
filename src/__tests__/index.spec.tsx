import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import DateTimeRangePicker from '../index'

configure({ adapter: new Adapter() })

describe('DateTimeRangePicker', () => {
    it('should render correctly', () => {
        const component = shallow(<DateTimeRangePicker />)

        expect(component).toMatchSnapshot()
    })
})
