/* eslint-disable @typescript-eslint/no-extra-semi */
//@vitest-environment jsdom
import { expect, test, vi } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import * as auth0 from '@auth0/auth0-react'

import ClassifiedPage from './ClassifiedsPage'
import { renderComponent } from '../../test-utils'

vi.mock('@auth0/auth0-react')

test('renders ClassifiedPage without errors', () => {
  ;(auth0 as auth0.User).useAuth0 = vi.fn().mockReturnValue({
    isAuthenticated: true,
    isLoading: false,
    getAccessTokenSilently: vi.fn(),
  })
  renderComponent(
    <MemoryRouter>
      <ClassifiedPage />
    </MemoryRouter>
  )
})

test('does not render the "Classifieds" heading when the user is not authenticated', () => {
  ;(auth0 as auth0.User).useAuth0 = vi.fn().mockReturnValue({
    isAuthenticated: true,
    isLoading: false,
    getAccessTokenSilently: vi.fn(),
  })

  const { screen } = renderComponent(
    <MemoryRouter>
      <ClassifiedPage />
    </MemoryRouter>
  )

  const headingElement = screen.getByText(/classifieds/i)
  expect(headingElement).toBeInTheDocument()
})

test('does not render the ClassifiedPost component when the user is not authenticated', () => {
  ;(auth0 as auth0.User).useAuth0 = vi.fn().mockReturnValue({
    isAuthenticated: true,
    isLoading: false,
    getAccessTokenSilently: vi.fn(),
  })

  const { queryByTestId } = renderComponent(
    <MemoryRouter>
      <ClassifiedPage />
    </MemoryRouter>
  )

  const classifiedPostComponent = queryByTestId('classified-post')
  expect(classifiedPostComponent).toBeNull()
})
