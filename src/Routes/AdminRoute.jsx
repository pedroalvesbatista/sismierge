import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { toast } from 'react-toastify';

function AdminRoute({ children }) {

    const storage= JSON.parse(localStorage.getItem("@sismiegee/auth/admin"))
    // const storage= true
    
    // if (!storage) {
    //     toast.error("Precisa estar logado")
    //     return <Navigate to='/auth/admin/login' replace />
    // }

    return children ? children : <Outlet />
}



export default AdminRoute