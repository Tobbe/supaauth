import { Link, routes } from '@redwoodjs/router'

const NavLayout = ({ children }) => {
  return (
    <>
      <Link to={routes.home()}>Home page</Link> |{' '}
      <Link to={routes.secret()}>Secret page</Link> |{' '}
      <Link to={routes.forbidden()}>Forbidden page</Link> |{' '}
      <Link to={routes.weather()}>Weather page</Link>
      <hr />
      {children}
    </>
  )
}

export default NavLayout
