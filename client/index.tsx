import { createRoot } from 'react-dom/client'
import { Suspense, lazy } from 'react'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Auth0Provider } from '@auth0/auth0-react'


export const routes = createRoutesFromElements (
  <Route path='/' element={<AppLayout />}>
    <Route index element={<Home />}/>
    <Route path='register' element={<p>Register will be here</p>}/>
    <Route path=':location' element={<p>Community will be here</p>}>
      <Route path='activities' element={<p>Activities will be here</p>}/>
      <Route path='classifieds' element={<p>Classifieds will be here</p>}>
        <Route path=':id' element={<p>ClassifiledsItem will be here</p>}/>
      </Route>
      <Route path='market' element={<p>Market will be here</p>}/>
    </Route>
    <Route path='profile' element={<p>profile will be here</p>}/>
    <Route path='my-posts' element={<p>posts will be here</p>}/> 

  </Route>
)


document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <App />
  );
});
