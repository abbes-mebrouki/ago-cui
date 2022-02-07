import React from 'react'
import {ComponentMeta, ComponentStory} from "@storybook/react"
import Button from './Button'

export default {
  title: 'Button',
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args}/>


export const Filled = Template.bind({})
Filled.args = {
  variant: 'contained',
  label: 'Filled Btn'
}

export const Outlined = Template.bind({})
Outlined.args = {
  variant: 'outlined',
  label: 'Outlined Btn'
}