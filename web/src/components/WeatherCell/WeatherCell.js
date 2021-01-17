export const QUERY = gql`
  query WeatherQuery($zip: String!) {
    weather: getWeather(zip: $zip) {
      zip
      city
      conditions
      temp
      icon
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ weather }) => {
  return (
    <section>
      <h1>{weather.city}</h1>
      <h2>
        <img src={weather.icon} style={{ maxWidth: '2rem' }} />
        <span>
          {weather.temp}°C and {weather.conditions}
        </span>
      </h2>
    </section>
  )
}
