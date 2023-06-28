import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import matchers from '@testing-library/jest-dom/matchers'
import Weather from './Weather'

expect.extend(matchers)

test('renders weather information', () => {
  render(<Weather />)

  const weatherInfo = screen.getByText('Current Weather')
  expect(weatherInfo).toBeInTheDocument()
})
