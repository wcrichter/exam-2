const data = require('./data.js')
const {map,filter,compose} = require('ramda')

// When will it snow?
// Return an array of objects containing:
  // day of the week
  // date and time
  // weather condition

  var result = compose(
    map((fc) => ({
      'day of the week': fc.FCTTIME.weekday_name,
      'time and date': fc.FCTTIME.pretty,
      'condition': fc.condition
    })),
    filter((fc) => fc.condition.includes('Snow') || fc.wx.includes('Snow'))
  )(data.hourly_forecast)

console.log("When will it snow?", result)
