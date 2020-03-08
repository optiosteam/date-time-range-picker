import React from 'react'
import { shallow } from 'enzyme'

import DateTimeRangePicker from '../DateTimeRangePicker'

describe('DateTimeRangePicker', () => {
    it('should render correctly', () => {
        const component = shallow(<DateTimeRangePicker theme={'primary'} />)

        expect(component).toMatchSnapshot()
    })
})
