import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { toast } from 'react-toastify';
import { authService } from '../services'

function RegisterCompanyRoute({ children }) {

    const token= window.location.pathname.split('/')[2]

    const [data, setData] = useState([])

    useEffect(() => {
      authService.getMe(token)
        .then(res => {
            setData(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }, [token])

    useEffect(() => {
        if (data) {
          const isAdmin= data.type === "colaborador" ? 'auth/admin' : 'auth'
          localStorage.setItem(`@sismiegee/${isAdmin}`, JSON.stringify(data))
        }
      }, [data])
    
    if (data.length > 0 && data?.first) {
        toast.warning("Esse link nâo existe mais")
        return <Navigate to='/auth/login' replace />
    }

    return children ? children : <Outlet />
}



export default RegisterCompanyRoute