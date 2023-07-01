//@vitest-environment jsdom
import { expect, test, vi } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import ClassifiedPage from './ClassifiedsPage'
import { renderComponent } from '../../test-utils'

test('renders ClassifiedPage without errors', () => {
  renderComponent(
    <MemoryRouter>
      <ClassifiedPage />
    </MemoryRouter>
  )
  // No error should be thrown during rendering
})

test('renders the "Classifieds" heading when the user is authenticated', () => {
  const { findByRole } = renderComponent(
    <MemoryRouter>
      <ClassifiedPage { isAuthenticated }={true} />
    </MemoryRouter>
  )

  const headingElement = findByRole ('heading', { name: 'Classifieds' })
  expect(headingElement).toBeInTheDocument()
})

test('does not render the "Classifieds" heading when the user is not authenticated', () => {
  const { queryByRole } = renderComponent(
    <MemoryRouter>
      <ClassifiedPage isAuthenticated={false} />
    </MemoryRouter>
  )

  const headingElement = queryByRole('heading', { name: 'Classifieds' })
  expect(headingElement).toBeNull()
})

test('renders the ClassifiedPost component when the user is authenticated', () => {
  const { getByTestId } = renderComponent(
    <MemoryRouter>
      <ClassifiedPage isAuthenticated={true} />
    </MemoryRouter>
  )

  const classifiedPostComponent = getByTestId('classified-post')
  expect(classifiedPostComponent).toBeInTheDocument()
})

test('does not render the ClassifiedPost component when the user is not authenticated', () => {
  const { queryByTestId } = renderComponent(
    <MemoryRouter>
      <ClassifiedPage isAuthenticated={false} />
    </MemoryRouter>
  )

  const classifiedPostComponent = queryByTestId('classified-post')
  expect(classifiedPostComponent).toBeNull()
})
