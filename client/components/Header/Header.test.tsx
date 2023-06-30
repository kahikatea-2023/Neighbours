// @vitest-environment jsdom
import { describe, it, vi, expect } from 'vitest'
import Header from './Header'
import { renderComponent } from '../../../client/test-utils'
import { QueryClient, QueryClientProvider } from 'react-query'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

describe('Header', () => {
  it('should show the loading spinner while a fetch is taking place', () => {
    vi.mock('react-query', async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const actual: any = await vi.importActual('react-query')
      return {
        ...actual,
        useIsFetching: vi.fn().mockReturnValue(true),
      }
    })

    const { getByAltText } = renderComponent(
      <QueryClientProvider client={new QueryClient()}>
        <MemoryRouter>
          <Routes>
            <Route path="/" element={<Header />} />
          </Routes>
        </MemoryRouter>
      </QueryClientProvider>
    )
    const loadingSpinner = getByAltText('loading spinner')

    expect(loadingSpinner).toBeTruthy()
  })
})
