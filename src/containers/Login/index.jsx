import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
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
  TextArea } from './styles'

export const Login = () => {
  const navigate= useNavigate()
  const [data, setData] = useState({password: '', email: ''})
  const [showPassword, setShowPassword] = useState(false)

  const database= {
    email: 'admin@demo.com',
    pass: 'admin'
  }

  const handleShowPassword= () => {
    setShowPassword(!showPassword)
  }

  const handleOnchange= (e, type) => {
    const value= e.target.value
    setData({
      password: type === 'pass' ? value : '',
      email: type === 'email' ? value : ''
    })
  }

  const handleSubmit= () => {
    if (data.email.length > 0 || data.password.length > 0) {
      if (database.email === data.email || database.pass === data.password) {
        localStorage.setItem("@sismiegee/auth", JSON.stringify(database))
        navigate('/')
      } else {
        toast.error("Usuario não existe")
      }
    } else {
      toast.warn("Os campos precisa ser preenchido")
    }
  }

  return (
    <Area className='' >
      <Left className=''>
        Sismierge.
      </Left>
      <Rigth>
        <TitleArea>Fazer login</TitleArea>
        <Form onSubmit={handleSubmit}>
          <InputArea>
            <Input 
              type='email' 
              placeholder='Email'
              onChange={(e) => handleOnchange(e, 'email')}
              required
            />
          </InputArea>
          <InputArea>
            <Input 
              type={showPassword ? 'text' : 'password'} 
              placeholder='Senha'
              onChange={(e) => handleOnchange(e, 'pass')}
              required
              // onChange={e => console.log(e.target.type)}
            />
            {!showPassword ?
              <IconeEye onClick={handleShowPassword} />
              : <IconeEyeSplash onClick={handleShowPassword} />
            }
          </InputArea>
          <ConexioArea>
            <TextArea>Esqueceu a senha?</TextArea>
            <Button onClick={handleSubmit}>Conectar</Button>
          </ConexioArea>
        </Form>
      </Rigth>
    </Area>
  )
}
