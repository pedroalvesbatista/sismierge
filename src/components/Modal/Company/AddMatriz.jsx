import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { toast } from 'react-toastify'

import { authService } from '../../../services'
import { 
  Text, 
  Button, 
} from './styles'
import Input from '../../Input'

export const AddMatriz = ({dataCompany, setPage, openModal}) => {

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
      file: "",
      haveUnidade: ""
  })
  const [showPassword, setShowPassword] = useState(false)

  const storage= JSON.parse(localStorage.getItem("@sismiegee/auth"))

  openModal({
    state: false,
    type: 'Adicionar matriz'
  })

  const handleSubmit= (e) => {
    e.preventDefault()
    if (data.haveUnidade.length > 0) {
        if (data.haveUnidade === "Sim") {
            setPage("filial")
        }else {
            // setPage("welcome")
        }
    }else {
        // setPage("welcome")
    } 
    
  }

  useEffect(() => {
    toast.success("Conta criando com sucesso")
  }, [])
  
  

  return (
    <>
        {/* <Text>Parabéns!</Text>
        <Text size={14} color={true} fontSize={400}>
          Agora vamos cadastrar sua organização. <br/>
          Essa etapa é muito importante!
        </Text> */}
        <Form onSubmit={handleSubmit}>
            <AreaInput>
                <Input 
                    label={"Nome da empresa"}
                    placeholder="Pampas Grill"
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
                    label={"Endereço da empresa"}
                    placeholder={"Rua Padre Francisco Bonato, 600 - centro/colombo"}
                />
                <Input 
                    label={"Setor econômico"}
                    placeholder={"Tecnologia"}
                    spanceLeft={true}
                />
            </AreaInput>
            <AreaInput>
                <Input 
                    label={"Sub-setor econômico"}
                    placeholder={`Diretor Financeiro`}
                />
                <Input 
                    label={"Logo da empresa"}
                    spanceLeft={true}
                    type="file"
                    id={"file"}
                    value={data.file}
                    onChange={e => setData({...data, file: e.target.value})}
                />
            </AreaInput>
            <AreaInput>
                <Input 
                    label={"Quer cadastrar filiais ?"}
                    type="radio"
                    qtd={["Sim", "Não"]}
                    name={"filiais"}
                    notView={true}
                    onChange={e => setData({...data, haveUnidade: e.target.value})}
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
