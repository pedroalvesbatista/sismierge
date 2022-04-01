import React from 'react'
import { 
  HomePage, 
  NotFound, 
  Login, 
  Signup,
  Contabilizar,
  Igee,
  Indicadores,
  Verificacao
} from "./containers"
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
        <AdminLayout>
          <NotFound />
        </AdminLayout>
      }/>
      
      <Route element={<PrivateRoute />}>
        <Route path="/" element={
          <AdminLayout>
            <HomePage />
          </AdminLayout>
        } />
        <Route path="/contabilizar" element={
          <AdminLayout>
            <Contabilizar />
          </AdminLayout>
        } />
        <Route path="/igee" element={
          <AdminLayout>
            <Igee />
          </AdminLayout>
        } />
        <Route path="/indicadores" element={
          <AdminLayout>
            <Indicadores />
          </AdminLayout>
        } />
        <Route path="/verificacao" element={
          <AdminLayout>
            <Verificacao />
          </AdminLayout>
        } />
        <Route path="/escopo" element={
          <AdminLayout>
            <HomePage />
          </AdminLayout>
        } />
        <Route path="/colecao" element={
          <AdminLayout>
            <HomePage />
          </AdminLayout>
        } />
        <Route path="/historico" element={
          <AdminLayout>
            <HomePage />
          </AdminLayout>
        } />
        <Route path="/configuracao" element={
          <AdminLayout>
            <HomePage />
          </AdminLayout>
        } />
      </Route>
    </Routes>
  )
}
