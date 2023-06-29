import { act, render, screen } from '@testing-library/react'
import Weather from './Weather'

test('should handle error when fetching weather data', async () => {
  // Mock the API call to simulate an error
  jest
    .spyOn(global, 'fetch')
    .mockRejectedValueOnce(new Error('Failed to fetch weather data'))

  await act(async () => {
    render(<Weather />)
  })

  // Assert that the error message is rendered
  expect(screen.getByText(/Error fetching weather data/i)).toBeInTheDocument()
})
