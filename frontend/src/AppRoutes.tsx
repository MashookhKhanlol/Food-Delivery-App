import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './layouts/Layout'
import Homepage from './pages/Homepage'

function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Layout><Homepage/></Layout>}/>
        <Route path="/user-profile" element={<span>USER PROFILE PAGE</span>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  )
}

export default AppRoutes