import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import axios from 'axios'

import Weather from './Weather'

// Mock the axios module
vi.mock('axios')

describe('Weather Component', () => {
  it('should render weather data when available', async () => {
    const weatherData = {
      name: 'London',
      main: {
        temp: 20,
        humidity: 80,
      },
      weather: [
        {
          icon: '01d',
        },
      ],
    }

    // Mock the axios.get method to return the weather data
    vi.mocked(axios.get).mockResolvedValue({ data: weatherData })

    // Render the Weather component within a MemoryRouter
    render(
      <MemoryRouter>
        <Weather />
      </MemoryRouter>
    )

    // Assert that the weather data is rendered correctly
    expect(screen.getByText(/Weather in London/i)).toBeInTheDocument()
    expect(screen.getByText(/Temperature: 20°C/i)).toBeInTheDocument()
    expect(screen.getByText(/Humidity: 80%/i)).toBeInTheDocument()
    expect(screen.getByAltText('Weather Icon')).toBeInTheDocument()
  })

  it('should render loading state when weather data is being fetched', async () => {
    // Mock the axios.get method to simulate a loading state
    vi.mocked(axios.get).mockImplementation(() => new Promise(() => {}))

    // Render the Weather component within a MemoryRouter
    render(
      <MemoryRouter>
        <Weather />
      </MemoryRouter>
    )

    // Assert that the loading state is rendered
    expect(screen.getByText(/Loading weather data.../i)).toBeInTheDocument()
  })

  it('should handle error when fetching weather data', async () => {
    // Mock the axios.get method to simulate an error
    vi.mocked(axios.get).mockRejectedValue(
      new Error('Failed to fetch weather data')
    )

    // Render the Weather component within a MemoryRouter
    render(
      <MemoryRouter>
        <Weather />
      </MemoryRouter>
    )

    // Assert that the error message is rendered
    expect(
      screen.getByText(
        /Error fetching weather data: Failed to fetch weather data/i
      )
    ).toBeInTheDocument()
  })
})
