import { createRoot } from 'react-dom/client'
import { Suspense, lazy, useEffect } from 'react'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Auth0Provider } from '@auth0/auth0-react'
import ClassifiedsDetail from './Pages/ClassifiedsDetail/ClassifiedsDetail'
import RegisterUser from './components/RegisterUser/RegisterUser'
import Community from './Pages/Community/Community'
import ClassifiedPage from './Pages/ClassifiedsPage/ClassifiedsPage'
import AppLayout from './components/AppLayout/AppLayout'
import Error from './Pages/Error/Error'
import Home from './Pages/Home/Home'
import AddPostPage from './Pages/AddPostPage/AddPostPage'
import ProfilePage from './Pages/ProfilePage/ProfilePage'
import Redirect from './Pages/Redirect/Redirect'
import EditProfile from './Pages/EditProfile/EditProfile'

export const routes = createRoutesFromElements(
  <Route>
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path="redirect" element={<Redirect />} />
      <Route path="register" element={<RegisterUser />} />
      <Route path="profile" element={<ProfilePage />} />
      <Route path="edit-profile" element={<EditProfile />} />
      <Route path="my-posts" element={<Error />} />
      <Route path="/:locationId" element={<Community />} />
      <Route
        path="newmarket/activities"
        element={<p>Activities will be here</p>}
      />
      <Route
        path="newmarket/activities/:id"
        element={<p>Activities will be here</p>}
      />
      <Route path=":locationId/classifieds" element={<ClassifiedPage />} />
      <Route
        path=":locationId/classifieds/:id"
        element={<ClassifiedsDetail />}
      />
      <Route
        path=":locationId/classifieds/add-post"
        element={<AddPostPage />}
      />
      <Route path=":locationId/market" element={<p>Market will be here</p>} />
    </Route>
  </Route>
)

function AppProvider() {
  return <RouterProvider router={createBrowserRouter(routes)} />
}

document.addEventListener('DOMContentLoaded', () => {
  const queryClient = new QueryClient()
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
      domain="kahikatea-2023-jaelyn.au.auth0.com"
      clientId="rYOWRNnbnQVux6LpH9PDA9qlIfIgCNuq"
      cacheLocation="localstorage"
      authorizationParams={{
        audience: 'https://neighbours/api',
        redirect_uri: `${window.location.origin}/newmarket`,
      }}
    >
      <QueryClientProvider client={queryClient}>
        <Suspense>
          <AppProvider />
        </Suspense>
      </QueryClientProvider>
    </Auth0Provider>
  )
})
