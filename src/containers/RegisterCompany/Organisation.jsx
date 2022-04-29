import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { toast } from 'react-toastify'

import { authService } from '../../services'
import { 
  Text, 
  Button, 
} from './styles'
import Input from '../../components/Input'

export const Organisation = ({dataCompany, setPage}) => {

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({})
  const [showPassword, setShowPassword] = useState(false)

  const storage= JSON.parse(localStorage.getItem("@sismiegee/auth"))

  const handleSubmit= (e) => {
    e.preventDefault()
    setPage(3)
  }

  useEffect(() => {
    toast.success("Conta criando com sucesso")
  }, [])
  
  

  return (
    <>
        <Text>Parabéns!</Text>
        <Text size={14} color={true} fontSize={400}>
          Agora vamos cadastrar sua organização. <br/>
          Essa etapa é muito importante!
        </Text>
        <Form onSubmit={handleSubmit}>
            <AreaInput>
                <Input 
                    label={"Nome da empresa"}
                    placeholder="Uber"
                />
                <Input 
                    label={"CNPJ da empresa"}
                    placeholder="32.792.884/2021-10"
                    spanceLeft={true}
                    type="number"
                />
            </AreaInput>
            <AreaInput>
                <Input 
                    label={"Nome completo do responsável"}
                    placeholder={`${storage.name}`}
                />
                <Input 
                    label={"CPF do responsável"}
                    placeholder="327.928.842.02"
                    spanceLeft={true}
                    type="number"
                />
            </AreaInput>
            <AreaInput>
                <Input 
                    label={"Email corporativo"}
                    placeholder={`${storage.email}`}
                    type="email"
                />
                <Input 
                    label={"Telefone de contato com DDD"}
                    placeholder="11986522567"
                    spanceLeft={true}
                    type="tel"
                />
            </AreaInput>
            <AreaInput>
                <Input 
                    label={"Cargo"}
                    placeholder={`Diretor Financeiro`}
                    type="email"
                />
                <Input 
                    label={"Comprovante de vinculaçâo"}
                    spanceLeft={true}
                    type="file"
                    id={"file"}
                />
            </AreaInput>
            <AreaInput>
                <Input 
                    label={"Possui outras unidades organizacionais s serem inventariadas?"}
                    type="radio"
                    qtd={["Sim", "Não"]}
                    name={"unidades"}
                    notView={true}
                />
            </AreaInput>
        </Form>
        <ConexioArea>
            <Button aria-disabled={loading ? true : false} onClick={handleSubmit}> 
                {loading ? "Carregando..." : "Continuar "} 
                &#8674;
            </Button>
          </ConexioArea>
    </>
  )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 600px;
    margin-top: 10px;
    /* justify-content: space-between; */
    /* height: 200px; */
`
const AreaInput = styled.form`
    display: flex;
    width: 600px;
    /* justify-content: space-between; */
    /* height: 200px; */
`
const ConexioArea = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    margin-top: 10px;
`

const InputFile = styled.input`
    display: flex;
    width: 600px;
    /* justify-content: space-between; */
    /* height: 200px; */
`
