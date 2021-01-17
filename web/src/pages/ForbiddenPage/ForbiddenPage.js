import { Link, routes } from '@redwoodjs/router'
import NavLayout from 'src/layouts/NavLayout/NavLayout'

const ForbiddenPage = () => {
  return (
    <NavLayout>
      <h1>ForbiddenPage</h1>
      <p>
        Find me in <code>./web/src/pages/ForbiddenPage/ForbiddenPage.js</code>
      </p>
      <p>
        My default route is named <code>forbidden</code>, link to me with `
        <Link to={routes.forbidden()}>Forbidden</Link>`
      </p>
    </NavLayout>
  )
}

export default ForbiddenPage
