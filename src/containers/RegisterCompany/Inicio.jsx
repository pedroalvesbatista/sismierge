import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { authActions } from '../../actions'

import { authService } from '../../services'
import {  
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

export const Inicio = ({ setPage }) => {

  const dispatch = useDispatch()
  const { loadingEditUser, sucessEditUser, myData } = useSelector(state => state.auth)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    type_user: "master",
    password: '', 
    username: myData?.username, 
    name: myData?.name,
    email: myData.email,
    id: myData.id,
    first: true,
    cargo: null,
    company: null,
  })
  const [showPassword, setShowPassword] = useState(false)
  const token= window.location.pathname.split('/')[2]


  const handleShowPassword= () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit= (e) => {
    e.preventDefault()
    if (data.username?.length > 0 || data.password?.length > 0 || data.name?.length > 0 ) {
        const newData= {
          username: data?.username,
          name: data?.name,
          email: data.email,
          password: data.password,
          cargo: data.cargo,
          user_first: false
        }
        dispatch(authActions.editUser(data.id, newData))
    } else {
      toast.warn("Os campos precisa ser preenchido")
    }
    
  }

  useEffect(() => {
    if (sucessEditUser) {
      if (myData.role.type === "master") {
        setPage("organisation")
      }
      else if (myData.role.type === "diretores") {
        setPage("organisationStep2")
      }
      else {
        setPage("welcome")
      }
    }
  }, [sucessEditUser])
  

  return (
    <>
        <Logo/>
        <Text>Bem-vindo(a)!</Text>
        <Text size={14} color={true} fontSize={400}>
          Vamos terminar seu cadastro. <br/>
          Complenta todos os campos para poder continuar!
        </Text>
        <Form onSubmit={handleSubmit}>
          <div style={{display: "flex", justifyContent: "flex-start", flexDirection: "column", marginBottom: 10 }}>
            <Text color={true} left={true} size={14}>Nome completo</Text>
            <InputArea>
                <Input 
                    type='text' 
                    placeholder='Juliana Silva'
                    onChange={(e) => setData({...data, name: e.target.value})}
                    required
                    defaultValue={myData?.username}
                    value={data.name}
                />
            </InputArea>
          </div>
          <div style={{display: "flex", justifyContent: "flex-start", flexDirection: "column", marginBottom: 10 }}>
            <Text color={true} left={true} size={14}>Usuário</Text>
            <InputArea>
                <Input 
                    type='text' 
                    placeholder='julianasilva'
                    onChange={(e) => setData({...data, username: e.target.value})}
                    required
                    value={data.username}
                />
            </InputArea>
          </div>
          <div style={{display: "flex", justifyContent: "flex-start", flexDirection: "column", marginBottom: 10 }}>
            <Text color={true} left={true} size={14}>Email</Text>
            <InputArea aria-disabled={true}>
                <Input 
                    type='email' 
                    placeholder='julianasilva@gmail.com'
                    onChange={(e) => setData({...data, email: e.target.value})}
                    required
                    value={data.email}
                    disabled={true}
                />
            </InputArea>
          </div>
          <div style={{display: "flex", justifyContent: "flex-start", flexDirection: "column", marginBottom: 10 }}>
            <Text color={true} left={true} size={14}>Cargo</Text>
            <InputArea aria-disabled={true}>
                <Input 
                    type='text' 
                    placeholder='CEO'
                    onChange={(e) => setData({...data, cargo: e.target.value})}
                    required
                    // value={data.email}
                    // disabled={true}
                />
            </InputArea>
          </div>
          <div style={{display: "flex", justifyContent: "flex-start", flexDirection: "column", marginBottom: 10 }}>
            <Text color={true} left={true} size={14}>Senha</Text>
            <InputArea aria-disabled={true}>
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
          </div>
          <ConexioArea>
            <Button aria-disabled={loadingEditUser ? true : false} onClick={handleSubmit}> 
                {loading ? "Carregando..." : "Continuar "} 
                &#8674;
            </Button>
          </ConexioArea>
        </Form>
    </>
  )
}
