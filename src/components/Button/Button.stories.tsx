import React from 'react'
import Button from './Button'

export default {
    title: 'Button',
    component: Button
}

export const basicButton = () => <Button></Button>

export const blueButton = () => <Button backgroundColor={'blue'}></Button>

export const redButton = () => <Button backgroundColor={'red'}></Button>