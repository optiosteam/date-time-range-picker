import React, { SyntheticEvent, useRef, useState} from 'react'
import Cleave from 'cleave.js/react'
import moment, { Moment } from 'moment'

import './TimePicker.scss'

interface IProps {
    time?: Moment,
    step: number,
    onTimeChanged: (time: Moment) => void
}

const TimePicker = ({ step = 15, onTimeChanged, time}: IProps) => {
    const [currentValue, setCurrentValue] = useState<string | undefined>(time ? time.format('HH:mm') : undefined)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const dropdownRef = useRef<HTMLDivElement | any>()
    const activeDropdownRef = useRef<HTMLDivElement | any>()
    let inputRef: HTMLInputElement

    const onChange = (e: SyntheticEvent<HTMLInputElement>) => {
        setCurrentValue(e.currentTarget.value)

        const changedTime = moment(e.currentTarget.value, 'HH:mm')
        if (! changedTime.isValid()) {
            return
        }

        if (changedTime.minutes() % step === 0) {
            onTimeChanged(changedTime)
        }

        if (dropdownRef.current && activeDropdownRef.current) {
            dropdownRef.current.scrollTo(0, activeDropdownRef.current.offsetTop)
        }
    }

    const onBlur = (e: SyntheticEvent<HTMLInputElement>) => {
        setCurrentValue(e.currentTarget.value)
        setTimeout(
            () => setIsOpen(false),
            200
        )

        const changedTime = moment(e.currentTarget.value, 'HH:mm')
        if (! changedTime.isValid()) {
            return
        }

        changedTime.minutes(Math.round(changedTime.minutes() / step) * step)
        setCurrentValue(changedTime.format('HH:mm'))

        onTimeChanged(changedTime)
    }

    const onSelect = (timeValue: string) => {
        setCurrentValue(timeValue)

        const changedTime = moment(timeValue, 'HH:mm')
        onTimeChanged(changedTime)
    }

    const timeValues: string[] = []
    for (let i = 0; i < 24 * 60; i += step) {
        const hour: string = Math.floor(i / 60).toString().padStart(2, '0')
        const minutes: string = (i % 60).toString().padStart(2, '0')

        timeValues.push(`${hour}:${minutes}`)
    }

    const isActive = (timeValue: string): boolean => {
        const currentTime = moment(currentValue, 'HH:mm')
        if (! currentTime.isValid()) {
            return false
        }

        currentTime.minutes(Math.round(currentTime.minutes() / step) * step)

        return currentTime.format('HH:mm') === timeValue
    }

    return <div className={`time-picker ${isOpen ? 'open' : null}`}>
        <Cleave options={{time: true, timePattern: ['h', 'm']}}
                placeholder={'00:00'}
                onChange={onChange}
                onFocus={() => setIsOpen(true)}
                onBlur={onBlur}
                value={currentValue}
                className={'time-picker-input'}
                onKeyDown={
                    (e: KeyboardEvent | any) => {
                        if (e.key === 'Enter' && inputRef) {
                            inputRef.blur()
                        }
                    }
                }
                htmlRef={(element: HTMLInputElement) => inputRef = element}
        />
        <div className={'time-picker-dropdown'} ref={dropdownRef}>
            {
                timeValues.map((timeValue, index) => {
                    return <div key={`timeValue${index}`}
                                className={isActive(timeValue) ? 'active' : undefined}
                                ref={isActive(timeValue) ? activeDropdownRef : undefined}
                                onClick={() => onSelect(timeValue)}
                    >
                        {timeValue}
                    </div>
                })
            }
        </div>
    </div>
}

export default TimePicker
