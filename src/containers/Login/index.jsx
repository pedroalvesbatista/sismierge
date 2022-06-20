import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { authActions } from '../../actions'
import { LoadingAnimation } from '../../components/lottie'
import { 
  Area, 
  Left, 
  Rigth, 
  TitleArea, 
  Input, 
  Form, 
  InputArea, 
  IconeEye, 
  IconeEyeSplash, 
  ConexioArea, 
  Button, 
  TextArea,
  Container } from './styles'

export const Login = () => {
  const navigate= useNavigate()
  const dispatch = useDispatch()
  const { loading } = useSelector(state => state.auth)
  const [data, setData] = useState({password: '', identifier: ''})
  const [showPassword, setShowPassword] = useState(false)

  const database= {
    email: 'admin@demo.com',
    pass: 'admin'
  }

  const handleShowPassword= () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit= (e) => {
    e.preventDefault()
    if (data.identifier.length > 0 || data.password.length > 0) {
      dispatch(authActions.authenticate(data, false))
    } else {
      toast.warn("Os campos precisa ser preenchido")
    }
  }

  // console.log(data);

  return (
    <Area className='' >
      <Left className=''>
        Sismierge.
      </Left>
      <Rigth>
        <TitleArea>Fazer login</TitleArea>
        <Form onSubmit={handleSubmit}>
          <InputArea row={true.toString()}>
            <Input
              row={true.toString()} 
              // type='text' 
              placeholder='Email ou username'
              onChange={(e) => setData({...data, identifier: e.target.value})}
              required
              value={data.identifier}
            />
          </InputArea>
          <InputArea row={true.toString()}>
            <Input
              row={true.toString()} 
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
            <Button onClick={handleSubmit}> {loading ? <LoadingAnimation /> : "Conectar"} </Button>
          </ConexioArea>
        </Form>
      </Rigth>
    </Area>
  )
}
