const data = require('./data.js')
const {filter,compose,reduce} = require('ramda')

// Is there a chance of rain this weekend?  return either yes or no.

//Expected Output:
// Is there a chance of rain this weekend? Yes

// var result = compose(
//   reduce((acc,val) => acc + 1, 0),
//   filter((fc) => fc.condition.includes('Rain') || fc.wx.includes('Rain')),
//   filter((fc) => fc.FCTTIME.weekday_name === 'Saturday' || fc.FCTTIME.weekday_name === 'Sunday')
// )(data.hourly_forecast)

var rainChance = compose(
  reduce((acc,val) => acc + 1, 0),
  filter((fc) => fc.condition.includes('Rain') || fc.wx.includes('Rain')),
  filter((fc) => fc.FCTTIME.weekday_name === 'Saturday' || fc.FCTTIME.weekday_name === 'Sunday')
)(data.hourly_forecast)

var result = rainChance > 0 ? 'Yes' : 'No'

// console.log(rainChance)
console.log("Is there a chance of rain this weekend?", result)
