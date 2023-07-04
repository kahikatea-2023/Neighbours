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
import ActivitiesPage from './Pages/ActivitiesPage/ActivitiesPage'
import ActivitiesDetailPost from './components/ActivitiesDetailPost/ActivitiesDetailPost'
import MarketPage from './Pages/MarketPage/MarketPage'
import MyPostsPage from './Pages/MyPostsPage/MyPostsPage'
import MarketDetail from './Pages/MarketDetail/MarketDetail'

export const routes = createRoutesFromElements(
  <Route>
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path="redirect" element={<Redirect />} />
      <Route path="register" element={<RegisterUser />} />
      <Route path=":locationId/profile" element={<ProfilePage />} />
      <Route path=":locationId/edit-profile" element={<EditProfile />} />
      <Route path=":locationId/my-posts" element={<MyPostsPage />} />
      <Route path="/:locationId" element={<Community />} />
      <Route path=":locationId/activities" element={<ActivitiesPage />} />
      <Route path=":locationId/activities" element={<ActivitiesDetailPost />} />
      <Route
        path=":locationId/activities/:id"
        element={<ActivitiesDetailPost />}
      />
      <Route path=":locationId/classifieds" element={<ClassifiedPage />} />
      <Route
        path=":locationId/classifieds/:postId"
        element={<ClassifiedsDetail />}
      />
      <Route
        path=":locationId/classifieds/add-post"
        element={<AddPostPage />}
      />
      <Route path=":locationId/market" element={<MarketPage />} />
      <Route path=":locationId/market/:id" element={<MarketDetail />} />
      <Route path="error" element={<Error />} />
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
