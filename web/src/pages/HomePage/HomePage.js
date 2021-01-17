import { useState } from 'react'
import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import NavLayout from 'src/layouts/NavLayout'

const HomePage = () => {
  const { logIn, logOut, isAuthenticated, currentUser } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  console.log('currentUser', currentUser)

  return (
    <NavLayout>
      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.js</code>
      </p>
      {isAuthenticated && <p>You are authenticated</p>}
      {!isAuthenticated && <p>You are not authenticated</p>}
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
      <form
        onSubmit={async (e) => {
          e.preventDefault()
          console.log('e', e)
          console.log('email', email, 'password', password)
          const status = await logIn({ email, password })
          console.log('status', status)
        }}
      >
        <label htmlFor="email" style={{ display: 'block' }}>
          Email
          <input
            name="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
        </label>
        <label htmlFor="password" style={{ display: 'block' }}>
          Password
          <input
            name="password"
            id="password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
        </label>
        <button type="submit">Sign in</button>
      </form>
      <button onClick={logOut}>Sign out</button>
    </NavLayout>
  )
}

export default HomePage
