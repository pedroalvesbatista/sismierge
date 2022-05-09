import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

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

export const Inicio = ({ dataUser, setPage }) => {

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
      password: '', 
      username: dataUser?.username, 
      name: dataUser?.name,
      email: dataUser.email,
      id: dataUser.id,
      first: true
    })
  const [showPassword, setShowPassword] = useState(false)


  const handleShowPassword= () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit= (e) => {
    e.preventDefault()

    // if (data.username?.length > 0 || data.password?.length > 0 || data.name?.length > 0 ) {
    //     const pass= data.password.length > 8 ? data : {
    //         username: data?.username, 
    //         name: data?.name,
    //         email: data.email,
    //         id: data.id,
    //         first: true
    //     }
    //     setLoading(true)
    //     authService.editUser(data.id, pass)
    //         .then(res => {
    //             setLoading(false)
    //             setPage("organisation")
    //             setData({...data,  
    //             })
    //             localStorage.setItem(`@sismiegee/auth`, JSON.stringify(res.data))
    //             localStorage.removeItem(`@sismiegee/auth/admin`)
    //             console.log(res.data);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // } else {
    //   toast.warn("Os campos precisa ser preenchido")
    // }

    setPage("organisation")
    
  }

//   console.log(dataUser);

  useEffect(() => {
    setData({
        password: '', 
        username: dataUser?.username, 
        name: dataUser?.name,
        email: dataUser.email,
        id: dataUser.id,
        first: true
      })
  }, [dataUser])
  

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
                    defaultValue={dataUser?.username}
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
            <Button aria-disabled={loading ? true : false} onClick={handleSubmit}> 
                {loading ? "Carregando..." : "Continuar "} 
                &#8674;
            </Button>
          </ConexioArea>
        </Form>
    </>
  )
}
