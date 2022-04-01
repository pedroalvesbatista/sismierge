import React from 'react'
import { HomePage, NotFound, Login, Signup } from "./containers"
import { Routes, Route } from "react-router-dom";
import { AdminLayout, PublicLayout } from "./components"
import PrivateRoute from './Routes/PrivateRoute';


export function RoutesPage() {

  return (
    <Routes>
      <Route path="/auth/login" element={
        <PublicLayout>
          <Login />
        </PublicLayout>
      }/>
      <Route path="/auth/signup" element={
        <PublicLayout>
          <Signup />
        </PublicLayout>
      }/>
      <Route path="*" element={
        <PublicLayout>
          <NotFound />
        </PublicLayout>
      }/>
      
      <Route element={<PrivateRoute />}>
        <Route path="/" element={
          <AdminLayout>
            <HomePage />
          </AdminLayout>
        } />
      </Route>
    </Routes>
  )
}
