import React from 'react'
import { 
  HomePage, 
  NotFound, 
  Login, 
  Signup,
  Contabilizar,
  Igee,
  Indicadores,
  Verificacao,

} from "./containers"
import {
  LoginAdmin
} from "./containers/Admin/Login"
import Admin from './containers/Admin/index.jsx';
import { Routes, Route } from "react-router-dom";
import { AdminLayout, PublicLayout, SismiergeLayout } from "./components"
import PrivateRoute from './Routes/PrivateRoute';
import AdminRoute from './Routes/AdminRoute';
import { useSelector } from 'react-redux';



export function RoutesPage() {

  const { loading, user, sucess, isLogin } = useSelector(state => state.auth)

  return (
    <Routes>
      {/* Route public sismierge empresa */}
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
      <Route path="/auth/admin/login" element={
        <PublicLayout>
          <LoginAdmin />
        </PublicLayout>
      }/>
      <Route path="*" element={
        <PublicLayout>
          <NotFound />
        </PublicLayout>
      }/>
      
      {/* Route Admin Sismierge */}
      <Route element={<AdminRoute />} >
        <Route path='/admin' element={
          <SismiergeLayout>
            <Admin />
          </SismiergeLayout>
        } />
      </Route>

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
