import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { authActions } from '../../../actions'
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

export const LoginAdmin = () => {
  const dispatch = useDispatch()
  const navigate= useNavigate()
  const { loading, user, sucess, isLogin } = useSelector(state => state.auth)
  const [data, setData] = useState({password: '', identifier: ''})
  const [showPassword, setShowPassword] = useState(false)


  const handleShowPassword= () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit= () => {
    // e?.preventDefault

    // if (data.identifier?.length > 0 || data.password?.length > 0) {
    //   dispatch(authActions.authenticate(data, true))
    // } else {
    //   toast.warn("Os campos precisa ser preenchido")
    // }
    navigate("/admin")
  }
  
  console.log(data);

  return (
    <Area className='' >
      <Card>
        <Logo/>
        <Text>Bem-vindo(a)!</Text>
        <Text size={14} color={true} fontSize={400}>Faça login na sua conta Sismierge!</Text>
        <Form onSubmit={handleSubmit}>
          <InputArea>
            <Input 
              type='email' 
              placeholder='Email'
              onChange={(e) => setData({...data, identifier: e.target.value})}
              required
              value={data.identifier}
            />
          </InputArea>
          <InputArea>
            <Input 
              type={showPassword ? 'text' : 'password'} 
              placeholder='Senha'
              onChange={(e) => setData({...data, password: e.target.value})}
              required
              value={data.password}
              // onChange={e => console.log(e.target.type)}
            />
            {!showPassword ?
              <IconeEye onClick={handleShowPassword} />
              : <IconeEyeSplash onClick={handleShowPassword} />
            }
          </InputArea>
          <ConexioArea>
            <TextArea>Esqueceu a senha?</TextArea>
            <Button aria-disabled={loading ? true : false} onClick={handleSubmit}> {loading ? "Carregando..." : "Conectar"} </Button>
          </ConexioArea>
        </Form>
      </Card>
    </Area>
  )
}
