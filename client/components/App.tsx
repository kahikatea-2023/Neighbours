import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Weather from './Weather'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <header className="header">
        <h1>NEIGHBOURS</h1>
      </header>

      <section className="main">
        <div className="left-top">
          <Weather />
        </div>
      </section>

      <footer className="footer"></footer>

      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
