import { render } from '@redwoodjs/testing'

import SecretPage from './SecretPage'

describe('SecretPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SecretPage />)
    }).not.toThrow()
  })
})
