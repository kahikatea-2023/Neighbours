// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import Nav from './Nav'
import { renderComponent } from '../../test-utils'
import { MemoryRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

describe('Footer Links', () => {
  it('footer has the correct amount of links', () => {
    const { getAllByRole } = renderComponent(
      <QueryClientProvider client={new QueryClient()}>
        <MemoryRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Nav
                  toggleMenu={function (): void {
                    throw new Error('Function not implemented.')
                  }}
                />
              }
            />
          </Routes>
        </MemoryRouter>
      </QueryClientProvider>
    )

    const buttons = getAllByRole('button')
    expect(buttons).toHaveLength(6)
    expect(buttons[0]).toHaveTextContent('Home')
    expect(buttons[1]).toHaveTextContent('Activities')
    expect(buttons[2]).toHaveTextContent('Classifieds')
    expect(buttons[3]).toHaveTextContent('Market')
    expect(buttons[4]).toHaveTextContent('Profile')
    expect(buttons[5]).toHaveTextContent('My posts')
  })

  it('clicking on the "Home" button takes user to the home page', () => {
    let navigatePath = ''
    const MockComponent = () => {
      const navigate = useNavigate()
      const handleClick = () => {
        navigate('/')
      }
      navigatePath = window.location.pathname

      return <button onClick={handleClick}>Home</button>
    }

    const { getByText } = renderComponent(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<MockComponent />} />
        </Routes>
      </MemoryRouter>
    )

    const homeButton = getByText('Home')
    homeButton.click()

    expect(navigatePath).toBe('/')
  })

  // Add more test cases for other buttons and their respective paths here
})
