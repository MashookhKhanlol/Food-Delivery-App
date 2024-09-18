import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './layouts/Layout'
import Homepage from './pages/Homepage'
import AuthCallbackPage from './pages/AuthCallbackPage'
import UserProfilePage from './pages/UserProfilePage'
import ProtectedRoute from './auth/ProtectedRoute'
import ManageRestaurantPage from './pages/ManageRestaurantPage'
import SearchPage from './pages/SearchPage'

function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Layout showHero><Homepage/></Layout>}/>
        <Route path="/auth-callback" element={<AuthCallbackPage/>}/>
        <Route path="/search/:city" element={<Layout showHero={false}><SearchPage/></Layout>}/>
        <Route element={<ProtectedRoute/>}>
          <Route path="/user-profile" element={<Layout showHero= {false}><UserProfilePage/></Layout>}/>
          <Route path="/manage-restaurant" element={<Layout><ManageRestaurantPage/></Layout>}/>
        </Route>
        
        <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  )
}

export default AppRoutes