import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Header } from './Header'

const componentMeta: ComponentMeta<typeof Header> = {
  title: 'Example/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen'
  }
}

export default componentMeta

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  user: {
    name: 'Jane Doe'
  }
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {}
