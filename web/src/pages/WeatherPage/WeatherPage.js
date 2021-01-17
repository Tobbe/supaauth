import { useState } from 'react'
import { Form, TextField, Submit } from '@redwoodjs/forms'
import NavLayout from 'src/layouts/NavLayout'
import WeatherCell from 'src/components/WeatherCell'

const WeatherPage = () => {
  const [zip, setZip] = useState()

  const onSubmit = (data) => {
    console.info(data)
    setZip(data.zip)
  }

  return (
    <NavLayout>
      <Form onSubmit={onSubmit} style={{ fontSize: '2rem' }}>
        <TextField
          name="zip"
          placeholder="Zip code"
          maxLength="5"
          validation={{ required: true, pattern: /^\d{5}$/ }}
        />
        <Submit>Go</Submit>
      </Form>
      {zip && <WeatherCell zip={zip} />}
    </NavLayout>
  )
}

export default WeatherPage
