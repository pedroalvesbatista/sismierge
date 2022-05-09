import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { toast } from 'react-toastify'

import { authService } from '../../services'
import { 
  Text, 
  Button, 
} from './styles'
import Input from '../../components/Input'

export const OrganisationStep2 = ({dataCompany, setPage}) => {

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    file: "",
    haveUnidade: ""
})
  const [showPassword, setShowPassword] = useState(false)


  const storage= JSON.parse(localStorage.getItem("@sismiegee/auth"))

  const handleSubmit= (e) => {
    e.preventDefault()
    if (data.haveUnidade.length > 0) {
        if (data.haveUnidade === "Sim") {
            setPage("unidade")
        }else {
            setPage("welcome")
        }
    }else {
        setPage("welcome")
    } 
    
  }
  
  

  return (
    <>
        <Text size={20}>Informações institucionais</Text>
        {/* <Text size={14} color={true} fontSize={400}>
          Agora vamos cadastrar sua organização. <br/>
          Essa etapa é muito importante!
        </Text> */}
        <Form onSubmit={handleSubmit}>
            <AreaInput>
                <Input 
                    type={"textArea"}
                    label={"Bio (historia)"}
                    placeholder="Conta um pouco sobre a empresa..."
                />
                <Input 
                    label={"Clientes atendidos"}
                    placeholder="Quais são seus clientes?"
                    spanceLeft={true}
                    type="textArea"
                />
            </AreaInput>
            <AreaInput>
                <Input 
                    type={"textArea"}
                    label={"Processos da empresa"}
                    placeholder="Conta um pouco sobre o processos..."
                />
                <Input 
                    label={"Sub-processos da empresa"}
                    placeholder="Conta um pouco sobre o Sub-processos..."
                    spanceLeft={true}
                    type="textArea"
                />
            </AreaInput>
            <AreaInput>
                <Input 
                    type={"textArea"}
                    label={"Missão da empresa"}
                    placeholder="Conta aqui..."
                />
                <Input 
                    label={"Visão da empresa"}
                    placeholder="Conta aqui..."
                    spanceLeft={true}
                    type="textArea"
                />
            </AreaInput>
            <AreaInput>
                <Input 
                    type={"textArea"}
                    label={"Valores da empresa"}
                    placeholder="Conta aqui..."
                />
                <Input 
                    label={"Comprovante de vinculaçâo"}
                    spanceLeft={true}
                    type="file"
                    id={"file"}
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
    /* height: 100px; */
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
