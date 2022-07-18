import React, { useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';

import {
  HomePage,
  StartUp,
  NotFound,
  Login,
  Signup,
  Contabilizar,
  Igee,
  Indicadores,
  Verificacao,
  RegisterCompany,
  Historico,
  Start
} from "./containers";

import {  Resumo} from "./containers/Resumo";
import { Dashboard } from "./containers/Dashboard";
// import { Historico } from "./containers";
import { UsersProfile } from "./containers/UsersProfile";
import { ManualUsuario } from "./containers/ManualUsuario";
import { Sugestoes } from "./containers/Sugestoes";
import { Configuracao } from "./containers/Configuracao";

import {
  LoginAdmin
} from "./containers/Admin/Login"
import Admin from './containers/Admin/index.jsx';
import { AdminLayout, PublicLayout, SismiergeLayout, RegisterCompanyLayout } from "./components"
import PrivateRoute from './Routes/PrivateRoute';
import AdminRoute from './Routes/AdminRoute';
import RegisterCompanyRoute from './Routes/RegisterCompanyRoute';
import { othersActions } from './actions';


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
      <Route
        path="/auth/login"
        element={
          <PublicLayout>
            <Login />
          </PublicLayout>
        }
      />
      <Route
        path="/auth/signup"
        element={
          <PublicLayout>
            <Signup />
          </PublicLayout>
        }
      />
      <Route
        path="/auth/admin/login"
        element={
          <PublicLayout>
            <LoginAdmin />
          </PublicLayout>
        }
      />
      {/* <Route
        path="*"
        element={
          <PublicLayout>
            <NotFound />
          </PublicLayout>
        }
      /> */}

      {/* Route Register company */}

      <Route element={<RegisterCompanyRoute />}>
        <Route
          path="/register/:token"
          element={
            <RegisterCompanyLayout>
              <RegisterCompany />
            </RegisterCompanyLayout>
          }
        />
      </Route>

      {/* Route Admin Sismierge */}
      <Route element={<AdminRoute />}>
        <Route
          path="/admin"
          element={
            <SismiergeLayout>
              <Admin />
            </SismiergeLayout>
          }
        />
      </Route>

      <Route element={<PrivateRoute />}>
        <Route
          exact
          path="/"
          element={
            <AdminLayout>
              <HomePage />
            </AdminLayout>
          }
        />
        <Route
          exact
          path="/start-up"
          element={
            <AdminLayout>
              <StartUp />
            </AdminLayout>
          }
        />
        <Route
          path="/resumo"
          element={
            <AdminLayout>
              <Resumo />
            </AdminLayout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          }
        />
        <Route
          path="/historico"
          element={
            <AdminLayout>
              <Historico />
            </AdminLayout>
          }
        />
        <Route
          path="/users-profile"
          element={
            <AdminLayout>
              <UsersProfile />
            </AdminLayout>
          }
        />
        <Route
          path="/manual-usuario"
          element={
            <AdminLayout>
              <ManualUsuario />
            </AdminLayout>
          }
        />
        <Route
          path="/sugestoes"
          element={
            <AdminLayout>
              <Sugestoes />
            </AdminLayout>
          }
        />
        <Route
          path="/configuracao"
          element={
            <AdminLayout>
              <Configuracao />
            </AdminLayout>
          }
        />
        <Route
          path="/contabilizar"
          element={
            <AdminLayout>
              <Contabilizar />
            </AdminLayout>
          }
        />
        <Route path="/start/:id" element={
            <AdminLayout>
              <Start />
            </AdminLayout>
          }
        />
        <Route path="/start/:id/:slug" element={
            <AdminLayout>
              <Start />
            </AdminLayout>
          }
        />
        <Route
          path="/indicadores"
          element={
            <AdminLayout>
              <Indicadores />
            </AdminLayout>
          }
        />
        <Route
          path="/verificacao"
          element={
            <AdminLayout>
              <Verificacao />
            </AdminLayout>
          }
        />
        <Route
          path="/escopo"
          element={
            <AdminLayout>
              <HomePage />
            </AdminLayout>
          }
        />
        <Route
          path="/colecao"
          element={
            <AdminLayout>
              <HomePage />
            </AdminLayout>
          }
        />
      </Route>
    </Routes>
  );
}
