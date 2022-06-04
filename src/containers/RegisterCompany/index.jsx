import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { LoadingAnimation } from '../../components/lottie'

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
  const { loading, sucess, error, myData } = useSelector(state => state.auth)
  const [page, setPage] = useState("inicio")
  const [data, setData] = useState({password: '', identifier: ''})
  const [dataUser, setdataUser] = useState([])

    useEffect(() => {
      dispatch(authActions.getMe())
      // authService.getMe(token)
      //   .then(res => {
      //     setdataUser(res.data)
      //     setLoading(false)
          
      //     console.log(res.data);
      //   })
      //   .catch(err => {
      //       console.log(err);
      //       setLoading(false)
      //   })
    }, [])
    

  return (
    <Area id='register_company' >
      <Card>
        {loading ?
          <LoadingAnimation size={350} />
        : error ? (
          <span>Convite expirado</span>
        ) : (
            <Routes setPage={e => setPage(e)} data={dataUser} page={page} />
          )
        }
      </Card>
    </Area>
  )
}
