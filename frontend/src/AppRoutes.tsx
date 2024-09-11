import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './layouts/Layout'
import Homepage from './pages/Homepage'
import AuthCallbackPage from './pages/AuthCallbackPage'

function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Layout><Homepage/></Layout>}/>
        <Route path="/auth-callback" element={<AuthCallbackPage/>}/>
        <Route path="/user-profile" element={<Layout><UserProfilePage/></Layout>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  )
}

export default AppRoutes