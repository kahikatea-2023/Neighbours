/**
 * @vitest-environment jsdom
 */
import { test } from 'vitest'
import { render } from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router } from 'react-router-dom'
import AppLayout from './AppLayout'

test('renders AppLayout without errors', () => {
  const div = document.createElement('div')
  const queryClient = new QueryClient()

  render(
    <QueryClientProvider client={queryClient}>
      <Router basename="/">
        <AppLayout />
      </Router>
    </QueryClientProvider>,
    div
  )
})
