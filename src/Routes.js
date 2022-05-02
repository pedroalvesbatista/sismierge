import React, { useEffect } from 'react'
import { 
  HomePage, 
  NotFound, 
  Login, 
  Signup,
  Contabilizar,
  Igee,
  Indicadores,
  Verificacao,
  RegisterCompany

} from "./containers"
import {
  LoginAdmin
} from "./containers/Admin/Login"
import Admin from './containers/Admin/index.jsx';
import { Routes, Route } from "react-router-dom";
import { AdminLayout, PublicLayout, SismiergeLayout, RegisterCompanyLayout } from "./components"
import PrivateRoute from './Routes/PrivateRoute';
import AdminRoute from './Routes/AdminRoute';
import RegisterCompanyRoute from './Routes/RegisterCompanyRoute';
import { othersActions } from './actions';
import { useDispatch } from 'react-redux';


export function RoutesPage() {
  const dispatch = useDispatch()

  useEffect(() => {
    const close = (e) => {
      if(e.keyCode === 27){
        dispatch(othersActions.closeModal())
      }
    }
    window.addEventListener('keydown', close)
  return () => window.removeEventListener('keydown', close)
},[])

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

      {/* Route Register company */}

      <Route element={<RegisterCompanyRoute />} >
        <Route path='/register/:token' element={
          <RegisterCompanyLayout>
            <RegisterCompany />
          </RegisterCompanyLayout>
        } />
      </Route>
      
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
