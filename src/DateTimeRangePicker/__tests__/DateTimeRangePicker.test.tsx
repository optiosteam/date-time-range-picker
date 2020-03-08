import React from 'react'
import { shallow } from 'enzyme'

import DateTimeRangePicker from '../DateTimeRangePicker'
import moment from 'moment'

describe('DateTimeRangePicker', () => {
    it('should render correctly', () => {
        const component = shallow(
            <DateTimeRangePicker
                fromDate={moment('2019-10-15 18:23:15', 'YYYY-MM-DD HH:mm:ss')}
                untilDate={moment('2019-10-15 18:23:15', 'YYYY-MM-DD HH:mm:ss')}
                range={false}
                time={false}
                inline={true}
                months={2}
            />
        )

        expect(component).toMatchSnapshot()
    })
})
