import { createRoot } from 'react-dom/client'
import { Suspense, lazy } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
// import { Auth0Provider } from '@auth0/auth0-react'

import AppLayout from './components/AppLayout/AppLayout'
import Home from './components/Home/Home'

const routes = (
  <Routes>
  <Route path="/" element={<AppLayout />}>
    <Route index element={<Home />} />
    <Route path="register" element={<p>Register will be here</p>} />
    <Route path=":location" element={<p>Community will be here</p>}>
      <Route path="activities" element={<p>Activities will be here</p>} />
      <Route path="classifieds" element={<p>Classifieds will be here</p>}>
        <Route path=":id" element={<p>ClassifiedsItem will be here</p>} />
      </Route>
      <Route path="market" element={<p>Market will be here</p>} />
    </Route>
    <Route path="profile" element={<p>Profile will be here</p>} />
    <Route path="my-posts" element={<p>Posts will be here</p>} />
  </Route>
</Routes>
)

document.addEventListener('DOMContentLoaded', () => {
  const queryClient = new QueryClient()
  createRoot(document.getElementById('app') as HTMLElement).render(
    // <Auth0Provider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
      </BrowserRouter>
    </QueryClientProvider>
    // </Auth0Provider>
  )
})
