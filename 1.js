const data = require('./data.js')
const {map,filter,compose,take} = require('ramda')

// Return the first 25 simple hourly forecast observations.
// Each object in the returned array should include the following forecast infomation:
  //  day of the week (Ex: 'Friday')
  //  time and date
  //  temperature in fahrenheit
  //  weather condition (ex: 'Rain')

var result = compose(
  map((fc) => ({
    'day of the week': fc.FCTTIME.weekday_name,
    'time and date': fc.FCTTIME.pretty,
    'temperature (F)': fc.temp.english,
    'condition': fc.condition
  })),
  take(25)
)(data.hourly_forecast)

console.log("1) First 25 simplified hourly forecast observations: ", result)
