import styled from 'styled-components'

const colorHighlight = '#428be3'
const colorBackgroundDay = 'rgba(black, .1)'
const colorOtherMonth = 'rgba(black, .4)'
const colorDisabled = 'rgba(black, .4)'
const colorAlreadySelected = 'rgba(red, .4)'


export const CalendarButton = styled.button<{
    active?: boolean,
    alreadySelected?: string,
    activeFromDate?: boolean,
    activeUntilDate?: boolean,
    otherMonth?: boolean,
    activeFromDateReverse?: boolean,
    inRange?: boolean,
    hover?: boolean,
    hoverPast?: boolean,
    hoverFuture?: boolean
}>`
  width: 2.1em;
  height: 2.1em;
  background-color: ${colorBackgroundDay};
  border-radius: 1.5em;
  margin: .3em;
  cursor: pointer;
  box-sizing: content-box;
  color: ${({otherMonth}) => otherMonth ? colorOtherMonth : 'inherit'};
  background-color: ${({active, alreadySelected}) => active
    ? (alreadySelected ? alreadySelected : colorHighlight)
    : (alreadySelected ? alreadySelected : 'inherit')};
  &:hover:not(.disabled),
  &.hover:not(.disabled) {
    background-color: rgba(${colorHighlight}, .8);
    color: white;
  }


`

export const CalendarButton2 = styled.button`
        > button {
          width: 2.1em;
          height: 2.1em;
          background-color: ${colorBackgroundDay};
          border-radius: 1.5em;
          margin: .3em;
          cursor: pointer;
          box-sizing: content-box;

          &:hover:not(.disabled),
          &.hover:not(.disabled) {
            background-color: rgba(${colorHighlight}, .8);
            color: white;
          }

          &.other-month {
            color: ${colorOtherMonth};
          }

          &.active {
            background-color: $color-highlight;
            color: white;
          }

          &.already-selected {
            background-color: $color-already-selected;
            margin: .3em 0;
            padding: 0 .3em;
            border-radius: 0;

            &.active-from-date:not(.active-from-date-reverse) {
              border-top-left-radius: 1.5em;
              border-bottom-left-radius: 1.5em;
              margin-left: .3em;
              padding-left: 0;
            }

            &.active-until-date {
              border-top-right-radius: 1.5em;
              border-bottom-right-radius: 1.5em;
              margin-right: .3em;
              padding-right: 0;
            }

            &.active {
              background-color: $color-already-selected;
            }
          }

          &.in-range {
            background-color: rgba($color-highlight, .5);
            margin: .3em 0;
            padding: 0 .3em;
            border-radius: 0;

            &.active-from-date:not(.active-from-date-reverse) {
              border-top-left-radius: 1.5em;
              border-bottom-left-radius: 1.5em;
              margin-left: .3em;
              padding-left: 0;
            }

            &.active-until-date {
              border-top-right-radius: 1.5em;
              border-bottom-right-radius: 1.5em;
              margin-right: .3em;
              padding-right: 0;
            }

            &.active {
              background-color: $color-highlight;
            }
          }

          &.hover-range:not(.in-range) {
            background-color: rgba($color-highlight, .5);
            margin: .3em 0;
            padding: 0 .3em;
            border-radius: 0;

            &.active-from-date:not(.active-from-date-reverse) {
              border-top-left-radius: 1.5em;
              border-bottom-left-radius: 1.5em;
              margin-left: .3em;
              padding-left: 0;

              &.hover {
                border-radius: 1.5em;
                padding-right: 0;
                margin-right: .3em;
              }
            }

            &.active-from-date-reverse {
              border-top-right-radius: 1.5em;
              border-bottom-right-radius: 1.5em;
              margin-right: .3em;
              padding-right: 0;
            }

            &.hover-past {
              border-top-left-radius: 1.5em;
              border-bottom-left-radius: 1.5em;
              padding-left: 0;
              margin-left: .3em;
            }

            &.hover-future {
              border-top-right-radius: 1.5em;
              border-bottom-right-radius: 1.5em;
              padding-right: 0;
              margin-right: .3em;
            }

            &.active {
              background-color: $color-highlight;
            }
          }

          &.disabled {
            color: $color-disabled;
            cursor: default;
          }
        }

`
