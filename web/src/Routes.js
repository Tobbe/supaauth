// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/weather" page={WeatherPage} name="weather" />
      <Route path="/" page={HomePage} name="home" />
      <Private unauthenticated="home">
        <Route path="/secret" page={SecretPage} name="secret" />
        <Route path="/forbidden" page={ForbiddenPage} name="forbidden" />
      </Private>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
