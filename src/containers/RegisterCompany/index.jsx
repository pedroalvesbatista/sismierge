import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { authActions } from '../../actions'
import { authService } from '../../services'
import Routes from './Routes'
import { 
  Area, 
  Card, 
  Logo,
  Text, 
  Input, 
  Form, 
  InputArea, 
  IconeEye, 
  IconeEyeSplash, 
  ConexioArea, 
  Button, 
  TextArea } from './styles'

export const RegisterCompany = () => {
  const dispatch = useDispatch()
  const [page, setPage] = useState("inicio")
  const [data, setData] = useState({password: '', identifier: ''})
  const [loading, setLoading] = useState(true)
  const [dataUser, setdataUser] = useState([])

  const token= window.location.pathname.split('/')[2]

    useEffect(() => {
      authService.getMe(token)
        .then(res => {
          setdataUser(res.data)
            setLoading(false)
        })
        .catch(err => {
            console.log(err);
        })
    }, [token])
    

  return (
    <Area id='register_company' >
      <Card>
        {/* {loading ?
          "Carregando..." */}
        {/* :  */}
        <Routes setPage={e => setPage(e)} data={dataUser} page={page} />
        {/* } */}
      </Card>
    </Area>
  )
}
