const data = require('./data.js')
const {map,filter,compose} = require('ramda')

// When where there be a chance of rain this weekend?

// Return a simplified hourly forecast where the weekend calls for rain or a chance of rain.
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
  filter((fc) => fc.condition.includes('Rain') || fc.wx.includes('Rain'))
)(data.hourly_forecast)

console.log("When where there be a chance of rain this weekend?", result)
