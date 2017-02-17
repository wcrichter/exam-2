const data = require('./data.js')
const {map,filter,compose} = require('ramda')

// What will the weather be like during my morning commute?
// Return an array of objects containing:
  // day of the week
  // date and time
  // weather condition
//  for the weekday morning rush hour (Monday through Friday / 7 am and 8 am)

var result = compose(
  map((fc) => ({
    'day of the week': fc.FCTTIME.weekday_name,
    'time and date': fc.FCTTIME.pretty,
    'condition': fc.condition
  })),
  filter((fc) => fc.FCTTIME.hour === '7' || fc.FCTTIME.hour === '8')
)(data.hourly_forecast)

console.log("What will the weather be like during my morning commute?", result)
