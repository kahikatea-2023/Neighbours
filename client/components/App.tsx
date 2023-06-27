import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <header className="header">
        <h1>NEIGHBOURS</h1>
      </header>

      <section className="main"></section>

      <footer className="footer"></footer>
    </QueryClientProvider>
  )
}

export default App
