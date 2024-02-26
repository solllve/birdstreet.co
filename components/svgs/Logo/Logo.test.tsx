import { Logo } from './Logo'
import { render } from '@testing-library/react'

describe('Logo', () => {
  it('should render', () => {
    const { container } = render(<Logo theme="dark" />)
    expect(container).toMatchSnapshot()
  })
})
