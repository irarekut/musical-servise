/* eslint-disable import/no-extraneous-dependencies */
import { Routes, Route } from 'react-router-dom'
import Cookies from 'js-cookie'
import Main from './pages/main/main'
import Registration from './pages/registration/registration'
import NotFound from './pages/notFound/notFound'
import Login from './pages/login/login'
import Playlist01 from './pages/playlists/playlist'
import MyTracks from './pages/myTracks/myTracks'
import ProtectedRoute from './protected-route/ProtectedRoute'

export function AppRoutes() {
  const token = Cookies.get('token')
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />

      <Route element={<ProtectedRoute isAllowed={Boolean(token)} />}>
        <Route path="/" element={<Main />} />
        <Route path="/mytracks" element={<MyTracks />} />
        <Route path="/playlist/:id" element={<Playlist01 />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
