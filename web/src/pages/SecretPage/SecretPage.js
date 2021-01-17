import { Link, routes } from '@redwoodjs/router'
import NavLayout from 'src/layouts/NavLayout/NavLayout'

const SecretPage = () => {
  return (
    <NavLayout>
      <h1>SecretPage</h1>
      <p>
        Find me in <code>./web/src/pages/SecretPage/SecretPage.js</code>
      </p>
      <p>
        My default route is named <code>secret</code>, link to me with `
        <Link to={routes.secret()}>Secret</Link>`
      </p>
    </NavLayout>
  )
}

export default SecretPage
