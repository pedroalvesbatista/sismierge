import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { authActions } from '../../actions'
import { LoadingAnimation } from '../../components/lottie'

import { authService } from '../../services'
import { 
  Area, 
  Left, 
  Rigth, 
  TitleArea, 
  Input, 
  Form, 
  InputArea, 
  Container,
  Label,
  IconeEye, 
  IconeEyeSplash, 
  ConexioArea, 
  Button, 
  TextArea } from '../Login/styles'
  import { Text } from './styles'

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
    cargo: myData.cargo,
    company: null,
  })
  const [showPassword, setShowPassword] = useState(false)
  const token= window.location.pathname.split('/')[2]


  const handleShowPassword= () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit= (e) => {
    e.preventDefault()
    // console.log("Testando");
    if (data.username?.length > 0 || data.password?.length > 0 || data.name?.length > 0 ) {
      // console.log("Entramos");
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
        setPage("welcome")
      }
      // else if (myData.role.type === "diretores") {
      //   setPage("organisationStep2")
      // }
      // else {
      //   setPage("welcome")
      // }
    }
  }, [sucessEditUser])
  

  return (
    <Area className='' >
      <Left className=''>
        Sismierge.
      </Left>
      <Rigth>
        <TitleArea>Bem-vindo(a)!</TitleArea>
        <Text left="left" size={14} color={true} fontSize={400}>
          Vamos terminar seu cadastro. <br/>
          Complenta todos os campos para poder continuar!
        </Text>
        <Form onSubmit={handleSubmit}>
          <InputArea>
            <Label> Nome completo </Label>
            <Container>
              <Input 
                type='text' 
                placeholder='Ex: Juliana Silva'
                onChange={(e) => setData({...data, name: e.target.value})}
                required
                defaultValue={myData?.username}
                value={data.name}
              />
            </Container>
          </InputArea>
          <InputArea>
            <Label> Usuário </Label>
            <Container>
              <Input 
                type='text' 
                placeholder='Ex: julianasilva'
                onChange={(e) => setData({...data, username: e.target.value})}
                required
                value={data.username}
              />
            </Container>
          </InputArea>
          <InputArea disabled={true.toString()}>
            <Label> Email </Label>
            <Container disabled={true.toString()}>
              <Input 
                type='email' 
                placeholder='Ex: julianasilva@gmail.com'
                onChange={(e) => setData({...data, email: e.target.value})}
                required
                value={data.email}
                disabled={true}
              />
            </Container>
          </InputArea>
          <InputArea>
            <Label> Cargo </Label>
            <Container>
              <Input 
                type='text' 
                placeholder='Ex: Diretor'
                onChange={(e) => setData({...data, cargo: e.target.value})}
                required
                value={data.cargo}
              />
            </Container>
          </InputArea>
          <InputArea>
            <Label> Senha </Label>
            <Container>
              <Input 
                type={showPassword ? 'text' : 'password'} 
                placeholder='digite a senha'
                onChange={(e) => setData({...data, password: e.target.value})}
                required
                value={data.password}
              />
              {!showPassword ?
                <IconeEye onClick={handleShowPassword} />
                : <IconeEyeSplash onClick={handleShowPassword} />
              }
            </Container>
          </InputArea>
          <ConexioArea flexEnd={true}>
            <Button 
              onClick={handleSubmit}
              aria-disabled={loadingEditUser ? true.toString() : false.toString()}
            > 
              {loading ? "carregando..." : "Conectar"} 
            </Button>
          </ConexioArea>
        </Form>
      </Rigth>
    </Area>
  )
}
