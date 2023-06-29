/**
 * @vitest-environment jsdom
 */

import { expect, test, afterEach, vi } from 'vitest'
import Weather from './Weather'
import { render, screen, cleanup } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import matchers from '@testing-library/jest-dom/matchers'
import { loadWeatherData } from '../../apis/weather'

expect.extend(matchers)
afterEach(cleanup)

vi.mock('../../apis/weather')

test('renders the weather component', async () => {
  vi.mocked(loadWeatherData).mockImplementation((_, setWeatherData) => {
    setWeatherData(() => ({
      name: 'auckland',
      main: {
        temp: 60,
      },
      weather: [
        {
          icon: 'some icon here',
        },
      ],
    }))
    return Promise.resolve()
  })

  render(
    <MemoryRouter initialEntries={['/']} initialIndex={0}>
      <Routes>
        <Route path="/" element={<Weather />} />
      </Routes>
    </MemoryRouter>
  )

  // Assert the presence of specific elements or text within the rendered component
  // Example:

  const h2 = await screen.findByRole('heading', { level: 2 })
  const city = await screen.findByText('auckland')
  // const img = screen.findByRole('img')

  expect(h2).toBeInTheDocument()
  expect(city).toBeInTheDocument()
  // expect(img).toBeInTheDocument()
})
