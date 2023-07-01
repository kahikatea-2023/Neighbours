import { afterEach, expect } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import matchers from '@testing-library/jest-dom/matchers'
import { routes } from './index'
import React from 'react'

expect.extend(matchers)
afterEach(cleanup)

export function renderComponent(component: JSX.Element) {
  const user = userEvent.setup()
  return { screen, user, ...render(component) }
}

export function renderWithRouter(location = '/') {
  const router = createMemoryRouter(routes, {
    initialEntries: [location],
  })

  userEvent.setup()
  return render(<RouterProvider router={router} />)
}
