import fetch from 'node-fetch'
import { requireAuth } from 'src/lib/auth'
import { context } from '@redwoodjs/api'

export const getWeather = async ({ zip }) => {
  requireAuth()
  console.log(JSON.stringify(context, null, 2))

  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?zip=${zip},US&appid=${process.env.OPEN_WEATHER_API_KEY}`
  )
  const json = await response.json()

  return {
    zip,
    city: json.name,
    conditions: json.weather[0].main,
    temp: Math.round(json.main.temp - 273.15),
    icon: `http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`
  }
}
