# React date/time range picker

:warning: WORK IN PROGRESS

React date/time range picker is a javascript library for react that presents
 a nice and useable calender. Single dates and ranges are supported.

## Installation

Use the package manager npm to install date/time range picker.

```npm
npm i @optios/react-date-time-range-picker
```

## Usage

```jsx
import DateTimeRangePicker from '@optios/react-date-time-range-picker'

<div>
    <DateTimeRangePicker  />
</div>
```
Example with property Time enabled
![Time picture](https://i.imgur.com/eUouWen.png)

Example with property Range enabled
![Range picture](https://i.imgur.com/aZhwQWO.png)

## Properties

| property              | type            | description                                                                                  |
| --------------------- | --------------- | -------------------------------------------------------------------------------------------- |
| `date`    | `boolean` | set to `false` to disable the date selection                                                              |
| `time`     | `boolean`           | set to `true` to display the time below the calendar                                                           |
| `range`          | `boolean`        | set to `true` to select multiple days value                                                                      |
| `fromDate`        | `Moment` | set a date from where the user can start to select from |
| `untilDate` | `Moment`        |  set a date to where the user can select to                |
| `months`         | `number`        | the number of months you want to show default: 1                                                      |
| `onChange`        | `function`           | pass a custom function to handle the changes detected in the calendar : (fromDate, untilDate) => console.log(fromDate, untilDate)                                                     |

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[GPL-3.0-or-later](https://choosealicense.com/licenses/gpl-3.0/)